require(["sword","libs/domReady/domReady!"], function (sword, doc) {
    //window.sword = sword;

    sword.moduleMgr.getModules(function (inModules) {
        console.log(inModules);
        if(inModules.length !== 0) {
            inModules[0].renderText("John 3:16", function (inText) {
                console.log(inText);
                document.getElementById("out").textContent = inText;
            });
        }
    });

    function handleModuleSelect(evt) {
        sword.installMgr.installModule(evt.target.files);
    }

    function clearDatabase (evt) {
        sword.dataMgr.clearDatabase();
    }

    document.getElementById("files").addEventListener('change', handleModuleSelect, false);
    document.getElementById("btnClear").addEventListener('click', clearDatabase, false);
});
