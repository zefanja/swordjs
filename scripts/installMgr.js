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

define("installMgr", ["dataMgr", "zText", "versificationMgr"], function (dataMgr, zText, versificationMgr) {
    var installMgr = {},
        start = 0;
        db = dataMgr.db;

    //Get a list of all available repos/sources from CrossWire's masterRepoList.conf
    installMgr.getRepositories = function () {
        download("http://crosswire.org/ftpmirror/pub/sword/masterRepoList.conf", "text", function (inResponse) {
            console.log(inResponse);
        });
    };

    function download(url, reponseType, inCallback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = "blob";
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (inCallback) inCallback(xhr.response);
            }
        };
        xhr.send(null);
    }

    //Install a module. inFile is an ArrayBuffer
    installMgr.installModule = function (inFile) {
        console.log(inFile);
        var blob = null;
        for (var i = 0, f; f = inFile[i]; i++) {
            var zipReader = new FileReader();
            zipReader.onload = (function(file) {
                return function(evt) {
                    var unzip = new Zlib.Unzip(new Uint8Array(evt.target.result));
                    var filenames = unzip.getFilenames();
                    filenames.forEach(function (name, index) {
                        if(name.search(".conf") !== -1) {
                            dataMgr.saveConfig(new Blob([unzip.decompress(name)]),
                                function (inV11n, inDoc) {
                                    buildIndex(unzip, inV11n, inDoc);
                                });
                        }
                    });
                };
            })(f);

            zipReader.readAsArrayBuffer(f);
        }
    };

    //Build the index with all entry points for a book or chapter
    function buildIndex(inUnzip, inV11n, inDoc) {
        console.log(inUnzip, inV11n);
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
        dataMgr.saveModule(files.bin, inDoc);

        var bookPosOT = getBookPositions(inUnzip.decompress(files.otB));
        var chapterVersePosOT = getChapterVersePositions(inUnzip.decompress(files.otCV), bookPosOT, "ot", inV11n);
        var bookPosNT = getBookPositions(inUnzip.decompress(files.ntB));
        var chapterVersePosNT = getChapterVersePositions(inUnzip.decompress(files.ntCV), bookPosNT, "nt", inV11n);

        //console.log(chapterVersePosNT, chapterVersePosOT);
        console.log(bookPosOT, bookPosNT);
        dataMgr.saveBCVPos(chapterVersePosOT, chapterVersePosNT, inDoc);

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
            for (var c = 0; c<bookData.maxChapter; c++) {
                chapterStartPos = 0;
                lastNonZeroStartPos = 0;
                chapt = {};
                chapt["verses"] = [];
                length = 0;
                for (var v = 0; v<versificationMgr.getVersesInChapter(b,c); v++) {
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

    return installMgr;
});