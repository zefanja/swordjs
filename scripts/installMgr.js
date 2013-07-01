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

    //Install a module. inFile is an ArrayBuffer
    installMgr.installModule = function (inFile) {
        console.log(inFile);
        var blob = null;
        for (var i = 0, f; f = inFile[i]; i++) {
            console.log(escape(f.name), f.type, f.size);

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

    //Build the index with all entry points for a book or chapter
    function buildIndex(inUnzip, inV11n, inDoc) {
        console.log(inUnzip, inV11n);
        var files = {};

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
            else
                dataMgr.saveModule(new Blob([inUnzip.decompress(name)]), name, inDoc);
        });

        var bookPosOT = getBookPositions(inUnzip.decompress(files.otB));
        var chapterVersePosOT = getChapterVersePositions(inUnzip.decompress(files.otCV), bookPosOT, "ot", inV11n);
        var bookPosNT = getBookPositions(inUnzip.decompress(files.ntB));
        var chapterVersePosNT = getChapterVersePositions(inUnzip.decompress(files.ntCV), bookPosNT, "nt", inV11n);

        console.log(chapterVersePosNT.length, chapterVersePosOT.length);
        //TODO
        //dataMgr.saveBCVPos(chapterVersePosOT, chapterVersePosNT);

    }

    //Get the positions of each book
    function getBookPositions(inBuf, inCallback) {
        var startPos = 0,
            length = 0,
            unused = 0,
            start = 0,
            end = false,
            bookPositions = [];

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
                    if (!end)
                        break;
                    bookPositions.push({startPos: startPos, length: length, unused: unused});
                }
            }
        }
        return bookPositions;
    }

    //dump some bytes in the chapter and verse index file
    function dumpBytes(inBuf) {
        var start = 0;

        for (var i=0;i<4;i++) {
            getShortIntFromStream(inBuf);
            getInt48FromStream(inBuf);
            getShortIntFromStream(inBuf);
        }
    }

    //Get the position of each chapter and verse
    function getChapterVersePositions(inBuf, inBookPositions, inTestament, inV11n) {
        dumpBytes(inBuf);
        var booksZ = (inTestament === "ot") ? 0 : versificationMgr.getBooksInOT(inV11n);
        var booksEnd = (inTestament === "ot") ? versificationMgr.getBooksInOT(inV11n) : versificationMgr.getBooksInOT(inV11n)+versificationMgr.getBooksInNT(inV11n);
        var chapterZ = 0,
            verseZ = 0,
            chapterStartPos = 0,
            lastNonZeroStartPos = 0,
            length = 0,
            bookStartPos = 0,
            booknum = 0,
            tartPos = 0,
            chapt = {},
            chapters = [];

        for (var b = booksZ; b<booksEnd; b++) {
            for (var c = 0; c<versificationMgr.getChapterMax(b, inV11n); c++) {
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
                    if (verseZ === 0) {
                        chapterStartPos = startPos;
                        bookStartPos = 0;
                        if (booknum < inBookPositions.length) {
                            //console.log("inBookPositions.startPos", inBookPositions[booknum].startPos, booknum, inBookPositions.length);
                            bookStartPos = inBookPositions[booknum].startPos;
                        }
                        chapt["startPos"] = chapterStartPos;
                        chapt["booknum"] = b;
                        chapt["bookRelativeChapterNum"] = c;
                        chapt["bookStartPos"] = bookStartPos;
                    }
                    if (booknum === 0 && startPos === 0 && length === 0) {
                        if (chapt !== {}) {
                            chapt["verses"].push({startPos: 0, length: 0, booknum: b});
                        }
                    } else {
                        if (chapt !== {}) {
                            chapt["verses"].push({startPos: startPos - chapterStartPos, length: length, booknum: b});
                        }
                    }
                } //end verse
                if (chapt != {}) {
                    chapt["Length"] = lastNonZeroStartPos - chapterStartPos + length;
                    chapters.push(chapt);
                }
                getShortIntFromStream(inBuf);
                getInt48FromStream(inBuf);
                getShortIntFromStream(inBuf);
            } //end chpaters
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
        /*intReader.onload = function (inEvent) {
            if (inEvent.total !== 4)
                isEnd = true;
            if (inCallback)
                inCallback(buf[3] * 0x100000 + buf[2] * 0x10000 + buf[1] * 0x100 + buf[0], isEnd);
        };*/
    }

    function getShortIntFromStream(inBuf, inCallback) {
        buf = inBuf.subarray(start, start+2),
        //console.log("getShortIntFromStream", start, buf,buf[1] * 0x100 + buf[0]);
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