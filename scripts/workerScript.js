importScripts("./libs/require/require.js");
require.config({
    paths: {
        //"sword": "../sword.min",
        "text": "libs/text/text",
        "json": "libs/json/src/json",
        "async": "libs/async/lib/async",
        "bcv": "libs/bible-reference-parser/js/en_bcv_parser.min",
        "unzip": "libs/zlib/bin/unzip.min",
        "inflateStream": "libs/zlib/bin/inflate_stream.min",
        "sax": "libs/sax/lib/sax",
        "idb": "libs/IDBWrapper/idbstore.min"

    },
    shim: {
        "bcv": {
            exports: "bcv_parser",
            init: function () {
                return new this.bcv_parser();
            }
        },
        "unzip": {
            exports: "Zlib"
        },
        "inflateStream": {
            exports: "Zlib"
        },
        "sax": {
            exports: "sax"
        }
    }
});

function getRawEntry(inBlob, bcvPos, vList, inEncoding, inIntro) {
    requirejs(["zText"], function(zText) {
        zText.getRawEntry(inBlob, bcvPos, vList, inEncoding, inIntro, function (inError, inRaw) {
            if(!inError)
                postMessage(inRaw);
            else
                throw inError;
        });
    });
}

function processText(inRaw, inSource, inDirection, inOptions) {
    requirejs(["filterMgr"], function (filterMgr) {
        postMessage({"result": filterMgr.processText(inRaw, inSource, inDirection, inOptions), "cmd": "processText"});
    });
}

self.addEventListener('message', function(e) {
    var data = e.data;
    switch (data.cmd) {
        case "getRawEntry":
            getRawEntry(data.blob, data.bcvPos, data.vList, data.encoding, data.intro);
        break;
        case "processText":
            processText(data.raw, data.source, data.direction, data.options);
        break;
        default:
            self.postMessage('Unknown command: ' + data.msg);
    }
}, false);
