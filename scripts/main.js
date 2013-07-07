require(["sword", "libs/domReady/domReady!"], function (sword, doc) {
    console.log(sword.isSupported());
    /*sword.moduleMgr.getModules(function (inModules) {
        console.log(inModules);
        if(inModules.length !== 0) {
            inModules[0].renderText("John 3:16", function (inText) {
                console.log(inText);
                document.getElementById("out").textContent = inText;
            });
        }
    });*/

    /*sword.installMgr.getRepositories(function (inRepos) {
        console.log(inRepos);
        sword.installMgr.getModules(inRepos[0].confUrl, function(inModules) {
            console.log(inModules);
        });
    });*/

    function handleModuleSelect(evt) {
        sword.installMgr.installModule(evt.target.files[0], function (inError, inId) {
            if(!inError)
                sword.moduleMgr.getModule(inId, function (inError, inModule) {
                    console.log(inError, inModule);
                });
        });
    }

    function clearDatabase (evt) {
        sword.dataMgr.clearDatabase();
    }

    document.getElementById("files").addEventListener('change', handleModuleSelect, false);
    document.getElementById("btnClear").addEventListener('click', clearDatabase, false);
});
