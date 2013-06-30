define("versificationMgr", ["libs/json/json!../data/kjv.json"], function (kjv) {
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

    return {
        getBooksInOT: getBooksInOT,
        getBooksInNT: getBooksInNT,
        getChapterMax: getChapterMax,
        getVersesInChapter: getVersesInChapter
    };
});
