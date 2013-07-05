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

define("verseKey", ["bcv"], function (bcv) {
    function parseVkey(inVKey) {
        var key = {};
        key.osis = bcv.parse(inVKey).osis();
        var split = key.osis.split(".");

        key.book = split[0];
        key.chapter = parseInt(split[1], 10);
        key.verse = parseInt(split[2], 10);

        return key;
    }

    return {
        parse: parseVkey
    };
});