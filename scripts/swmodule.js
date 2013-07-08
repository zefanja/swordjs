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

define(["dataMgr", "verseKey", "zText", "filterMgr"], function (dataMgr, verseKey, zText, filterMgr) {
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
        dataMgr.getDocument(inId, function (inError, inConfig) {
            if (!inError)
                inCallback(inConfig);
        });
    }

    //get the module binary files
    function getBinaryBlob(inId, inCallback) {
        dataMgr.getBlob(inId, inCallback);
    }

    //Module Instance
    Module.prototype = {
        constructor: Module,
        self: this,

        renderText: function (inVKey, inCallback) {
            var bcvPos = null,
                blobId = null,
                self = this;
            var vkey = verseKey.parse(inVKey);
            //console.log(vkey);
            dataMgr.getDocument(self.config.bcvPosID, function(inError, inBcv) {
                //console.log(inBcv);
                if (inBcv.nt.hasOwnProperty(vkey.book)) {
                    bcvPos = inBcv.nt[vkey.book];
                    blobId = self.config.nt;
                } else if (inBcv.ot.hasOwnProperty(vkey.book)) {
                    bcvPos = inBcv.ot[vkey.book];
                    blobId = self.config.ot;
                }

                getBinaryBlob(blobId, function (inError, inBlob) {
                    if (!inError) {
                        zText.getRawEntry(inBlob, bcvPos, vkey, function (inError, inRaw) {
                            //console.log(inError, inRaw);
                            if (!inError)
                                inCallback(null, filterMgr.processText(inRaw, self.config.SourceType, {footnotes: true}));
                        });
                    }

                });
            });
        }
    };

    return Module;
});