define("sword", ["installMgr", "moduleMgr", "dataMgr", "versificationMgr"], function (installMgr, moduleMgr, dataMgr, versificationMgr) {
    var sword = {};
    sword.installMgr = installMgr;
    sword.moduleMgr = moduleMgr;
    sword.versificationMgr = versificationMgr;

    moduleMgr.getModules(function (inModules) {console.log(inModules);});
    //moduleMgr.getBinary(function (inModules) {console.log(inModules);});
    //dataMgr.db.allDocs(function(inErr, inRes) {console.log(inRes);});
    return sword;
});