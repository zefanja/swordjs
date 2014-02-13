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

define(["dataMgr", "swmodule"], function (dataMgr, Module) {
    var moduleMgr = {};

    moduleMgr.getModules = function (inCallback) {
        var modules = [];
        dataMgr.getModules(function (inError, inModules) {
            if(!inError) {
                inModules.forEach(function (mod) {
                    modules.push(new Module(mod.moduleKey, mod.id, {
                        id: mod.id,
                        Versification: mod.Versification,
                        Encoding: mod.Encoding,
                        Direction: mod.Direction,
                        SourceType: mod.SourceType,
                        bcvPosID: mod.bcvPosID,
                        //blobIds: mod.blobIds,
                        ot: mod.ot,
                        nt: mod.nt,
                        moduleKey: mod.moduleKey
                    }));
                });
                inCallback(null, modules);
            } else
                inCallback(inError);
        });
    };

    moduleMgr.getModule = function(inId, inCallback) {
        dataMgr.get(inId, function (inError, inMod) {
            if(!inError) inCallback(null, new Module(inMod.moduleKey, inId, inMod));
            else inCallback(null);
        });
    };

    return moduleMgr;
});