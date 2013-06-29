define("sword", ["installMgr", "moduleMgr", "dataMgr", "versificationMgr"], function (installMgr, moduleMgr, dataMgr, versificationMgr) {
    var sword = {};
    sword.installMgr = installMgr;
    sword.moduleMgr = moduleMgr;
    sword.versificationMgr = versificationMgr;

    moduleMgr.getModules(function (inModules) {console.log(inModules);});
    /*moduleMgr.getBinary(function (inModules) {
        console.log(inModules);
        inModules.forEach(function (module, idx) {
            if(module.value.fileName.search("ot.bzz") !== -1) {
                console.log(module);
                dataMgr.db.getAttachment(module.id+"/binary", module.value.driver, function (inError, inReponse) {
                    console.log(inError, inReponse);
                    var blob = inReponse.slice(0, 10000);
                    console.log(blob);

                    var reader = new FileReader();
                    var inflator = new Zlib.InflateStream();

                    // If we use onloadend, we need to check the readyState.
                    reader.onloadend = function(evt) {
                        if (evt.target.readyState == FileReader.DONE) { // DONE == 2
                            //console.log("RESULT:", new Uint8Array(evt.target.result));

                            var inflated = inflator.decompress(new Uint8Array(evt.target.result));
                            console.log(inflated);
                            var resultBlob = new Blob([inflated]);
                            console.log("rBlob", resultBlob);
                            var f = new FileReader();

                            f.readAsText(resultBlob);
                            f.onload = function(e) {
                                console.log(e.target.result);
                            };
                        }
                    };

                    reader.readAsArrayBuffer(blob);
                });
            }

        });

    }); */

    return sword;
});