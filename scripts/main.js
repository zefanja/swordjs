require(["sword","libs/domReady/domReady!"], function (sword, doc) {
    window.sword = sword;

    function handleModuleSelect(evt) {
        sword.installMgr.installModule(evt.target.files);
    }

    document.getElementById("files").addEventListener('change', handleModuleSelect, false);
});
