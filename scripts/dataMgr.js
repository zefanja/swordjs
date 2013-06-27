define("dataMgr", function () {
    var dataMgr = {};
    //Init PouchDB Database
    dataMgr.db = new Pouch("swordjs");

    return dataMgr;
});