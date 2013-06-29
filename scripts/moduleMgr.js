define("moduleMgr", ["dataMgr"], function (dataMgr) {
    var moduleMgr = {},
        db = dataMgr.db;

    function mapModules(doc) {
        if(doc.moduleKey)
            emit(doc.moduleKey, doc);
    }

    function mapBinary(doc) {
        if(doc.modKey)
            emit(doc.modKey, doc);
    }

    moduleMgr.getModules = function (inCallback) {
        db.query({map: mapModules}, {reduce: true}, function(inError, inResponse) {
            inCallback((!inError) ? inResponse.rows : []);
        });
    };

    moduleMgr.getBinary = function (inCallback) {
        db.query({map: mapBinary}, {reduce: false}, function(inError, inResponse) {
            inCallback((!inError) ? inResponse.rows : []);
        });
    };

    return moduleMgr;
});