'use strict';

var async = require("async");
var pako = require("pako");

var zlibReader = new FileReader(),
    textReader = new FileReader();


function getRawEntry(inBlob, inPos, inVList, inEcoding, inIntro, inCallback) {
    //console.log("inPos, inVList, inEcoding, inIntro", inPos, inVList, inEcoding, inIntro)
    if (!inPos[inVList[0].chapter-1]) {
        inCallback({message: "Wrong passage. The requested chapter is not available in this module."});
    } else {
        var bookStartPos = inPos[inVList[0].chapter-1].bookStartPos,
            startPos = inPos[inVList[0].chapter-1].startPos,
            length = inPos[inVList[0].chapter-1].length,
            chapterStartPos = bookStartPos + startPos,
            chapterEndPos = chapterStartPos + length,
            blob = inBlob.slice(bookStartPos, chapterEndPos);

        zlibReader.readAsArrayBuffer(blob);
        zlibReader.onload = function (evt) {
            var inflator = new pako.Inflate();
            var view = new Uint8Array(evt.target.result);

            inflator.push(view, true);
            if (inflator.err) {
                inCallback(inflator.err);
                throw new Error(inflator.err);
            }

            //console.log(inflator.result);
            var infBlob = new Blob([inflator.result]);

            //Read raw text entry
            var rawText = [],
                verseStart = 0,
                verseEnd = 0,
                z = 0,
                gotIntro = false;
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
                        textReader.readAsText(infBlob.slice(verseStart, verseEnd), "CP1252");
                    else
                        textReader.readAsText(infBlob.slice(verseStart, verseEnd), inEcoding);
                    textReader.onload = function(e) {
                        if(inIntro && !gotIntro) {
                            if (e.target.result !== "")
                                rawText.push({text: e.target.result, osisRef: inVList[z].book + "." + inVList[z].chapter + ".0", verse: 0});
                            gotIntro = true;
                        } else {
                            rawText.push({text: e.target.result, osisRef: inVList[z].osisRef, verse: inVList[z].verse});
                            z++;
                        }
                        cb();
                    };
                },
                function (inError) {
                    //console.log(rawText);
                    inCallback(inError, rawText);
                }
            );

        };
    }

}

var zText = {
    getRawEntry: getRawEntry
};

module.exports = zText;