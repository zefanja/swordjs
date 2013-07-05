require(["sword","libs/domReady/domReady!"], function (sword, doc) {
    window.sword = sword;

    function handleModuleSelect(evt) {
        sword.installMgr.installModule(evt.target.files);
    }

    function clearDatabase (evt) {
        sword.dataMgr.clearDatabase();
    }

    document.getElementById("files").addEventListener('change', handleModuleSelect, false);
    document.getElementById("btnClear").addEventListener('click', clearDatabase, false);
});
