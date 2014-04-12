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
        key.osisRef = bcv.parse(inVKey).osis();
        if (key.osisRef === "") {
            //bcv.parse().osis() returns "" for passages it cannot resolve
            key.osisRef = "Matt.1"; //bcv.parse(inVKey + " 1").osis();
        }
        var split = key.osisRef.split("-")[0].split(".");

        key.book = split[0];
        key.chapter = (isNaN(parseInt(split[1], 10))) ? 1 : parseInt(split[1], 10);
        key.verse = parseInt(split[2], 10);
        key.bookNum = versificationMgr.getBookNum(key.book, inV11n);
        //console.log(key, key.osisRef, split);
        return key;
    }

    function parseVerseList(inVKey, inV11n) {
        var verseList = [],
            key = inVKey;
        if (typeof inVKey === "string")
            key = parseVkey(inVKey);

        //Check if we have a passage range like John.3.10-John.3.16 or Gen.3-Gen.4
        if (key.osisRef.search("-") !== -1) {
            var singlePassages = key.osisRef.split("-"),
                start = singlePassages[0].split("."),
                end = singlePassages[1].split(".");

            if(!isNaN(key.verse) && end.length === 3) {
                for (var z=key.verse;z<parseInt(end[2], 10)+1; z++) {
                    verseList.push({osis: key.book+"."+key.chapter+"."+(z), book: key.book, bookNum: bookNum, chapter: key.chapter, verse: z});
                }
            }
        //check if we have a passage like Mt 3 or Ps 123
        } else if (isNaN(key.verse)) {
            var bookNum = versificationMgr.getBookNum(key.book);
            var verseMax = versificationMgr.getVersesInChapter(bookNum, key.chapter, inV11n);
            for (var i=0;i<verseMax; i++) {
                verseList.push({osis: key.book+"."+key.chapter+"."+(i+1), book: key.book, bookNum: bookNum, chapter: key.chapter, verse: i+1});
            }
        } else {
            verseList.push(key);
        }

        return verseList;
    }

    function next(inVKey, inV11n) {
        var key = parseVkey(inVKey, inV11n),
            maxChapter = versificationMgr.getChapterMax(key.bookNum, inV11n);

        if (key.chapter < maxChapter) {
            key.chapter++;
        } else {
            key.bookNum = (key.bookNum < 65) ? ++key.bookNum : 65;
            key.chapter = (key.bookNum < 65) ? 1 : maxChapter;
            key.book = versificationMgr.getBook(key.bookNum, inV11n).abbrev;
        }
        key.osisRef = key.book+"."+key.chapter;

        return key;
    }

    function previous(inVKey, inV11n) {
        var key = parseVkey(inVKey, inV11n),
            maxChapter = versificationMgr.getChapterMax(key.bookNum-1, inV11n);

        if (key.chapter > 1) {
            --key.chapter;
        } else {
            key.chapter = (key.bookNum === 0) ? 1 : maxChapter;
            key.bookNum = (key.bookNum > 0) ? --key.bookNum : 0;
            key.book = versificationMgr.getBook(key.bookNum, inV11n).abbrev;
        }
        key.osisRef = key.book+"."+key.chapter;

        return key;
    }

    return {
        parse: parseVkey,
        parseVerseList: parseVerseList,
        next: next,
        previous: previous
    };
});