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

define(["libs/json/src/json!../data/kjv.json"], function (kjv) {
    var versificationMgr = {};

    versificationMgr.kjv = kjv;

    function getBooksInOT (v11n) {
        if (v11n !== undefined && versificationMgr[v11n])
            return versificationMgr[v11n].ot.length;
        else
            return versificationMgr.kjv.ot.length;
    }

    function getBooksInNT (v11n) {
        if (v11n !== undefined && versificationMgr[v11n])
            return versificationMgr[v11n].nt.length;
        else
            return versificationMgr.kjv.nt.length;
    }

    function getChapterMax (inBook, v11n) {
        var booksOT = getBooksInOT(v11n);
        var testament = (inBook < booksOT) ? "ot" : "nt";
        inBook = (inBook < booksOT) ? inBook : inBook - booksOT;
        if (v11n !== undefined && versificationMgr[v11n])
            return versificationMgr[v11n][testament][inBook].maxChapter;
        else
            return versificationMgr.kjv[testament][inBook].maxChapter;
    }

    function getVersesInChapter (inBook, inChapter, v11n) {
        if (v11n !== undefined && versificationMgr[v11n])
            return versificationMgr[v11n].versesInChapter[inBook][inChapter];
        else
            return versificationMgr.kjv.versesInChapter[inBook][inChapter];
    }

    function getBook(inBook, v11n) {
        var booksOT = getBooksInOT(v11n);
        var testament = (inBook < booksOT) ? "ot" : "nt";
        inBook = (inBook < booksOT) ? inBook : inBook - booksOT;
        if (v11n !== undefined && versificationMgr[v11n])
            return versificationMgr[v11n][testament][inBook];
        else
            return versificationMgr.kjv[testament][inBook];
    }

    return {
        getBooksInOT: getBooksInOT,
        getBooksInNT: getBooksInNT,
        getChapterMax: getChapterMax,
        getVersesInChapter: getVersesInChapter,
        getBook: getBook
    };
});
