'use strict';

var JSZip = require("jszip");
var dataMgr = require("./dataMgr");
var versificationMgr = require("./versificationMgr");
var async = require("async");
var tools = require("./tools");

//console.log(VersificationMgr.getBooksInNT());

var start = 0,
    buf = null,
    isEnd = false;

//Get a list of all available repos/sources from CrossWire's masterRepoList.conf
function getRepositories(inCallback) {
    download("http://crosswire.org/ftpmirror/pub/sword/masterRepoList.conf", "text", function (inError, inResponse) {
        if (inResponse === "" && !inError) {
            inCallback("Couldn't download master repo list!");
        } else if (!inError) {
            var repos = [],
                split = null,
                type = "",
                repoName = "";
            inResponse.split(/[\r\n]+/g).forEach(function (repo) {
                split = repo.split("|");
                if(split.length > 1 && split[0].search("CrossWire") !== -1) {
                    repoName = split[0].split("=")[2];
                    switch (repoName) {
                        case "CrossWire":
                            type = "main";
                        break;
                        case "CrossWire Beta":
                            type = "beta";
                        break;
                        case "CrossWire av11n":
                            type = "av";
                        break;
                        case "CrossWire Attic":
                            type = "attic";
                        break;
                        case "CrossWire Wycliffe":
                            type = "wycliffe";
                        break;
                        case "CrossWire av11n Attic":
                            type = "avattic";
                        break;
                    }
                    repos.push({
                        name: repoName,
                        type: type,
                        url: "http://crosswire.org/ftpmirror" + split[2].replace("raw", "packages") + "/rawzip/",
                        confUrl: "http://crosswire.org/ftpmirror" + split[2] + "/mods.d"
                    });
                }
            });
            //console.log("REPOS", repos);
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
                                    //configData["url"] = inRepo.url + configData.moduleKey + ".zip";
                                    configData["url"] = "http://www.crosswire.org/sword/servlet/SwordMod.Verify?modName=" + configData.moduleKey + "&" + inRepo.type + "=true&pkgType=raw";
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
            if(xhr.status === 200)
                inCallback(null, xhr.response);
            else
                inCallback({message: "Couldn't download module.", error: xhr.status});
        }
    };
    xhr.onprogress = inProgressCallback;
    xhr.onerror = function (inError) {
        inCallback(inError);
    };
    xhr.send(null);
}

//Install a module. inUrl can be an url or a file blob (zipped module file)
function installModule (inUrl, inCallback, inProgressCallback) {
    if(typeof inUrl === "string") {
        download(inUrl, "document", function (inError, inResponse) {
            if(!inError) {
                var newUrl = inResponse.getElementsByTagName("a")[0].href;
                download(newUrl, "blob", function (inError, inBlob) {
                    if(!inError) _installModule(inBlob, inCallback);
                    else inCallback(inError);
                },
                inProgressCallback);
            } else inCallback(inError);
        });
    } else {
        _installModule(inUrl, inCallback);
    }
}

function _installModule(inBlob, inCallback) {
    var blob = null;
    var zipReader = new FileReader();
    zipReader.onload = function(evt) {
        var zip = new JSZip(evt.target.result);
        for (var name in zip.files) {
            if(name.search(".conf") !== -1) {
                //console.log(zip.files[name]);
                dataMgr.saveConfig(new Blob([zip.files[name].asArrayBuffer()]),
                    function (inError, inDoc) {
                        if(!inError) buildIndex(zip, inDoc.v11n, inDoc, inCallback);
                        else inCallback(inError);
                    }
                );
            }
        }
    };

    zipReader.onerror = function (inError) {
        inCallback(inError);
    };
    zipReader.readAsArrayBuffer(inBlob);
}

//Remove a module
function removeModule(inModuleKey, inCallback) {
    if(typeof inModuleKey === "string")
        dataMgr.removeModule(inModuleKey, inCallback);
    else
        inCallback({message: "inModuleKey must be a string!"});
}

//Build the index with all entry points for a book or chapter
function buildIndex(inZip, inV11n, inDoc, inCallback) {
    var files = {};
    files["bin"] = [];

    for (var name in inZip.files) {
        if(inDoc.modDrv === "zText" || inDoc.modDrv === "zCom") {
            if(name.search(/nt.[bc]zs/) !== -1)
                files["ntB"] = name;
            else if(name.search(/nt.[bc]zv/) !== -1)
                files["ntCV"] = name;
            else if(name.search(/ot.[bc]zs/) !== -1)
                files["otB"] = name;
            else if(name.search(/ot.[bc]zv/) !== -1)
                files["otCV"] = name;
            else if (name.search(".conf") === -1)
                files.bin.push({blob: new Blob([inZip.files[name].asUint8Array()]), name: name});
        } else if (inDoc.modDrv === "RawCom") {
            if(name.search("nt.vss") !== -1)
                files["ntIdx"] = name;
            else if(name.search("ot.vss") !== -1)
                files["otIdx"] = name;
            else if (name.search(".conf") === -1)
                files.bin.push({blob: new Blob([inZip.files[name].asUint8Array()]), name: name});
        }
    }

    //console.log(files);

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
                chapterVersePosNT = null,
                rawPosNT = null,
                rawPosOT = null;

            if (files.otB) {
                bookPosOT = getBookPositions(inZip.files[files.otB].asUint8Array());
                rawPosOT = getChapterVersePositions(inZip.files[files.otCV].asUint8Array(), bookPosOT, "ot", inV11n);
            }
            if (files.ntB) {
                bookPosNT = getBookPositions(inZip.files[files.ntB].asUint8Array());
                rawPosNT = getChapterVersePositions(inZip.files[files.ntCV].asUint8Array(), bookPosNT, "nt", inV11n);
            }
            //console.log(bookPosOT, bookPosNT);

            if (inDoc.modDrv === "RawCom" && files.otIdx) {
                rawPosOT = getRawPositions(inZip.files[files.otIdx].asUint8Array(), "ot");
            }

            if (inDoc.modDrv === "RawCom" && files.ntIdx) {
                rawPosNT = getRawPositions(inZip.files[files.ntIdx].asUint8Array(), "nt");
            }
            //console.log(rawPosOT, rawPosNT);

            dataMgr.saveBCVPos(rawPosOT, rawPosNT, inDoc, function (inError, inResponse) {
                if(!inError) cb(null);
                else cb(inError);
            });
        }
        ], function (inError, inResult) {
            if(!inError) inCallback(null, inDoc.id);
            else {
                //If we got an error while saving the blob files, delete the config entry in the database
                dataMgr.remove(inDoc.id, function (inError) {
                    //console.log(inError);
                });
                inCallback(inError);
            }

        }
    );
}

