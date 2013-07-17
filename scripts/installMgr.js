/*### BEGIN LICENSE
# Copyright (C) 2013 Stephan Tetzel <info@zefanjas.de>
#
# This program is free software: you can redistribute it and/or modify it
# under the terms of the GNU General Public License version 3, as published
# by the Free Software Foundation.
#
# This program is distributed in the hope that it will be useful, but
# WITHOUT ANY WARRANTY; without even the implied warranties of
# MERCHANTABILITY, SATISFACTORY QUALITY, or FITNESS FOR A PARTICULAR
# PURPOSE.  See the GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License along
# with this program.  If not, see <http://www.gnu.org/licenses/>.
### END LICENSE*/

define(["unzip", "dataMgr", "zText", "versificationMgr", "async", "tools"], function (Zlib, dataMgr, zText, versificationMgr, async, tools) {
    var start = 0;
        db = dataMgr.db;

    //Get a list of all available repos/sources from CrossWire's masterRepoList.conf
    function getRepositories(inCallback) {
        download("http://crosswire.org/ftpmirror/pub/sword/masterRepoList.conf", "text", function (inError, inResponse) {
            if (inResponse === "" && !inError) {
                inCallback("Couldn't download master repo list!");
            } else if (!inError) {
                var repos = [];
                    split = null;
                inResponse.split(/[\r\n]+/g).forEach(function (repo) {
                    split = repo.split("|");
                    if(split.length > 1 && split[0].search("CrossWire") !== -1) {
                        repos.push({
                            name: split[0].split("=")[2],
                            url: "http://crosswire.org/ftpmirror" + split[2].replace("raw", "packages") + "/rawzip/",
                            confUrl: "http://crosswire.org/ftpmirror" + split[2] + "/mods.d"
                        });
                    }
                });
                inCallback(inError, repos);
            } else {
                inCallback(inError);
            }
        });
    }

    //dirty hack to get a list of modules that is available in a repository.
    //FIXME: unpack mods.d.tar.gz in Javascript (untar is the problem) or ask CrossWire to compress it as zip/gzip
    function getModules(inRepo, inCallback) {
        download(inRepo.confUrl, "document", function (inError, inResponse) {
            if (!inError) {
                var tasks = [],
                    url = "",
                    a = inResponse.getElementsByTagName("a");
                for(var i=0;i<a.length;i++) {
                    if (a[i].href.search(".conf") !== -1) {
                        url = a[i].baseURI + "/" + a[i].textContent;
                        tasks.push((function (url) {
                            return function (cb) {
                                download(url, "text", function (inError, inConf) {
                                    var configData = tools.readConf(inConf);
                                    if (configData.ModDrv === "zText") {
                                        configData["url"] = inRepo.url + configData.moduleKey + ".zip";
                                        cb(inError, configData);
                                    } else {
                                        cb(inError);
                                    }
                                });
                            };
                        })(url));
                    }
                }
                async.parallel(tasks, function (inError, inModules) {
                    inCallback(inError, tools.cleanArray(inModules).sort(tools.dynamicSortMultiple("Lang", "moduleKey")));
                });
            } else {
                inCallback(inError);
            }

        });
    }

    function download(url, reponseType, inCallback, inProgressCallback) {
        var xhr = new XMLHttpRequest({mozSystem: true, mozAnon: true});
        xhr.open('GET', url, true);
        //xhr.setRequestHeader("Accept-Encoding", "gzip, deflate");
        xhr.responseType = reponseType; //"blob";
        xhr.onreadystatechange = function (evt) {
            //console.log(xhr.readyState, evt, xhr.status);
            if (xhr.readyState == 4) {
                if (inCallback) inCallback(null, xhr.response);
            }
        };
        xhr.onprogress = inProgressCallback;
        xhr.onerror = function (inError) {
            inCallback(inError);
        };
        xhr.send(null);
    }

    //Install a module. inFile is an ArrayBuffer
    function installModule (inFile, inCallback, inProgressCallback) {
        if(typeof inFile === "string") {
            download(inFile, "blob", function (inError, inBlob) {
                if(!inError) _installModule(inBlob, inCallback);
                else inCallback(inError);
            }, inProgressCallback);
        } else {
            _installModule(inFile, inCallback);
        }
    }

    function _installModule(inBlob, inCallback) {
        var blob = null;
        var zipReader = new FileReader();
        zipReader.onload = function(evt) {
            var unzip = new Zlib.Unzip(new Uint8Array(evt.target.result));
            var filenames = unzip.getFilenames();
            filenames.forEach(function (name, index) {
                if(name.search(".conf") !== -1) {
                    dataMgr.saveConfig(new Blob([unzip.decompress(name)]),
                        function (inError, inDoc) {
                            if(!inError) buildIndex(unzip, inDoc.v11n, inDoc, inCallback);
                            else inCallback(inError);
                        });
                }
            });
        };
        zipReader.readAsArrayBuffer(inBlob);
    }

    //Build the index with all entry points for a book or chapter
    function buildIndex(inUnzip, inV11n, inDoc, inCallback) {
        var files = {};
        files["bin"] = [];

        var filenames = inUnzip.getFilenames();
        filenames.forEach(function (name, index) {
            if(name.search("nt.bzs") !== -1)
                files["ntB"] = name;
            else if(name.search("nt.bzv") !== -1)
                files["ntCV"] = name;
            else if(name.search("ot.bzs") !== -1)
                files["otB"] = name;
            else if(name.search("ot.bzv") !== -1)
                files["otCV"] = name;
            else if (name.search(".conf") === -1)
                files.bin.push({blob: new Blob([inUnzip.decompress(name)]), name: name});
        });

        async.series([
            function (cb) {
                dataMgr.saveModule(files.bin, inDoc, function (inError, inResponse) {
                    if(!inError) cb(null);
                    else cb(inError);
                });
            },
            function (cb) {
                var bookPosOT = null,
                    chapterVersePosOT = null,
                    bookPosNT = null,
                    chapterVersePosNT = null;

                if (files.otB) {
                    bookPosOT = getBookPositions(inUnzip.decompress(files.otB));
                    chapterVersePosOT = getChapterVersePositions(inUnzip.decompress(files.otCV), bookPosOT, "ot", inV11n);
                }
                if (files.ntB) {
                    bookPosNT = getBookPositions(inUnzip.decompress(files.ntB));
                    chapterVersePosNT = getChapterVersePositions(inUnzip.decompress(files.ntCV), bookPosNT, "nt", inV11n);
                }
                //console.log(chapterVersePosOT, chapterVersePosNT);

                dataMgr.saveBCVPos(chapterVersePosOT, chapterVersePosNT, inDoc, function (inError, inResponse) {
                    if(!inError) cb(null);
                    else cb(inError);
                });
            }
            ], function (inError, inResult) {
                if(!inError) inCallback(null, inDoc.id);
                else inCallback(inError);
            }
        );
    }

    //Get the positions of each book
    function getBookPositions(inBuf, inCallback) {
        var startPos = 0,
            length = 0,
            unused = 0,
            end = false,
            bookPositions = [];
        start = 0;

        while(!end) {
            res = getIntFromStream(inBuf);
            startPos = res[0];
            end = res[1];
            if (!end) {
                res = getIntFromStream(inBuf);
                length = res[0];
                end = res[1];
                if (!end) {
                    res = getIntFromStream(inBuf);
                    unused = res[0];
                    end = res[1];
                    if (end)
                        break;
                    bookPositions.push({startPos: startPos, length: length, unused: unused});
                }
            }
        }
        return bookPositions;
    }

    //dump some bytes in the chapter and verse index file
    function dumpBytes(inBuf) {
        start = 0;

        for (var i=0;i<4;i++) {
            getShortIntFromStream(inBuf);
            getInt48FromStream(inBuf);
            getShortIntFromStream(inBuf);
        }
    }
    // ### This code is based on the zTextReader class from cross-connect (https://code.google.com/p/cross-connect), Copyright (C) 2011 Thomas Dilts ###

    //Get the position of each chapter and verse
    function getChapterVersePositions(inBuf, inBookPositions, inTestament, inV11n) {
        dumpBytes(inBuf);
        var booksStart = (inTestament === "ot") ? 0 : versificationMgr.getBooksInOT(inV11n);
        var booksEnd = (inTestament === "ot") ? versificationMgr.getBooksInOT(inV11n) : versificationMgr.getBooksInOT(inV11n)+versificationMgr.getBooksInNT(inV11n);
        var chapterZ = 0,
            verseZ = 0,
            chapterStartPos = 0,
            lastNonZeroStartPos = 0,
            length = 0,
            bookStartPos = 0,
            booknum = 0,
            bookData = null,
            startPos = 0,
            chapt = {},
            chapters = {};

        for (var b = booksStart; b<booksEnd; b++) {
            bookData = versificationMgr.getBook(b, inV11n);
            chapters[bookData.abbrev] = [];
            //console.log(bookData);
            for (var c = 0; c<bookData.maxChapter; c++) {
                chapterStartPos = 0;
                lastNonZeroStartPos = 0;
                chapt = {};
                chapt["verses"] = [];
                length = 0;
                for (var v = 0; v<versificationMgr.getVersesInChapter(b,c, inV11n); v++) {
                    booknum = getShortIntFromStream(inBuf)[0];
                    startPos = getInt48FromStream(inBuf)[0];

                    if (startPos !== 0)
                        lastNonZeroStartPos = startPos;

                    length = getShortIntFromStream(inBuf)[0];
                    //console.log("startPos, length", startPos, length);
                    if (v === 0) {
                        chapterStartPos = startPos;
                        bookStartPos = 0;
                        if (booknum < inBookPositions.length) {
                            //console.log("inBookPositions.startPos", inBookPositions[booknum].startPos, booknum, inBookPositions.length);
                            bookStartPos = inBookPositions[booknum].startPos;
                        }
                        chapt["startPos"] = chapterStartPos;
                        chapt["booknum"] = b;
                        //chapt["bookRelativeChapterNum"] = c;
                        chapt["bookStartPos"] = bookStartPos;
                    }
                    if (booknum === 0 && startPos === 0 && length === 0) {
                        if (chapt !== {}) {
                            chapt["verses"].push({startPos: 0, length: 0});
                        }
                    } else {
                        if (chapt !== {}) {
                            chapt["verses"].push({startPos: startPos - chapterStartPos, length: length});
                        }
                    }
                } //end verse
                if (chapt != {}) {
                    //console.log("LENGTH:", lastNonZeroStartPos, chapterStartPos, length);
                    chapt["length"] = lastNonZeroStartPos - chapterStartPos + length;
                    chapters[bookData.abbrev].push(chapt);
                }
                // dump a post for the chapter break
                getShortIntFromStream(inBuf);
                getInt48FromStream(inBuf);
                getShortIntFromStream(inBuf);
            } //end chpaters
            // dump a post for the book break
            getShortIntFromStream(inBuf);
            getInt48FromStream(inBuf);
            getShortIntFromStream(inBuf);
        } //end books
        return chapters;
    }

    function getIntFromStream(inBuf, inCallback) {
        buf = inBuf.subarray(start, start+4),
        isEnd = false;
        start = start+4;
        if (buf.length !== 4)
            isEnd = true;
        if (inCallback)
            inCallback(buf[3] * 0x100000 + buf[2] * 0x10000 + buf[1] * 0x100 + buf[0], isEnd);
        else
            return [buf[3] * 0x100000 + buf[2] * 0x10000 + buf[1] * 0x100 + buf[0], isEnd];
    }

    function getShortIntFromStream(inBuf, inCallback) {
        buf = inBuf.subarray(start, start+2),
        isEnd = false;
        start = start+2;
        if (buf.length !== 2)
            isEnd = true;
        if (inCallback)
            inCallback(buf[1] * 0x100 + buf[0], isEnd);
        else
            return [buf[1] * 0x100 + buf[0], isEnd];
    }

    function getInt48FromStream(inBuf, inCallback) {
        buf = inBuf.subarray(start, start+6),
        isEnd = false;
        start = start+6;
        if (buf.length !== 6)
            isEnd = true;
        if (inCallback)
            inCallback(buf[1] * 0x100000000000 + buf[0] * 0x100000000 + buf[5] * 0x1000000 + buf[4] * 0x10000 + buf[3] * 0x100 + buf[2], isEnd);
        else
            return [buf[1] * 0x100000000000 + buf[0] * 0x100000000 + buf[5] * 0x1000000 + buf[4] * 0x10000 + buf[3] * 0x100 + buf[2], isEnd];
    }

    return {
        getRepositories: getRepositories,
        getModules: getModules,
        installModule: installModule
    };
});