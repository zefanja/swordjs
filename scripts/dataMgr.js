define("dataMgr", function () {
    var dataMgr = {};

    //Pouch.destroy('swordjs', function(err, info) {console.log(err, info);});

    //Init PouchDB Database
    var db = new Pouch("swordjs");

    //Read a module's config file and save it as an Object
    function saveConfig(inConfBlob, inCallback) {
        var confReader = new FileReader();
        var configData = {};
        configData["GlobalOptionFilter"] = [];
        configData["Feature"] = [];
        confReader.readAsText(inConfBlob);
        confReader.onload = function(e) {
            var lines = e.target.result.split(/[\r\n]+/g);
            lines.forEach(function(line, index) {
                splittedLine = line.split(/=(.+)/);
                if (splittedLine[0] !== "")
                    if (splittedLine[0].search(/\[.*\]/) !== -1)
                        configData["moduleKey"] = splittedLine[0].replace("[", "").replace("]", "");
                    else
                        if (splittedLine[0] === "GlobalOptionFilter")
                            configData[splittedLine[0]].push(splittedLine[1]);
                        else if (splittedLine[0] === "Feature")
                            configData[splittedLine[0]].push(splittedLine[1]);
                        else
                            configData[splittedLine[0]] = splittedLine[1];
            });

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
    function saveModule(inBlob, inPath) {
        var path = inPath.split("/"),
            driver = path[path.length-3];

        db.post({fileName: path[path.length-1], modKey: path[path.length-2], driver: driver}, function (inError, inDoc) {
            if(!inError) {
                db.putAttachment(inDoc.id + "/binary", driver, inBlob, driver, function(inError, inResponse) {
                    if(inError)
                        console.log(inError);
                });
            } else
                console.log(inError);
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

    return {
        db: db,
        saveConfig: saveConfig,
        saveModule: saveModule,
        saveBCVPos: saveBCVPos
    };
});