var IDB = require("idb-wrapper");

var isInitialized = false,
    db = null;

function getDB (inCallback) {
    if (isInitialized) {
        inCallback(null, db);
    } else {
        db = new IDB({
            storeName: "swordjs",
            dbVersion: 4,
            autoIncrement: true,
            indexes: [
                {name: "modules", keyPath: "moduleKey", unique: true}
            ],
            onStoreReady: function() {
                isInitialized = true;
                if(inCallback) inCallback(null, db);
            },
            onError: function(inError) {
                isInitialized = false;
                if(inCallback) inCallback(inError);
            },
        });
    }
}

function getIDBWrapper () {
    return IDB;
}

var idbPluginWrapper = {
    getDB: getDB,
    getIDBWrapper: getIDBWrapper
};

module.exports = idbPluginWrapper;