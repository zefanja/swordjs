define("dataMgr", function () {
    var dataMgr = {};

    //Pouch.destroy('swordjs', function(err, info) {console.log(err, info);});

    //Init PouchDB Database
    dataMgr.db = new Pouch("swordjs");


    return dataMgr;
});