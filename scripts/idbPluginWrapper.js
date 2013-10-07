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

define(["idb"], function (IDB) {
    var isInitialized = false,
        db = null;

    return function (inCallback) {
        if (isInitialized) {
            inCallback(null, db);
        } else {
            db = new IDB({
                storeName: "swordjs",
                dbVersion: 4,
                indexes: [
                    {name: "modules", keyPath: "moduleKey", unique: true}
                ],
                onStoreReady: function() {
                    isInitialized = true;
                    inCallback(null, db);
                },
                onError: function(inError) {
                    isInitialized = false;
                    inCallback(inError);
                },
            });
        }
    };
});