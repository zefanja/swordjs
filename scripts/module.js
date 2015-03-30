'use strict';

var dataMgr = require("./dataMgr");
var verseKey = require("./verseKey");
var zText = require("./zText");
var rawCom = require("./rawCom");
var filterMgr = require("./filterMgr");
var versificationMgr = require("./versificationMgr");


var otBin = null,
    ntBin = null;

//Constructor
function Module(inModName, inId, inConfig) {
    if (!(this instanceof Module)) {
        throw new TypeError("Module constructor cannot be called as a function.");
    }

    this.modKey = inModName;
    this.language = inConfig.language;
    this.id = inId;
    this.config = inConfig;
}

Module.create = function (inModName, inId, inConfig) {
    return new Module(inModName, inId, inConfig);
};

//get a module's config
function getConfig(inId, inCallback) {
    /*dataMgr.getDocument(inId, function (inError, inConfig) {
        if (!inError)
            inCallback(inConfig);
    });*/
}

//get the module binary files
function getBinaryBlob(inId, inCallback) {
    dataMgr.getBlob(inId, inCallback);
}

//Module Instance
Module.prototype = {
    constructor: Module,
    self: this,

    renderText: function (inVKey, inOptions, inCallback) {
        var bcvPos = null,
            blobId = null,
            self = this;
        if (typeof inOptions === "function")
            inCallback = inOptions;
        var vList = verseKey.parseVerseList(inVKey, this.config.Versification);
        //console.log(vList);
        if(vList.length !== 0 && vList[0].osisRef !== "") {
            dataMgr.get(self.config.bcvPosID, function(inError, inBcv) {
                //console.log(inBcv);
                if(!inError) {
                    if (inBcv.nt && (inBcv.nt.hasOwnProperty(vList[0].book) || inBcv.nt.hasOwnProperty(vList[0].osisRef))) {
                        bcvPos = inBcv.nt[vList[0].book] || inBcv.nt[vList[0].osisRef];
                        blobId = self.config.nt;
                    } else if (inBcv.ot && (inBcv.ot.hasOwnProperty(vList[0].book) || inBcv.ot.hasOwnProperty(vList[0].osisRef))) {
                        bcvPos = inBcv.ot[vList[0].book] || inBcv.ot[vList[0].osisRef];
                        blobId = self.config.ot;
                    }
                    console.log(bcvPos);

                    if(bcvPos === null) {
                        inCallback({message: "The requested chapter is not available in this module."});
                    } else {
                        getBinaryBlob(blobId, function (inError, inBlob) {
                            if (!inError) {
                                if (self.config.modDrv === "zText") {
                                    zText.getRawEntry(inBlob, bcvPos, vList, self.config.Encoding, inOptions.intro ? inOptions.intro : false, function (inError, inRaw) {
                                        //console.log(inError, inRaw);
                                        if (!inError) {
                                            var result = filterMgr.processText(inRaw, self.config.SourceType, self.config.Direction, inOptions);
                                            inCallback(null, result);
                                        } else
                                            inCallback(inError);
                                    });
                                } else if (self.config.modDrv === "RawCom") {
                                    rawCom.getRawEntry(inBlob, bcvPos, vList, self.config.Encoding, inOptions.intro ? inOptions.intro : false, function (inError, inRaw) {
                                        //console.log(inError, inRaw);
                                        if (!inError) {
                                            var result = filterMgr.processText(inRaw, self.config.SourceType, self.config.Direction, inOptions);
                                            inCallback(null, result);
                                        } else
                                            inCallback(inError);
                                    });
                                }

                            } else {
                                inCallback(inError);
                            }

                        });
                    }
                } else {
                    inCallback(inError);
                }
            });
        } else {
            inCallback({message: "Wrong passage. The requested chapter is not available in this module."});
        }
    },

    getAllBooks: function (inCallback) {
        versificationMgr.getAllBooks(this.config.bcvPosID, this.config.Versification, function (inError, inResult) {
            inCallback(inError, inResult);
        });
    },

    //inOsis can be Matt.3
    getVersesInChapter: function (inOsis) {
        return versificationMgr.getVersesInChapter(versificationMgr.getBookNum(inOsis.split(".")[0], this.config.Versification), inOsis.split(".")[1], this.config.Versification);
    }
};

module.exports = Module;