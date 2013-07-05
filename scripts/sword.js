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

define("sword", ["installMgr", "moduleMgr", "dataMgr", "versificationMgr"],
    function (installMgr, moduleMgr, dataMgr, versificationMgr) {
        var sword = {};
        sword.installMgr = installMgr;
        sword.moduleMgr = moduleMgr;
        sword.versificationMgr = versificationMgr;
        sword.dataMgr = dataMgr;

        moduleMgr.getModules(function (inModules) {
            console.log(inModules);
            if(inModules.length !== 0) {
                inModules[0].renderText("John 1");
            }
        });
        //
        //dataMgr.db.allDocs(function(inErr, inRes) {console.log(inRes);});
        return sword;
});