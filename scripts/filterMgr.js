"use strict";
var osis = require("./filters/osis");
var plain = require("./filters/plain");
var thml = require("./filters/thml");

function processText(inRaw, inSource, inDirection, inOptions) {
	//console.log(inRaw, inSource, inDirection, inOptions);
    if(inSource && inSource.toLowerCase() === "osis")
        return osis.processText(inRaw, inDirection, inOptions);
    if(inSource && inSource.toLowerCase() === "thml")
        return thml.processText(inRaw, inDirection, inOptions);
    else
        return plain.processText(inRaw, inDirection, inOptions);
}

var filterMgr = {
    processText: processText
};

module.exports = filterMgr;
