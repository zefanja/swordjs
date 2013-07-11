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

define(["bcv", "versificationMgr"], function (bcv, versificationMgr) {
    function parseVkey(inVKey, inV11n) {
        var key = {};
        key.osis = bcv.parse(inVKey).osis();
        if (key.osis === "") {
            //bcv.parse().osis() returns "" for passages it cannot resolve
            key.osis = "Matt.1"; //bcv.parse(inVKey + " 1").osis();
        }
        var split = key.osis.split("-")[0].split(".");

        key.book = split[0];
        key.chapter = (isNaN(parseInt(split[1], 10))) ? 1 : parseInt(split[1], 10);
        key.verse = parseInt(split[2], 10);
        console.log(key, key.osis, split);
        return key;
    }

    function parseVerseList(inVKey, inV11n) {
        var verseList = [],
            key = inVKey;
        if (typeof inVKey === "string")
            key = parseVkey(inVKey);

        //Check if we have a passage range like John.3.10-John.3.16 or Gen.3-Gen.4
        if (key.osis.split("-").length > 1) {

        //check if we have a passage like Mt 3 or Ps 123
        } else if (isNaN(key.verse)) {
            var bookNum = versificationMgr.getBookNum(key.book);
            for (var i=0;i<versificationMgr.getVersesInChapter(bookNum, key.chapter-1, inV11n); i++) {
                verseList.push({osis: key.book+"."+key.chapter+"."+(i+1), book: key.book, bookNum: bookNum, chapter: key.chapter, verse: i+1});
            }
        } else {
            verseList.push(key);
        }

        return verseList;
    }

    return {
        parse: parseVkey,
        parseVerseList: parseVerseList
    };
});