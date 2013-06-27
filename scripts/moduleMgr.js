define("moduleMgr", ["dataMgr"], function (dataMgr) {
    var moduleMgr = {},
        db = dataMgr.db;

    function mapModules(doc) {
        if(doc.moduleKey)
            emit(doc.moduleKey, doc);
    }

    moduleMgr.getModules = function (inCallback) {
        db.query({map: mapModules}, {reduce: true}, function(inError, inResponse) {
            inCallback((!inError) ? inResponse.rows : []);
        });
    };

    return moduleMgr;
});