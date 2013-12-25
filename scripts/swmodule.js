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

define(["dataMgr", "verseKey", "zText", "filterMgr", "versificationMgr"], function (dataMgr, verseKey, zText, filterMgr, versificationMgr) {
    var otBin = null,
        ntBin = null;

    //Constructor
    function Module(inModName, inId, inConfig) {
        if (!(this instanceof Module)) {
            throw new TypeError("Module constructor cannot be called as a function.");
        }

        this.modKey = inModName;
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
            if(vList.length !== 0 && vList[0].osis !== "") {
                dataMgr.get(self.config.bcvPosID, function(inError, inBcv) {
                    if(!inError) {
                        if (inBcv.nt && inBcv.nt.hasOwnProperty(vList[0].book)) {
                            bcvPos = inBcv.nt[vList[0].book];
                            blobId = self.config.nt;
                        } else if (inBcv.ot && inBcv.ot.hasOwnProperty(vList[0].book)) {
                            bcvPos = inBcv.ot[vList[0].book];
                            blobId = self.config.ot;
                        }

                        if(bcvPos === null)
                            inCallback({message: "Wrong passage. The requested chapter is not available in this module."});

                        getBinaryBlob(blobId, function (inError, inBlob) {
                            if (!inError) {
                                zText.getRawEntry(inBlob, bcvPos, vList, self.config.Encoding, function (inError, inRaw) {
                                    //console.log(inError, inRaw);
                                    if (!inError)
                                        inCallback(null, filterMgr.processText(inRaw, self.config.SourceType, self.config.Direction, inOptions));
                                    else
                                        inCallback(inError);
                                });
                            }

                        });
                    } else {
                        inCallback(inError);
                    }

                });
            } else {
                inCallback({message: "Wrong passage. The requested chapter is not available in this module."});
            }
        },

        getAllBooks: function () {
            return versificationMgr.getAllBooks(this.config.Versification);
        },

        //inOsis can be Matt.3
        getVersesInChapter: function (inOsis) {
            return versificationMgr.getVersesInChapter(versificationMgr.getBookNum(inOsis.split(".")[0], this.config.Versification), inOsis.split(".")[1], this.config.Versification);
        }
    };

    return Module;
});