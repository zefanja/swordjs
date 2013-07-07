/*### BEGIN LICENSE
# Copyright (C) 2013 Stephan Tetzel <info@zefanjas.de>
#
# This program is free software: you can redistribute it and/or modify it
# under the terms of the GNU General Public License version 3, as published
# by the Free Software Foundation.
#
# This program is distributed in the hope that it will be useful, but
# WITHOUT ANY WARRANTY; without even the implied warranties of
# MERCHANTABILITY, SATISFACTORY QUALITY, or FITNESS FOR A PARTICULAR
# PURPOSE.  See the GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License along
# with this program.  If not, see <http://www.gnu.org/licenses/>.
### END LICENSE*/

require.config({
    paths: {
        //"sword": "../sword.min",
        "text": "libs/text/text",
        "json": "libs/json/src/json",
        "async": "libs/async/lib/async",
        "bcv": "libs/bible-reference-parser/js/en_bcv_parser.min",
        "unzip": "libs/zlib/bin/unzip.min",
        //"gunzip": "libs/zlib/bin/gunzip.min",
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
        /*"gunzip": {
            exports: 'Zlib'
        },*/
        "inflateStream": {
            exports: 'Zlib'
        }
    }
});

define("sword", ["installMgr", "moduleMgr", "dataMgr", "versificationMgr"],
    function (installMgr, moduleMgr, dataMgr, versificationMgr) {
        var sword = {};
        sword.installMgr = installMgr;
        sword.moduleMgr = moduleMgr;
        sword.versificationMgr = versificationMgr;
        sword.dataMgr = dataMgr;

        //check if sword is supported in your environment
        sword.isSupported = function () {
            //simple Array forEach check
            var toString = {}.toString,
                EMPTY_ARRAY = [],
                FUNCTION_CLASS = "[object Function]";
            if (window.FileReader && toString.call(EMPTY_ARRAY.forEach) == FUNCTION_CLASS)
                return true;
            else
                return false;
        };

        return sword;
});