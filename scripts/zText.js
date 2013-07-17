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

define(["inflateStream", "async"], function (Zlib, async) {
    var zText = {},
        zlibReader = new FileReader(),
        textReader = new FileReader();


    zText.getRawEntry = function (inBlob, inPos, inVList, inEcoding, inCallback) {
        //console.log(inPos, inVList, inEcoding);
        if (!inPos[inVList[0].chapter-1]) {
            inCallback({message: "Wrong passage. The requested chapter is not available in this module."});
        } else {
            var bookStartPos = inPos[inVList[0].chapter-1].bookStartPos,
                startPos = inPos[inVList[0].chapter-1].startPos,
                length = inPos[inVList[0].chapter-1].length,
                chapterStartPos = bookStartPos + startPos,
                chapterEndPos = chapterStartPos + length,
                blob = inBlob.slice(bookStartPos, chapterEndPos);

            /*if(!isNaN(inVList[0].verse)) {
                startPos = startPos + inPos[inVList[0].chapter-1].verses[inVList[0].verse-1].startPos;
                length = inPos[inVList[0].chapter-1].verses[inVList[0].verse-1].length;
            }*/

            //console.log(bookStartPos, startPos, length, chapterStartPos, chapterEndPos, blob);

            zlibReader.readAsArrayBuffer(blob);
            zlibReader.onload = function (evt) {
                var view = new Uint8Array(evt.target.result);
                //We need to initialize a new InflateStream on every request
                var inflator = new Zlib.InflateStream();
                var infBlob = new Blob([inflator.decompress(view)]);

                //Read raw text entry
                var rawText = [],
                    verseStart = 0,
                    verseEnd = 0,
                    z = 0;
                async.whilst(
                    function () {return z < inVList.length;},
                    function (cb) {
                        verseStart = startPos + inPos[inVList[z].chapter-1].verses[inVList[z].verse-1].startPos;
                        verseEnd = verseStart + inPos[inVList[z].chapter-1].verses[inVList[z].verse-1].length;
                        if (!inEcoding)
                            textReader.readAsText(infBlob.slice(verseStart, verseEnd), "CP1252");
                        else
                            textReader.readAsText(infBlob.slice(verseStart, verseEnd), inEcoding);
                        textReader.onload = function(e) {
                            rawText.push({text: e.target.result, osis: inVList[z].osis, verse: inVList[z].verse});
                            z++;
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

    };

    return zText;
});