({
    baseUrl: ".",
    name: "almond",
    include: ['sword'],
    optimize: "none",
    out: "../sword.min.js",
    wrap: {
        startFile: 'start.frag',
        endFile: 'end.frag'
    },
    has: {
        build: true,
        worker: false
    },
    paths: {
        "text": "libs/text/text",
        "json": "libs/json/src/json",
        "async": "libs/async/lib/async",
        "bcv": "libs/bible-reference-parser/js/en_bcv_parser.min",
        "unzip": "libs/zlib/bin/unzip.min",
        "inflateStream": "libs/zlib/bin/inflate_stream.min",
        "sax": "libs/sax/lib/sax",
        "idb": "libs/IDBWrapper/idbstore.min",
        "has": "libs/has/has"
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
})