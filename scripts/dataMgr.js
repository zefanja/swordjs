define("dataMgr", function () {
    var dataMgr = {};

    Pouch.destroy('swordjs', function(err, info) {console.log(err, info);});

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
                    inCallback(configData.Versification, {id: inDoc.id, rev: inDoc.rev});
            });
        };
    }

    //Save the binary module files like *.bzz
    function saveModule(inBlob, inPath, inDoc) {
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

    return {
        db: db,
        saveConfig: saveConfig,
        saveModule: saveModule
    };
});