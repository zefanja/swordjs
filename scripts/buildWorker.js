({
    baseUrl: ".",
    name: "almond",
    include: ["swordWorker"],
    out: "../swordWorker.min.js",
    has: {
        build: true,
        worker: true
    },
    paths: {
        "text": "libs/text/text",
        "json": "libs/json/src/json",
        "async": "libs/async/lib/async",
        "bcv": "libs/bible-reference-parser/js/en_bcv_parser.min",
        "inflateStream": "libs/zlib/bin/inflate_stream.min",
        "sax": "libs/sax/lib/sax",
        "has": "libs/has/has"
    },
    shim: {
        "bcv": {
            exports: "bcv_parser",
            init: function () {
                return new this.bcv_parser();
            }
        },
        "inflateStream": {
            exports: "Zlib"
        },
        "sax": {
            exports: "sax"
        }
    }
})