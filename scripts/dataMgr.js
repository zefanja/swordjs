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

define("dataMgr", ["async", "pouchdb", "tools"], function (async, Pouch, tools) {
    var dataMgr = {};

    //Init PouchDB Database
    var db = new Pouch("swordjs");

    //get a document
    function getDocument(inId, inCallback) {
        db.get(inId, function (inError, inResponse) {
            inCallback(inError, inResponse);
        });
    }

    //Read a module's config file and save it as an Object
    function saveConfig(inConfBlob, inCallback) {
        var confReader = new FileReader();
        confReader.readAsText(inConfBlob);
        confReader.onload = function(e) {
            var configData = tools.readConf(e.target.result);

            //Save config data to the database and continue to build the index
            db.post(configData, function (inError, inDoc) {
                if(inError)
                    console.log(inError);
                else
                    inCallback(configData.Versification, {id: inDoc.id, modKey: configData.moduleKey});
            });
        };
    }

    //Save the binary module files like *.bzz
    function saveModule(inFiles, inDoc) {
        var z = inFiles.length,
            args = {},
            path = null,
            driver = null;

        args.docId = inDoc.id;

        async.eachSeries(inFiles, function (file, ittCallback) {
            path = file.name.split("/"),
            driver = path[path.length-3],
            db.post({fileName: path[path.length-1], modKey: inDoc.modKey, driver: driver}, function (inError, inBinDoc) {
                if(!inError) {
                    db.putAttachment(inBinDoc.id+ "/binary", driver, file.blob, driver, function(inError, inResponse) {
                        if(!inError) {
                            args[path[path.length-1].split(".")[0]] = inBinDoc.id;
                        } else
                            console.log(inError);
                        ittCallback(null);
                    });
                } else
                    console.log(inError);
            });
        }, function (err) {
            if(!err)
                updateBinaryIds(args);
            else
                console.log(err);
        });
    }

    function updateBinaryIds(inIds, inCallback) {
        db.get(inIds.docId, function (inError, inModule) {
            if(!inError) {
                inModule.nt = inIds.nt;
                inModule.ot = inIds.ot;
                db.put(inModule, function(inError, inResponse) {
                    //console.log("update bin IDs", inError, inResponse);
                });
            }
        });
    }

    function getBlob(inId, inCallback) {
        var attId = "ztext";
        db.getAttachment(inId+"/binary", attId,  function (inError, inBlob) {
            inCallback(inError, inBlob);
        });
    }

    function saveBCVPos(inOT, inNT, inDoc) {
        db.post({
            modKey: inDoc.modKey,
            ot: inOT,
            nt: inNT
        }, function (inError, inPosRes) {
            if(!inError) {
                //console.log(inResponse);
                db.get(inDoc.id, function (inError, inModule) {
                    if(!inError) {
                        inModule["bcvPosID"] = inPosRes.id;
                        db.put(inModule, function(inError, inResponse) {
                            console.log(inError, inResponse);
                        });
                    }
                });
            } else
                console.log(inError);
        });
    }

    function clearDatabase() {
        Pouch.destroy('swordjs', function(inError, inInfo) {
            console.log(inError, inInfo);
            if(!inError)
                db = new Pouch("swordjs");
        });
    }

    return {
        db: db,
        clearDatabase: clearDatabase,
        saveConfig: saveConfig,
        saveModule: saveModule,
        saveBCVPos: saveBCVPos,
        getBlob: getBlob,
        getDocument: getDocument
    };
});