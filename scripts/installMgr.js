define("installMgr", ["dataMgr", "zText", "versificationMgr", "async"], function (dataMgr, zText, versificationMgr, async) {
    var installMgr = {},
        start = 0;
        db = dataMgr.db,
        buf = [1,2,3,4,5,6,7];
        isEnd = false;

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
                            saveConfig(new Blob([unzip.decompress(name)]), unzip);
                        }// else if (name.search("nt.bzs") !== -1) {
                            //console.log(unzip.decompress(name));
                        //} else {
                            //saveModule(new Blob([unzip.decompress(name)]), name);
                        //}
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

    //Read a module's config file and save it as an Object
    function saveConfig(inConfBlob, inUnzip) {
        var confReader = new FileReader();
        var configData = {};
        configData["GlobalOptionFilter"] = [];
        configData["Feature"] = [];
        confReader.readAsText(inConfBlob);
        confReader.onload = function(e) {
            var lines = e.target.result.split(/[\r\n]+/g);
            lines.forEach(function(line, index) {
                splittedLine = line.split(/=(.+)/);
                if (splittedLine[0] !== "")
                    if (splittedLine[0].search(/\[.*\]/) !== -1)
                        configData["moduleKey"] = splittedLine[0].replace("[", "").replace("]", "");
                    else
                        if (splittedLine[0] === "GlobalOptionFilter")
                            configData[splittedLine[0]].push(splittedLine[1]);
                        else if (splittedLine[0] === "Feature")
                            configData[splittedLine[0]].push(splittedLine[1]);
                        else
                            configData[splittedLine[0]] = splittedLine[1];
            });

            //Save config data to the database and continue to build the index
            db.post(configData, function (inError, inDoc) {
                if(inError)
                    console.log(inError);
                else
                    buildIndex(inUnzip, configData.Versification);
            });
        };
    }

    //Build the index with all entry points for a book or chapter
    function buildIndex(inUnzip, inV11n) {
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
            //else
                //saveModule(new Blob([unzip.decompress(name)]), name);
        });

        getBookPositions(inUnzip.decompress(files.ntB), function (inBookPositions) {
            console.log(inBookPositions);
            dumpBytes(inUnzip.decompress(files.ntCV), inBookPositions, "nt", inV11n, function (inChapterVersePositions) {
                console.log(inChapterVersePositions);
            });
        });

    }

    //Get the positions of each book
    function getBookPositions(inBuf, inCallback) {
        var startPos = 0,
            length = 0,
            unused = 0,
            start = 0,
            end = false,
            bookPositions = [];

        async.whilst(
            function () {return !end;},
            function (callbackB) {
                async.series([
                    function (callback) {
                        getIntFromStream(inBuf, function (value, isEnd) {
                            end = isEnd;
                            startPos = value;
                            if (!isEnd)
                                callback(null);
                            else
                                callback(isEnd);

                        });
                    },
                    function (callback) {
                        getIntFromStream(inBuf, function (value, isEnd) {
                            end = isEnd;
                            length = value;
                            if (!isEnd)
                                callback(null);
                            else
                                callback(isEnd);
                        });
                    },
                    function (callback) {
                        getIntFromStream(inBuf, function (value, isEnd) {
                            end = isEnd;
                            unused = value;
                            bookPositions.push({startPos: startPos, length: length, unused: unused});
                            if (!isEnd)
                                callback(null);
                            else
                                callback(isEnd);
                        });
                    }
                ],
                function (err) {
                    callbackB();
                });
            },
            function (err) {
                inCallback(bookPositions);
            }
        );
    }

    //dump some bytes in the chapter and verse index file
    function dumpBytes (inBuf, inBookPositions, inTestament, inV11n, inCallback) {
        var z=0,
            start = 0;
        async.whilst(
            function () {return z<4;},
            function (callbackW) {
                async.series([
                    function (callback) {
                        getShortIntFromStream(inBuf, function () {callback(null);});
                    },
                    function (callback) {
                        getInt48FromStream(inBuf, function () {callback(null);});
                    },
                    function (callback) {
                        getShortIntFromStream(inBuf, function () {
                            z++;
                            callback(null);
                        });
                    }
                ],
                function (err, results) {callbackW();});
            },
            function (err) {
                if (z==4)
                    getChapterVersePositions(inBuf, inBookPositions, inTestament, inV11n, inCallback);
            }
        );
    }

    //Get the position of each chapter and verse
    function getChapterVersePositions (inBuf, inBookPositions, inTestament, inV11n, inCallback) {
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

        console.log(booksZ, booksEnd, chapterZ);

        for (var b = booksZ; b<booksEnd; b++) {
            for (var c = 0; c<versificationMgr.getChapterMax(b, inV11n); c++) {
                chapterStartPos = 0;
                lastNonZeroStartPos = 0;
                chapt = {};
                chapt["verses"] = [];
                length = 0;
                for (var v = 0; v<versificationMgr.getVersesInChapter(b,c); v++) {
                    booknum = getShortIntFromStream(inBuf);

                    startPos = getInt48FromStream(inBuf)
                    if (startPos !== 0)
                        lastNonZeroStartPos = startPos;

                    length = getShortIntFromStream(inBuf);
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
        console.log("Chapters", chapters);
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
            return buf[3] * 0x100000 + buf[2] * 0x10000 + buf[1] * 0x100 + buf[0];
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
            return buf[1] * 0x100 + buf[0];
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
            return buf[1] * 0x100000000000 + buf[0] * 0x100000000 + buf[5] * 0x1000000 + buf[4] * 0x10000 + buf[3] * 0x100 + buf[2];
    }

    //Save the binary module files like *.bzz
    function saveModule(inBlob, inPath) {
        var path = inPath.split("/"),
            driver = path[path.length-3];

        db.post({fileName: path[path.length-1], modKey: path[path.length-2], driver: driver}, function (inError, inDoc) {
            if(!inError) {
                console.log(inDoc);
                db.putAttachment(inDoc.id + "/binary", driver, inBlob, driver, function(inError, inResponse) {
                    console.log(inError, inResponse);
                });
            } else
                console.log(inError);
        });
    }



    return installMgr;
});

/*
async.whilst(
            function () {
                return booksZ<booksEnd;
            },
            function (callbackB) {
                chapterZ = 0;
                async.whilst(
                    function () {
                        console.log("Chapters in Book:", booksZ, chapterZ, versificationMgr.getChapterMax(booksZ, inV11n));
                        return chapterZ<versificationMgr.getChapterMax(booksZ, inV11n);
                    },
                    function (callbackC) {
                        chapterStartPos = 0;
                        lastNonZeroStartPos = 0;
                        chapt = {};
                        chapt["verses"] = [];
                        length = 0;

                        async.whilst(
                            function () {
                                //console.log("verseZ", verseZ, versificationMgr.getVersesInChapter(booksZ, chapterZ));
                                return verseZ < versificationMgr.getVersesInChapter(booksZ, chapterZ);
                            },
                            function (callbackV) {
                                async.series([
                                    function (callback) {
                                        getShortIntFromStream(inBuf, function (value) {
                                            booknum = value;
                                            callback(null);
                                        });

                                    },
                                    function (callback) {
                                        getInt48FromStream(inBuf, function(value) {
                                            //console.log("startPos", value, booknum, booksZ, chapterZ, verseZ);
                                            startPos = value;
                                            if (startPos !== 0)
                                                lastNonZeroStartPos = startPos;
                                            callback(null);
                                        });
                                    },
                                    function (callback) {
                                        getShortIntFromStream(inBuf, function (value) {
                                            length = value;
                                            if (verseZ === 0) {
                                                chapterStartPos = startPos;
                                                bookStartPos = 0;
                                                if (booknum < inBookPositions.length) {
                                                    //console.log("inBookPositions.startPos", inBookPositions[booknum].startPos, booknum, inBookPositions.length);
                                                    bookStartPos = inBookPositions[booknum].startPos;
                                                }

                                                //if (this.BlockType === IndexingBlockType.Chapter)
                                                    //chapterStartPos = 0;

                                                chapt["startPos"] = chapterStartPos;
                                                chapt["booknum"] = booksZ;
                                                chapt["bookRelativeChapterNum"] = chapterZ;
                                                chapt["bookStartPos"] = bookStartPos;
                                            }
                                            if (booknum === 0 && startPos === 0 && length === 0) {
                                                if (chapt !== {}) {
                                                    chapt["verses"].push({startPos: 0, length: 0, booknum: booksZ});
                                                }
                                            } else {
                                                if (chapt !== {}) {
                                                    chapt["verses"].push({startPos: startPos - chapterStartPos, length: length, booknum: booksZ});
                                                }
                                            }

                                            callback(null);
                                        });
                                    }
                                ],
                                function (err, results) {
                                    //console.log("async.series", err, results);
                                    verseZ++;
                                    callbackV();
                                });

                            },
                            function (err) {
                                //console.log("passed whilst verses");
                                // update the chapter length now that we know it
                                if (chapt != {}) {
                                    chapt["Length"] = lastNonZeroStartPos - chapterStartPos + length;
                                    chapters.push(chapt);
                                }
                                async.series([
                                    function (callback) {
                                        getShortIntFromStream(inBuf, function () {
                                            callback(null);
                                        });
                                    },
                                    function (callback) {
                                        getInt48FromStream(inBuf, function () {
                                            callback(null);
                                        });
                                    },
                                    function (callback) {
                                        getShortIntFromStream(inBuf, function () {
                                            callback(null);
                                        });
                                    }
                                ], function (err) {
                                    verseZ = 0;
                                    chapterZ++;
                                    callbackC();
                                });
                            }
                        );
                    },
                    function (err) {
                        //console.log("passed whilst chapters", chapters);
                        async.series([
                            function (callback) {
                                getShortIntFromStream(inBuf, function () {
                                    callback(null);
                                });
                            },
                            function (callback) {
                                getInt48FromStream(inBuf, function () {
                                    callback(null);
                                });
                            },
                            function (callback) {
                                getShortIntFromStream(inBuf, function () {
                                    callback(null);
                                });
                            }
                        ], function (err) {
                            booksZ++;
                            callbackB();
                        });
                    }
                );
            },
            function (err) {
                console.log("passed whilst books", chapters);
                //getChapterBytes(path.join(dataPath,testament+".bzz"), vkey.vkey.testamentChapterNum);
            }
        );
*/