'use strict';

var async = require("async");

var textReader = new FileReader();

function getRawEntry(inBlob, inPos, inVList, inEcoding, inIntro, inCallback) {
    console.log("inPos, inVList, inEcoding, inIntro", inPos, inVList, inEcoding, inIntro);

    var startPos = inPos.startPos,
        length = startPos + inPos.length,
        blob = inBlob.slice(startPos, length),
    	rawText = [],
        z = 0;

    async.whilst(
        function () {return z < inVList.length;},
        function (cb) {
            if (!inEcoding)
                textReader.readAsText(blob, "CP1252");
            else
                textReader.readAsText(blob, inEcoding);

            textReader.onload = function(e) {
                if (e.target.result !== "") {
                    rawText.push({text: e.target.result, osisRef: inVList[z].osisRef, verseData: inVList[z]});
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
}

var rawCom = {
    getRawEntry: getRawEntry
};

module.exports = rawCom;