function init(inPath) {
    //postMessage({"cmd": null, "result": inPath});
    //var rjsPath = (inPath) ? "./scripts/libs/require/require.js" : "./libs/require/require.js";
    //var zlibPath = (inPath) ? "./scripts/libs/zlib/bin/inflate_stream.min.js" : "./libs/zlib/bin/inflate_stream.min.js";
    importScripts("./libs/require/require.js");
    importScripts("./libs/zlib/bin/inflate_stream.min.js");
    require.config({
        //baseUrl: (inPath) ? "./scripts" : ".",
        paths: {
            "text": "libs/text/text",
            "json": "libs/json/src/json",
            "async": "libs/async/lib/async",
            "bcv": "libs/bible-reference-parser/js/en_bcv_parser.min",
            "inflateStream": "libs/zlib/bin/inflate_stream.min",
            "sax": "libs/sax/lib/sax"
        },
        shim: {
            "bcv": {
                exports: "bcv_parser",
                init: function () {
                    return new this.bcv_parser();
                }
            },
            "sax": {
                exports: "sax"
            }
        }
    });
}

function getRawEntry(inBlob, inPos, inVList, inEcoding, inIntro) {
    requirejs(["async"], function(async) {
        var zlibReader = new FileReaderSync(),
            textReader = new FileReaderSync();

        if (!inPos[inVList[0].chapter-1]) {
            throw new Error({message: "Wrong passage. The requested chapter is not available in this module."});
        } else {
            var bookStartPos = inPos[inVList[0].chapter-1].bookStartPos,
                startPos = inPos[inVList[0].chapter-1].startPos,
                length = inPos[inVList[0].chapter-1].length,
                chapterStartPos = bookStartPos + startPos,
                chapterEndPos = chapterStartPos + length,
                blob = inBlob.slice(bookStartPos, chapterEndPos);

            var view = new Uint8Array(zlibReader.readAsArrayBuffer(blob));

            //We need to initialize a new InflateStream on every request
            var inflator = new Zlib.InflateStream();
            var infBlob = new Blob([inflator.decompress(view)]);

            //Read raw text entry
            var rawText = [],
                verseStart = 0,
                verseEnd = 0,
                z = 0,
                gotIntro = false,
                text = null;
            async.whilst(
                function () {return z < inVList.length;},
                function (cb) {
                    if(inIntro && !gotIntro) {
                        verseStart = (inVList[z].chapter === 1) ? 0 : inPos[inVList[z].chapter-2].startPos + inPos[inVList[z].chapter-2].length;
                        verseEnd = startPos;
                    } else {
                        verseStart = startPos + inPos[inVList[z].chapter-1].verses[inVList[z].verse-1].startPos;
                        verseEnd = verseStart + inPos[inVList[z].chapter-1].verses[inVList[z].verse-1].length;
                    }

                    if (!inEcoding)
                        text = textReader.readAsText(infBlob.slice(verseStart, verseEnd), "CP1252");
                    else
                        text = textReader.readAsText(infBlob.slice(verseStart, verseEnd), inEcoding);

                    if(inIntro && !gotIntro) {
                        if (text !== "")
                            rawText.push({text: text, osis: inVList[z].book + "." + inVList[z].chapter + ".0", verse: 0});
                        gotIntro = true;
                    } else {
                        rawText.push({text: text, osis: inVList[z].osis, verse: inVList[z].verse});
                        z++;
                    }
                    cb();
                },
                function (inError) {
                    if(!inError)
                        postMessage({"result": rawText, "cmd": "getRawEntry"});
                    else
                        throw new Error(inError);
                }
            );
        }
    });
}

function processText(inRaw, inSource, inDirection, inOptions) {
    requirejs(["filterMgr"], function (filterMgr) {
        postMessage({"result": filterMgr.processText(inRaw, inSource, inDirection, inOptions), "cmd": "processText"});
    });
}

self.addEventListener('message', function(e) {
    var data = e.data;
    switch (data.cmd) {
        case "init":
            init(data.path);
        break;
        case "getRawEntry":
            getRawEntry(data.blob, data.bcvPos, data.vList, data.encoding, data.intro);
        break;
        case "processText":
            processText(data.raw, data.source, data.direction, data.options);
        break;
        default:
            self.postMessage('Unknown command: ' + data);
    }
    return true;
}, false);
