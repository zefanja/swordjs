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

define(["async", "tools", "idbPluginWrapper"], function (async, tools, IDB) {
    var dataMgr = {};

    //get some data by id
    function get(inId, inCallback) {
        IDB(function (db) {
            db.get(inId, function (inResponse) {
                inCallback(null, inResponse);
            },
            function (inError) {inCallback(inError);}
            );
        });
    }

    //Read a module's config file and save it as an Object
    function saveConfig(inConfBlob, inCallback) {
        var confReader = new FileReader();
        confReader.readAsText(inConfBlob);
        confReader.onload = function(e) {
            var configData = tools.readConf(e.target.result);

            //Save config data to the database and continue to build the index
            IDB(function (db) {
                db.put(configData, function (inId) {
                    inCallback(null, {id: inId, modKey: configData.moduleKey, v11n: configData.Versification});
                },
                function (inError) {inCallback(inError);}
                );
            });
        };
    }

    //Save the binary module files like *.bzz
    function saveModule(inFiles, inDoc, inCallback) {
        console.log("saveModule", inFiles, inDoc);
        var z = inFiles.length,
            args = {},
            path = null,
            driver = null;

        args.docId = inDoc.id;

        async.eachSeries(inFiles, function (file, ittCallback) {
            var path = file.name.split("/"),
                driver = path[path.length-3];
            IDB(function (db) {
                db.put({fileName: path[path.length-1], modKey: inDoc.modKey, driver: driver, blob: file.blob},
                    function (inId) {
                        args[path[path.length-1].split(".")[0]] = inId;
                        ittCallback(null);
                    },
                    function (inError) {
                        ittCallback(inError);
                    }
                );
            });
        }, function (inError) {
            if(!inError) updateBinaryIds(args, inCallback);
            else inCallback(inError);
        });
    }

    function updateBinaryIds(inIds, inCallback) {
        //console.log("updateBinaryIds", inIds, inCallback);
        IDB(function (db) {
            db.get(inIds.docId, function (inModule) {
                inModule.nt = inIds.nt;
                inModule.ot = inIds.ot;
                db.put(inModule, function(inResponse) {
                    //console.log("updateBinaryIds", inResponse);
                    inCallback(null);
                },
                function (inError) {inCallback(inError);}
                );
            },
            function (inError) {inCallback(inError);}
            );
        });
    }

    function getBlob(inId, inCallback) {
        IDB(function (db) {
            db.get(inId,
                function (inBlob) {inCallback(null, inBlob.blob);},
                function (inError) {inCallback(inError);}
            );
        });
    }

    function saveBCVPos(inOT, inNT, inDoc, inCallback) {
        IDB(function (db) {
            db.put({
                modKey: inDoc.modKey,
                ot: inOT,
                nt: inNT
            }, function (inPosResId) {
                db.get(inDoc.id, function (inModule) {
                    inModule["bcvPosID"] = inPosResId;
                    db.put(inModule, function(inId) {
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
        });
    }

    function getModules(inCallback) {
        IDB(function (db) {
            db.query(function (inResults) {
                inCallback(null, inResults);
            },
            {
                onError: function (inError) {inCallback(inError);},
                index: "modules"
            });
        });
    }

    function clearDatabase() {
        IDB(function (db) {
            db.clear(function () { console.log("cleared database"); },
                function (inError) { console.log(inError);}
            );
        });
    }

    function errorHandler(inError, inCallback) {
        console.log(inError, inCallback);
    }

    return {
        clearDatabase: clearDatabase,
        saveConfig: saveConfig,
        saveModule: saveModule,
        saveBCVPos: saveBCVPos,
        getBlob: getBlob,
        get: get,
        getModules: getModules
    };
});