//Get the positions of each book
function getBookPositions(inBuf, inCallback) {
    var startPos = 0,
        length = 0,
        unused = 0,
        res = null,
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
    var chapterStartPos = 0,
        lastNonZeroStartPos = 0,
        length = 0,
        chapterLength = 0,
        bookStartPos = 0,
        booknum = 0,
        verseMax = 0,
        bookData = null,
        startPos = 0,
        chapt = {},
        foundEmptyChapter = 0,
        chapters = {};

    for (var b = booksStart; b<booksEnd; b++) {
        bookData = versificationMgr.getBook(b, inV11n);
        chapters[bookData.abbrev] = [];
        foundEmptyChapter = 0;
        //console.log(bookData, chapters);
        for (var c = 0; c<bookData.maxChapter; c++) {
            chapterStartPos = 0;
            lastNonZeroStartPos = 0;
            chapt = {};
            chapt["verses"] = [];
            length = 0;
            verseMax = versificationMgr.getVersesInChapter(b,c+1, inV11n);
            for (var v = 0; v<verseMax; v++) {
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
                //console.log("LENGTH:", lastNonZeroStartPos, chapterStartPos, length, c, chapt, chapters);
                chapterLength = lastNonZeroStartPos - chapterStartPos + length;
                chapt["length"] = chapterLength;
                chapters[bookData.abbrev].push(chapt);
                if (isNaN(chapterLength) || chapterLength === 0) {
                    foundEmptyChapter++;
                }

            }
            // dump a post for the chapter break
            getShortIntFromStream(inBuf);
            getInt48FromStream(inBuf);
            getShortIntFromStream(inBuf);
        } //end chapters
        //console.log("Empty Chapters:", foundEmptyChapter);
        if(foundEmptyChapter === bookData.maxChapter) {
            delete chapters[bookData.abbrev];
        }
        // dump a post for the book break
        getShortIntFromStream(inBuf);
        getInt48FromStream(inBuf);
        getShortIntFromStream(inBuf);
    } //end books
    return chapters;
}

