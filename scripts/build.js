({
    baseUrl: ".",
    name: "sword",
    out: "../sword.min.js",
    paths: {
        "text": "libs/text/text",
        "json": "libs/json/src/json",
        "async": "libs/async/lib/async",
        "bcv": "libs/bible-reference-parser/js/en_bcv_parser.min",
        "unzip": "libs/zlib/bin/unzip.min",
        "inflateStream": "libs/zlib/bin/inflate_stream.min"

    },
    shim: {
        "bcv": {
            exports: 'bcv_parser',
            init: function () {
                return new this.bcv_parser();
            }
        },
        "pouchdb": {
            exports: 'Pouch'
        },
        "unzip": {
            exports: 'Zlib'
        },
        "inflateStream": {
            exports: 'Zlib'
        }
    }
})