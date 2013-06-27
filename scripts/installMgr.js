define("installMgr", ["dataMgr"], function (dataMgr) {
    var installMgr = {},
        db = dataMgr.db;

    db.getAttachment('829EBA85-0EDC-4A3A-ADC0-B154148D06DE', function(err, res) {
        console.log(err, res);
    });

    function download(url, reponseType, inCallback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = "blob";
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (inCallback) inCallback(xhr.response);
            }
        };
        xhr.send(null);
    }

    //Read a module's config file and save it as an Object
    function saveConfigFile(inConfBlob, inCallback) {
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

            //Save config data to the database
            db.post(configData, function (inError, inDoc) {
                if(!inError)
                    inCallback({id: inDoc.id, rev: inDoc.rev});
                else
                    console.log(inError);
            });
        };
    }

    function saveModule(inUnzip, inDoc, inCallback) {
        console.log(inUnzip.getFilenames(), inDoc);
        var blob = null;
        var filenames = inUnzip.getFilenames();
        filenames.forEach(function (name, index) {
            if(name.search(".conf") === -1) {
                blob = new Blob([inUnzip.decompress(name)]);
                db.putAttachment(inDoc.rev, blob, 'ztext', function(err, res) {
                    console.log(err, res);
                });
            }
        });
    }

    //Get a list of all available repos/sources from CrossWire's masterRepoList.conf
    installMgr.getRepositories = function () {
        download("https://crosswire.org/ftpmirror/pub/sword/masterRepoList.conf", "text", function (inResponse) {
            console.log(inResponse);
        });
    };

    //Install a module. inFile is an ArrayBuffer
    installMgr.installModule = function (inFile) {
        console.log(inFile);
        var blob = null;
        for (var i = 0, f; f = inFile[i]; i++) {
            console.log(escape(f.name), f.type, f.size);

            var zipReader = new FileReader();

            zipReader.onload = (function(file) {
                return function(evt) {
                    var unzip = new Zlib.Unzip(new Uint8Array(evt.target.result));
                    var filenames = unzip.getFilenames();
                    filenames.forEach(function (name, index) {
                        if(name.search(".conf") !== -1) {
                            saveConfigFile(new Blob([unzip.decompress(name)]), function (inRev) {
                                saveModule(unzip, inRev, function () {

                                });
                            });
                        }
                    });
                };
            })(f);
            zipReader.readAsArrayBuffer(f);
        }
    };

    return installMgr;
});