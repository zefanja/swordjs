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

define("moduleMgr", ["dataMgr", "swmodule"], function (dataMgr, Module) {
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
        var modules = [];
        db.query({map: mapModules}, {reduce: true}, function(inError, inResponse) {
            if(!inError) {
                inResponse.rows.forEach(function (mod) {
                    modules.push(new Module(mod.key, mod.id, mod.value));
                });
                inCallback(modules);
            }
        });
    };

    moduleMgr.getBinary = function (inCallback) {
        db.query({map: mapBinary}, {reduce: false}, function(inError, inResponse) {
            inCallback((!inError) ? inResponse.rows : []);
        });
    };

    return moduleMgr;
});