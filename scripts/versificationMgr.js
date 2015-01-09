'use strict';

var dataMgr = require("./dataMgr");
var kjv = require("../data/kjv.json");
var german = require("../data/german.json");
var vulg = require("../data/vulg.json");

var versificationMgr = {};

versificationMgr.kjv = kjv;
german["nt"] = kjv.nt;
german["osisToBookNum"] = kjv.osisToBookNum;
versificationMgr.german = german;
versificationMgr.vulg = vulg;

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

function getChapterMax (inBookNum, v11n) {
    inBookNum = (inBookNum < 0) ? 0 : inBookNum;
    var booksOT = getBooksInOT(v11n);
    var testament = (inBookNum < booksOT) ? "ot" : "nt";
    inBookNum = (inBookNum < booksOT) ? inBookNum : inBookNum - booksOT;
    if (v11n !== undefined && versificationMgr[v11n])
        return versificationMgr[v11n][testament][inBookNum].maxChapter;
    else
        return versificationMgr.kjv[testament][inBookNum].maxChapter;
}

function getVersesInChapter (inBookNum, inChapter, v11n) {
    if (v11n !== undefined && versificationMgr[v11n])
        return versificationMgr[v11n].versesInChapter[inBookNum][parseInt(inChapter, 10)-1];
    else
        return versificationMgr.kjv.versesInChapter[inBookNum][parseInt(inChapter, 10)-1];
}

function getBook(inBookNum, v11n) {
    inBookNum = (inBookNum < 0) ? 0 : inBookNum;
    var booksOT = getBooksInOT(v11n);
    var testament = (inBookNum < booksOT) ? "ot" : "nt";
    inBookNum = (inBookNum < booksOT) ? inBookNum : inBookNum - booksOT;
    if (v11n !== undefined && versificationMgr[v11n])
        return versificationMgr[v11n][testament][inBookNum];
    else
        return versificationMgr.kjv[testament][inBookNum];
}

function getBookNum(inOsis, v11n) {
    //console.log(inOsis, v11n, versificationMgr.kjv.osisToBookNum[inOsis]);
    if (v11n !== undefined && versificationMgr[v11n])
        return versificationMgr[v11n].osisToBookNum[inOsis];
    else
        return versificationMgr.kjv.osisToBookNum[inOsis];
}

function getAllBooks(inId, v11n, inCallback) {
    var books = [];
    /*if (v11n !== undefined && versificationMgr[v11n]) {
        books.push.apply(books, versificationMgr[v11n].ot);
        books.push.apply(books, versificationMgr[v11n].nt);
    } else {
        books.push.apply(books, versificationMgr.kjv.ot);
        books.push.apply(books, versificationMgr.kjv.nt);
    }
    return books;*/
    var v11nData = (v11n && versificationMgr[v11n]) ? versificationMgr[v11n] : versificationMgr.kjv;
    dataMgr.get(inId, function (inError, inResult) {
        if(!inError) {
            if(inResult.hasOwnProperty("ot")) {
                var bnOt = 0;
                for (var otBook in inResult.ot) {
                    bnOt = inResult.ot[otBook][0].booknum;
                    v11nData.ot[bnOt]["bookNum"] = bnOt;
                    books.push(v11nData.ot[bnOt]);
                }
            }
            if(inResult.hasOwnProperty("nt")) {
                var booksMax = getBooksInOT(v11n),
                    bnNt = 0;
                for (var ntBook in inResult.nt) {
                    bnNt = inResult.nt[ntBook][0].booknum-booksMax;
                    v11nData.nt[bnNt]["bookNum"] = bnNt+booksMax;
                    books.push(v11nData.nt[bnNt]);
                }
            }
            if (inCallback) inCallback(null, books);
        } else {
            if (inCallback) inCallback(inError);
        }
    });
}

module.exports = {
    getBooksInOT: getBooksInOT,
    getBooksInNT: getBooksInNT,
    getChapterMax: getChapterMax,
    getVersesInChapter: getVersesInChapter,
    getBook: getBook,
    getBookNum: getBookNum,
    getAllBooks: getAllBooks
};