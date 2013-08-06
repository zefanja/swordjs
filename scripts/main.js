require(["sword"], function (sword) {
    window.sword = sword;
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

    sword.installMgr.getRepositories(function (inError, inRepos) {
        console.log(inError, inRepos);
        sword.installMgr.getModules(inRepos[3], function(inError, inModules) {
            console.log(inError, inModules);
            /*sword.installMgr.installModule(inModules[11].url, function (inError, inId) {
                console.log("installModule", inError, inId);
            });*/
        });
    });

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

    function getText() {
        //console.log(document.getElementById("passageInput").value);
        sword.moduleMgr.getModules(function (inError, inModules) {
        console.log(inModules);
        if(inModules.length !== 0) {
            inModules[0].renderText(document.getElementById("passageInput").value, /*{footnotes: true, oneVersePerLine: true},*/ function (inError, inText) {
                //console.log(inError, inText);
                document.getElementById("out").innerHTML = inText;
            });
        } else {
            document.getElementById("out").innerHTML = "No modules installed";
        }
    });

    }

    document.getElementById("files").addEventListener('change', handleModuleSelect, false);
    document.getElementById("btnClear").addEventListener('click', clearDatabase, false);
    document.getElementById("btnPassage").addEventListener('click', getText, false);
});