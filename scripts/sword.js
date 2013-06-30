define("sword", ["installMgr", "moduleMgr", "dataMgr", "versificationMgr"], function (installMgr, moduleMgr, dataMgr, versificationMgr) {
    var sword = {};
    sword.installMgr = installMgr;
    sword.moduleMgr = moduleMgr;
    sword.versificationMgr = versificationMgr;

    //moduleMgr.getModules(function (inModules) {console.log(inModules);});
    return sword;
});