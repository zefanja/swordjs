'use strict';

var JSZip = require("jszip");
var async = require("async");
var IDB = require("./idbPluginWrapper");
var tools = require("./tools");

//get some data by id
function get(inId, inCallback) {
    IDB.getDB(function (inError, db) {
        if(!inError)
            db.get(inId,
                function (inResponse) {
                    inCallback(null, inResponse);
                },
                function (inError) {inCallback(inError);}
            );
        else inCallback(inError);
    });
}

//Read a module's config file and save it as an Object
function saveConfig(inConfBlob, inCallback) {
    var confReader = new FileReader();
    confReader.readAsText(inConfBlob);
    confReader.onload = function(e) {
        var configData = tools.readConf(e.target.result);

        //Save config data to the database and continue to build the index
        IDB.getDB(function (inError, db) {
            if(!inError)
                db.put(configData,
                    function (inId) {
                        inCallback(null, {id: inId, modKey: configData.moduleKey, modDrv: configData.ModDrv, v11n: configData.Versification});
                    },
                    function (inError) {inCallback(inError);}
                );
            else {
                console.log(inError);
                //inCallback(inError);
            }
        });
    };
}

//Save the binary module files like *.bzz
function saveModule(inFiles, inDoc, inCallback) {
    //console.log("saveModule", inFiles, inDoc);
    var z = inFiles.length,
        args = {},
        path = null,
        driver = null;

    args.docId = inDoc.id;

    async.eachSeries(inFiles, function (file, ittCallback) {
        var path = file.name.split("/"),
            driver = path[path.length-3];
        IDB.getDB(function (inError, db) {
            if(!inError)
                db.put({fileName: path[path.length-1], modKey: inDoc.modKey, driver: driver, blob: file.blob},
                    function (inId) {
                        args[path[path.length-1].split(".")[0]] = inId;
                        ittCallback(null);
                    },
                    function (inError) {ittCallback(inError);}
                );
            else inCallback(inError);
        });
    }, function (inError) {
        if(!inError) updateBinaryIds(args, inCallback);
        else inCallback(inError);
    });
}

function updateBinaryIds(inIds, inCallback) {
    //console.log("updateBinaryIds", inIds, inCallback);
    IDB.getDB(function (inError, db) {
        if(!inError)
            db.get(inIds.docId,
                function (inModule) {
                    inModule.nt = inIds.nt;
                    inModule.ot = inIds.ot;
                    db.put(inModule, function(inResponse) {
                            inCallback(null);
                        },
                        function (inError) {inCallback(inError);}
                    );
                },
                function (inError) {inCallback(inError);}
            );
        else inCallback(inError);
    });
}

function getBlob(inId, inCallback) {
    IDB.getDB(function (inError, db) {
        if(!inError)
            db.get(inId,
                function (inBlob) {inCallback(null, inBlob.blob);},
                function (inError) {inCallback(inError);}
            );
        else inCallback(inError);
    });
}

function saveBCVPos(inOT, inNT, inDoc, inCallback) {
    IDB.getDB(function (inError, db) {
        if(!inError)
            db.put({modKey: inDoc.modKey, ot: inOT, nt: inNT},
                function (inPosResId) {
                    db.get(inDoc.id,
                        function (inModule) {
                            inModule["bcvPosID"] = inPosResId;
                            db.put(inModule,
                                function(inId) {
                                    inCallback(null);
                                },
                                function (inError) {inCallback(inError);}
                            );
                        },
                        function (inError) {inCallback(inError);}
                    );
                },
                function (inError) {inCallback(inError);}
            );
        else inCallback(inError);
    });
}

function getModules(inCallback) {
    IDB.getDB(function (inError, db) {
        if(!inError)
            db.query(function (inResults) {
                inCallback(null, inResults);
            },
            {
                onError: function (inError) {inCallback(inError);},
                index: "modules"
            });
        else inCallback(inError);
    });
}

function remove(inId, inCallback) {
    IDB.getDB(function (inError, db) {
        if(!inError)
            db.remove(inId,
                inCallback(null),
                function (inError) { inCallback(inError);}
            );
        else inCallback(inError);
    });
}

function removeModule(inModuleKey, inCallback) {
    IDB.getDB(function (inError, db) {
        if(!inError) {
            getModules(function (inError, inModules) {
                if(!inError) {
                    var found = false;
                    inModules.forEach(function(mod) {
                        if(mod.moduleKey === inModuleKey) {
                            found = true;
                            var a = (mod.blobIds) ? tools.convertObject(mod.blobIds) : [mod.bcvPosID, mod.nt, mod.ot, mod.id];
                            //Remove undefined values
                            a = a.filter(function(e){return e;});
                            db.removeBatch(a,
                                function() {
                                    if(inCallback) inCallback(null);
                                },
                                function(inError) {
                                    if (inCallback) inCallback(inError);
                                }
                            );
                        }
                    });
                    if(!found)
                        inCallback({message: "Couldn't find the module."});
                } else if(inCallback) inCallback(inError);

            });
        } else if(inCallback) inCallback(inError);
    });
}

function clearDatabase() {
    IDB.getDB(function (inError, db) {
        if(!inError)
            db.clear(
                function () {
                    //console.log("cleared database");
                },
                function (inError) { console.log(inError);}
            );
        else inCallback(inError);
    });
}

function getIDBWrapper () {
    return IDB.getIDBWrapper();
}

function errorHandler(inError, inCallback) {
    console.log(inError, inCallback);
}

var dataMgr = {
	clearDatabase: clearDatabase,
    saveConfig: saveConfig,
    saveModule: saveModule,
    saveBCVPos: saveBCVPos,
    getBlob: getBlob,
    get: get,
    remove: remove,
    removeModule: removeModule,
    getModules: getModules,
    getIDBWrapper: getIDBWrapper
};

module.exports = dataMgr;