function getRawPositions(inFile, inTestament, inV11n) {
    start = 0;
    //Dump the first 12 bytes
    getInt48FromStream(inFile);
    getInt48FromStream(inFile);

    var booksStart = (inTestament === "ot") ? 0 : versificationMgr.getBooksInOT(inV11n);
    var booksEnd = (inTestament === "ot") ? versificationMgr.getBooksInOT(inV11n) : versificationMgr.getBooksInOT(inV11n)+versificationMgr.getBooksInNT(inV11n);
    var length = 0,
        verseMax = 0,
        bookData = null,
        startPos = 0,
        data = {},
        osis = "";

    for (var b = booksStart; b<booksEnd; b++) {
        bookData = versificationMgr.getBook(b, inV11n);
        //Skip Book Record (6 bytes)
        getIntFromStream(inFile);
        getShortIntFromStream(inFile);
        for (var c = 0; c<bookData.maxChapter; c++) {
            verseMax = versificationMgr.getVersesInChapter(b,c+1, inV11n);

            //Skip Chapter Record
            getIntFromStream(inFile);
            getShortIntFromStream(inFile);


            for (var v = 0; v<verseMax; v++) {
                startPos = getIntFromStream(inFile)[0];
                length = getShortIntFromStream(inFile)[0];
                if (length !== 0) {
                    //console.log("VERSE", startPos, length);
                    osis = bookData.abbrev + "." + parseInt(c+1, 10) + "." + parseInt(v+1, 10);
                    data[osis] = {startPos: startPos, length: length};
                }
            } //end verse
        } //end chapters
    } //end books
    return data;
}

function getIntFromStream(inBuf, inCallback) {
    buf = inBuf.subarray(start, start+4);
    isEnd = false;
    start = start+4;
    if (buf.length !== 4)
        isEnd = true;
    if (inCallback)
        inCallback(buf[3] * 0x100000 + buf[2] * 0x10000 + buf[1] * 0x100 + buf[0], isEnd);
    return [buf[3] * 0x100000 + buf[2] * 0x10000 + buf[1] * 0x100 + buf[0], isEnd];
}

function getShortIntFromStream(inBuf, inCallback) {
    buf = inBuf.subarray(start, start+2);
    isEnd = false;
    start = start+2;
    if (buf.length !== 2)
        isEnd = true;
    if (inCallback)
        inCallback(buf[1] * 0x100 + buf[0], isEnd);
    return [buf[1] * 0x100 + buf[0], isEnd];
}

function getInt48FromStream(inBuf, inCallback) {
    buf = inBuf.subarray(start, start+6);
    isEnd = false;
    start = start+6;
    if (buf.length !== 6)
        isEnd = true;
    if (inCallback)
        inCallback(buf[1] * 0x100000000000 + buf[0] * 0x100000000 + buf[5] * 0x1000000 + buf[4] * 0x10000 + buf[3] * 0x100 + buf[2], isEnd);
    return [buf[1] * 0x100000000000 + buf[0] * 0x100000000 + buf[5] * 0x1000000 + buf[4] * 0x10000 + buf[3] * 0x100 + buf[2], isEnd];
}

var InstallMgr = {
    getRepositories: getRepositories,
    getModules: getModules,
    installModule: installModule,
    removeModule: removeModule
};

module.exports = InstallMgr;