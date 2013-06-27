define("sword", ["installMgr", "moduleMgr"], function (installMgr, moduleMgr) {
    var sword = {};
    sword.installMgr = installMgr;
    sword.moduleMgr = moduleMgr;

    moduleMgr.getModules(function (inModules) {
        console.log(inModules);
    });

    return sword;
});