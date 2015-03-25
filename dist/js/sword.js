(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./scripts/main.js":[function(require,module,exports){
'use strict';

var sword = require("./sword");

function handleModuleSelect(evt) {
    sword.installMgr.installModule(evt.target.files[0], function (inError, inId) {
        if(!inError)
        	console.log("Installed");
            /*sword.moduleMgr.getModule(inId, function (inError, inModule) {
                console.log(inModule);
                document.getElementById("out").innerHTML = "Installed Module: " + inModule.modKey;
            });*/
        else
            console.log("ERROR Installing Module", inError);
    });
}

function clearDatabase (evt) {
    sword.dataMgr.clearDatabase();
}

function removeModule(evt) {
    sword.installMgr.removeModule("SBLGNT", function (inError) {
        console.log(inError);
        if(!inError)
            console.log("Removed Module");
    });
}

function getText() {
    //console.log(document.getElementById("passageInput").value);
    sword.moduleMgr.getModules(function (inError, inModules) {
        if(inModules.length !== 0) {
            console.log(inModules);
            inModules[0].renderText(document.getElementById("passageInput").value, {
                footnotes: false,
                crossReferences: true,
                oneVersePerLine: true,
                headings: true,
                wordsOfChristInRed: true,
                intro: true,
                array: false
            }, function (inError, inResult) {
                console.log(inError, inResult);
                document.getElementById("out").innerHTML = inResult.text;
                if(inResult.footnotes)
                    for (var key in inResult.footnotes) {
                        document.getElementById("notes").innerHTML += inResult.footnotes[key][0].note + "<br><br>";
                    }
            });
        } else {
            document.getElementById("out").innerHTML = "No modules installed";
        }
    });
}

function next() {
    console.log(sword.verseKey.next(document.getElementById("passageInput").value));
    document.getElementById("out").innerHTML = sword.verseKey.next(document.getElementById("passageInput").value);
}

function prev() {
    console.log(sword.verseKey.previous(document.getElementById("passageInput").value));
    document.getElementById("out").innerHTML = sword.verseKey.previous(document.getElementById("passageInput").value);
}

function worker () {
    sword.moduleMgr.getModules(function (inError, inModules) {
        if(inModules.length !== 0) {
            inModules[0].getAllBooks(function (inError, inResult) {
                console.log(inError, inResult);
            });
        } else {
            document.getElementById("out").innerHTML = "No modules installed";
        }
    });
}

document.getElementById("files").addEventListener('change', handleModuleSelect, false);
document.getElementById("btnClear").addEventListener('click', clearDatabase, false);
document.getElementById("btnRemove").addEventListener('click', removeModule, false);
document.getElementById("btnPassage").addEventListener('click', getText, false);
document.getElementById("btnNext").addEventListener('click', next, false);
document.getElementById("btnPrev").addEventListener('click', prev, false);
document.getElementById("btnWorker").addEventListener('click', worker, false);
},{"./sword":"/home/zefanja/Projekte/common-sword/scripts/sword.js"}],"/home/zefanja/Projekte/common-sword/data/german.json":[function(require,module,exports){
module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports={
"ot": [
    {"name": "Genesis", "abbrev": "Gen", "maxChapter": 50},
    {"name": "Exodus", "abbrev": "Exod", "maxChapter": 40},
    {"name": "Leviticus", "abbrev": "Lev", "maxChapter": 27},
    {"name": "Numbers", "abbrev": "Num", "maxChapter": 36},
    {"name": "Deuteronomy", "abbrev": "Deut", "maxChapter": 34},
    {"name": "Joshua", "abbrev": "Josh", "maxChapter": 24},
    {"name": "Judges", "abbrev": "Judg", "maxChapter": 21},
    {"name": "Ruth", "abbrev": "Ruth", "maxChapter": 4},
    {"name": "I Samuel", "abbrev": "1Sam", "maxChapter": 31},
    {"name": "II Samuel", "abbrev": "2Sam", "maxChapter": 24},
    {"name": "I Kings", "abbrev": "1Kgs", "maxChapter": 22},
    {"name": "II Kings", "abbrev": "2Kgs", "maxChapter": 25},
    {"name": "I Chronicles", "abbrev": "1Chr", "maxChapter": 29},
    {"name": "II Chronicles", "abbrev": "2Chr", "maxChapter": 36},
    {"name": "Ezra", "abbrev": "Ezra", "maxChapter": 10},
    {"name": "Nehemiah", "abbrev": "Neh", "maxChapter": 13},
    {"name": "Esther", "abbrev": "Esth", "maxChapter": 10},
    {"name": "Job", "abbrev": "Job", "maxChapter": 42},
    {"name": "Psalms", "abbrev": "Ps", "maxChapter": 150},
    {"name": "Proverbs", "abbrev": "Prov", "maxChapter": 31},
    {"name": "Ecclesiastes", "abbrev": "Eccl", "maxChapter": 12},
    {"name": "Song of Solomon", "abbrev": "Song", "maxChapter": 8},
    {"name": "Isaiah", "abbrev": "Isa", "maxChapter": 66},
    {"name": "Jeremiah", "abbrev": "Jer", "maxChapter": 52},
    {"name": "Lamentations", "abbrev": "Lam", "maxChapter": 5},
    {"name": "Ezekiel", "abbrev": "Ezek", "maxChapter": 48},
    {"name": "Daniel", "abbrev": "Dan", "maxChapter": 12},
    {"name": "Hosea", "abbrev": "Hos", "maxChapter": 14},
    {"name": "Joel", "abbrev": "Joel", "maxChapter": 4},
    {"name": "Amos", "abbrev": "Amos", "maxChapter": 9},
    {"name": "Obadiah", "abbrev": "Obad", "maxChapter": 1},
    {"name": "Jonah", "abbrev": "Jonah", "maxChapter": 4},
    {"name": "Micah", "abbrev": "Mic", "maxChapter": 7},
    {"name": "Nahum", "abbrev": "Nah", "maxChapter": 3},
    {"name": "Habakkuk", "abbrev": "Hab", "maxChapter": 3},
    {"name": "Zephaniah", "abbrev": "Zeph", "maxChapter": 3},
    {"name": "Haggai", "abbrev": "Hag", "maxChapter": 2},
    {"name": "Zechariah", "abbrev": "Zech", "maxChapter": 14},
    {"name": "Malachi", "abbrev": "Mal", "maxChapter": 3}
],
"versesInChapter": [
    [31, 25, 24, 26, 32, 22, 24, 22, 29, 32, 32, 20, 18, 24, 21, 16, 27, 33, 38, 18, 34, 24, 20, 67, 34, 35, 46, 22, 35, 43, 54, 33, 20, 31, 29, 43, 36, 30, 23, 23, 57, 38, 34, 34, 28, 34, 31, 22, 33, 26],

    [22, 25, 22, 31, 23, 30, 29, 28, 35, 29, 10, 51, 22, 31, 27, 36, 16, 27, 25, 26, 37, 30, 33, 18, 40, 37, 21, 43, 46, 38, 18, 35, 23, 35, 35, 38, 29, 31, 43, 38],

    [17, 16, 17, 35, 26, 23, 38, 36, 24, 20, 47, 8, 59, 57, 33, 34, 16, 30, 37, 27, 24, 33, 44, 23, 55, 46, 34],

    [54, 34, 51, 49, 31, 27, 89, 26, 23, 36, 35, 16, 33, 45, 41, 35, 28, 32, 22, 29, 35, 41, 30, 25, 19, 65, 23, 31, 39, 17, 54, 42, 56, 29, 34, 13],

    [46, 37, 29, 49, 33, 25, 26, 20, 29, 22, 32, 31, 19, 29, 23, 22, 20, 22, 21, 20, 23, 29, 26, 22, 19, 19, 26, 69, 28, 20, 30, 52, 29, 12],

    [18, 24, 17, 24, 15, 27, 26, 35, 27, 43, 23, 24, 33, 15, 63, 10, 18, 28, 51, 9, 45, 34, 16, 33],

    [36, 23, 31, 24, 31, 40, 25, 35, 57, 18, 40, 15, 25, 20, 20, 31, 13, 31, 30, 48, 25],

    [22, 23, 18, 22],

    [28, 36, 21, 22, 12, 21, 17, 22, 27, 27, 15, 25, 23, 52, 35, 23, 58, 30, 24, 42, 16, 23, 28, 23, 44, 25, 12, 25, 11, 31, 13],

    [27, 32, 39, 12, 25, 23, 29, 18, 13, 19, 27, 31, 39, 33, 37, 23, 29, 32, 44, 26, 22, 51, 39, 25],

    [53, 46, 28, 20, 32, 38, 51, 66, 28, 29, 43, 33, 34, 31, 34, 34, 24, 46, 21, 43, 29, 54],

    [18, 25, 27, 44, 27, 33, 20, 29, 37, 36, 20, 22, 25, 29, 39, 20, 41, 37, 37, 21, 26, 20, 37, 20, 30],

    [54, 55, 24, 43, 41, 66, 40, 40, 44, 14, 47, 41, 14, 17, 29, 43, 27, 17, 19, 8, 30, 19, 32, 31, 31, 32, 34, 21, 30],

    [18, 17, 17, 22, 14, 42, 22, 18, 31, 19, 23, 16, 23, 14, 19, 14, 19, 34, 11, 37, 20, 12, 21, 27, 28, 23, 9, 27, 36, 27, 21, 33, 25, 33, 27, 23],

    [11, 70, 13, 24, 17, 22, 28, 36, 15, 44],

    [11, 20, 38, 17, 19, 19, 73, 18, 37, 40, 36, 47, 31],

    [22, 23, 15, 17, 14, 14, 10, 17, 32, 3],

    [22, 13, 26, 21, 27, 30, 21, 22, 35, 22, 20, 25, 28, 22, 35, 22, 16, 21, 29, 29, 34, 30, 17, 25, 6, 14, 23, 28, 25, 31, 40, 22, 33, 37, 16, 33, 24, 41, 30, 32, 26, 17],

    [6, 12, 9, 9, 13, 11, 18, 10, 21, 18, 7, 9, 6, 7, 5, 11, 15, 51, 15, 10, 14, 32, 6, 10, 22, 12, 14, 9, 11, 13, 25, 11, 22, 23, 28, 13, 40, 23, 14, 18, 14, 12, 5, 27, 18, 12, 10, 15, 21, 23, 21, 11, 7, 9, 24, 14, 12, 12, 18, 14, 9, 13, 12, 11, 14, 20, 8, 36, 37, 6, 24, 20, 28, 23, 11, 13, 21, 72, 13, 20, 17, 8, 19, 13, 14, 17, 7, 19, 53, 17, 16, 16, 5, 23, 11, 13, 12, 9, 9, 5, 8, 29, 22, 35, 45, 48, 43, 14, 31, 7, 10, 10, 9, 8, 18, 19, 2, 29, 176, 7, 8, 9, 4, 8, 5, 6, 5, 6, 8, 8, 3, 18, 3, 3, 21, 26, 9, 8, 24, 14, 10, 8, 12, 15, 21, 10, 20, 14, 9, 6],

    [33, 22, 35, 27, 23, 35, 27, 36, 18, 32, 31, 28, 25, 35, 33, 33, 28, 24, 29, 30, 31, 29, 35, 34, 28, 28, 27, 28, 27, 33, 31],

    [18, 26, 22, 17, 19, 12, 29, 17, 18, 20, 10, 14],

    [17, 17, 11, 16, 16, 12, 14, 14],

    [31, 22, 26, 6, 30, 13, 25, 23, 20, 34, 16, 6, 22, 32, 9, 14, 14, 7, 25, 6, 17, 25, 18, 23, 12, 21, 13, 29, 24, 33, 9, 20, 24, 17, 10, 22, 38, 22, 8, 31, 29, 25, 28, 28, 25, 13, 15, 22, 26, 11, 23, 15, 12, 17, 13, 12, 21, 14, 21, 22, 11, 12, 19, 11, 25, 24],

    [19, 37, 25, 31, 31, 30, 34, 23, 25, 25, 23, 17, 27, 22, 21, 21, 27, 23, 15, 18, 14, 30, 40, 10, 38, 24, 22, 17, 32, 24, 40, 44, 26, 22, 19, 32, 21, 28, 18, 16, 18, 22, 13, 30, 5, 28, 7, 47, 39, 46, 64, 34],

    [22, 22, 66, 22, 22],

    [28, 10, 27, 17, 17, 14, 27, 18, 11, 22, 25, 28, 23, 23, 8, 63, 24, 32, 14, 44, 37, 31, 49, 27, 17, 21, 36, 26, 21, 26, 18, 32, 33, 31, 15, 38, 28, 23, 29, 49, 26, 20, 27, 31, 25, 24, 23, 35],

    [21, 49, 33, 34, 30, 29, 28, 27, 27, 21, 45, 13],

    [9, 25, 5, 19, 15, 11, 16, 14, 17, 15, 11, 15, 15, 10],

    [20, 27, 5, 21],

    [15, 16, 15, 13, 27, 14, 17, 14, 15],

    [21],

    [16, 11, 10, 11],

    [16, 13, 12, 14, 14, 16, 20],

    [14, 14, 19],

    [17, 20, 19],

    [18, 15, 20],

    [15, 23],

    [17, 17, 10, 14, 11, 15, 14, 23, 17, 12, 17, 14, 9, 21],

    [14, 17, 24],

    [25, 23, 17, 25, 48, 34, 29, 34, 38, 42, 30, 50, 58, 36, 39, 28, 27, 35, 30, 34, 46, 46, 39, 51, 46, 75, 66, 20],

    [45, 28, 35, 41, 43, 56, 37, 38, 50, 52, 33, 44, 37, 72, 47, 20],

    [80, 52, 38, 44, 39, 49, 50, 56, 62, 42, 54, 59, 35, 35, 32, 31, 37, 43, 48, 47, 38, 71, 56, 53],

    [51, 25, 36, 54, 47, 71, 53, 59, 41, 42, 57, 50, 38, 31, 27, 33, 26, 40, 42, 31, 25],

    [26, 47, 26, 37, 42, 15, 60, 40, 43, 48, 30, 25, 52, 28, 41, 40, 34, 28, 40, 38, 40, 30, 35, 27, 27, 32, 44, 31],

    [32, 29, 31, 25, 21, 23, 25, 39, 33, 21, 36, 21, 14, 23, 33, 27],

    [31, 16, 23, 21, 13, 20, 40, 13, 27, 33, 34, 31, 13, 40, 58, 24],

    [24, 17, 18, 18, 21, 18, 16, 24, 15, 18, 33, 21, 13],

    [24, 21, 29, 31, 26, 18],

    [23, 22, 21, 32, 33, 24],

    [30, 30, 21, 23],

    [29, 23, 25, 18],

    [10, 20, 13, 18, 28],

    [12, 17, 18],

    [20, 15, 16, 16, 25, 21],

    [18, 26, 17, 22],

    [16, 15, 15],

    [25],

    [14, 18, 19, 16, 14, 20, 28, 13, 28, 39, 40, 29, 25],

    [27, 26, 18, 17, 20],

    [25, 25, 22, 19, 14],

    [21, 22, 18],

    [10, 29, 24, 21, 21],

    [13],

    [15],

    [25],

    [20, 29, 22, 11, 14, 17, 17, 13, 21, 11, 19, 18, 18, 20, 8, 21, 18, 24, 21, 15, 27, 21]
]
}

},{}],"/home/zefanja/Projekte/common-sword/data/kjv.json":[function(require,module,exports){
module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports={
"ot": [
    {"name": "Genesis", "abbrev": "Gen", "maxChapter": 50},
    {"name": "Exodus", "abbrev": "Exod", "maxChapter": 40},
    {"name": "Leviticus", "abbrev": "Lev", "maxChapter": 27},
    {"name": "Numbers", "abbrev": "Num", "maxChapter": 36},
    {"name": "Deuteronomy", "abbrev": "Deut", "maxChapter": 34},
    {"name": "Joshua", "abbrev": "Josh", "maxChapter": 24},
    {"name": "Judges", "abbrev": "Judg", "maxChapter": 21},
    {"name": "Ruth", "abbrev": "Ruth", "maxChapter": 4},
    {"name": "I Samuel", "abbrev": "1Sam", "maxChapter": 31},
    {"name": "II Samuel", "abbrev": "2Sam", "maxChapter": 24},
    {"name": "I Kings", "abbrev": "1Kgs", "maxChapter": 22},
    {"name": "II Kings", "abbrev": "2Kgs", "maxChapter": 25},
    {"name": "I Chronicles", "abbrev": "1Chr", "maxChapter": 29},
    {"name": "II Chronicles", "abbrev": "2Chr", "maxChapter": 36},
    {"name": "Ezra", "abbrev": "Ezra", "maxChapter": 10},
    {"name": "Nehemiah", "abbrev": "Neh", "maxChapter": 13},
    {"name": "Esther", "abbrev": "Esth", "maxChapter": 10},
    {"name": "Job", "abbrev": "Job", "maxChapter": 42},
    {"name": "Psalms", "abbrev": "Ps", "maxChapter": 150},
    {"name": "Proverbs", "abbrev": "Prov", "maxChapter": 31},
    {"name": "Ecclesiastes", "abbrev": "Eccl", "maxChapter": 12},
    {"name": "Song of Solomon", "abbrev": "Song", "maxChapter": 8},
    {"name": "Isaiah", "abbrev": "Isa", "maxChapter": 66},
    {"name": "Jeremiah", "abbrev": "Jer", "maxChapter": 52},
    {"name": "Lamentations", "abbrev": "Lam", "maxChapter": 5},
    {"name": "Ezekiel", "abbrev": "Ezek", "maxChapter": 48},
    {"name": "Daniel", "abbrev": "Dan", "maxChapter": 12},
    {"name": "Hosea", "abbrev": "Hos", "maxChapter": 14},
    {"name": "Joel", "abbrev": "Joel", "maxChapter": 3},
    {"name": "Amos", "abbrev": "Amos", "maxChapter": 9},
    {"name": "Obadiah", "abbrev": "Obad", "maxChapter": 1},
    {"name": "Jonah", "abbrev": "Jonah", "maxChapter": 4},
    {"name": "Micah", "abbrev": "Mic", "maxChapter": 7},
    {"name": "Nahum", "abbrev": "Nah", "maxChapter": 3},
    {"name": "Habakkuk", "abbrev": "Hab", "maxChapter": 3},
    {"name": "Zephaniah", "abbrev": "Zeph", "maxChapter": 3},
    {"name": "Haggai", "abbrev": "Hag", "maxChapter": 2},
    {"name": "Zechariah", "abbrev": "Zech", "maxChapter": 14},
    {"name": "Malachi", "abbrev": "Mal", "maxChapter": 4}
],
"nt": [
    {"name": "Matthew", "abbrev": "Matt", "maxChapter": 28},
    {"name": "Mark", "abbrev": "Mark", "maxChapter": 16},
    {"name": "Luke", "abbrev": "Luke", "maxChapter": 24},
    {"name": "John", "abbrev": "John", "maxChapter": 21},
    {"name": "Acts", "abbrev": "Acts", "maxChapter": 28},
    {"name": "Romans", "abbrev": "Rom", "maxChapter": 16},
    {"name": "I Corinthians", "abbrev": "1Cor", "maxChapter": 16},
    {"name": "II Corinthians", "abbrev": "2Cor", "maxChapter": 13},
    {"name": "Galatians", "abbrev": "Gal", "maxChapter": 6},
    {"name": "Ephesians", "abbrev": "Eph", "maxChapter": 6},
    {"name": "Philippians", "abbrev": "Phil", "maxChapter": 4},
    {"name": "Colossians", "abbrev": "Col", "maxChapter": 4},
    {"name": "I Thessalonians", "abbrev": "1Thess", "maxChapter": 5},
    {"name": "II Thessalonians", "abbrev": "2Thess", "maxChapter": 3},
    {"name": "I Timothy", "abbrev": "1Tim", "maxChapter": 6},
    {"name": "II Timothy", "abbrev": "2Tim", "maxChapter": 4},
    {"name": "Titus", "abbrev": "Titus", "maxChapter": 3},
    {"name": "Philemon", "abbrev": "Phlm", "maxChapter": 1},
    {"name": "Hebrews", "abbrev": "Heb", "maxChapter": 13},
    {"name": "James", "abbrev": "Jas", "maxChapter": 5},
    {"name": "I Peter", "abbrev": "1Pet", "maxChapter": 5},
    {"name": "II Peter", "abbrev": "2Pet", "maxChapter": 3},
    {"name": "I John", "abbrev": "1John", "maxChapter": 5},
    {"name": "II John", "abbrev": "2John", "maxChapter": 1},
    {"name": "III John", "abbrev": "3John", "maxChapter": 1},
    {"name": "Jude", "abbrev": "Jude", "maxChapter": 1},
    {"name": "Revelation of John", "abbrev": "Rev", "maxChapter": 22}
],
"osisToBookNum": {
    "Gen"   : 0,
    "Exod"  : 1,
    "Lev"   : 2,
    "Num"   : 3,
    "Deut"  : 4,
    "Josh"  : 5,
    "Judg"  : 6,
    "Ruth"  : 7,
    "1Sam"  : 8,
    "2Sam"  : 9,
    "1Kgs"  : 10,
    "2Kgs"  : 11,
    "1Chr"  : 12,
    "2Chr"  : 13,
    "Ezra"  : 14,
    "Neh"   : 15,
    "Esth"  : 16,
    "Job"   : 17,
    "Ps"    : 18,
    "Prov"  : 19,
    "Eccl"  : 20,
    "Song"  : 21,
    "Isa"   : 22,
    "Jer"   : 23,
    "Lam"   : 24,
    "Ezek"  : 25,
    "Dan"   : 26,
    "Hos"   : 27,
    "Joel"  : 28,
    "Amos"  : 29,
    "Obad"  : 30,
    "Jonah" : 31,
    "Mic"   : 32,
    "Nah"   : 33,
    "Hab"   : 34,
    "Zeph"  : 35,
    "Hag"   : 36,
    "Zech"  : 37,
    "Mal"   : 38,
    "Matt"  : 39,
    "Mark"  : 40,
    "Luke"  : 41,
    "John"  : 42,
    "Acts"  : 43,
    "Rom"   : 44,
    "1Cor"  : 45,
    "2Cor"  : 46,
    "Gal"   : 47,
    "Eph"   : 48,
    "Phil"  : 49,
    "Col"   : 50,
    "1Thess"    : 51,
    "2Thess"    : 52,
    "1Tim"  : 53,
    "2Tim"  : 54,
    "Titus" : 55,
    "Phlm"  : 56,
    "Heb"   : 57,
    "Jas"   : 58,
    "1Pet"  : 59,
    "2Pet"  : 60,
    "1John" : 61,
    "2John" : 62,
    "3John" : 63,
    "Jude"  : 64,
    "Rev"   : 65
},
"versesInChapter": [
    [31, 25, 24, 26, 32, 22, 24, 22, 29, 32, 32, 20, 18, 24, 21, 16, 27, 33, 38,
    18, 34, 24, 20, 67, 34, 35, 46, 22, 35, 43, 55, 32, 20, 31, 29, 43, 36,
    30, 23, 23, 57, 38, 34, 34, 28, 34, 31, 22, 33, 26],

    [22, 25, 22, 31, 23, 30, 25, 32, 35, 29, 10, 51, 22, 31, 27, 36, 16, 27, 25,
    26, 36, 31, 33, 18, 40, 37, 21, 43, 46, 38, 18, 35, 23, 35, 35, 38, 29,
    31, 43, 38],

    [17, 16, 17, 35, 19, 30, 38, 36, 24, 20, 47, 8, 59, 57, 33, 34, 16, 30, 37,
    27, 24, 33, 44, 23, 55, 46, 34],

    [54, 34, 51, 49, 31, 27, 89, 26, 23, 36, 35, 16, 33, 45, 41, 50, 13, 32, 22,
    29, 35, 41, 30, 25, 18, 65, 23, 31, 40, 16, 54, 42, 56, 29, 34, 13],

    [46, 37, 29, 49, 33, 25, 26, 20, 29, 22, 32, 32, 18, 29, 23, 22, 20, 22, 21,
    20, 23, 30, 25, 22, 19, 19, 26, 68, 29, 20, 30, 52, 29, 12],

    [18, 24, 17, 24, 15, 27, 26, 35, 27, 43, 23, 24, 33, 15, 63, 10, 18, 28, 51,
    9, 45, 34, 16, 33],

    [36, 23, 31, 24, 31, 40, 25, 35, 57, 18, 40, 15, 25, 20, 20, 31, 13, 31, 30,
    48, 25],

    [22, 23, 18, 22],

    [28, 36, 21, 22, 12, 21, 17, 22, 27, 27, 15, 25, 23, 52, 35, 23, 58, 30, 24,
    42, 15, 23, 29, 22, 44, 25, 12, 25, 11, 31, 13],

    [27, 32, 39, 12, 25, 23, 29, 18, 13, 19, 27, 31, 39, 33, 37, 23, 29, 33, 43,
    26, 22, 51, 39, 25],

    [53, 46, 28, 34, 18, 38, 51, 66, 28, 29, 43, 33, 34, 31, 34, 34, 24, 46, 21,
    43, 29, 53],

    [18, 25, 27, 44, 27, 33, 20, 29, 37, 36, 21, 21, 25, 29, 38, 20, 41, 37, 37,
    21, 26, 20, 37, 20, 30],

    [54, 55, 24, 43, 26, 81, 40, 40, 44, 14, 47, 40, 14, 17, 29, 43, 27, 17, 19,
    8, 30, 19, 32, 31, 31, 32, 34, 21, 30],

    [17, 18, 17, 22, 14, 42, 22, 18, 31, 19, 23, 16, 22, 15, 19, 14, 19, 34, 11,
    37, 20, 12, 21, 27, 28, 23, 9, 27, 36, 27, 21, 33, 25, 33, 27, 23],

    [11, 70, 13, 24, 17, 22, 28, 36, 15, 44],

    [11, 20, 32, 23, 19, 19, 73, 18, 38, 39, 36, 47, 31],

    [22, 23, 15, 17, 14, 14, 10, 17, 32, 3],

    [22, 13, 26, 21, 27, 30, 21, 22, 35, 22, 20, 25, 28, 22, 35, 22, 16, 21, 29,
    29, 34, 30, 17, 25, 6, 14, 23, 28, 25, 31, 40, 22, 33, 37, 16, 33, 24, 41,
    30, 24, 34, 17],

    [6, 12, 8, 8, 12, 10, 17, 9, 20, 18, 7, 8, 6, 7, 5, 11, 15, 50, 14, 9, 13,
    31, 6, 10, 22, 12, 14, 9, 11, 12, 24, 11, 22, 22, 28, 12, 40, 22, 13, 17,
    13, 11, 5, 26, 17, 11, 9, 14, 20, 23, 19, 9, 6, 7, 23, 13, 11, 11, 17, 12,
    8, 12, 11, 10, 13, 20, 7, 35, 36, 5, 24, 20, 28, 23, 10, 12, 20, 72, 13,
    19, 16, 8, 18, 12, 13, 17, 7, 18, 52, 17, 16, 15, 5, 23, 11, 13, 12, 9, 9,
    5, 8, 28, 22, 35, 45, 48, 43, 13, 31, 7, 10, 10, 9, 8, 18, 19, 2, 29, 176,
    7, 8, 9, 4, 8, 5, 6, 5, 6, 8, 8, 3, 18, 3, 3, 21, 26, 9, 8, 24, 13, 10, 7,
    12, 15, 21, 10, 20, 14, 9, 6],

    [33, 22, 35, 27, 23, 35, 27, 36, 18, 32, 31, 28, 25, 35, 33, 33, 28, 24, 29,
    30, 31, 29, 35, 34, 28, 28, 27, 28, 27, 33, 31],

    [18, 26, 22, 16, 20, 12, 29, 17, 18, 20, 10, 14],

    [17, 17, 11, 16, 16, 13, 13, 14],

    [31, 22, 26, 6, 30, 13, 25, 22, 21, 34, 16, 6, 22, 32, 9, 14, 14, 7, 25, 6,
    17, 25, 18, 23, 12, 21, 13, 29, 24, 33, 9, 20, 24, 17, 10, 22, 38, 22, 8,
    31, 29, 25, 28, 28, 25, 13, 15, 22, 26, 11, 23, 15, 12, 17, 13, 12, 21,
    14, 21, 22, 11, 12, 19, 12, 25, 24],

    [19, 37, 25, 31, 31, 30, 34, 22, 26, 25, 23, 17, 27, 22, 21, 21, 27, 23, 15,
    18, 14, 30, 40, 10, 38, 24, 22, 17, 32, 24, 40, 44, 26, 22, 19, 32, 21,
    28, 18, 16, 18, 22, 13, 30, 5, 28, 7, 47, 39, 46, 64, 34],

    [22, 22, 66, 22, 22],

    [28, 10, 27, 17, 17, 14, 27, 18, 11, 22, 25, 28, 23, 23, 8, 63, 24, 32, 14,
    49, 32, 31, 49, 27, 17, 21, 36, 26, 21, 26, 18, 32, 33, 31, 15, 38, 28,
    23, 29, 49, 26, 20, 27, 31, 25, 24, 23, 35],

    [21, 49, 30, 37, 31, 28, 28, 27, 27, 21, 45, 13],

    [11, 23, 5, 19, 15, 11, 16, 14, 17, 15, 12, 14, 16, 9],

    [20, 32, 21],

    [15, 16, 15, 13, 27, 14, 17, 14, 15],

    [21],

    [17, 10, 10, 11],

    [16, 13, 12, 13, 15, 16, 20],

    [15, 13, 19],

    [17, 20, 19],

    [18, 15, 20],

    [15, 23],

    [21, 13, 10, 14, 11, 15, 14, 23, 17, 12, 17, 14, 9, 21],

    [14, 17, 18, 6],

    [25, 23, 17, 25, 48, 34, 29, 34, 38, 42, 30, 50, 58, 36, 39, 28, 27, 35, 30,
    34, 46, 46, 39, 51, 46, 75, 66, 20],

    [45, 28, 35, 41, 43, 56, 37, 38, 50, 52, 33, 44, 37, 72, 47, 20],

    [80, 52, 38, 44, 39, 49, 50, 56, 62, 42, 54, 59, 35, 35, 32, 31, 37, 43, 48,
    47, 38, 71, 56, 53],

    [51, 25, 36, 54, 47, 71, 53, 59, 41, 42, 57, 50, 38, 31, 27, 33, 26, 40, 42,
    31, 25],

    [26, 47, 26, 37, 42, 15, 60, 40, 43, 48, 30, 25, 52, 28, 41, 40, 34, 28, 41,
    38, 40, 30, 35, 27, 27, 32, 44, 31],

    [32, 29, 31, 25, 21, 23, 25, 39, 33, 21, 36, 21, 14, 23, 33, 27],

    [31, 16, 23, 21, 13, 20, 40, 13, 27, 33, 34, 31, 13, 40, 58, 24],

    [24, 17, 18, 18, 21, 18, 16, 24, 15, 18, 33, 21, 14],

    [24, 21, 29, 31, 26, 18],

    [23, 22, 21, 32, 33, 24],

    [30, 30, 21, 23],

    [29, 23, 25, 18],

    [10, 20, 13, 18, 28],

    [12, 17, 18],

    [20, 15, 16, 16, 25, 21],

    [18, 26, 17, 22],

    [16, 15, 15],

    [25],

    [14, 18, 19, 16, 14, 20, 28, 13, 28, 39, 40, 29, 25],

    [27, 26, 18, 17, 20],

    [25, 25, 22, 19, 14],

    [21, 22, 18],

    [10, 29, 24, 21, 21],

    [13],

    [14],

    [25],

    [20, 29, 22, 11, 14, 17, 17, 13, 21, 11, 19, 17, 18, 20, 8, 21, 18, 24, 21,
    15, 27, 21]
]
}
},{}],"/home/zefanja/Projekte/common-sword/data/vulg.json":[function(require,module,exports){
module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports={
"ot": [
  {"name": "Genesis", "abbrev": "Gen", "maxChapter": 50},
  {"name": "Exodus", "abbrev": "Exod", "maxChapter": 40},
  {"name": "Leviticus", "abbrev": "Lev", "maxChapter": 27},
  {"name": "Numbers", "abbrev": "Num", "maxChapter": 36},
  {"name": "Deuteronomy", "abbrev": "Deut", "maxChapter": 34},
  {"name": "Joshua", "abbrev": "Josh", "maxChapter": 24},
  {"name": "Judges", "abbrev": "Judg", "maxChapter": 21},
  {"name": "Ruth", "abbrev": "Ruth", "maxChapter": 4},
  {"name": "I Samuel", "abbrev": "1Sam", "maxChapter": 31},
  {"name": "II Samuel", "abbrev": "2Sam", "maxChapter": 24},
  {"name": "I Kings", "abbrev": "1Kgs", "maxChapter": 22},
  {"name": "II Kings", "abbrev": "2Kgs", "maxChapter": 25},
  {"name": "I Chronicles", "abbrev": "1Chr", "maxChapter": 29},
  {"name": "II Chronicles", "abbrev": "2Chr", "maxChapter": 36},
  {"name": "Ezra", "abbrev": "Ezra", "maxChapter": 10},
  {"name": "Nehemiah", "abbrev": "Neh", "maxChapter": 13},
  {"name": "Tobit", "abbrev": "Tob", "maxChapter": 14},
  {"name": "Judith", "abbrev": "Jdt", "maxChapter": 16},
  {"name": "Esther", "abbrev": "Esth", "maxChapter": 16},
  {"name": "Job", "abbrev": "Job", "maxChapter": 42},
  {"name": "Psalms", "abbrev": "Ps", "maxChapter": 150},
  {"name": "Proverbs", "abbrev": "Prov", "maxChapter": 31},
  {"name": "Ecclesiastes", "abbrev": "Eccl", "maxChapter": 12},
  {"name": "Song of Solomon", "abbrev": "Song", "maxChapter": 8},
  {"name": "Wisdom", "abbrev": "Wis", "maxChapter": 19},
  {"name": "Sirach", "abbrev": "Sir", "maxChapter": 51},
  {"name": "Isaiah", "abbrev": "Isa", "maxChapter": 66},
  {"name": "Jeremiah", "abbrev": "Jer", "maxChapter": 52},
  {"name": "Lamentations", "abbrev": "Lam", "maxChapter": 5},
  {"name": "Baruch", "abbrev": "Bar", "maxChapter": 6},
  {"name": "Ezekiel", "abbrev": "Ezek", "maxChapter": 48},
  {"name": "Daniel", "abbrev": "Dan", "maxChapter": 14},
  {"name": "Hosea", "abbrev": "Hos", "maxChapter": 14},
  {"name": "Joel", "abbrev": "Joel", "maxChapter": 3},
  {"name": "Amos", "abbrev": "Amos", "maxChapter": 9},
  {"name": "Obadiah", "abbrev": "Obad", "maxChapter": 1},
  {"name": "Jonah", "abbrev": "Jonah", "maxChapter": 4},
  {"name": "Micah", "abbrev": "Mic", "maxChapter": 7},
  {"name": "Nahum", "abbrev": "Nah", "maxChapter": 3},
  {"name": "Habakkuk", "abbrev": "Hab", "maxChapter": 3},
  {"name": "Zephaniah", "abbrev": "Zeph", "maxChapter": 3},
  {"name": "Haggai", "abbrev": "Hag", "maxChapter": 2},
  {"name": "Zechariah", "abbrev": "Zech", "maxChapter": 14},
  {"name": "Malachi", "abbrev": "Mal", "maxChapter": 4},
  {"name": "I Maccabees", "abbrev": "1Macc", "maxChapter": 16},
  {"name": "II Maccabees", "abbrev": "2Macc", "maxChapter": 15}
],
"nt": [
  {"name": "Matthew", "abbrev": "Matt", "maxChapter": 28},
  {"name": "Mark", "abbrev": "Mark", "maxChapter": 16},
  {"name": "Luke", "abbrev": "Luke", "maxChapter": 24},
  {"name": "John", "abbrev": "John", "maxChapter": 21},
  {"name": "Acts", "abbrev": "Acts", "maxChapter": 28},
  {"name": "Romans", "abbrev": "Rom", "maxChapter": 16},
  {"name": "I Corinthians", "abbrev": "1Cor", "maxChapter": 16},
  {"name": "II Corinthians", "abbrev": "2Cor", "maxChapter": 13},
  {"name": "Galatians", "abbrev": "Gal", "maxChapter": 6},
  {"name": "Ephesians", "abbrev": "Eph", "maxChapter": 6},
  {"name": "Philippians", "abbrev": "Phil", "maxChapter": 4},
  {"name": "Colossians", "abbrev": "Col", "maxChapter": 4},
  {"name": "I Thessalonians", "abbrev": "1Thess", "maxChapter": 5},
  {"name": "II Thessalonians", "abbrev": "2Thess", "maxChapter": 3},
  {"name": "I Timothy", "abbrev": "1Tim", "maxChapter": 6},
  {"name": "II Timothy", "abbrev": "2Tim", "maxChapter": 4},
  {"name": "Titus", "abbrev": "Titus", "maxChapter": 3},
  {"name": "Philemon", "abbrev": "Phlm", "maxChapter": 1},
  {"name": "Hebrews", "abbrev": "Heb", "maxChapter": 13},
  {"name": "James", "abbrev": "Jas", "maxChapter": 5},
  {"name": "I Peter", "abbrev": "1Pet", "maxChapter": 5},
  {"name": "II Peter", "abbrev": "2Pet", "maxChapter": 3},
  {"name": "I John", "abbrev": "1John", "maxChapter": 5},
  {"name": "II John", "abbrev": "2John", "maxChapter": 1},
  {"name": "III John", "abbrev": "3John", "maxChapter": 1},
  {"name": "Jude", "abbrev": "Jude", "maxChapter": 1},
  {"name": "Revelation of John", "abbrev": "Rev", "maxChapter": 22},
  {"name": "Prayer of Manasses", "abbrev": "PrMan", "maxChapter": 1},
  {"name": "I Esdras", "abbrev": "1Esd", "maxChapter": 9},
  {"name": "II Esdras", "abbrev": "2Esd", "maxChapter": 16},
  {"name": "Additional Psalm", "abbrev": "AddPs", "maxChapter": 1},
  {"name": "Laodiceans", "abbrev": "EpLao", "maxChapter": 1}
],
"osisToBookNum": {
  "Gen"   : 0,
  "Exod"  : 1,
  "Lev"   : 2,
  "Num"   : 3,
  "Deut"  : 4,
  "Josh"  : 5,
  "Judg"  : 6,
  "Ruth"  : 7,
  "1Sam"  : 8,
  "2Sam"  : 9,
  "1Kgs"  : 10,
  "2Kgs"  : 11,
  "1Chr"  : 12,
  "2Chr"  : 13,
  "Ezra"  : 14,
  "Neh"   : 15,
  "Tob"   : 16,
  "Jdt"   : 17,
  "Esth"  : 18,
  "Job"   : 19,
  "Ps"    : 20,
  "Prov"  : 21,
  "Eccl"  : 22,
  "Song"  : 23,
  "Wis"   : 24,
  "Sir"   : 25,
  "Isa"   : 26,
  "Jer"   : 27,
  "Lam"   : 28,
  "Bar"   : 29,
  "Ezek"  : 30,
  "Dan"   : 31,
  "Hos"   : 32,
  "Joel"  : 33,
  "Amos"  : 34,
  "Obad"  : 35,
  "Jonah" : 36,
  "Mic"   : 37,
  "Nah"   : 38,
  "Hab"   : 39,
  "Zeph"  : 40,
  "Hag"   : 41,
  "Zech"  : 42,
  "Mal"   : 43,
  "1Macc" : 44,
  "2Macc" : 45,
  "Matt"  : 46,
  "Mark"  : 47,
  "Luke"  : 48,
  "John"  : 49,
  "Acts"  : 50,
  "Rom"   : 51,
  "1Cor"  : 52,
  "2Cor"  : 53,
  "Gal"   : 54,
  "Eph"   : 55,
  "Phil"  : 56,
  "Col"   : 57,
  "1Thess": 58,
  "2Thess": 59,
  "1Tim"  : 60,
  "2Tim"  : 61,
  "Titus" : 62,
  "Phlm"  : 63,
  "Heb"   : 64,
  "Jas"   : 65,
  "1Pet"  : 66,
  "2Pet"  : 67,
  "1John" : 68,
  "2John" : 69,
  "3John" : 70,
  "Jude"  : 71,
  "Rev"   : 72,
  "PrMan" : 73,
  "1Esd"  : 74,
  "2Esd"  : 75,
  "AddPs" : 76,
  "EpLao" : 77
},
"versesInChapter": [
  [31, 25, 24, 26, 31, 22, 24, 22, 29, 32, 32, 20, 18, 24, 21, 16, 27, 33, 38, 18, 34, 24, 20, 67, 34, 35, 46, 22, 35, 43, 55, 32, 20, 31, 29, 43, 36, 30, 23, 23, 57, 38, 34, 34, 28, 34, 31, 22, 32, 25],

  [22, 25, 22, 31, 23, 30, 25, 32, 35, 29, 10, 51, 22, 31, 27, 36, 16, 27, 25, 26, 36, 31, 33, 18, 40, 37, 21, 43, 46, 38, 18, 35, 23, 35, 35, 38, 29, 31, 43, 36],

  [17, 16, 17, 35, 19, 30, 38, 36, 24, 20, 47, 8, 59, 57, 33, 34, 16, 30, 37, 27, 24, 33, 44, 23, 55, 45, 34],

  [54, 34, 51, 49, 31, 27, 89, 26, 23, 36, 34, 15, 34, 45, 41, 50, 13, 32, 22, 30, 35, 41, 30, 25, 18, 65, 23, 31, 39, 17, 54, 42, 56, 29, 34, 13],

  [46, 37, 29, 49, 33, 25, 26, 20, 29, 22, 32, 32, 18, 29, 23, 22, 20, 22, 21, 20, 23, 30, 25, 22, 19, 19, 26, 68, 29, 20, 30, 52, 29, 12],

  [18, 24, 17, 25, 16, 27, 26, 35, 27, 43, 23, 24, 33, 15, 63, 10, 18, 28, 51, 9, 43, 34, 16, 33],

  [36, 23, 31, 24, 32, 40, 25, 35, 57, 18, 40, 15, 25, 20, 20, 31, 13, 31, 30, 48, 24],

  [22, 23, 18, 22],

  [28, 36, 21, 22, 12, 21, 17, 22, 27, 27, 15, 25, 23, 52, 35, 23, 58, 30, 24, 43, 15, 23, 28, 23, 44, 25, 12, 25, 11, 31, 13],

  [27, 32, 39, 12, 25, 23, 29, 18, 13, 19, 27, 31, 39, 33, 37, 23, 29, 33, 43, 26, 22, 51, 39, 25],

  [53, 46, 28, 34, 18, 38, 51, 66, 28, 29, 43, 33, 34, 31, 34, 34, 24, 46, 21, 43, 29, 54],

  [18, 25, 27, 44, 27, 33, 20, 29, 37, 36, 21, 21, 25, 29, 38, 20, 41, 37, 37, 21, 26, 20, 37, 20, 30],

  [54, 55, 24, 43, 26, 81, 40, 40, 44, 14, 46, 40, 14, 17, 29, 43, 27, 17, 19, 7, 30, 19, 32, 31, 31, 32, 34, 21, 30],

  [17, 18, 17, 22, 14, 42, 22, 18, 31, 19, 23, 16, 22, 15, 19, 14, 19, 34, 11, 37, 20, 12, 21, 27, 28, 23, 9, 27, 36, 27, 21, 33, 25, 33, 27, 23],

  [11, 70, 13, 24, 17, 22, 28, 36, 15, 44],

  [11, 20, 31, 23, 19, 19, 73, 18, 38, 39, 36, 46, 31],

  [25, 23, 25, 23, 28, 22, 20, 24, 12, 13, 21, 22, 23, 17],

  [12, 18, 15, 17, 29, 21, 25, 34, 19, 20, 21, 20, 31, 18, 15, 31],

  [22, 23, 15, 17, 14, 14, 10, 17, 32, 13, 12, 6, 18, 19, 19, 24],

  [22, 13, 26, 21, 27, 30, 21, 22, 35, 22, 20, 25, 28, 22, 35, 23, 16, 21, 29, 29, 34, 30, 17, 25, 6, 14, 23, 28, 25, 31, 40, 22, 33, 37, 16, 33, 24, 41, 35, 28, 25, 16],

  [6, 13, 9, 10, 13, 11, 18, 10, 39, 8, 9, 6, 7, 5, 11, 15, 51, 15, 10, 14, 32, 6, 10, 22, 12, 14, 9, 11, 13, 25, 11, 22, 23, 28, 13, 40, 23, 14, 18, 14, 12, 6, 26, 18, 12, 10, 15, 21, 23, 21, 11, 7, 9, 24, 13, 12, 12, 18, 14, 9, 13, 12, 11, 14, 20, 8, 36, 37, 6, 24, 20, 28, 23, 11, 13, 21, 72, 13, 20, 17, 8, 19, 13, 14, 17, 7, 19, 53, 17, 16, 16, 5, 23, 11, 13, 12, 9, 9, 5, 8, 29, 22, 35, 45, 48, 43, 14, 31, 7, 10, 10, 9, 26, 9, 10, 2, 29, 176, 7, 8, 9, 4, 8, 5, 7, 5, 6, 8, 8, 3, 18, 3, 3, 21, 27, 9, 8, 24, 14, 10, 8, 12, 15, 21, 10, 11, 9, 14, 9, 6],

  [33, 22, 35, 27, 23, 35, 27, 36, 18, 32, 31, 28, 25, 35, 33, 33, 28, 24, 29, 30, 31, 29, 35, 34, 28, 28, 27, 28, 27, 33, 31],

  [18, 26, 22, 17, 19, 11, 30, 17, 18, 20, 10, 14],

  [16, 17, 11, 16, 17, 12, 13, 14],

  [16, 25, 19, 20, 24, 27, 30, 21, 19, 21, 27, 27, 19, 31, 19, 29, 20, 25, 20],

  [40, 23, 34, 36, 18, 37, 40, 22, 25, 34, 36, 19, 32, 27, 22, 31, 31, 33, 28, 33, 31, 33, 38, 47, 36, 28, 33, 30, 35, 27, 42, 28, 33, 31, 26, 28, 34, 39, 41, 32, 28, 26, 37, 27, 31, 23, 31, 28, 19, 31, 38],

  [31, 22, 26, 6, 30, 13, 25, 22, 21, 34, 16, 6, 22, 32, 9, 14, 14, 7, 25, 6, 17, 25, 18, 23, 12, 21, 13, 29, 24, 33, 9, 20, 24, 17, 10, 22, 38, 22, 8, 31, 29, 25, 28, 28, 26, 13, 15, 22, 26, 11, 23, 15, 12, 17, 13, 12, 21, 14, 21, 22, 11, 12, 19, 12, 25, 24],

  [19, 37, 25, 31, 31, 30, 34, 22, 26, 25, 23, 17, 27, 22, 21, 21, 27, 23, 15, 18, 14, 30, 40, 10, 38, 24, 22, 17, 32, 24, 40, 44, 26, 22, 19, 32, 20, 28, 18, 16, 18, 22, 13, 30, 5, 28, 7, 47, 39, 46, 64, 34],

  [22, 22, 66, 22, 22],

  [22, 35, 38, 37, 9, 72],

  [28, 9, 27, 17, 17, 14, 27, 18, 11, 22, 25, 28, 23, 23, 8, 63, 24, 32, 14, 49, 32, 31, 49, 27, 17, 21, 36, 26, 21, 26, 18, 32, 33, 31, 15, 38, 28, 23, 29, 49, 26, 20, 27, 31, 25, 24, 23, 35],

  [21, 49, 100, 34, 31, 28, 28, 27, 27, 21, 45, 13, 65, 42],

  [11, 24, 5, 19, 15, 11, 16, 14, 17, 15, 12, 14, 15, 10],

  [20, 32, 21],

  [15, 16, 15, 13, 27, 15, 17, 14, 15],

  [21],

  [16, 11, 10, 11],

  [16, 13, 12, 13, 14, 16, 20],

  [15, 13, 19],

  [17, 20, 19],

  [18, 15, 20],

  [14, 24],

  [21, 13, 10, 14, 11, 15, 14, 23, 17, 12, 17, 14, 9, 21],

  [14, 17, 18, 6],

  [67, 70, 60, 61, 68, 63, 50, 32, 73, 89, 74, 54, 54, 49, 41, 24],

  [36, 33, 40, 50, 27, 31, 42, 36, 29, 38, 38, 46, 26, 46, 40],

  [25, 23, 17, 25, 48, 34, 29, 34, 38, 42, 30, 50, 58, 36, 39, 28, 26, 35, 30, 34, 46, 46, 39, 51, 46, 75, 66, 20],

  [45, 28, 35, 40, 43, 56, 37, 39, 49, 52, 33, 44, 37, 72, 47, 20],

  [80, 52, 38, 44, 39, 49, 50, 56, 62, 42, 54, 59, 35, 35, 32, 31, 37, 43, 48, 47, 38, 71, 56, 53],

  [51, 25, 36, 54, 47, 72, 53, 59, 41, 42, 57, 50, 38, 31, 27, 33, 26, 40, 42, 31, 25],

  [26, 47, 26, 37, 42, 15, 59, 40, 43, 48, 30, 25, 52, 27, 41, 40, 34, 28, 40, 38, 40, 30, 35, 27, 27, 32, 44, 31],

  [32, 29, 31, 25, 21, 23, 25, 39, 33, 21, 36, 21, 14, 23, 33, 27],

  [31, 16, 23, 21, 13, 20, 40, 13, 27, 33, 34, 31, 13, 40, 58, 24],

  [24, 17, 18, 18, 21, 18, 16, 24, 15, 18, 33, 21, 13],

  [24, 21, 29, 31, 26, 18],

  [23, 22, 21, 32, 33, 24],

  [30, 30, 21, 23],

  [29, 23, 25, 18],

  [10, 20, 13, 18, 28],

  [12, 17, 18],

  [20, 15, 16, 16, 25, 21],

  [18, 26, 17, 22],

  [16, 15, 15],

  [25],

  [14, 18, 19, 16, 14, 20, 28, 13, 28, 39, 40, 29, 25],

  [27, 26, 18, 17, 20],

  [25, 25, 22, 19, 14],

  [21, 22, 18],

  [10, 29, 24, 21, 21],

  [13],

  [15],

  [25],

  [20, 29, 22, 11, 14, 17, 17, 13, 21, 11, 19, 18, 18, 20, 8, 21, 18, 24, 21, 15, 27, 21],

  [15],

  [58, 31, 24, 63, 73, 34, 15, 97, 56],

  [40, 48, 36, 52, 56, 59, 140, 63, 47, 60, 46, 51, 58, 48, 63, 78],

  [7],

  [20]
]}
},{}],"/home/zefanja/Projekte/common-sword/libs/bcv/js/en_bcv_parser.min.js":[function(require,module,exports){
(function (global){
;__browserify_shim_require__=require;(function browserifyShim(module, exports, require, define, browserify_shim__define__module__export__) {
(function(){var g,ja,u,G={}.hasOwnProperty;this.bcv_parser=g=function(){function n(){var a,c,d;this.options={};c=n.prototype.options;for(a in c)G.call(c,a)&&(d=c[a],this.options[a]=d);this.versification_system(this.options.versification_system)}n.prototype.s="";n.prototype.entities=[];n.prototype.passage=null;n.prototype.regexps={};n.prototype.options={consecutive_combination_strategy:"combine",osis_compaction_strategy:"b",book_sequence_strategy:"ignore",invalid_sequence_strategy:"ignore",sequence_combination_strategy:"combine",
invalid_passage_strategy:"ignore",non_latin_digits_strategy:"ignore",passage_existence_strategy:"bcv",zero_chapter_strategy:"error",zero_verse_strategy:"error",book_alone_strategy:"ignore",book_range_strategy:"ignore",captive_end_digits_strategy:"delete",end_range_digits_strategy:"verse",include_apocrypha:!1,ps151_strategy:"c",versification_system:"default",case_sensitive:"none"};n.prototype.parse=function(a){var c;this.reset();this.s=a;a=this.replace_control_characters(a);c=this.match_books(a);a=
c[0];this.passage.books=c[1];this.entities=this.match_passages(a)[0];return this};n.prototype.parse_with_context=function(a,c){var d;this.reset();d=this.match_books(this.replace_control_characters(c));c=d[0];this.passage.books=d[1];c=this.match_passages(c)[1];this.reset();this.s=a;a=this.replace_control_characters(a);d=this.match_books(a);a=d[0];this.passage.books=d[1];this.passage.books.push({value:"",parsed:[],start_index:0,type:"context",context:c});a="\u001f"+(this.passage.books.length-1)+"/9\u001f"+
a;this.entities=this.match_passages(a)[0];return this};n.prototype.reset=function(){this.s="";this.entities=[];if(this.passage)return this.passage.books=[],this.passage.indices={};this.passage=new ja;this.passage.options=this.options;return this.passage.translations=this.translations};n.prototype.set_options=function(a){var c,d;for(c in a)if(G.call(a,c))if(d=a[c],"include_apocrypha"===c||"versification_system"===c||"case_sensitive"===c)this[c](d);else this.options[c]=d;return this};n.prototype.include_apocrypha=
function(a){var c,d,e,h;if(null==a||!0!==a&&!1!==a)return this;this.options.include_apocrypha=a;this.regexps.books=this.regexps.get_books(a,this.options.case_sensitive);e=this.translations;for(h in e)G.call(e,h)&&"aliases"!==h&&"alternates"!==h&&(null==(c=this.translations[h]).chapters&&(c.chapters={}),null==(d=this.translations[h].chapters).Ps&&(d.Ps=u.shallow_clone_array(this.translations["default"].chapters.Ps)),!0===a?(c=null!=this.translations[h].chapters.Ps151?this.translations[h].chapters.Ps151[0]:
this.translations["default"].chapters.Ps151[0],this.translations[h].chapters.Ps[150]=c):151===this.translations[h].chapters.Ps.length&&this.translations[h].chapters.Ps.pop());return this};n.prototype.versification_system=function(a){var c,d,e,h,t;if(null==a||null==this.translations[a])return this;if(null!=this.translations.alternates["default"])if("default"===a)for(h in null!=this.translations.alternates["default"].order&&(this.translations["default"].order=u.shallow_clone(this.translations.alternates["default"].order)),
t=this.translations.alternates["default"].chapters,t)G.call(t,h)&&(d=t[h],this.translations["default"].chapters[h]=u.shallow_clone_array(d));else this.versification_system("default");null==(c=this.translations.alternates)["default"]&&(c["default"]={order:null,chapters:{}});"default"!==a&&null!=this.translations[a].order&&(null==(d=this.translations.alternates["default"]).order&&(d.order=u.shallow_clone(this.translations["default"].order)),this.translations["default"].order=u.shallow_clone(this.translations[a].order));
if("default"!==a&&null!=this.translations[a].chapters)for(h in c=this.translations[a].chapters,c)G.call(c,h)&&(d=c[h],null==(e=this.translations.alternates["default"].chapters)[h]&&(e[h]=u.shallow_clone_array(this.translations["default"].chapters[h])),this.translations["default"].chapters[h]=u.shallow_clone_array(d));this.options.versification_system=a;this.include_apocrypha(this.options.include_apocrypha);return this};n.prototype.case_sensitive=function(a){if(null==a||"none"!==a&&"books"!==a||a===
this.options.case_sensitive)return this;this.options.case_sensitive=a;this.regexps.books=this.regexps.get_books(this.options.include_apocrypha,a);return this};n.prototype.translation_info=function(a){var c,d,e,h,t;null==a&&(a="default");null!=a&&null!=(null!=(e=this.translations.aliases[a])?e.alias:void 0)&&(a=this.translations.aliases[a].alias);if(null==a||null==this.translations[a])a="default";e=this.options.versification_system;a!==e&&this.versification_system(a);h={order:u.shallow_clone(this.translations["default"].order),
books:[],chapters:{}};t=this.translations["default"].chapters;for(c in t)G.call(t,c)&&(d=t[c],h.chapters[c]=u.shallow_clone_array(d));t=h.order;for(c in t)G.call(t,c)&&(d=t[c],h.books[d-1]=c);a!==e&&this.versification_system(e);return h};n.prototype.replace_control_characters=function(a){a=a.replace(this.regexps.control," ");"replace"===this.options.non_latin_digits_strategy&&(a=a.replace(/[\u0660\u06f0\u07c0\u0966\u09e6\u0a66\u0ae6\u0b660\u0c66\u0ce6\u0d66\u0e50\u0ed0\u0f20\u1040\u1090\u17e0\u1810\u1946\u19d0\u1a80\u1a90\u1b50\u1bb0\u1c40\u1c50\ua620\ua8d0\ua900\ua9d0\uaa50\uabf0\uff10]/g,
"0"),a=a.replace(/[\u0661\u06f1\u07c1\u0967\u09e7\u0a67\u0ae7\u0b67\u0be7\u0c67\u0ce7\u0d67\u0e51\u0ed1\u0f21\u1041\u1091\u17e1\u1811\u1947\u19d1\u1a81\u1a91\u1b51\u1bb1\u1c41\u1c51\ua621\ua8d1\ua901\ua9d1\uaa51\uabf1\uff11]/g,"1"),a=a.replace(/[\u0662\u06f2\u07c2\u0968\u09e8\u0a68\u0ae8\u0b68\u0be8\u0c68\u0ce8\u0d68\u0e52\u0ed2\u0f22\u1042\u1092\u17e2\u1812\u1948\u19d2\u1a82\u1a92\u1b52\u1bb2\u1c42\u1c52\ua622\ua8d2\ua902\ua9d2\uaa52\uabf2\uff12]/g,"2"),a=a.replace(/[\u0663\u06f3\u07c3\u0969\u09e9\u0a69\u0ae9\u0b69\u0be9\u0c69\u0ce9\u0d69\u0e53\u0ed3\u0f23\u1043\u1093\u17e3\u1813\u1949\u19d3\u1a83\u1a93\u1b53\u1bb3\u1c43\u1c53\ua623\ua8d3\ua903\ua9d3\uaa53\uabf3\uff13]/g,
"3"),a=a.replace(/[\u0664\u06f4\u07c4\u096a\u09ea\u0a6a\u0aea\u0b6a\u0bea\u0c6a\u0cea\u0d6a\u0e54\u0ed4\u0f24\u1044\u1094\u17e4\u1814\u194a\u19d4\u1a84\u1a94\u1b54\u1bb4\u1c44\u1c54\ua624\ua8d4\ua904\ua9d4\uaa54\uabf4\uff14]/g,"4"),a=a.replace(/[\u0665\u06f5\u07c5\u096b\u09eb\u0a6b\u0aeb\u0b6b\u0beb\u0c6b\u0ceb\u0d6b\u0e55\u0ed5\u0f25\u1045\u1095\u17e5\u1815\u194b\u19d5\u1a85\u1a95\u1b55\u1bb5\u1c45\u1c55\ua625\ua8d5\ua905\ua9d5\uaa55\uabf5\uff15]/g,"5"),a=a.replace(/[\u0666\u06f6\u07c6\u096c\u09ec\u0a6c\u0aec\u0b6c\u0bec\u0c6c\u0cec\u0d6c\u0e56\u0ed6\u0f26\u1046\u1096\u17e6\u1816\u194c\u19d6\u1a86\u1a96\u1b56\u1bb6\u1c46\u1c56\ua626\ua8d6\ua906\ua9d6\uaa56\uabf6\uff16]/g,
"6"),a=a.replace(/[\u0667\u06f7\u07c7\u096d\u09ed\u0a6d\u0aed\u0b6d\u0bed\u0c6d\u0ced\u0d6d\u0e57\u0ed7\u0f27\u1047\u1097\u17e7\u1817\u194d\u19d7\u1a87\u1a97\u1b57\u1bb7\u1c47\u1c57\ua627\ua8d7\ua907\ua9d7\uaa57\uabf7\uff17]/g,"7"),a=a.replace(/[\u0668\u06f8\u07c8\u096e\u09ee\u0a6e\u0aee\u0b6e\u0bee\u0c6e\u0cee\u0d6e\u0e58\u0ed8\u0f28\u1048\u1098\u17e8\u1818\u194e\u19d8\u1a88\u1a98\u1b58\u1bb8\u1c48\u1c58\ua628\ua8d8\ua908\ua9d8\uaa58\uabf8\uff18]/g,"8"),a=a.replace(/[\u0669\u06f9\u07c9\u096f\u09ef\u0a6f\u0aef\u0b6f\u0bef\u0c6f\u0cef\u0d6f\u0e59\u0ed9\u0f29\u1049\u1099\u17e9\u1819\u194f\u19d9\u1a89\u1a99\u1b59\u1bb9\u1c49\u1c59\ua629\ua8d9\ua909\ua9d9\uaa59\uabf9\uff19]/g,
"9"));return a};n.prototype.match_books=function(a){var c,d,e,h,t;d=[];t=this.regexps.books;e=0;for(h=t.length;e<h;e++)c=t[e],a=a.replace(c.regexp,function(a,e,h){d.push({value:h,parsed:c.osis,type:"book"});return e+"\u001f"+(d.length-1)+(null!=c.extra?"/"+c.extra:"")+"\u001f"});a=a.replace(this.regexps.translations,function(a){d.push({value:a,parsed:a.toLowerCase(),type:"translation"});return"\u001e"+(d.length-1)+"\u001e"});return[a,this.get_book_indices(d,a)]};n.prototype.get_book_indices=function(a,
c){var d,e,h;d=0;for(h=/([\x1f\x1e])(\d+)(?:\/\d+)?\1/g;e=h.exec(c);)a[e[2]].start_index=e.index+d,d+=a[e[2]].value.length-e[0].length;return a};n.prototype.match_passages=function(a){var c,d,e,h,t,q;e=[];for(d={};c=this.regexps.escaped_passage.exec(a);)h=c[0],q=c[1],d=c[2],t=q.length,c.index+=h.length-t,/\s[2-9]\d\d\s*$|\s\d{4,}\s*$/.test(q)&&(h=/\s+\d+\s*$/,q=q.replace(h,"")),/[\d\x1f\x1e)]$/.test(q)||(q=this.replace_match_end(q)),"delete"===this.options.captive_end_digits_strategy&&(c=c.index+
q.length,a.length>c&&/^\w/.test(a.substr(c,1))&&(q=q.replace(/[\s*]+\d+$/,"")),q=q.replace(/(\x1e[)\]]?)[\s*]*\d+$/,"$1")),q=q.replace(/[A-Z]+/g,function(a){return a.toLowerCase()}),h="\u001f"===q.substr(0,1)?0:q.split("\u001f")[0].length,c={value:La.parse(q),type:"base",start_index:this.passage.books[d].start_index-h,match:q},"full"===this.options.book_alone_strategy&&"include"===this.options.book_range_strategy&&"b"===c.value[0].type&&(1===c.value.length||1<c.value.length&&"translation_sequence"===
c.value[1].type)&&0===h&&(1===this.passage.books[d].parsed.length||1<this.passage.books[d].parsed.length&&"translation"===this.passage.books[d].parsed[1].type)&&/^[234]/.test(this.passage.books[d].parsed[0])&&this.create_book_range(a,c,d),d=this.passage.handle_obj(c),c=d[0],d=d[1],e=e.concat(c),t=this.adjust_regexp_end(c,t,q.length),0<t&&(this.regexps.escaped_passage.lastIndex-=t);return[e,d]};n.prototype.adjust_regexp_end=function(a,c,d){var e;e=0;0<a.length?e=c-a[a.length-1].indices[1]-1:c!==d&&
(e=c-d);return e};n.prototype.replace_match_end=function(a){var c,d;for(d=a.length;c=this.regexps.match_end_split.exec(a);)d=c.index+c[0].length;d<a.length&&(a=a.substr(0,d));return a};n.prototype.create_book_range=function(a,c,d){var e,h,t,q,ka;e=[n.prototype.regexps.first,n.prototype.regexps.second,n.prototype.regexps.third];q=parseInt(this.passage.books[d].parsed[0].substr(0,1),10);for(h=t=1;1<=q?t<q:t>q;h=1<=q?++t:--t)if(ka=h===q-1?n.prototype.regexps.range_and:n.prototype.regexps.range_only,
ka=a.match(RegExp("(?:^|\\W)("+e[h-1]+"\\s*"+ka+"\\s*)\\x1f"+d+"\\x1f","i")),null!=ka)return this.add_book_range_object(c,ka,h);return!1};n.prototype.add_book_range_object=function(a,c,d){var e,h,t,q;e=c[1].length;a.value[0]={type:"b_range_pre",value:[{type:"b_pre",value:d.toString(),indices:[c.index,c.index+e]},a.value[0]],indices:[0,a.value[0].indices[1]+e]};a.value[0].value[1].indices[0]+=e;a.value[0].value[1].indices[1]+=e;a.start_index-=e;a.match=c[1]+a.match;if(1!==a.value.length){q=[];c=d=
1;for(h=a.value.length;1<=h?d<h:d>h;c=1<=h?++d:--d)null!=a.value[c].value&&(null!=(null!=(t=a.value[c].value[0])?t.indices:void 0)&&(a.value[c].value[0].indices[0]+=e,a.value[c].value[0].indices[1]+=e),a.value[c].indices[0]+=e,q.push(a.value[c].indices[1]+=e));return q}};n.prototype.osis=function(){var a,c,d,e,h;e=[];h=this.parsed_entities();a=0;for(c=h.length;a<c;a++)d=h[a],0<d.osis.length&&e.push(d.osis);return e.join(",")};n.prototype.osis_and_translations=function(){var a,c,d,e,h;e=[];h=this.parsed_entities();
a=0;for(c=h.length;a<c;a++)d=h[a],0<d.osis.length&&e.push([d.osis,d.translations.join(",")]);return e};n.prototype.osis_and_indices=function(){var a,c,d,e,h;e=[];h=this.parsed_entities();a=0;for(c=h.length;a<c;a++)d=h[a],0<d.osis.length&&e.push({osis:d.osis,translations:d.translations,indices:d.indices});return e};n.prototype.parsed_entities=function(){var a,c,d,e,h,t,q,n,g,w,A,C,u,J;n=[];c=e=0;for(w=this.entities.length;0<=w?e<w:e>w;c=0<=w?++e:--e)if(a=this.entities[c],a.type&&"translation_sequence"===
a.type&&0<n.length&&c===n[n.length-1].entity_id+1&&(n[n.length-1].indices[1]=a.absolute_indices[1]),null!=a.passages&&!("b"===a.type&&"ignore"===this.options.book_alone_strategy||"b_range"===a.type&&"ignore"===this.options.book_range_strategy||"context"===a.type)){J=[];u=null;if(null!=a.passages[0].translations)for(t=a.passages[0].translations,h=0,d=t.length;h<d;h++)q=t[h],g=0<(null!=(A=q.osis)?A.length:void 0)?q.osis:"",null==u&&(u=q.alias),J.push(g);else J=[""],u="default";h=[];t=a.passages.length;
d=q=0;for(C=t;0<=C?q<C:q>C;d=0<=C?++q:--q){g=a.passages[d];null==g.type&&(g.type=a.type);if(!1===g.valid.valid&&("ignore"===this.options.invalid_sequence_strategy&&"sequence"===a.type&&this.snap_sequence("ignore",a,h,d,t),"ignore"===this.options.invalid_passage_strategy))continue;"b"!==g.type&&"b_range"!==g.type||"ignore"!==this.options.book_sequence_strategy||"sequence"!==a.type?("b_range_start"!==g.type&&"range_end_b"!==g.type||"ignore"!==this.options.book_range_strategy||this.snap_range(a,d),null==
g.absolute_indices&&(g.absolute_indices=a.absolute_indices),h.push({osis:g.valid.valid?this.to_osis(g.start,g.end,u):"",type:g.type,indices:g.absolute_indices,translations:J,start:g.start,end:g.end,enclosed_indices:g.enclosed_absolute_indices,entity_id:c,entities:[g]})):this.snap_sequence("book",a,h,d,t)}if(0!==h.length)if(1<h.length&&"combine"===this.options.consecutive_combination_strategy&&(h=this.combine_consecutive_passages(h,u)),"separate"===this.options.sequence_combination_strategy)n=n.concat(h);
else{u=[];d=h.length-1;null!=h[d].enclosed_indices&&0<=h[d].enclosed_indices[1]&&(a.absolute_indices[1]=h[d].enclosed_indices[1]);t=0;for(d=h.length;t<d;t++)q=h[t],0<q.osis.length&&u.push(q.osis);n.push({osis:u.join(","),indices:a.absolute_indices,translations:J,entity_id:c,entities:h})}}return n};n.prototype.to_osis=function(a,c,d){var e;null==c.c&&null==c.v&&a.b===c.b&&null==a.c&&null==a.v&&"first_chapter"===this.options.book_alone_strategy&&(c.c=1);null==a.c&&(a.c=1);null==a.v&&(a.v=1);null==c.c&&
(0<=this.options.passage_existence_strategy.indexOf("c")||null!=this.passage.translations[d].chapters[c.b]&&1===this.passage.translations[d].chapters[c.b].length?c.c=this.passage.translations[d].chapters[c.b].length:c.c=999);null==c.v&&(null!=this.passage.translations[d].chapters[c.b][c.c-1]&&0<=this.options.passage_existence_strategy.indexOf("v")?c.v=this.passage.translations[d].chapters[c.b][c.c-1]:c.v=999);this.options.include_apocrypha&&"b"===this.options.ps151_strategy&&(151===a.c&&"Ps"===a.b||
151===c.c&&"Ps"===c.b)&&this.fix_ps151(a,c,d);"b"===this.options.osis_compaction_strategy&&1===a.c&&1===a.v&&c.c===this.passage.translations[d].chapters[c.b].length&&c.v===this.passage.translations[d].chapters[c.b][c.c-1]?(d=a.b,e=c.b):2>=this.options.osis_compaction_strategy.length&&1===a.v&&(999===c.v||c.v===this.passage.translations[d].chapters[c.b][c.c-1])?(d=a.b+"."+a.c.toString(),e=c.b+"."+c.c.toString()):(d=a.b+"."+a.c.toString()+"."+a.v.toString(),e=c.b+"."+c.c.toString()+"."+c.v.toString());
d=d===e?d:d+"-"+e;null!=a.extra&&(d=a.extra+","+d);null!=c.extra&&(d+=","+c.extra);return d};n.prototype.fix_ps151=function(a,c,d){var e;"default"!==d&&null==(null!=(e=this.translations[d])?e.chapters.Ps151:void 0)&&this.passage.promote_book_to_translation("Ps151",d);if(151===a.c&&"Ps"===a.b){if(151===c.c&&"Ps"===c.b)return a.b="Ps151",a.c=1,c.b="Ps151",c.c=1;a.extra=this.to_osis({b:"Ps151",c:1,v:a.v},{b:"Ps151",c:1,v:this.passage.translations[d].chapters.Ps151[0]},d);a.b="Prov";a.c=1;return a.v=
1}c.extra=this.to_osis({b:"Ps151",c:1,v:1},{b:"Ps151",c:1,v:c.v},d);c.c=150;return c.v=this.passage.translations[d].chapters.Ps[149]};n.prototype.combine_consecutive_passages=function(a,c){var d,e,h,t,q,n,g,w,A,u;w=[];A={};n=a.length-1;d=-1;e=!1;for(h=q=0;0<=n?q<=n:q>=n;h=0<=n?++q:--q)g=a[h],0<g.osis.length?(u=w.length-1,t=!1,g.enclosed_indices[0]!==d&&(d=g.enclosed_indices[0]),0<=d&&(h===n||a[h+1].enclosed_indices[0]!==g.enclosed_indices[0])&&(e=t=!0),this.is_verse_consecutive(A,g.start,c)?(w[u].end=
g.end,w[u].is_enclosed_last=t,w[u].indices[1]=g.indices[1],w[u].enclosed_indices[1]=g.enclosed_indices[1],w[u].osis=this.to_osis(w[u].start,g.end,c)):w.push(g),A={b:g.end.b,c:g.end.c,v:g.end.v}):(w.push(g),A={});e&&this.snap_enclosed_indices(w);return w};n.prototype.snap_enclosed_indices=function(a){var c,d,e;c=0;for(d=a.length;c<d;c++)e=a[c],null!=e.is_enclosed_last&&(0>e.enclosed_indices[0]&&e.is_enclosed_last&&(e.indices[1]=e.enclosed_indices[1]),delete e.is_enclosed_last);return a};n.prototype.is_verse_consecutive=
function(a,c,d){var e;if(null==a.b)return!1;e=null!=this.passage.translations[d].order?this.passage.translations[d].order:this.passage.translations["default"].order;if(a.b===c.b)if(a.c===c.c){if(a.v===c.v-1)return!0}else{if(1===c.v&&a.c===c.c-1&&a.v===this.passage.translations[d].chapters[a.b][a.c-1])return!0}else if(1===c.c&&1===c.v&&e[a.b]===e[c.b]-1&&a.c===this.passage.translations[d].chapters[a.b].length&&a.v===this.passage.translations[d].chapters[a.b][a.c-1])return!0;return!1};n.prototype.snap_range=
function(a,c){var d,e,h,t,q,g;"b_range_start"===a.type||"sequence"===a.type&&"b_range_start"===a.passages[c].type?(d=1,t="end",g="b_range_start"):(d=0,t="start",g="range_end_b");q="end"===t?"start":"end";h=a.passages[c][q];for(e in h)G.call(h,e)&&(a.passages[c][q][e]=a.passages[c][t][e]);"sequence"===a.type?(c>=a.value.length&&(c=a.value.length-1),d=this.passage.pluck(g,a.value[c]),null!=d&&(d=this.snap_range(d,0),0===c?a.absolute_indices[0]=d.absolute_indices[0]:a.absolute_indices[1]=d.absolute_indices[1])):
(a.original_type=a.type,a.type=a.value[d].type,a.absolute_indices=[a.value[d].absolute_indices[0],a.value[d].absolute_indices[1]]);return a};n.prototype.snap_sequence=function(a,c,d,e,h){var t;t=c.passages[e];t.absolute_indices[0]===c.absolute_indices[0]&&e<h-1&&this.get_snap_sequence_i(c.passages,e,h)!==e?(c.absolute_indices[0]=c.passages[e+1].absolute_indices[0],this.remove_absolute_indices(c.passages,e+1)):t.absolute_indices[1]===c.absolute_indices[1]&&0<e?c.absolute_indices[1]=0<d.length?d[d.length-
1].indices[1]:c.passages[e-1].absolute_indices[1]:"book"===a&&e<h-1&&!this.starts_with_book(c.passages[e+1])&&(c.passages[e+1].absolute_indices[0]=t.absolute_indices[0]);return c};n.prototype.get_snap_sequence_i=function(a,c,d){var e,h,t;for(e=h=t=c+1;t<=d?h<d:h>d;e=t<=d?++h:--h){if(this.starts_with_book(a[e]))return e;if(a[e].valid.valid)break}return c};n.prototype.starts_with_book=function(a){return"b"===a.type.substr(0,1)||("range"===a.type||"ff"===a.type)&&"b"===a.start.type.substr(0,1)?!0:!1};
n.prototype.remove_absolute_indices=function(a,c){var d,e,h,t,q,g;if(0>a[c].enclosed_absolute_indices[0])return!1;d=a[c].enclosed_absolute_indices;g=d[0];d=d[1];q=a.slice(c);e=0;for(h=q.length;e<h;e++)if(t=q[e],t.enclosed_absolute_indices[0]===g&&t.enclosed_absolute_indices[1]===d)t.enclosed_absolute_indices=[-1,-1];else break;return!0};return n}();ja=function(){function g(){}g.prototype.books=[];g.prototype.indices={};g.prototype.options={};g.prototype.translations={};g.prototype.handle_array=function(a,
c,d){var e,h,t;null==c&&(c=[]);null==d&&(d={});e=0;for(h=a.length;e<h;e++)if(t=a[e],null!=t){if("stop"===t.type)break;d=this.handle_obj(t,c,d);c=d[0];d=d[1]}return[c,d]};g.prototype.handle_obj=function(a,c,d){return null!=a.type&&null!=this[a.type]?this[a.type](a,c,d):[c,d]};g.prototype.b=function(a,c,d){var e,h,t,g,n;a.start_context=u.shallow_clone(d);a.passages=[];d=[];g=this.books[a.value].parsed;h=0;for(t=g.length;h<t;h++)e=g[h],n=this.validate_ref(a.start_context.translations,{b:e}),e={start:{b:e},
end:{b:e},valid:n},0===a.passages.length&&n.valid?a.passages.push(e):d.push(e);0===a.passages.length&&a.passages.push(d.shift());0<d.length&&(a.passages[0].alternates=d);null!=a.start_context.translations&&(a.passages[0].translations=a.start_context.translations);null==a.absolute_indices&&(a.absolute_indices=this.get_absolute_indices(a.indices));c.push(a);d={b:a.passages[0].start.b};null!=a.start_context.translations&&(d.translations=a.start_context.translations);return[c,d]};g.prototype.b_range=
function(a,c,d){return this.range(a,c,d)};g.prototype.b_range_pre=function(a,c,d){var e,h;a.start_context=u.shallow_clone(d);a.passages=[];e=this.pluck("b",a.value);d=this.b(e,[],d);e=d[0][0];d=d[1];null==a.absolute_indices&&(a.absolute_indices=this.get_absolute_indices(a.indices));h={b:a.value[0].value+e.passages[0].start.b.substr(1),type:"b"};a.passages=[{start:h,end:e.passages[0].end,valid:e.passages[0].valid}];null!=a.start_context.translations&&(a.passages[0].translations=a.start_context.translations);
c.push(a);return[c,d]};g.prototype.b_range_start=function(a,c,d){return this.range(a,c,d)};g.prototype.base=function(a,c,d){this.indices=this.calculate_indices(a.match,a.start_index);return this.handle_array(a.value,c,d)};g.prototype.bc=function(a,c,d){var e,h,t,g,n,x,w,A,C;a.start_context=u.shallow_clone(d);a.passages=[];this.reset_context(d,["b","c","v"]);t=this.pluck("c",a.value).value;e=[];A=this.books[this.pluck("b",a.value).value].parsed;n=0;for(x=A.length;n<x;n++)h=A[n],g="c",C=this.validate_ref(a.start_context.translations,
{b:h,c:t}),w={start:{b:h},end:{b:h},valid:C},C.messages.start_chapter_not_exist_in_single_chapter_book&&(w.valid=this.validate_ref(a.start_context.translations,{b:h,v:t}),w.valid.messages.start_chapter_not_exist_in_single_chapter_book=1,w.start.c=1,w.end.c=1,g="v"),w.start[g]=t,h=this.fix_start_zeroes(w.valid,w.start.c,w.start.v),w.start.c=h[0],w.start.v=h[1],null==w.start.v&&delete w.start.v,w.end[g]=w.start[g],0===a.passages.length&&w.valid.valid?a.passages.push(w):e.push(w);0===a.passages.length&&
a.passages.push(e.shift());0<e.length&&(a.passages[0].alternates=e);null!=a.start_context.translations&&(a.passages[0].translations=a.start_context.translations);null==a.absolute_indices&&(a.absolute_indices=this.get_absolute_indices(a.indices));this.set_context_from_object(d,["b","c","v"],a.passages[0].start);c.push(a);return[c,d]};g.prototype.bc_title=function(a,c,d){var e,h,t,g;a.start_context=u.shallow_clone(d);d=this.bc(this.pluck("bc",a.value),[],d);e=d[0][0];d=d[1];if("Ps"!==e.passages[0].start.b.substr(0,
2)&&null!=e.passages[0].alternates)for(h=t=0,g=e.passages[0].alternates.length;0<=g?t<g:t>g;h=0<=g?++t:--t)if("Ps"===e.passages[0].alternates[h].start.b.substr(0,2)){e.passages[0]=e.passages[0].alternates[h];break}if("Ps"!==e.passages[0].start.b.substr(0,2))return c.push(e),[c,d];this.books[this.pluck("b",e.value).value].parsed=["Ps"];e=this.pluck("title",a.value);null==e&&(e=this.pluck("v",a.value));a.value[1]={type:"v",value:[{type:"integer",value:1,indices:e.indices}],indices:e.indices};a.type=
"bcv";return this.bcv(a,c,a.start_context)};g.prototype.bcv=function(a,c,d){var e,h,g,q,n,x,w,A;a.start_context=u.shallow_clone(d);a.passages=[];this.reset_context(d,["b","c","v"]);g=this.pluck("bc",a.value);q=this.pluck("c",g.value).value;w=this.pluck("v",a.value).value;e=[];x=this.books[this.pluck("b",g.value).value].parsed;g=0;for(n=x.length;g<n;g++)h=x[g],A=this.validate_ref(a.start_context.translations,{b:h,c:q,v:w}),w=this.fix_start_zeroes(A,q,w),q=w[0],w=w[1],h={start:{b:h,c:q,v:w},end:{b:h,
c:q,v:w},valid:A},0===a.passages.length&&A.valid?a.passages.push(h):e.push(h);0===a.passages.length&&a.passages.push(e.shift());0<e.length&&(a.passages[0].alternates=e);null!=a.start_context.translations&&(a.passages[0].translations=a.start_context.translations);null==a.absolute_indices&&(a.absolute_indices=this.get_absolute_indices(a.indices));this.set_context_from_object(d,["b","c","v"],a.passages[0].start);c.push(a);return[c,d]};g.prototype.bv=function(a,c,d){var e;a.start_context=u.shallow_clone(d);
e=a.value;e={indices:a.indices,value:[{type:"bc",value:[e[0],{type:"c",value:[{type:"integer",value:1}]}]},e[1]]};d=this.bcv(e,[],d);e=d[0][0];d=d[1];a.passages=e.passages;null==a.absolute_indices&&(a.absolute_indices=this.get_absolute_indices(a.indices));c.push(a);return[c,d]};g.prototype.c=function(a,c,d){var e,h;a.start_context=u.shallow_clone(d);e="integer"===a.type?a.value:this.pluck("integer",a.value).value;h=this.validate_ref(a.start_context.translations,{b:d.b,c:e});if(!h.valid&&h.messages.start_chapter_not_exist_in_single_chapter_book)return this.v(a,
c,d);e=this.fix_start_zeroes(h,e)[0];a.passages=[{start:{b:d.b,c:e},end:{b:d.b,c:e},valid:h}];null!=a.start_context.translations&&(a.passages[0].translations=a.start_context.translations);c.push(a);d.c=e;this.reset_context(d,["v"]);null==a.absolute_indices&&(a.absolute_indices=this.get_absolute_indices(a.indices));return[c,d]};g.prototype.c_psalm=function(a,c,d){var e;a.type="bc";e=parseInt(this.books[a.value].value.match(/^\d+/)[0],10);a.value=[{type:"b",value:a.value,indices:a.indices},{type:"c",
value:[{type:"integer",value:e,indices:a.indices}],indices:a.indices}];return this.bc(a,c,d)};g.prototype.c_title=function(a,c,d){a.start_context=u.shallow_clone(d);if("Ps"!==d.b)return this.c(a.value[0],c,d);d=this.pluck("title",a.value);a.value[1]={type:"v",value:[{type:"integer",value:1,indices:d.indices}],indices:d.indices};a.type="cv";return this.cv(a,c,a.start_context)};g.prototype.cv=function(a,c,d){var e,h,g;a.start_context=u.shallow_clone(d);e=this.pluck("c",a.value).value;h=this.pluck("v",
a.value).value;g=this.validate_ref(a.start_context.translations,{b:d.b,c:e,v:h});h=this.fix_start_zeroes(g,e,h);e=h[0];h=h[1];a.passages=[{start:{b:d.b,c:e,v:h},end:{b:d.b,c:e,v:h},valid:g}];null!=a.start_context.translations&&(a.passages[0].translations=a.start_context.translations);c.push(a);d.c=e;d.v=h;null==a.absolute_indices&&(a.absolute_indices=this.get_absolute_indices(a.indices));return[c,d]};g.prototype.cb_range=function(a,c,d){var e,h,g;a.type="range";h=a.value;e=h[0];g=h[1];h=h[2];a.value=
[{type:"bc",value:[e,g],indices:a.indices},h];h.indices[1]=a.indices[1];return this.range(a,c,d)};g.prototype.context=function(a,c,d){var e,h;a.start_context=u.shallow_clone(d);a.passages=[];h=this.books[a.value].context;for(e in h)G.call(h,e)&&(d[e]=this.books[a.value].context[e]);c.push(a);return[c,d]};g.prototype.cv_psalm=function(a,c,d){var e,h;a.start_context=u.shallow_clone(d);a.type="bcv";h=a.value;e=h[0];h=h[1];e=this.c_psalm(e,[],a.start_context)[0][0];a.value=[e,h];return this.bcv(a,c,d)};
g.prototype.ff=function(a,c,d){a.start_context=u.shallow_clone(d);a.value.push({type:"integer",indices:a.indices,value:999});d=this.range(a,[],a.start_context);a=d[0][0];d=d[1];a.value[0].indices=a.value[1].indices;a.value[0].absolute_indices=a.value[1].absolute_indices;a.value.pop();null!=a.passages[0].valid.messages.end_verse_not_exist&&delete a.passages[0].valid.messages.end_verse_not_exist;null!=a.passages[0].valid.messages.end_chapter_not_exist&&delete a.passages[0].valid.messages.end_chapter_not_exist;
null!=a.passages[0].end.original_c&&delete a.passages[0].end.original_c;c.push(a);return[c,d]};g.prototype.integer_title=function(a,c,d){a.start_context=u.shallow_clone(d);if("Ps"!==d.b)return this.integer(a.value[0],c,d);a.value[0]={type:"c",value:[a.value[0]],indices:[a.value[0].indices[0],a.value[0].indices[1]]};d=[a.indices[1]-5,a.indices[1]];a.value[1]={type:"v",value:[{type:"integer",value:1,indices:d}],indices:d};a.type="cv";return this.cv(a,c,a.start_context)};g.prototype.integer=function(a,
c,d){return null!=d.v?this.v(a,c,d):this.c(a,c,d)};g.prototype.sequence=function(a,c,d){var e,h,g,q,n,x,w,A;a.start_context=u.shallow_clone(d);a.passages=[];x=a.value;e=0;for(g=x.length;e<g;e++)for(n=x[e],d=this.handle_array(n,[],d),n=d[0],n=n[0],d=d[1],w=n.passages,h=0,q=w.length;h<q;h++)A=w[h],null==A.type&&(A.type=n.type),null==A.absolute_indices&&(A.absolute_indices=n.absolute_indices),null!=n.start_context.translations&&(A.translations=n.start_context.translations),A.enclosed_absolute_indices=
"sequence_post_enclosed"===n.type?n.absolute_indices:[-1,-1],a.passages.push(A);null==a.absolute_indices&&(a.absolute_indices=0<a.passages.length&&"sequence"===a.type?[a.passages[0].absolute_indices[0],a.passages[a.passages.length-1].absolute_indices[1]]:this.get_absolute_indices(a.indices));c.push(a);return[c,d]};g.prototype.sequence_post_enclosed=function(a,c,d){return this.sequence(a,c,d)};g.prototype.v=function(a,c,d){var e,h,g;h="integer"===a.type?a.value:this.pluck("integer",a.value).value;
a.start_context=u.shallow_clone(d);e=null!=d.c?d.c:1;g=this.validate_ref(a.start_context.translations,{b:d.b,c:e,v:h});h=this.fix_start_zeroes(g,0,h)[1];a.passages=[{start:{b:d.b,c:e,v:h},end:{b:d.b,c:e,v:h},valid:g}];null!=a.start_context.translations&&(a.passages[0].translations=a.start_context.translations);null==a.absolute_indices&&(a.absolute_indices=this.get_absolute_indices(a.indices));c.push(a);d.v=h;return[c,d]};g.prototype.range=function(a,c,d){var e,h,g,q,n,x;a.start_context=u.shallow_clone(d);
e=a.value;x=e[0];e=e[1];d=this.handle_obj(x,[],d);x=d[0][0];d=d[1];if("v"===e.type&&("bc"===x.type&&(null==(h=x.passages)||null==(g=h[0])||null==(q=g.valid)||null==(n=q.messages)||!n.start_chapter_not_exist_in_single_chapter_book)||"c"===x.type)&&"verse"===this.options.end_range_digits_strategy)return a.value[0]=x,this.range_change_integer_end(a,c);d=this.handle_obj(e,[],d);e=d[0][0];d=d[1];a.value=[x,e];a.indices=[x.indices[0],e.indices[1]];delete a.absolute_indices;g={b:x.passages[0].start.b,c:x.passages[0].start.c,
v:x.passages[0].start.v,type:x.type};h={b:e.passages[0].end.b,c:e.passages[0].end.c,v:e.passages[0].end.v,type:e.type};e.passages[0].valid.messages.start_chapter_is_zero&&(h.c=0);e.passages[0].valid.messages.start_verse_is_zero&&(h.v=0);q=this.validate_ref(a.start_context.translations,g,h);if(q.valid){if(e=this.range_handle_valid(q,a,x,g,e,h,c),x=e[0],e=e[1],x)return e}else return this.range_handle_invalid(q,a,x,g,e,h,c);null==a.absolute_indices&&(a.absolute_indices=this.get_absolute_indices(a.indices));
a.passages=[{start:g,end:h,valid:q}];null!=a.start_context.translations&&(a.passages[0].translations=a.start_context.translations);"b"===g.type?a.type="b"===h.type?"b_range":"b_range_start":"b"===h.type&&(a.type="range_end_b");c.push(a);return[c,d]};g.prototype.range_change_end=function(a,c,d){var e;e=a.value[1];"integer"===e.type?(e.original_value=e.value,e.value=d):"v"===e.type?(e=this.pluck("integer",e.value),e.original_value=e.value,e.value=d):"cv"===e.type&&(e=this.pluck("c",e.value),e.original_value=
e.value,e.value=d);return this.handle_obj(a,c,a.start_context)};g.prototype.range_change_integer_end=function(a,c){var d,e;d=a.value;e=d[0];d=d[1];null==a.original_type&&(a.original_type=a.type);null==a.original_value&&(a.original_value=[e,d]);a.type="integer"===e.type?"cv":e.type+"v";"integer"===e.type&&(a.value[0]={type:"c",value:[e],indices:e.indices});"integer"===d.type&&(a.value[1]={type:"v",value:[d],indices:d.indices});return this.handle_obj(a,c,a.start_context)};g.prototype.range_check_new_end=
function(a,c,d,e){var h,g;h=0;g=null;e.messages.end_chapter_before_start?g="c":e.messages.end_verse_before_start&&(g="v");null!=g&&(h=this.range_get_new_end_value(c,d,e,g));0<h&&(c={b:d.b,c:d.c,v:d.v},c[g]=h,a=this.validate_ref(a,c),a.valid||(h=0));return h};g.prototype.range_end_b=function(a,c,d){return this.range(a,c,d)};g.prototype.range_get_new_end_value=function(a,c,d,e){var h;h=0;if("c"===e&&d.messages.end_chapter_is_zero||"v"===e&&d.messages.end_verse_is_zero)return h;10<=a[e]&&10>c[e]&&a[e]-
10*Math.floor(a[e]/10)<c[e]?h=c[e]+10*Math.floor(a[e]/10):100<=a[e]&&100>c[e]&&a[e]-100<c[e]&&(h=c[e]+100);return h};g.prototype.range_handle_invalid=function(a,c,d,e,h,g,q){if(!1===a.valid&&(a.messages.end_chapter_before_start||a.messages.end_verse_before_start)&&("integer"===h.type||"v"===h.type)||!1===a.valid&&a.messages.end_chapter_before_start&&"cv"===h.type)if(a=this.range_check_new_end(c.start_context.translations,e,g,a),0<a)return this.range_change_end(c,q,a);if("verse"===this.options.end_range_digits_strategy&&
null==e.v&&("integer"===h.type||"v"===h.type)&&(a="v"===h.type?this.pluck("integer",h.value):h.value,e=this.validate_ref(c.start_context.translations,{b:e.b,c:e.c,v:a}),e.valid))return this.range_change_integer_end(c,q);null==c.original_type&&(c.original_type=c.type);c.type="sequence";d=[[d,h],[[d],[h]]];c.original_value=d[0];c.value=d[1];return this.sequence(c,q,c.start_context)};g.prototype.range_handle_valid=function(a,c,d,e,h,g,q){if(a.messages.end_chapter_not_exist&&"verse"===this.options.end_range_digits_strategy&&
null==e.v&&("integer"===h.type||"v"===h.type)&&0<=this.options.passage_existence_strategy.indexOf("v")&&(d="v"===h.type?this.pluck("integer",h.value):h.value,d=this.validate_ref(c.start_context.translations,{b:e.b,c:e.c,v:d}),d.valid))return[!0,this.range_change_integer_end(c,q)];this.range_validate(a,e,g,c);return[!1,null]};g.prototype.range_validate=function(a,c,d,e){a.messages.end_chapter_not_exist||a.messages.end_chapter_not_exist_in_single_chapter_book?(d.original_c=d.c,d.c=a.messages.end_chapter_not_exist?
a.messages.end_chapter_not_exist:a.messages.end_chapter_not_exist_in_single_chapter_book,null!=d.v&&(d.v=this.validate_ref(e.start_context.translations,{b:d.b,c:d.c,v:999}).messages.end_verse_not_exist,delete a.messages.end_verse_is_zero)):a.messages.end_verse_not_exist&&(d.original_v=d.v,d.v=a.messages.end_verse_not_exist);a.messages.end_verse_is_zero&&"allow"!==this.options.zero_verse_strategy&&(d.v=a.messages.end_verse_is_zero);a.messages.end_chapter_is_zero&&(d.c=a.messages.end_chapter_is_zero);
a=this.fix_start_zeroes(a,c.c,c.v);c.c=a[0];c.v=a[1];return!0};g.prototype.translation_sequence=function(a,c,d){var e,h,g,q,n;a.start_context=u.shallow_clone(d);q=[];q.push({translation:this.books[a.value[0].value].parsed});g=a.value[1];e=0;for(h=g.length;e<h;e++)n=g[e],n=this.books[this.pluck("translation",n).value].parsed,null!=n&&q.push({translation:n});e=0;for(h=q.length;e<h;e++)g=q[e],null!=this.translations.aliases[g.translation]?(g.alias=this.translations.aliases[g.translation].alias,g.osis=
this.translations.aliases[g.translation].osis||""):(g.alias="default",g.osis=g.translation.toUpperCase());0<c.length&&(d=this.translation_sequence_apply(c,q));null==a.absolute_indices&&(a.absolute_indices=this.get_absolute_indices(a.indices));c.push(a);this.reset_context(d,["translations"]);return[c,d]};g.prototype.translation_sequence_apply=function(a,c){var d,e,h,g;g=0;for(d=e=h=a.length-1;0>=h?0>=e:0<=e;d=0>=h?++e:--e)if(null!=a[d].original_type&&(a[d].type=a[d].original_type),null!=a[d].original_value&&
(a[d].value=a[d].original_value),"translation_sequence"===a[d].type){g=d+1;break}g<a.length?(a[g].start_context.translations=c,d=this.handle_array(a.slice(g),[],a[g].start_context),d=d[1]):d=u.shallow_clone(a[a.length-1].start_context);return d};g.prototype.pluck=function(a,c){var d,e,h;d=0;for(e=c.length;d<e;d++)if(h=c[d],null!=h&&null!=h.type&&h.type===a)return"c"===a||"v"===a?this.pluck("integer",h.value):h;return null};g.prototype.set_context_from_object=function(a,c,d){var e,h,g,q;g=[];e=0;for(h=
c.length;e<h;e++)q=c[e],null!=d[q]&&g.push(a[q]=d[q]);return g};g.prototype.reset_context=function(a,c){var d,e,h,g;h=[];d=0;for(e=c.length;d<e;d++)g=c[d],h.push(delete a[g]);return h};g.prototype.fix_start_zeroes=function(a,c,d){a.messages.start_chapter_is_zero&&"upgrade"===this.options.zero_chapter_strategy&&(c=a.messages.start_chapter_is_zero);a.messages.start_verse_is_zero&&"upgrade"===this.options.zero_verse_strategy&&(d=a.messages.start_verse_is_zero);return[c,d]};g.prototype.calculate_indices=
function(a,c){var d,e,h,g,q,n,x,w,u,C,O,J;O="book";e=[];x=0;c=parseInt(c,10);u=[a];C=["\u001e","\u001f"];h=0;for(q=C.length;h<q;h++){d=C[h];J=[];g=0;for(n=u.length;g<n;g++)w=u[g],J=J.concat(w.split(d));u=J}g=0;for(h=u.length;g<h;g++)w=u[g],O="book"===O?"rest":"book",q=w.length,0!==q&&("book"===O?(w=w.replace(/\/\d+$/,""),d=x+q,0<e.length&&e[e.length-1].index===c?e[e.length-1].end=d:e.push({start:x,end:d,index:c}),x+=q+2,c=this.books[w].start_index+this.books[w].value.length-x,e.push({start:d+1,end:d+
1,index:c})):(d=x+q-1,0<e.length&&e[e.length-1].index===c?e[e.length-1].end=d:e.push({start:x,end:d,index:c}),x+=q));return e};g.prototype.get_absolute_indices=function(a){var c,d,e,h,g,q,n;q=a[0];a=a[1];c=n=null;g=this.indices;e=0;for(h=g.length;e<h;e++)if(d=g[e],null===n&&d.start<=q&&q<=d.end&&(n=q+d.index),d.start<=a&&a<=d.end){c=a+d.index+1;break}return[n,c]};g.prototype.validate_ref=function(a,c,d){var e,h,g,q,n,x;null!=a&&0<a.length||(a=[{translation:"default",osis:"",alias:"default"}]);x=!1;
g={};e=0;for(h=a.length;e<h;e++)n=a[e],null==n.alias&&(n.alias="default"),null==n.alias?(null==g.translation_invalid&&(g.translation_invalid=[]),g.translation_invalid.push(n)):(null==this.translations.aliases[n.alias]&&(n.alias="default",null==g.translation_unknown&&(g.translation_unknown=[]),g.translation_unknown.push(n)),q=this.validate_start_ref(n.alias,c,g)[0],d&&(q=this.validate_end_ref(n.alias,c,d,q,g)[0]),!0===q&&(x=!0));return{valid:x,messages:g}};g.prototype.validate_start_ref=function(a,
c,d){var e,g,n;n=!0;"default"!==a&&null==(null!=(e=this.translations[a])?e.chapters[c.b]:void 0)&&this.promote_book_to_translation(c.b,a);e=null!=(null!=(g=this.translations[a])?g.order:void 0)?a:"default";null!=c.v&&(c.v=parseInt(c.v,10));if(null!=this.translations[e].order[c.b]){null==c.c&&(c.c=1);c.c=parseInt(c.c,10);if(isNaN(c.c))return d.start_chapter_not_numeric=!0,[!1,d];0===c.c&&(d.start_chapter_is_zero=1,"error"===this.options.zero_chapter_strategy?n=!1:c.c=1);null!=c.v&&0===c.v&&(d.start_verse_is_zero=
1,"error"===this.options.zero_verse_strategy?n=!1:"upgrade"===this.options.zero_verse_strategy&&(c.v=1));0<c.c&&null!=this.translations[a].chapters[c.b][c.c-1]?null!=c.v&&(isNaN(c.v)?(n=!1,d.start_verse_not_numeric=!0):c.v>this.translations[a].chapters[c.b][c.c-1]&&0<=this.options.passage_existence_strategy.indexOf("v")&&(n=!1,d.start_verse_not_exist=this.translations[a].chapters[c.b][c.c-1])):1!==c.c&&1===this.translations[a].chapters[c.b].length?(n=!1,d.start_chapter_not_exist_in_single_chapter_book=
1):0<c.c&&0<=this.options.passage_existence_strategy.indexOf("c")&&(n=!1,d.start_chapter_not_exist=this.translations[a].chapters[c.b].length)}else 0<=this.options.passage_existence_strategy.indexOf("b")&&(n=!1),d.start_book_not_exist=!0;return[n,d]};g.prototype.validate_end_ref=function(a,c,d,e,g){var n,q;q=null!=(null!=(n=this.translations[a])?n.order:void 0)?a:"default";null!=d.c&&(d.c=parseInt(d.c,10),isNaN(d.c)?(e=!1,g.end_chapter_not_numeric=!0):0===d.c&&(g.end_chapter_is_zero=1,"error"===this.options.zero_chapter_strategy?
e=!1:d.c=1));null!=d.v&&(d.v=parseInt(d.v,10),isNaN(d.v)?(e=!1,g.end_verse_not_numeric=!0):0===d.v&&(g.end_verse_is_zero=1,"error"===this.options.zero_verse_strategy?e=!1:"upgrade"===this.options.zero_verse_strategy&&(d.v=1)));null!=this.translations[q].order[d.b]?(null==d.c&&1===this.translations[a].chapters[d.b].length&&(d.c=1),null!=this.translations[q].order[c.b]&&this.translations[q].order[c.b]>this.translations[q].order[d.b]&&(0<=this.options.passage_existence_strategy.indexOf("b")&&(e=!1),
g.end_book_before_start=!0),c.b!==d.b||null==d.c||isNaN(d.c)||(null==c.c&&(c.c=1),!isNaN(parseInt(c.c,10))&&c.c>d.c?(e=!1,g.end_chapter_before_start=!0):c.c!==d.c||null==d.v||isNaN(d.v)||(null==c.v&&(c.v=1),!isNaN(parseInt(c.v,10))&&c.v>d.v&&(e=!1,g.end_verse_before_start=!0))),null==d.c||isNaN(d.c)||null!=this.translations[a].chapters[d.b][d.c-1]||(1===this.translations[a].chapters[d.b].length?g.end_chapter_not_exist_in_single_chapter_book=1:0<d.c&&0<=this.options.passage_existence_strategy.indexOf("c")&&
(g.end_chapter_not_exist=this.translations[a].chapters[d.b].length)),null==d.v||isNaN(d.v)||(null==d.c&&(d.c=this.translations[a].chapters[d.b].length),d.v>this.translations[a].chapters[d.b][d.c-1]&&0<=this.options.passage_existence_strategy.indexOf("v")&&(g.end_verse_not_exist=this.translations[a].chapters[d.b][d.c-1]))):(e=!1,g.end_book_not_exist=!0);return[e,g]};g.prototype.promote_book_to_translation=function(a,c){var d;null==(d=this.translations)[c]&&(d[c]={});null==(d=this.translations[c]).chapters&&
(d.chapters={});if(null==this.translations[c].chapters[a])return this.translations[c].chapters[a]=u.shallow_clone_array(this.translations["default"].chapters[a])};return g}();u={shallow_clone:function(g){var a,c,d;if(null==g)return g;c={};for(a in g)G.call(g,a)&&(d=g[a],c[a]=d);return c},shallow_clone_array:function(g){var a,c,d,e;if(null==g)return g;d=[];a=c=0;for(e=g.length;0<=e?c<=e:c>=e;a=0<=e?++c:--c)"undefined"!==typeof g[a]&&(d[a]=g[a]);return d}};g.prototype.regexps.translations=/(?:(?:A(?:MP|SV)|KJV|TNIV|MSG|HCSB|RSV|N(?:A(?:B(?:RE)?|SB?)|I(?:RV|V)|KJV|LT|RSV)|E[RS]V|CE[BV]))\b/gi;
g.prototype.translations={aliases:{ceb:{osis:"CEB",alias:"ceb"},kjv:{osis:"KJV",alias:"kjv"},nab:{osis:"NAB",alias:"nab"},nabre:{osis:"NABRE",alias:"nab"},nas:{osis:"NASB",alias:"default"},nirv:{osis:"NIRV",alias:"kjv"},niv:{osis:"NIV",alias:"kjv"},nkjv:{osis:"NKJV",alias:"nkjv"},nlt:{osis:"NLT",alias:"nlt"},nrsv:{osis:"NRSV",alias:"nrsv"},tniv:{osis:"TNIV",alias:"kjv"},"default":{osis:"",alias:"default"}},alternates:{},"default":{order:{Gen:1,Exod:2,Lev:3,Num:4,Deut:5,Josh:6,Judg:7,Ruth:8,"1Sam":9,
"2Sam":10,"1Kgs":11,"2Kgs":12,"1Chr":13,"2Chr":14,Ezra:15,Neh:16,Esth:17,Job:18,Ps:19,Prov:20,Eccl:21,Song:22,Isa:23,Jer:24,Lam:25,Ezek:26,Dan:27,Hos:28,Joel:29,Amos:30,Obad:31,Jonah:32,Mic:33,Nah:34,Hab:35,Zeph:36,Hag:37,Zech:38,Mal:39,Matt:40,Mark:41,Luke:42,John:43,Acts:44,Rom:45,"1Cor":46,"2Cor":47,Gal:48,Eph:49,Phil:50,Col:51,"1Thess":52,"2Thess":53,"1Tim":54,"2Tim":55,Titus:56,Phlm:57,Heb:58,Jas:59,"1Pet":60,"2Pet":61,"1John":62,"2John":63,"3John":64,Jude:65,Rev:66,Tob:67,Jdt:68,GkEsth:69,Wis:70,
Sir:71,Bar:72,PrAzar:73,Sus:74,Bel:75,SgThree:76,EpJer:77,"1Macc":78,"2Macc":79,"3Macc":80,"4Macc":81,"1Esd":82,"2Esd":83,PrMan:84},chapters:{Gen:[31,25,24,26,32,22,24,22,29,32,32,20,18,24,21,16,27,33,38,18,34,24,20,67,34,35,46,22,35,43,55,32,20,31,29,43,36,30,23,23,57,38,34,34,28,34,31,22,33,26],Exod:[22,25,22,31,23,30,25,32,35,29,10,51,22,31,27,36,16,27,25,26,36,31,33,18,40,37,21,43,46,38,18,35,23,35,35,38,29,31,43,38],Lev:[17,16,17,35,19,30,38,36,24,20,47,8,59,57,33,34,16,30,37,27,24,33,44,23,
55,46,34],Num:[54,34,51,49,31,27,89,26,23,36,35,16,33,45,41,50,13,32,22,29,35,41,30,25,18,65,23,31,40,16,54,42,56,29,34,13],Deut:[46,37,29,49,33,25,26,20,29,22,32,32,18,29,23,22,20,22,21,20,23,30,25,22,19,19,26,68,29,20,30,52,29,12],Josh:[18,24,17,24,15,27,26,35,27,43,23,24,33,15,63,10,18,28,51,9,45,34,16,33],Judg:[36,23,31,24,31,40,25,35,57,18,40,15,25,20,20,31,13,31,30,48,25],Ruth:[22,23,18,22],"1Sam":[28,36,21,22,12,21,17,22,27,27,15,25,23,52,35,23,58,30,24,42,15,23,29,22,44,25,12,25,11,31,13],
"2Sam":[27,32,39,12,25,23,29,18,13,19,27,31,39,33,37,23,29,33,43,26,22,51,39,25],"1Kgs":[53,46,28,34,18,38,51,66,28,29,43,33,34,31,34,34,24,46,21,43,29,53],"2Kgs":[18,25,27,44,27,33,20,29,37,36,21,21,25,29,38,20,41,37,37,21,26,20,37,20,30],"1Chr":[54,55,24,43,26,81,40,40,44,14,47,40,14,17,29,43,27,17,19,8,30,19,32,31,31,32,34,21,30],"2Chr":[17,18,17,22,14,42,22,18,31,19,23,16,22,15,19,14,19,34,11,37,20,12,21,27,28,23,9,27,36,27,21,33,25,33,27,23],Ezra:[11,70,13,24,17,22,28,36,15,44],Neh:[11,20,32,
23,19,19,73,18,38,39,36,47,31],Esth:[22,23,15,17,14,14,10,17,32,3],Job:[22,13,26,21,27,30,21,22,35,22,20,25,28,22,35,22,16,21,29,29,34,30,17,25,6,14,23,28,25,31,40,22,33,37,16,33,24,41,30,24,34,17],Ps:[6,12,8,8,12,10,17,9,20,18,7,8,6,7,5,11,15,50,14,9,13,31,6,10,22,12,14,9,11,12,24,11,22,22,28,12,40,22,13,17,13,11,5,26,17,11,9,14,20,23,19,9,6,7,23,13,11,11,17,12,8,12,11,10,13,20,7,35,36,5,24,20,28,23,10,12,20,72,13,19,16,8,18,12,13,17,7,18,52,17,16,15,5,23,11,13,12,9,9,5,8,28,22,35,45,48,43,13,31,
7,10,10,9,8,18,19,2,29,176,7,8,9,4,8,5,6,5,6,8,8,3,18,3,3,21,26,9,8,24,13,10,7,12,15,21,10,20,14,9,6],Prov:[33,22,35,27,23,35,27,36,18,32,31,28,25,35,33,33,28,24,29,30,31,29,35,34,28,28,27,28,27,33,31],Eccl:[18,26,22,16,20,12,29,17,18,20,10,14],Song:[17,17,11,16,16,13,13,14],Isa:[31,22,26,6,30,13,25,22,21,34,16,6,22,32,9,14,14,7,25,6,17,25,18,23,12,21,13,29,24,33,9,20,24,17,10,22,38,22,8,31,29,25,28,28,25,13,15,22,26,11,23,15,12,17,13,12,21,14,21,22,11,12,19,12,25,24],Jer:[19,37,25,31,31,30,34,22,
26,25,23,17,27,22,21,21,27,23,15,18,14,30,40,10,38,24,22,17,32,24,40,44,26,22,19,32,21,28,18,16,18,22,13,30,5,28,7,47,39,46,64,34],Lam:[22,22,66,22,22],Ezek:[28,10,27,17,17,14,27,18,11,22,25,28,23,23,8,63,24,32,14,49,32,31,49,27,17,21,36,26,21,26,18,32,33,31,15,38,28,23,29,49,26,20,27,31,25,24,23,35],Dan:[21,49,30,37,31,28,28,27,27,21,45,13],Hos:[11,23,5,19,15,11,16,14,17,15,12,14,16,9],Joel:[20,32,21],Amos:[15,16,15,13,27,14,17,14,15],Obad:[21],Jonah:[17,10,10,11],Mic:[16,13,12,13,15,16,20],Nah:[15,
13,19],Hab:[17,20,19],Zeph:[18,15,20],Hag:[15,23],Zech:[21,13,10,14,11,15,14,23,17,12,17,14,9,21],Mal:[14,17,18,6],Matt:[25,23,17,25,48,34,29,34,38,42,30,50,58,36,39,28,27,35,30,34,46,46,39,51,46,75,66,20],Mark:[45,28,35,41,43,56,37,38,50,52,33,44,37,72,47,20],Luke:[80,52,38,44,39,49,50,56,62,42,54,59,35,35,32,31,37,43,48,47,38,71,56,53],John:[51,25,36,54,47,71,53,59,41,42,57,50,38,31,27,33,26,40,42,31,25],Acts:[26,47,26,37,42,15,60,40,43,48,30,25,52,28,41,40,34,28,41,38,40,30,35,27,27,32,44,31],
Rom:[32,29,31,25,21,23,25,39,33,21,36,21,14,23,33,27],"1Cor":[31,16,23,21,13,20,40,13,27,33,34,31,13,40,58,24],"2Cor":[24,17,18,18,21,18,16,24,15,18,33,21,14],Gal:[24,21,29,31,26,18],Eph:[23,22,21,32,33,24],Phil:[30,30,21,23],Col:[29,23,25,18],"1Thess":[10,20,13,18,28],"2Thess":[12,17,18],"1Tim":[20,15,16,16,25,21],"2Tim":[18,26,17,22],Titus:[16,15,15],Phlm:[25],Heb:[14,18,19,16,14,20,28,13,28,39,40,29,25],Jas:[27,26,18,17,20],"1Pet":[25,25,22,19,14],"2Pet":[21,22,18],"1John":[10,29,24,21,21],"2John":[13],
"3John":[15],Jude:[25],Rev:[20,29,22,11,14,17,17,13,21,11,19,17,18,20,8,21,18,24,21,15,27,21],Tob:[22,14,17,21,22,18,16,21,6,13,18,22,17,15],Jdt:[16,28,10,15,24,21,32,36,14,23,23,20,20,19,14,25],GkEsth:[22,23,15,17,14,14,10,17,32,13,12,6,18,19,16,24],Wis:[16,24,19,20,23,25,30,21,18,21,26,27,19,31,19,29,21,25,22],Sir:[30,18,31,31,15,37,36,19,18,31,34,18,26,27,20,30,32,33,30,31,28,27,27,34,26,29,30,26,28,25,31,24,33,31,26,31,31,34,35,30,22,25,33,23,26,20,25,25,16,29,30],Bar:[22,35,37,37,9],PrAzar:[68],
Sus:[64],Bel:[42],SgThree:[39],EpJer:[73],"1Macc":[64,70,60,61,68,63,50,32,73,89,74,53,53,49,41,24],"2Macc":[36,32,40,50,27,31,42,36,29,38,38,45,26,46,39],"3Macc":[29,33,30,21,51,41,23],"4Macc":[35,24,21,26,38,35,23,29,32,21,27,19,27,20,32,25,24,24],"1Esd":[58,30,24,63,73,34,15,96,55],"2Esd":[40,48,36,52,56,59,70,63,47,59,46,51,58,48,63,78],PrMan:[15],Ps151:[7]}},vulgate:{chapters:{Ps:[6,13,9,10,13,11,18,10,39,8,9,6,7,5,10,15,51,15,10,14,32,6,10,22,12,14,9,11,13,25,11,22,23,28,13,40,23,14,18,14,12,
5,26,18,12,10,15,21,23,21,11,7,9,24,13,12,12,18,14,9,13,12,11,14,20,8,36,37,6,24,20,28,23,11,13,21,72,13,20,17,8,19,13,14,17,7,19,53,17,16,16,5,23,11,13,12,9,9,5,8,29,22,35,45,48,43,14,31,7,10,10,9,26,9,19,2,29,176,7,8,9,4,8,5,6,5,6,8,8,3,18,3,3,21,26,9,8,24,14,10,8,12,15,21,10,11,20,14,9,7]}},ceb:{chapters:{"2Cor":[24,17,18,18,21,18,16,24,15,18,33,21,13],Rev:[20,29,22,11,14,17,17,13,21,11,19,18,18,20,8,21,18,24,21,15,27,21],Tob:[22,14,17,21,22,18,16,21,6,13,18,22,18,15],PrAzar:[67],EpJer:[72],"1Esd":[55,
26,24,63,71,33,15,92,55]}},kjv:{chapters:{"3John":[14]}},nab:{order:{Gen:1,Exod:2,Lev:3,Num:4,Deut:5,Josh:6,Judg:7,Ruth:8,"1Sam":9,"2Sam":10,"1Kgs":11,"2Kgs":12,"1Chr":13,"2Chr":14,PrMan:15,Ezra:16,Neh:17,"1Esd":18,"2Esd":19,Tob:20,Jdt:21,Esth:22,GkEsth:23,"1Macc":24,"2Macc":25,"3Macc":26,"4Macc":27,Job:28,Ps:29,Prov:30,Eccl:31,Song:32,Wis:33,Sir:34,Isa:35,Jer:36,Lam:37,Bar:38,EpJer:39,Ezek:40,Dan:41,PrAzar:42,Sus:43,Bel:44,SgThree:45,Hos:46,Joel:47,Amos:48,Obad:49,Jonah:50,Mic:51,Nah:52,Hab:53,Zeph:54,
Hag:55,Zech:56,Mal:57,Matt:58,Mark:59,Luke:60,John:61,Acts:62,Rom:63,"1Cor":64,"2Cor":65,Gal:66,Eph:67,Phil:68,Col:69,"1Thess":70,"2Thess":71,"1Tim":72,"2Tim":73,Titus:74,Phlm:75,Heb:76,Jas:77,"1Pet":78,"2Pet":79,"1John":80,"2John":81,"3John":82,Jude:83,Rev:84},chapters:{Gen:[31,25,24,26,32,22,24,22,29,32,32,20,18,24,21,16,27,33,38,18,34,24,20,67,34,35,46,22,35,43,54,33,20,31,29,43,36,30,23,23,57,38,34,34,28,34,31,22,33,26],Exod:[22,25,22,31,23,30,29,28,35,29,10,51,22,31,27,36,16,27,25,26,37,30,33,
18,40,37,21,43,46,38,18,35,23,35,35,38,29,31,43,38],Lev:[17,16,17,35,26,23,38,36,24,20,47,8,59,57,33,34,16,30,37,27,24,33,44,23,55,46,34],Num:[54,34,51,49,31,27,89,26,23,36,35,16,33,45,41,35,28,32,22,29,35,41,30,25,19,65,23,31,39,17,54,42,56,29,34,13],Deut:[46,37,29,49,33,25,26,20,29,22,32,31,19,29,23,22,20,22,21,20,23,29,26,22,19,19,26,69,28,20,30,52,29,12],"1Sam":[28,36,21,22,12,21,17,22,27,27,15,25,23,52,35,23,58,30,24,42,16,23,28,23,44,25,12,25,11,31,13],"2Sam":[27,32,39,12,25,23,29,18,13,19,
27,31,39,33,37,23,29,32,44,26,22,51,39,25],"1Kgs":[53,46,28,20,32,38,51,66,28,29,43,33,34,31,34,34,24,46,21,43,29,54],"2Kgs":[18,25,27,44,27,33,20,29,37,36,20,22,25,29,38,20,41,37,37,21,26,20,37,20,30],"1Chr":[54,55,24,43,41,66,40,40,44,14,47,41,14,17,29,43,27,17,19,8,30,19,32,31,31,32,34,21,30],"2Chr":[18,17,17,22,14,42,22,18,31,19,23,16,23,14,19,14,19,34,11,37,20,12,21,27,28,23,9,27,36,27,21,33,25,33,27,23],Neh:[11,20,38,17,19,19,72,18,37,40,36,47,31],Job:[22,13,26,21,27,30,21,22,35,22,20,25,28,
22,35,22,16,21,29,29,34,30,17,25,6,14,23,28,25,31,40,22,33,37,16,33,24,41,30,32,26,17],Ps:[6,11,9,9,13,11,18,10,21,18,7,9,6,7,5,11,15,51,15,10,14,32,6,10,22,12,14,9,11,13,25,11,22,23,28,13,40,23,14,18,14,12,5,27,18,12,10,15,21,23,21,11,7,9,24,14,12,12,18,14,9,13,12,11,14,20,8,36,37,6,24,20,28,23,11,13,21,72,13,20,17,8,19,13,14,17,7,19,53,17,16,16,5,23,11,13,12,9,9,5,8,29,22,35,45,48,43,14,31,7,10,10,9,8,18,19,2,29,176,7,8,9,4,8,5,6,5,6,8,8,3,18,3,3,21,26,9,8,24,14,10,8,12,15,21,10,20,14,9,6],Eccl:[18,
26,22,17,19,12,29,17,18,20,10,14],Song:[17,17,11,16,16,12,14,14],Isa:[31,22,26,6,30,13,25,23,20,34,16,6,22,32,9,14,14,7,25,6,17,25,18,23,12,21,13,29,24,33,9,20,24,17,10,22,38,22,8,31,29,25,28,28,25,13,15,22,26,11,23,15,12,17,13,12,21,14,21,22,11,12,19,11,25,24],Jer:[19,37,25,31,31,30,34,23,25,25,23,17,27,22,21,21,27,23,15,18,14,30,40,10,38,24,22,17,32,24,40,44,26,22,19,32,21,28,18,16,18,22,13,30,5,28,7,47,39,46,64,34],Ezek:[28,10,27,17,17,14,27,18,11,22,25,28,23,23,8,63,24,32,14,44,37,31,49,27,17,
21,36,26,21,26,18,32,33,31,15,38,28,23,29,49,26,20,27,31,25,24,23,35],Dan:[21,49,100,34,30,29,28,27,27,21,45,13,64,42],Hos:[9,25,5,19,15,11,16,14,17,15,11,15,15,10],Joel:[20,27,5,21],Jonah:[16,11,10,11],Mic:[16,13,12,14,14,16,20],Nah:[14,14,19],Zech:[17,17,10,14,11,15,14,23,17,12,17,14,9,21],Mal:[14,17,24],Acts:[26,47,26,37,42,15,60,40,43,49,30,25,52,28,41,40,34,28,40,38,40,30,35,27,27,32,44,31],"2Cor":[24,17,18,18,21,18,16,24,15,18,33,21,13],Rev:[20,29,22,11,14,17,17,13,21,11,19,18,18,20,8,21,18,
24,21,15,27,21],Tob:[22,14,17,21,22,18,17,21,6,13,18,22,18,15],Sir:[30,18,31,31,15,37,36,19,18,31,34,18,26,27,20,30,32,33,30,31,28,27,27,33,26,29,30,26,28,25,31,24,33,31,26,31,31,34,35,30,22,25,33,23,26,20,25,25,16,29,30],Bar:[22,35,38,37,9,72],"2Macc":[36,32,40,50,27,31,42,36,29,38,38,46,26,46,39]}},nlt:{chapters:{Rev:[20,29,22,11,14,17,17,13,21,11,19,18,18,20,8,21,18,24,21,15,27,21]}},nrsv:{chapters:{"2Cor":[24,17,18,18,21,18,16,24,15,18,33,21,13],Rev:[20,29,22,11,14,17,17,13,21,11,19,18,18,20,
8,21,18,24,21,15,27,21]}}};g.prototype.regexps.space="[\\s\\xa0]";g.prototype.regexps.escaped_passage=RegExp("(?:^|[^\\x1f\\x1e\\dA-Za-z\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u024f\u1e00-\u1eff\u2c60-\u2c7f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua7ff])((?:(?:ch(?:apters?|a?pts?\\.?|a?p?s?\\.?)?\\s*\\d+\\s*(?:[\\u2013\\u2014\\-]|through|thru|to)\\s*\\d+\\s*(?:from|of|in)(?:\\s+the\\s+book\\s+of)?\\s*)|(?:ch(?:apters?|a?pts?\\.?|a?p?s?\\.?)?\\s*\\d+\\s*(?:from|of|in)(?:\\s+the\\s+book\\s+of)?\\s*)|(?:\\d+(?:th|nd|st)\\s*ch(?:apter|a?pt\\.?|a?p?\\.?)?\\s*(?:from|of|in)(?:\\s+the\\s+book\\s+of)?\\s*))?\\x1f(\\d+)(?:/\\d+)?\\x1f(?:/\\d+\\x1f|[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014]|title(?![a-z])|see"+
g.prototype.regexps.space+"+also|ff(?![a-z0-9])|f(?![a-z0-9])|chapters|chapter|through|compare|chapts|verses|chpts|chapt|chaps|verse|chap|thru|also|chp|chs|cha|and|see|ver|vss|ch|to|cf|vs|vv|v|[a-e](?!\\w)|$)+)","gi");g.prototype.regexps.match_end_split=/\d\W*title|\d\W*(?:ff(?![a-z0-9])|f(?![a-z0-9]))(?:[\s\xa0*]*\.)?|\d[\s\xa0*]*[a-e](?!\w)|\x1e(?:[\s\xa0*]*[)\]\uff09])?|[\d\x1f]/gi;g.prototype.regexps.control=/[\x1e\x1f]/g;g.prototype.regexps.pre_book="[^A-Za-z\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u024f\u1e00-\u1eff\u2c60-\u2c7f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua7ff]";
g.prototype.regexps.first="(?:1st|1|I|First)\\.?"+g.prototype.regexps.space+"*";g.prototype.regexps.second="(?:2nd|2|II|Second)\\.?"+g.prototype.regexps.space+"*";g.prototype.regexps.third="(?:3rd|3|III|Third)\\.?"+g.prototype.regexps.space+"*";g.prototype.regexps.range_and="(?:[&\u2013\u2014-]|(?:and|compare|cf|see"+g.prototype.regexps.space+"+also|also|see)|(?:through|thru|to))";g.prototype.regexps.range_only="(?:[\u2013\u2014-]|(?:through|thru|to))";g.prototype.regexps.get_books=function(n,a){var c,
d,e,h,t;d=[{osis:["Ps"],apocrypha:!0,extra:"2",regexp:/(\b)(Ps151)(?=\.1)/g},{osis:["Gen"],regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")(G(?:e(?:n(?:i(?:[ei]s(?:[eiu]s)|s[eiu]s)|n(?:i(?:[ei]s(?:[eiu]s)|s[eiu]s)|e(?:es[eiu]s|s[eiu]s|is(?:[eiu]s)?)|sis)|e(?:es[eiu]s|is(?:[eiu]s)?|s(?:us|[ei]s?))|sis)?)?|n))(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)","gi")},{osis:["Exod"],regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")(Ex(?:d|o(?:d(?:[iu]s|[es])?)?)?)(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)",
"gi")},{osis:["Bel"],apocrypha:!0,regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")(Bel(?:[\\s\\xa0]*(?:and[\\s\\xa0]*(?:the[\\s\\xa0]*(?:Dragon|S(?:erpent|nake))|Dragon|S(?:erpent|nake))|&[\\s\\xa0]*(?:the[\\s\\xa0]*(?:Dragon|S(?:erpent|nake))|Dragon|S(?:erpent|nake))))?)(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)","gi")},{osis:["Lev"],regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")(L(?:iv[ei]t(?:(?:[ei]cus|cus))|e(?:v(?:et(?:[ei]cus|cus)|i(?:t(?:[ei]cus|cus))?)?)?|v))(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)",
"gi")},{osis:["Num"],regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")(N(?:m|u(?:m(?:b(?:ers?)?)?)?))(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)","gi")},{osis:["Sir"],apocrypha:!0,regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")((?:The[\\s\\xa0]*Wisdom[\\s\\xa0]*of[\\s\\xa0]*Jesus(?:,[\\s\\xa0]*Son[\\s\\xa0]*of[\\s\\xa0]*Sirach|[\\s\\xa0]*(?:Son[\\s\\xa0]*of[\\s\\xa0]*Sirach|ben[\\s\\xa0]*Sirach))|Wisdom[\\s\\xa0]*of[\\s\\xa0]*Jesus(?:,[\\s\\xa0]*Son[\\s\\xa0]*of[\\s\\xa0]*Sirach|[\\s\\xa0]*(?:Son[\\s\\xa0]*of[\\s\\xa0]*Sirach|ben[\\s\\xa0]*Sirach))|Ben[\\s\\xa0]*Sira|Ecc(?:l(?:esiasticus|us(?:iasticus)?)|s)|Sir(?:ach)?))(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)",
"gi")},{osis:["Wis"],apocrypha:!0,regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")((?:The[\\s\\xa0]*Wis(?:om[\\s\\xa0]*of[\\s\\xa0]*Solomon|d(?:om[\\s\\xa0]*of[\\s\\xa0]*Solomon|[\\s\\xa0]*of[\\s\\xa0]*Solomon)|[\\s\\xa0]*of[\\s\\xa0]*Solomon)|Wis(?:om[\\s\\xa0]*of[\\s\\xa0]*Solomon|[\\s\\xa0]*of[\\s\\xa0]*Solomon|d(?:[\\s\\xa0]*of[\\s\\xa0]*Solomon|om(?:[\\s\\xa0]*of[\\s\\xa0]*Solomon)?)?)?))(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)","gi")},{osis:["Lam"],
regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")(L(?:a(?:m(?:[ei]ntations?)?)?|m))(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)","gi")},{osis:["EpJer"],apocrypha:!0,regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")((?:The[\\s\\xa0]*(?:Let(?:ter[\\s\\xa0]*of[\\s\\xa0]*Jeremiah|\\.[\\s\\xa0]*of[\\s\\xa0]*Jeremiah|[\\s\\xa0]*of[\\s\\xa0]*Jeremiah)|Ep(?:istle[\\s\\xa0]*of[\\s\\xa0]*Jeremiah|\\.[\\s\\xa0]*of[\\s\\xa0]*Jeremiah|[\\s\\xa0]*of[\\s\\xa0]*Jeremiah))|Let(?:ter[\\s\\xa0]*of[\\s\\xa0]*Jeremiah|\\.[\\s\\xa0]*of[\\s\\xa0]*Jeremiah|[\\s\\xa0]*of[\\s\\xa0]*Jeremiah)|Ep(?:istle[\\s\\xa0]*of[\\s\\xa0]*Jerem(?:iah|y)|\\.[\\s\\xa0]*of[\\s\\xa0]*Jeremiah|[\\s\\xa0]*(?:of[\\s\\xa0]*Jeremiah|Jer)|Jer)))(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)",
"gi")},{osis:["Rev"],regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")(R(?:e(?:v(?:[ao]lations?|lations?|el(?:ations?)?)?)?|v))(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)","gi")},{osis:["PrMan"],apocrypha:!0,regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")((?:The[\\s\\xa0]*Pr(?:ayer(?:s[\\s\\xa0]*(?:of[\\s\\xa0]*Manasseh|Manasseh)|[\\s\\xa0]*(?:of[\\s\\xa0]*Manasseh|Manasseh))|[\\s\\xa0]*(?:of[\\s\\xa0]*Manasseh|Manasseh))|Pr(?:ayer(?:s[\\s\\xa0]*(?:of[\\s\\xa0]*Manasseh|Manasseh)|[\\s\\xa0]*(?:of[\\s\\xa0]*Manasseh|Manasseh))|[\\s\\xa0]*(?:of[\\s\\xa0]*Manasseh|Man(?:asseh)?)|Man)))(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)",
"gi")},{osis:["Deut"],regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")(D(?:u(?:ut(?:(?:[eo]ron(?:omy|my))|ron(?:omy|my))|et(?:(?:[eo]ron(?:omy|my))|ron(?:omy|my))?)|e(?:et(?:(?:[eo]ron(?:omy|my))|ron(?:omy|my))|u(?:t(?:(?:[eo]ron(?:omy|my))|ron(?:omy|my))?)?)|t))(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)","gi")},{osis:["Josh"],regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")(J(?:o(?:us(?:hua|ua)|s(?:ua|h(?:ua)?)?)|sh))(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)",
"gi")},{osis:["Judg"],regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")(J(?:udg(?:es)?|dgs?|gs?))(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)","gi")},{osis:["Ruth"],regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")(R(?:th?|u(?:th?)?))(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)","gi")},{osis:["1Esd"],apocrypha:!0,regexp:/(^|[^0-9A-Za-z\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u024f\u1e00-\u1eff\u2c60-\u2c7f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua7ff])((?:First[\s\xa0]*Esd(?:r(?:as)?)?|I(?:\.[\s\xa0]*Esd(?:r(?:as)?)?|[\s\xa0]*Esd(?:r(?:as)?)?)|1(?:st(?:\.[\s\xa0]*Esd(?:r(?:as)?)?|[\s\xa0]*Esd(?:r(?:as)?)?)|\.[\s\xa0]*Esd(?:r(?:as)?)?|[\s\xa0]*Esd(?:r(?:as)?)?|Esd)))(?:(?=[\d\s\xa0.:,;\x1e\x1f&\(\)\uff08\uff09\[\]\/"'\*=~\-\u2013\u2014])|$)/gi},
{osis:["2Esd"],apocrypha:!0,regexp:/(^|[^0-9A-Za-z\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u024f\u1e00-\u1eff\u2c60-\u2c7f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua7ff])((?:Second[\s\xa0]*Esd(?:r(?:as)?)?|II(?:\.[\s\xa0]*Esd(?:r(?:as)?)?|[\s\xa0]*Esd(?:r(?:as)?)?)|2(?:nd(?:\.[\s\xa0]*Esd(?:r(?:as)?)?|[\s\xa0]*Esd(?:r(?:as)?)?)|\.[\s\xa0]*Esd(?:r(?:as)?)?|[\s\xa0]*Esd(?:r(?:as)?)?|Esd)))(?:(?=[\d\s\xa0.:,;\x1e\x1f&\(\)\uff08\uff09\[\]\/"'\*=~\-\u2013\u2014])|$)/gi},{osis:["Isa"],
regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")(I(?:a|s(?:i(?:[ai](?:(?:[ai](?:(?:[ai]ha?|ha?))|ha?))|ha)|sah|a(?:a(?:[ai](?:(?:[ai]ha?|ha?))|ha?)|ha?|i(?:[ai](?:(?:[ai]ha?|ha?))|sha?|ha?)?)?)?))(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)","gi")},{osis:["2Sam"],regexp:/(^|[^0-9A-Za-z\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u024f\u1e00-\u1eff\u2c60-\u2c7f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua7ff])((?:Second[\s\xa0]*(?:Kingdoms|S(?:a(?:m(?:u[ae]l[ls]?)?)?|ma?))|II(?:\.[\s\xa0]*(?:Kingdoms|S(?:a(?:m(?:u[ae]l[ls]?)?)?|ma?))|[\s\xa0]*(?:Kingdoms|S(?:a(?:m(?:u[ae]l[ls]?)?)?|ma?)))|2(?:nd(?:\.[\s\xa0]*(?:Kingdoms|S(?:a(?:m(?:u[ae]l[ls]?)?)?|ma?))|[\s\xa0]*(?:Kingdoms|S(?:a(?:m(?:u[ae]l[ls]?)?)?|ma?)))|\.[\s\xa0]*(?:Kingdoms|S(?:a(?:m(?:u[ae]l[ls]?)?)?|ma?))|Sam|[\s\xa0]*(?:Kingdoms|S(?:a(?:m(?:u[ae]l[ls]?)?)?|ma?)?))))(?:(?=[\d\s\xa0.:,;\x1e\x1f&\(\)\uff08\uff09\[\]\/"'\*=~\-\u2013\u2014])|$)/gi},
{osis:["1Sam"],regexp:/(^|[^0-9A-Za-z\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u024f\u1e00-\u1eff\u2c60-\u2c7f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua7ff])((?:First[\s\xa0]*(?:Kingdoms|S(?:a(?:m(?:u[ae]l[ls]?)?)?|ma?))|I(?:\.[\s\xa0]*(?:Kingdoms|S(?:a(?:m(?:u[ae]l[ls]?)?)?|ma?))|[\s\xa0]*(?:Kingdoms|S(?:a(?:m(?:u[ae]l[ls]?)?)?|ma?)))|1(?:st(?:\.[\s\xa0]*(?:Kingdoms|S(?:a(?:m(?:u[ae]l[ls]?)?)?|ma?))|[\s\xa0]*(?:Kingdoms|S(?:a(?:m(?:u[ae]l[ls]?)?)?|ma?)))|\.[\s\xa0]*(?:Kingdoms|S(?:a(?:m(?:u[ae]l[ls]?)?)?|ma?))|Sam|[\s\xa0]*(?:Kingdoms|S(?:a(?:m(?:u[ae]l[ls]?)?)?|ma?)?)))|Samu(?:[ae]l[ls]?))(?:(?=[\d\s\xa0.:,;\x1e\x1f&\(\)\uff08\uff09\[\]\/"'\*=~\-\u2013\u2014])|$)/gi},
{osis:["2Kgs"],regexp:/(^|[^0-9A-Za-z\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u024f\u1e00-\u1eff\u2c60-\u2c7f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua7ff])((?:Fourth[\s\xa0]*Kingdoms|4(?:th(?:\.[\s\xa0]*Kingdoms|[\s\xa0]*Kingdoms)|\.[\s\xa0]*Kingdoms|[\s\xa0]*Kingdoms)|Second[\s\xa0]*K(?:gs?|i(?:gs?|n(?:gs?|s)?|s)?|n(?:gs?|s)?|s)?|I(?:V(?:\.[\s\xa0]*Kingdoms|[\s\xa0]*Kingdoms)|I(?:\.[\s\xa0]*K(?:gs?|i(?:gs?|n(?:gs?|s)?|s)?|n(?:gs?|s)?|s)?|[\s\xa0]*K(?:gs?|i(?:gs?|n(?:gs?|s)?|s)?|n(?:gs?|s)?|s)?))|2(?:nd(?:\.[\s\xa0]*K(?:gs?|i(?:gs?|n(?:gs?|s)?|s)?|n(?:gs?|s)?|s)?|[\s\xa0]*K(?:gs?|i(?:gs?|n(?:gs?|s)?|s)?|n(?:gs?|s)?|s)?)|\.[\s\xa0]*K(?:gs?|i(?:gs?|n(?:gs?|s)?|s)?|n(?:gs?|s)?|s)?|Kgs|[\s\xa0]*K(?:gs?|i(?:gs?|n(?:gs?|s)?|s)?|n(?:gs?|s)?|s)?)))(?:(?=[\d\s\xa0.:,;\x1e\x1f&\(\)\uff08\uff09\[\]\/"'\*=~\-\u2013\u2014])|$)/gi},
{osis:["1Kgs"],regexp:/(^|[^0-9A-Za-z\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u024f\u1e00-\u1eff\u2c60-\u2c7f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua7ff])((?:Third[\s\xa0]*Kingdoms|3(?:rd(?:\.[\s\xa0]*Kingdoms|[\s\xa0]*Kingdoms)|\.[\s\xa0]*Kingdoms|[\s\xa0]*Kingdoms)|First[\s\xa0]*K(?:gs?|i(?:gs?|n(?:gs?|s)?)?|n(?:gs?|s)?|s)?|1(?:st(?:\.[\s\xa0]*K(?:gs?|i(?:gs?|n(?:gs?|s)?)?|n(?:gs?|s)?|s)?|[\s\xa0]*K(?:gs?|i(?:gs?|n(?:gs?|s)?)?|n(?:gs?|s)?|s)?)|\.[\s\xa0]*K(?:gs?|i(?:gs?|n(?:gs?|s)?)?|n(?:gs?|s)?|s)?|Kgs|[\s\xa0]*K(?:gs?|i(?:gs?|n(?:gs?|s)?)?|n(?:gs?|s)?|s)?)|I(?:II(?:\.[\s\xa0]*Kingdoms|[\s\xa0]*Kingdoms)|\.[\s\xa0]*K(?:gs?|i(?:gs?|n(?:gs?|s)?)?|n(?:gs?|s)?|s)?|[\s\xa0]*K(?:gs?|i(?:gs?|n(?:gs?|s)?)?|n(?:gs?|s)?|s)?))|K(?:ngs|in(?:gs)?|gs))(?:(?=[\d\s\xa0.:,;\x1e\x1f&\(\)\uff08\uff09\[\]\/"'\*=~\-\u2013\u2014])|$)/gi},
{osis:["2Chr"],regexp:/(^|[^0-9A-Za-z\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u024f\u1e00-\u1eff\u2c60-\u2c7f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua7ff])((?:Second[\s\xa0]*(?:Paralipomenon|C(?:oron[io]cles?|ron(?:[io]cles?)?|h(?:oron[io]cles?|r(?:n|o(?:n(?:ic(?:als|les?)|ocles?)?)?)?)))|II(?:\.[\s\xa0]*(?:Paralipomenon|C(?:oron[io]cles?|ron(?:[io]cles?)?|h(?:oron[io]cles?|r(?:n|o(?:n(?:ic(?:als|les?)|ocles?)?)?)?)))|[\s\xa0]*(?:Paralipomenon|C(?:oron[io]cles?|ron(?:[io]cles?)?|h(?:oron[io]cles?|r(?:n|o(?:n(?:ic(?:als|les?)|ocles?)?)?)?))))|2(?:nd(?:\.[\s\xa0]*(?:Paralipomenon|C(?:oron[io]cles?|ron(?:[io]cles?)?|h(?:oron[io]cles?|r(?:n|o(?:n(?:ic(?:als|les?)|ocles?)?)?)?)))|[\s\xa0]*(?:Paralipomenon|C(?:oron[io]cles?|ron(?:[io]cles?)?|h(?:oron[io]cles?|r(?:n|o(?:n(?:ic(?:als|les?)|ocles?)?)?)?))))|\.[\s\xa0]*(?:Paralipomenon|C(?:oron[io]cles?|ron(?:[io]cles?)?|h(?:oron[io]cles?|r(?:n|o(?:n(?:ic(?:als|les?)|ocles?)?)?)?)))|[\s\xa0]*(?:Paralipomenon|C(?:oron[io]cles?|ron(?:[io]cles?)?|h(?:oron[io]cles?|r(?:n|o(?:n(?:ic(?:als|les?)|ocles?)?)?)?)?))|Chr)))(?:(?=[\d\s\xa0.:,;\x1e\x1f&\(\)\uff08\uff09\[\]\/"'\*=~\-\u2013\u2014])|$)/gi},
{osis:["1Chr"],regexp:/(^|[^0-9A-Za-z\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u024f\u1e00-\u1eff\u2c60-\u2c7f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua7ff])((?:Choronicle|First[\s\xa0]*(?:Paralipomenon|C(?:oron[io]cles?|ron(?:[io]cles?)?|h(?:oron(?:icles|ocles?)|r(?:n|o(?:n(?:ic(?:als|les?)|ocles?)?)?)?)))|I(?:\.[\s\xa0]*(?:Paralipomenon|C(?:oron[io]cles?|ron(?:[io]cles?)?|h(?:oron(?:icles|ocles?)|r(?:n|o(?:n(?:ic(?:als|les?)|ocles?)?)?)?)))|[\s\xa0]*(?:Paralipomenon|C(?:oron[io]cles?|ron(?:[io]cles?)?|h(?:oron(?:icles|ocles?)|r(?:n|o(?:n(?:ic(?:als|les?)|ocles?)?)?)?))))|1(?:st(?:\.[\s\xa0]*(?:Paralipomenon|C(?:oron[io]cles?|ron(?:[io]cles?)?|h(?:oron(?:icles|ocles?)|r(?:n|o(?:n(?:ic(?:als|les?)|ocles?)?)?)?)))|[\s\xa0]*(?:Paralipomenon|C(?:oron[io]cles?|ron(?:[io]cles?)?|h(?:oron(?:icles|ocles?)|r(?:n|o(?:n(?:ic(?:als|les?)|ocles?)?)?)?))))|\.[\s\xa0]*(?:Paralipomenon|C(?:oron[io]cles?|ron(?:[io]cles?)?|h(?:oron(?:icles|ocles?)|r(?:n|o(?:n(?:ic(?:als|les?)|ocles?)?)?)?)))|[\s\xa0]*(?:Paralipomenon|C(?:oron[io]cles?|ron(?:[io]cles?)?|h(?:oron(?:icles|ocles?)|r(?:n|o(?:n(?:ic(?:als|les?)|ocles?)?)?)?)?))|Chr))|(?:Paralipomenon|C(?:h(?:oron(?:icles|ocles?)|ron(?:ocles?|ic(?:als|les?)))|oron[oi]cles?|ron[oi]cles?)))(?:(?=[\d\s\xa0.:,;\x1e\x1f&\(\)\uff08\uff09\[\]\/"'\*=~\-\u2013\u2014])|$)/gi},
{osis:["Ezra"],regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")(E(?:sra|zra?))(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)","gi")},{osis:["Neh"],regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")(Neh[ei]mi(?:i(?:(?:[ai]h|h)|a(?:[ai]h|h)?|h))|Neh[ei]mi(?:a(?:(?:[ai]h|h)?|h))|Neh(?:[ei]mih)|Ne(?:h(?:amiah?|[ei]ma(?:(?:[ai](?:(?:[ai]h|h))|h)))?)?)(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)","gi")},{osis:["GkEsth"],
apocrypha:!0,regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")((?:Esther[\\s\\xa0]*\\(Greek\\)|G(?:k(?:[\\s\\xa0]*Esth?|Esth)|r(?:eek[\\s\\xa0]*Est(?:h(?:er)?)?|[\\s\\xa0]*Esth?))))(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)","gi")},{osis:["Esth"],regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")(Es(?:t(?:er|h(?:er|r)?)?)?)(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)","gi")},{osis:["Job"],regexp:RegExp("(^|"+
g.prototype.regexps.pre_book+")(J(?:ob|b))(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)","gi")},{osis:["Ps"],extra:"1",regexp:RegExp("(\\b)((?:(?:(?:1[02-5]|[2-9])?(?:1"+g.prototype.regexps.space+"*st|2"+g.prototype.regexps.space+"*nd|3"+g.prototype.regexps.space+"*rd))|1?1[123]"+g.prototype.regexps.space+"*th|(?:150|1[0-4][04-9]|[1-9][04-9]|[4-9])"+g.prototype.regexps.space+"*th)"+g.prototype.regexps.space+"*Psalm)\\b","gi")},{osis:["Ps"],regexp:RegExp("(^|"+
g.prototype.regexps.pre_book+")((?:Salms?|P(?:a(?:l(?:[lm]s|sms?)|m[ls]s|s(?:lms?|m(?:ls|s)|ss))|l(?:a(?:as?|m(?:as|s)?|s(?:m(?:as?|s)?|s)?)|ms|s(?:a(?:ms?)?|ms?|s(?:s(?:ss?)?)?))|s(?:l(?:a(?:lms?|ms?)?|m(?:as|[ms])?)|a(?:a(?:lms?|ms|a)|l(?:lms?|a(?:ms?|s)?|m(?:[alm]s?|s)?|s)?|m(?:as|l(?:[as]|ms?)?|ms?|s)?)?|m(?:a(?:l(?:ms?|s)?)?|ls?|m)?|sm?)?)))(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)","gi")},{osis:["PrAzar"],apocrypha:!0,regexp:RegExp("(^|"+g.prototype.regexps.pre_book+
")((?:The[\\s\\xa0]*Pr(?:ayer(?:s[\\s\\xa0]*of[\\s\\xa0]*Azariah?|[\\s\\xa0]*of[\\s\\xa0]*Azariah?)|[\\s\\xa0]*of[\\s\\xa0]*Azariah?)|Azariah?|Pr(?:ayer(?:s[\\s\\xa0]*of[\\s\\xa0]*Azariah?|[\\s\\xa0]*of[\\s\\xa0]*Azariah?)|[\\s\\xa0]*(?:of[\\s\\xa0]*Azariah?|Azar)|Az(?:ar|r))))(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)","gi")},{osis:["Prov"],regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")((?:Oroverbs|P(?:o(?:rverbs|verbs)|r(?:everbs?|o(?:b(?:verbs|erbs)|v(?:e(?:bs|rbs?))?)?|v(?:erbs?|bs?)?)?|v)))(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)",
"gi")},{osis:["Eccl"],regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")((?:Ec(?:c(?:l(?:es(?:s(?:aistes|ia(?:stes|tes))|a(?:i(?:astes|stes|tes)|stes)|i(?:iastes|stes|a(?:i(?:astes|stes)|a(?:stes|tes)|st(?:ies|es?)?|tes?)|tes))?)?)?|l(?:es(?:sia(?:stes|tes)|i(?:a(?:iastes|stes?|tes)|stes)))?)?|Qo(?:h(?:eleth)?)?))(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)","gi")},{osis:["SgThree"],apocrypha:!0,regexp:/(^|[^0-9A-Za-z\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u024f\u1e00-\u1eff\u2c60-\u2c7f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua7ff])((?:The[\s\xa0]*Song[\s\xa0]*of[\s\xa0]*(?:Three[\s\xa0]*(?:Holy[\s\xa0]*Children|You(?:ng[\s\xa0]*Men|ths)|Jews)|the[\s\xa0]*(?:Three[\s\xa0]*(?:Holy[\s\xa0]*Children|You(?:ng[\s\xa0]*Men|ths)|Jews)|3[\s\xa0]*(?:Holy[\s\xa0]*Children|You(?:ng[\s\xa0]*Men|ths)|Jews))|3[\s\xa0]*(?:Holy[\s\xa0]*Children|You(?:ng[\s\xa0]*Men|ths)|Jews))|S(?:ong[\s\xa0]*Three|ng[\s\xa0]*Three|\.[\s\xa0]*(?:of[\s\xa0]*(?:Th(?:ree(?:\.[\s\xa0]*(?:Ch|Y)|[\s\xa0]*(?:Ch|Y))|\.[\s\xa0]*(?:Ch|Y)|[\s\xa0]*(?:Ch|Y))|3(?:\.[\s\xa0]*(?:Ch|Y)|[\s\xa0]*(?:Ch|Y)))|Th(?:ree(?:\.[\s\xa0]*(?:Ch|Y)|[\s\xa0]*(?:Ch|Y))|\.[\s\xa0]*(?:Ch|Y)|[\s\xa0]*(?:Ch|Y))|3(?:\.[\s\xa0]*(?:Ch|Y)|[\s\xa0]*(?:Ch|Y)))|g(?:Three|[\s\xa0]*Thr(?:ee)?)|[\s\xa0]*(?:of[\s\xa0]*(?:Th(?:ree(?:\.[\s\xa0]*(?:Ch|Y)|[\s\xa0]*(?:Ch|Y))|\.[\s\xa0]*(?:Ch|Y)|[\s\xa0]*(?:Ch|Y))|3(?:\.[\s\xa0]*(?:Ch|Y)|[\s\xa0]*(?:Ch|Y)))|Th(?:ree(?:\.[\s\xa0]*(?:Ch|Y)|[\s\xa0]*(?:Ch|Y))|\.[\s\xa0]*(?:Ch|Y)|[\s\xa0]*(?:Ch|Y))|3(?:\.[\s\xa0]*(?:Ch|Y)|[\s\xa0]*(?:Ch|Y)))))|Song[\s\xa0]*of[\s\xa0]*(?:the[\s\xa0]*(?:Three[\s\xa0]*(?:Holy[\s\xa0]*Children|You(?:ng[\s\xa0]*Men|ths)|Jews)|3[\s\xa0]*(?:Holy[\s\xa0]*Children|You(?:ng[\s\xa0]*Men|ths)|Jews))|Three[\s\xa0]*(?:Holy[\s\xa0]*Children|You(?:ng[\s\xa0]*Men|ths)|Jews)|3[\s\xa0]*(?:Holy[\s\xa0]*Children|You(?:ng[\s\xa0]*Men|ths)|Jews)))(?:(?=[\d\s\xa0.:,;\x1e\x1f&\(\)\uff08\uff09\[\]\/"'\*=~\-\u2013\u2014])|$)/gi},
{osis:["Song"],regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")((?:The[\\s\\xa0]*Song(?:s[\\s\\xa0]*of[\\s\\xa0]*S(?:alom[ao]ns?|o(?:lom[ao]ns?|ngs?))|[\\s\\xa0]*of[\\s\\xa0]*S(?:alom[ao]ns?|o(?:lom[ao]ns?|ngs?)))|S(?:[\\s\\xa0]*of[\\s\\xa0]*S|ngs?|S|gs?|o[Sln]?))|Song(?:[\\s\\xa0]*of[\\s\\xa0]*S(?:alom[oa]ns?|o(?:lom[oa]ns?|ngs?))|s(?:[\\s\\xa0]*of[\\s\\xa0]*S(?:alom[oa]ns?|o(?:lom[ao]ns?|ngs?)))?)?)(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)","gi")},
{osis:["Jer"],regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")(J(?:e(?:r(?:a(?:iah|m(?:a(?:ih|h)|i(?:ih|ah?|ha?)))|im(?:ah|i(?:[ai]h|h))|m[im]ah|e(?:m(?:a(?:i(?:ah|h)|h)|i(?:ih|ah?|e|ha?)?))?)?)?|r))(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)","gi")},{osis:["Ezek"],regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")(E(?:x(?:[ei](?:(?:[ei]k(?:iel|el))|k(?:iel|el)))|z(?:i(?:(?:[ei]k(?:iel|el))|k(?:iel|el))|e(?:(?:[ei]k(?:iel|el))|k(?:i[ae]l|el)?)?|k)))(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)",
"gi")},{osis:["Dan"],regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")(D(?:a(?:n(?:i[ae]l)?)?|[ln]))(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)","gi")},{osis:["Hos"],regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")(H(?:o(?:s(?:ea)?)?|s))(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)","gi")},{osis:["Joel"],regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")(J(?:oel?|l))(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)",
"gi")},{osis:["Amos"],regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")(Am(?:os?|s)?)(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)","gi")},{osis:["Obad"],regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")(Ob(?:idah|a(?:d(?:iah?)?)?|d)?)(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)","gi")},{osis:["Jonah"],regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")(J(?:nh|on(?:ah)?))(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)",
"gi")},{osis:["Mic"],regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")(Mi(?:c(?:hah?|ah?)?)?)(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)","gi")},{osis:["Nah"],regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")(Na(?:h(?:um?)?)?)(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)","gi")},{osis:["Hab"],regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")(Hab(?:bak(?:k[au]kk?|[au]kk?)|ak(?:k[au]kk?|[au]kk?)|k)?)(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)",
"gi")},{osis:["Zeph"],regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")(Z(?:a(?:phaniah?|faniah?)|e(?:faniah?|p(?:h(?:an(?:aiah?|iah?))?)?)|ph?))(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)","gi")},{osis:["Hag"],regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")(H(?:ag(?:ai|g(?:ia[hi]|ai)?)?|gg?))(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)","gi")},{osis:["Zech"],regexp:RegExp("(^|"+g.prototype.regexps.pre_book+
")(Z[ae]ch(?:[ae]ra(?:(?:[ai]h|h)))|Z(?:a(?:kariah|c(?:h(?:[ae]ri(?:ih|ah?|h))?)?)|e(?:kariah?|c(?:h(?:[ae]ri(?:ih|ah?|h))?)?)|ch?))(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)","gi")},{osis:["Mal"],regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")(Mal(?:ichi|ac(?:hi?|i))?)(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)","gi")},{osis:["Matt"],regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")((?:The[\\s\\xa0]*Gospel[\\s\\xa0]*(?:according[\\s\\xa0]*to[\\s\\xa0]*(?:S(?:aint[\\s\\xa0]*M(?:at(?:h(?:(?:[ht](?:(?:[ht](?:iew|ew))|iew|ew))|iew|ew)|t(?:h(?:(?:[ht](?:iew|ew))|iew|ew|we)|iew|t(?:h(?:iew|ew)|iew|ew)|ew|we)?)?|t)|t(?:\\.[\\s\\xa0]*M(?:at(?:h(?:(?:[ht](?:(?:[ht](?:iew|ew))|iew|ew))|iew|ew)|t(?:h(?:(?:[ht](?:iew|ew))|iew|ew|we)|iew|t(?:h(?:iew|ew)|iew|ew)|ew|we)?)?|t)|[\\s\\xa0]*M(?:at(?:h(?:(?:[ht](?:(?:[ht](?:iew|ew))|iew|ew))|iew|ew)|t(?:h(?:(?:[ht](?:iew|ew))|iew|ew|we)|iew|t(?:h(?:iew|ew)|iew|ew)|ew|we)?)?|t)))|M(?:at(?:h(?:(?:[ht](?:(?:[ht](?:iew|ew))|iew|ew))|iew|ew)|t(?:h(?:(?:[ht](?:iew|ew))|iew|ew|we)|iew|t(?:h(?:iew|ew)|iew|ew)|ew|we)?)?|t))|of[\\s\\xa0]*(?:S(?:aint[\\s\\xa0]*M(?:at(?:h(?:(?:[ht](?:(?:[ht](?:iew|ew))|iew|ew))|iew|ew)|t(?:h(?:(?:[ht](?:iew|ew))|iew|ew|we)|iew|t(?:h(?:iew|ew)|iew|ew)|ew|we)?)?|t)|t(?:\\.[\\s\\xa0]*M(?:at(?:h(?:(?:[ht](?:(?:[ht](?:iew|ew))|iew|ew))|iew|ew)|t(?:h(?:(?:[ht](?:iew|ew))|iew|ew|we)|iew|t(?:h(?:iew|ew)|iew|ew)|ew|we)?)?|t)|[\\s\\xa0]*M(?:at(?:h(?:(?:[ht](?:(?:[ht](?:iew|ew))|iew|ew))|iew|ew)|t(?:h(?:(?:[ht](?:iew|ew))|iew|ew|we)|iew|t(?:h(?:iew|ew)|iew|ew)|ew|we)?)?|t)))|M(?:at(?:h(?:(?:[ht](?:(?:[ht](?:iew|ew))|iew|ew))|iew|ew)|t(?:h(?:(?:[ht](?:iew|ew))|iew|ew|we)|iew|t(?:h(?:iew|ew)|iew|ew)|ew|we)?)?|t)))|Mtt)|(?:Gospel[\\s\\xa0]*(?:according[\\s\\xa0]*to[\\s\\xa0]*(?:S(?:aint[\\s\\xa0]*M(?:at(?:h(?:(?:[th](?:iew|(?:[th](?:iew|ew))|ew))|iew|ew)|t(?:t(?:iew|h(?:iew|ew)|ew)|h(?:(?:[ht](?:iew|ew))|iew|we|ew)|iew|we|ew)?)?|t)|t(?:\\.[\\s\\xa0]*M(?:at(?:h(?:(?:[th](?:(?:[th](?:iew|ew))|iew|ew))|iew|ew)|t(?:iew|t(?:h(?:iew|ew)|iew|ew)|h(?:(?:[ht](?:iew|ew))|iew|ew|we)|we|ew)?)?|t)|[\\s\\xa0]*M(?:at(?:h(?:iew|(?:[th](?:iew|(?:[th](?:iew|ew))|ew))|ew)|t(?:t(?:iew|h(?:iew|ew)|ew)|iew|h(?:(?:[th](?:iew|ew))|iew|we|ew)|ew|we)?)?|t)))|M(?:at(?:h(?:(?:[ht](?:(?:[th](?:iew|ew))|iew|ew))|iew|ew)|t(?:t(?:h(?:iew|ew)|iew|ew)|iew|h(?:iew|(?:[th](?:iew|ew))|we|ew)|ew|we)?)?|t))|of[\\s\\xa0]*(?:S(?:aint[\\s\\xa0]*M(?:at(?:h(?:(?:[th](?:(?:[ht](?:iew|ew))|iew|ew))|iew|ew)|t(?:iew|h(?:(?:[th](?:iew|ew))|iew|we|ew)|t(?:h(?:iew|ew)|iew|ew)|ew|we)?)?|t)|t(?:\\.[\\s\\xa0]*M(?:at(?:h(?:iew|(?:[ht](?:iew|(?:[ht](?:iew|ew))|ew))|ew)|t(?:t(?:h(?:iew|ew)|iew|ew)|h(?:(?:[ht](?:iew|ew))|iew|we|ew)|iew|we|ew)?)?|t)|[\\s\\xa0]*M(?:at(?:h(?:(?:[th](?:(?:[th](?:iew|ew))|iew|ew))|iew|ew)|t(?:iew|t(?:h(?:iew|ew)|iew|ew)|h(?:iew|(?:[th](?:iew|ew))|ew|we)|ew|we)?)?|t)))|M(?:at(?:h(?:(?:[ht](?:iew|(?:[ht](?:iew|ew))|ew))|iew|ew)|t(?:iew|t(?:h(?:iew|ew)|iew|ew)|h(?:iew|(?:[ht](?:iew|ew))|we|ew)|ew|we)?)?|t)))|S(?:aint[\\s\\xa0]*M(?:at(?:h(?:(?:[th](?:(?:[th](?:iew|ew))|iew|ew))|iew|ew)|t(?:iew|t(?:iew|h(?:iew|ew)|ew)|h(?:iew|(?:[ht](?:iew|ew))|ew|we)|we|ew)?)?|t)|t(?:\\.[\\s\\xa0]*M(?:at(?:h(?:iew|(?:[ht](?:(?:[th](?:iew|ew))|iew|ew))|ew)|t(?:h(?:(?:[th](?:iew|ew))|iew|we|ew)|iew|t(?:iew|h(?:iew|ew)|ew)|we|ew)?)?|t)|[\\s\\xa0]*M(?:at(?:h(?:(?:[th](?:iew|(?:[th](?:iew|ew))|ew))|iew|ew)|t(?:h(?:iew|(?:[ht](?:iew|ew))|we|ew)|t(?:h(?:iew|ew)|iew|ew)|iew|we|ew)?)?|t)))|M(?:at(?:h(?:iew|(?:[th](?:(?:[ht](?:iew|ew))|iew|ew))|ew)|t(?:iew|t(?:h(?:iew|ew)|iew|ew)|h(?:iew|(?:[ht](?:iew|ew))|we|ew)|we|ew)?)?|t)))(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)",
"gi")},{osis:["Mark"],regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")(The[\\s\\xa0]*Gospel[\\s\\xa0]*(?:according[\\s\\xa0]*to[\\s\\xa0]*(?:S(?:aint[\\s\\xa0]*M(?:ark?|k|rk?)|t(?:\\.[\\s\\xa0]*M(?:ark?|k|rk?)|[\\s\\xa0]*M(?:ark?|k|rk?)))|M(?:ark?|k|rk?))|of[\\s\\xa0]*(?:S(?:aint[\\s\\xa0]*M(?:ark?|k|rk?)|t(?:\\.[\\s\\xa0]*M(?:ark?|k|rk?)|[\\s\\xa0]*M(?:ark?|k|rk?)))|M(?:ark?|k|rk?)))|(?:Gospel[\\s\\xa0]*(?:according[\\s\\xa0]*to[\\s\\xa0]*(?:S(?:aint[\\s\\xa0]*M(?:ark?|rk?|k)|t(?:\\.[\\s\\xa0]*M(?:ark?|rk?|k)|[\\s\\xa0]*M(?:ark?|rk?|k)))|M(?:ark?|k|rk?))|of[\\s\\xa0]*(?:S(?:aint[\\s\\xa0]*M(?:ark?|k|rk?)|t(?:\\.[\\s\\xa0]*M(?:ark?|k|rk?)|[\\s\\xa0]*M(?:ark?|rk?|k)))|M(?:ark?|k|rk?)))|S(?:aint[\\s\\xa0]*M(?:ark?|rk?|k)|t(?:\\.[\\s\\xa0]*M(?:ark?|k|rk?)|[\\s\\xa0]*M(?:ark?|k|rk?)))|M(?:ark?|rk?|k)))(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)",
"gi")},{osis:["Luke"],regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")(The[\\s\\xa0]*Gospel[\\s\\xa0]*(?:according[\\s\\xa0]*to[\\s\\xa0]*(?:S(?:aint[\\s\\xa0]*L(?:k|u(?:ke?)?)|t(?:\\.[\\s\\xa0]*L(?:k|u(?:ke?)?)|[\\s\\xa0]*L(?:k|u(?:ke?)?)))|L(?:k|u(?:ke?)?))|of[\\s\\xa0]*(?:S(?:aint[\\s\\xa0]*L(?:k|u(?:ke?)?)|t(?:\\.[\\s\\xa0]*L(?:k|u(?:ke?)?)|[\\s\\xa0]*L(?:k|u(?:ke?)?)))|L(?:k|u(?:ke?)?)))|(?:Gospel[\\s\\xa0]*(?:according[\\s\\xa0]*to[\\s\\xa0]*(?:S(?:aint[\\s\\xa0]*L(?:u(?:ke?)?|k)|t(?:\\.[\\s\\xa0]*L(?:u(?:ke?)?|k)|[\\s\\xa0]*L(?:k|u(?:ke?)?)))|L(?:k|u(?:ke?)?))|of[\\s\\xa0]*(?:S(?:aint[\\s\\xa0]*L(?:k|u(?:ke?)?)|t(?:\\.[\\s\\xa0]*L(?:k|u(?:ke?)?)|[\\s\\xa0]*L(?:k|u(?:ke?)?)))|L(?:u(?:ke?)?|k)))|S(?:aint[\\s\\xa0]*L(?:u(?:ke?)?|k)|t(?:\\.[\\s\\xa0]*L(?:u(?:ke?)?|k)|[\\s\\xa0]*L(?:k|u(?:ke?)?)))|L(?:k|u(?:ke?)?)))(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)",
"gi")},{osis:["1John"],regexp:/(^|[^0-9A-Za-z\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u024f\u1e00-\u1eff\u2c60-\u2c7f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua7ff])((?:First[\s\xa0]*J(?:phn|h(?:[ho]n|n)?|n|o(?:phn|nh|on|h[mn]?)?)|1(?:st(?:\.[\s\xa0]*J(?:phn|h(?:[ho]n|n)?|n|o(?:phn|nh|on|h[mn]?)?)|[\s\xa0]*J(?:phn|h(?:[ho]n|n)?|n|o(?:phn|nh|on|h[mn]?)?))|\.[\s\xa0]*J(?:phn|h(?:[ho]n|n)?|n|o(?:phn|nh|on|h[mn]?)?)|John|[\s\xa0]*J(?:phn|h(?:[ho]n|n)?|n|o(?:phn|nh|on|h[mn]?)?))|I(?:\.[\s\xa0]*J(?:phn|h(?:[ho]n|n)?|n|o(?:phn|nh|on|h[mn]?)?)|[\s\xa0]*J(?:phn|h(?:[ho]n|n)?|n|o(?:phn|nh|on|h[mn]?)?))))(?:(?=[\d\s\xa0.:,;\x1e\x1f&\(\)\uff08\uff09\[\]\/"'\*=~\-\u2013\u2014])|$)/gi},
{osis:["2John"],regexp:/(^|[^0-9A-Za-z\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u024f\u1e00-\u1eff\u2c60-\u2c7f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua7ff])((?:Second[\s\xa0]*J(?:phn|h(?:[ho]n|n)?|n|o(?:phn|nh|on|h[mn]?)?)|II(?:\.[\s\xa0]*J(?:phn|h(?:[ho]n|n)?|n|o(?:phn|nh|on|h[mn]?)?)|[\s\xa0]*J(?:phn|h(?:[ho]n|n)?|n|o(?:phn|nh|on|h[mn]?)?))|2(?:nd(?:\.[\s\xa0]*J(?:phn|h(?:[ho]n|n)?|n|o(?:phn|nh|on|h[mn]?)?)|[\s\xa0]*J(?:phn|h(?:[ho]n|n)?|n|o(?:phn|nh|on|h[mn]?)?))|\.[\s\xa0]*J(?:phn|h(?:[ho]n|n)?|n|o(?:phn|nh|on|h[mn]?)?)|John|[\s\xa0]*J(?:phn|h(?:[ho]n|n)?|n|o(?:phn|nh|on|h[mn]?)?))))(?:(?=[\d\s\xa0.:,;\x1e\x1f&\(\)\uff08\uff09\[\]\/"'\*=~\-\u2013\u2014])|$)/gi},
{osis:["3John"],regexp:/(^|[^0-9A-Za-z\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u024f\u1e00-\u1eff\u2c60-\u2c7f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua7ff])((?:Third[\s\xa0]*J(?:phn|h(?:[ho]n|n)?|n|o(?:phn|nh|on|h[mn]?)?)|III(?:\.[\s\xa0]*J(?:phn|h(?:[ho]n|n)?|n|o(?:phn|nh|on|h[mn]?)?)|[\s\xa0]*J(?:phn|h(?:[ho]n|n)?|n|o(?:phn|nh|on|h[mn]?)?))|3(?:rd(?:\.[\s\xa0]*J(?:phn|h(?:[ho]n|n)?|n|o(?:phn|nh|on|h[mn]?)?)|[\s\xa0]*J(?:phn|h(?:[ho]n|n)?|n|o(?:phn|nh|on|h[mn]?)?))|\.[\s\xa0]*J(?:phn|h(?:[ho]n|n)?|n|o(?:phn|nh|on|h[mn]?)?)|John|[\s\xa0]*J(?:phn|h(?:[ho]n|n)?|n|o(?:phn|nh|on|h[mn]?)?))))(?:(?=[\d\s\xa0.:,;\x1e\x1f&\(\)\uff08\uff09\[\]\/"'\*=~\-\u2013\u2014])|$)/gi},
{osis:["John"],regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")(The[\\s\\xa0]*Gospel[\\s\\xa0]*(?:according[\\s\\xa0]*to[\\s\\xa0]*(?:S(?:aint[\\s\\xa0]*J(?:phn|o(?:phn|nh|on|h[mn]?)|h(?:[ho]n|n)?|n)|t(?:\\.[\\s\\xa0]*J(?:phn|o(?:phn|nh|on|h[mn]?)|h(?:[ho]n|n)?|n)|[\\s\\xa0]*J(?:phn|o(?:phn|nh|on|h[mn]?)|h(?:[ho]n|n)?|n)))|J(?:phn|o(?:phn|nh|on|h[mn]?)|h(?:[ho]n|n)?|n))|of[\\s\\xa0]*(?:S(?:aint[\\s\\xa0]*J(?:phn|o(?:phn|nh|on|h[mn]?)|h(?:[ho]n|n)?|n)|t(?:\\.[\\s\\xa0]*J(?:phn|o(?:phn|nh|on|h[mn]?)|h(?:[ho]n|n)?|n)|[\\s\\xa0]*J(?:phn|o(?:phn|nh|on|h[mn]?)|h(?:[ho]n|n)?|n)))|J(?:phn|o(?:phn|nh|on|h[mn]?)|h(?:[ho]n|n)?|n)))|(?:Gospel[\\s\\xa0]*(?:according[\\s\\xa0]*to[\\s\\xa0]*(?:S(?:aint[\\s\\xa0]*J(?:phn|o(?:phn|nh|on|h[mn]?)|h(?:[ho]n|n)?|n)|t(?:\\.[\\s\\xa0]*J(?:phn|o(?:phn|on|nh|h[nm]?)|h(?:[oh]n|n)?|n)|[\\s\\xa0]*J(?:phn|o(?:phn|on|nh|h[mn]?)|n|h(?:[oh]n|n)?)))|J(?:phn|o(?:phn|nh|on|h[mn]?)|h(?:[oh]n|n)?|n))|of[\\s\\xa0]*(?:S(?:aint[\\s\\xa0]*J(?:phn|o(?:phn|nh|on|h[mn]?)|n|h(?:[ho]n|n)?)|t(?:\\.[\\s\\xa0]*J(?:phn|o(?:phn|nh|on|h[nm]?)|n|h(?:[ho]n|n)?)|[\\s\\xa0]*J(?:phn|o(?:phn|on|nh|h[nm]?)|h(?:[oh]n|n)?|n)))|J(?:phn|o(?:phn|nh|on|h[mn]?)|h(?:[ho]n|n)?|n)))|S(?:aint[\\s\\xa0]*J(?:phn|o(?:phn|nh|on|h[nm]?)|h(?:[oh]n|n)?|n)|t(?:\\.[\\s\\xa0]*J(?:phn|o(?:phn|nh|on|h[mn]?)|n|h(?:[oh]n|n)?)|[\\s\\xa0]*J(?:phn|o(?:phn|nh|on|h[mn]?)|n|h(?:[ho]n|n)?)))|J(?:phn|o(?:phn|nh|on|h[nm]?)|h(?:[ho]n|n)?|n)))(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)",
"gi")},{osis:["Acts"],regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")((?:The[\\s\\xa0]*Acts[\\s\\xa0]*of[\\s\\xa0]*the[\\s\\xa0]*Apostles|Ac(?:t(?:s(?:[\\s\\xa0]*of[\\s\\xa0]*the[\\s\\xa0]*Apostles|ss?)?)?)?))(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)","gi")},{osis:["Rom"],regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")(R(?:pmans|m(?:ns?|s)?|o(?:amns|m(?:a(?:sn|n(?:ds|s)?)|s)?|s)?))(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)",
"gi")},{osis:["2Cor"],regexp:/(^|[^0-9A-Za-z\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u024f\u1e00-\u1eff\u2c60-\u2c7f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua7ff])((?:Second[\s\xa0]*C(?:hor(?:anthians|i(?:nth(?:ains|i(?:ans|ns))|thians)|nthians)|o(?:r(?:anthians|ri(?:nth(?:ains|ians)|th(?:ains|ians))|n(?:i(?:nth(?:ians|a(?:ins|ns))|th(?:ians|a(?:i(?:ans|ns)|ns)))|th(?:ains|i(?:ians|ans|ns)))|i(?:inthi(?:ians|ans)|th(?:oans|a(?:ins|ns)|i(?:ians|ans|ns))|n(?:[an]thians|ith(?:i(?:ans|nas)|a(?:ins|ns))|t(?:i[ao]ns|h(?:o(?:ians|ans)|a(?:i(?:ans|ns)|ns)|i(?:ians|ons|a(?:[ai]ns|n(?:[ao]s|s)?)|n(?:as|s)))?)?)?)|th(?:ians?)?)?)?)|II(?:\.[\s\xa0]*C(?:hor(?:anthians|i(?:nth(?:ains|i(?:ans|ns))|thians)|nthians)|o(?:r(?:anthians|ri(?:nth(?:ains|ians)|th(?:ains|ians))|n(?:i(?:nth(?:ians|a(?:ins|ns))|th(?:ians|a(?:i(?:ans|ns)|ns)))|th(?:ains|i(?:ians|ans|ns)))|i(?:inthi(?:ians|ans)|th(?:oans|a(?:ins|ns)|i(?:ians|ans|ns))|n(?:[an]thians|ith(?:i(?:ans|nas)|a(?:ins|ns))|t(?:i[ao]ns|h(?:o(?:ians|ans)|a(?:i(?:ans|ns)|ns)|i(?:ians|ons|a(?:[ai]ns|n(?:[ao]s|s)?)|n(?:as|s)))?)?)?)|th(?:ians?)?)?)?)|[\s\xa0]*C(?:hor(?:anthians|i(?:nth(?:ains|i(?:ans|ns))|thians)|nthians)|o(?:r(?:anthians|ri(?:nth(?:ains|ians)|th(?:ains|ians))|n(?:i(?:nth(?:ians|a(?:ins|ns))|th(?:ians|a(?:i(?:ans|ns)|ns)))|th(?:ains|i(?:ians|ans|ns)))|i(?:inthi(?:ians|ans)|th(?:oans|a(?:ins|ns)|i(?:ians|ans|ns))|n(?:[an]thians|ith(?:i(?:ans|nas)|a(?:ins|ns))|t(?:i[ao]ns|h(?:o(?:ians|ans)|a(?:i(?:ans|ns)|ns)|i(?:ians|ons|a(?:[ai]ns|n(?:[ao]s|s)?)|n(?:as|s)))?)?)?)|th(?:ians?)?)?)?))|2(?:nd(?:\.[\s\xa0]*C(?:hor(?:anthians|i(?:nth(?:ains|i(?:ans|ns))|thians)|nthians)|o(?:r(?:anthians|ri(?:nth(?:ains|ians)|th(?:ains|ians))|n(?:i(?:nth(?:ians|a(?:ins|ns))|th(?:ians|a(?:i(?:ans|ns)|ns)))|th(?:ains|i(?:ians|ans|ns)))|i(?:inthi(?:ians|ans)|th(?:oans|a(?:ins|ns)|i(?:ians|ans|ns))|n(?:[an]thians|ith(?:i(?:ans|nas)|a(?:ins|ns))|t(?:i[ao]ns|h(?:o(?:ians|ans)|a(?:i(?:ans|ns)|ns)|i(?:ians|ons|a(?:[ai]ns|n(?:[ao]s|s)?)|n(?:as|s)))?)?)?)|th(?:ians?)?)?)?)|[\s\xa0]*C(?:hor(?:anthians|i(?:nth(?:ains|i(?:ans|ns))|thians)|nthians)|o(?:r(?:anthians|ri(?:nth(?:ains|ians)|th(?:ains|ians))|n(?:i(?:nth(?:ians|a(?:ins|ns))|th(?:ians|a(?:i(?:ans|ns)|ns)))|th(?:ains|i(?:ians|ans|ns)))|i(?:inthi(?:ians|ans)|th(?:oans|a(?:ins|ns)|i(?:ians|ans|ns))|n(?:[an]thians|ith(?:i(?:ans|nas)|a(?:ins|ns))|t(?:i[ao]ns|h(?:o(?:ians|ans)|a(?:i(?:ans|ns)|ns)|i(?:ians|ons|a(?:[ai]ns|n(?:[ao]s|s)?)|n(?:as|s)))?)?)?)|th(?:ians?)?)?)?))|\.[\s\xa0]*C(?:hor(?:anthians|i(?:nth(?:ains|i(?:ans|ns))|thians)|nthians)|o(?:r(?:anthians|ri(?:nth(?:ains|ians)|th(?:ains|ians))|n(?:i(?:nth(?:ians|a(?:ins|ns))|th(?:ians|a(?:i(?:ans|ns)|ns)))|th(?:ains|i(?:ians|ans|ns)))|i(?:inthi(?:ians|ans)|th(?:oans|a(?:ins|ns)|i(?:ians|ans|ns))|n(?:[an]thians|ith(?:i(?:ans|nas)|a(?:ins|ns))|t(?:i[ao]ns|h(?:o(?:ians|ans)|a(?:i(?:ans|ns)|ns)|i(?:ians|ons|a(?:[ai]ns|n(?:[ao]s|s)?)|n(?:as|s)))?)?)?)|th(?:ians?)?)?)?)|[\s\xa0]*C(?:hor(?:anthians|i(?:nth(?:ains|i(?:ans|ns))|thians)|nthians)|o(?:r(?:anthians|ri(?:nth(?:ains|ians)|th(?:ains|ians))|n(?:i(?:nth(?:ians|a(?:ins|ns))|th(?:ians|a(?:i(?:ans|ns)|ns)))|th(?:ains|i(?:ians|ans|ns)))|i(?:inthi(?:ians|ans)|th(?:oans|a(?:ins|ns)|i(?:ians|ans|ns))|n(?:[an]thians|ith(?:i(?:ans|nas)|a(?:ins|ns))|t(?:i[ao]ns|h(?:o(?:ians|ans)|a(?:i(?:ans|ns)|ns)|i(?:ians|ons|a(?:[ai]ns|n(?:[ao]s|s)?)|n(?:as|s)))?)?)?)|th(?:ians?)?)?)?)|Cor)))(?:(?=[\d\s\xa0.:,;\x1e\x1f&\(\)\uff08\uff09\[\]\/"'\*=~\-\u2013\u2014])|$)/gi},
{osis:["1Cor"],regexp:/(^|[^0-9A-Za-z\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u024f\u1e00-\u1eff\u2c60-\u2c7f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua7ff])((?:First[\s\xa0]*C(?:hor(?:anthians|i(?:nth(?:ains|i(?:ans|ns))|thians)|nthians)|o(?:r(?:anthians|ri(?:nth(?:ains|ians)|th(?:ains|ians))|n(?:i(?:nth(?:ians|a(?:ins|ns))|th(?:ians|a(?:i(?:ans|ns)|ns)))|th(?:ains|i(?:ians|ans|ns)))|i(?:inthi(?:ians|ans)|th(?:oans|a(?:ins|ns)|i(?:ians|ans|ns))|n(?:[an]thians|ith(?:i(?:ans|nas)|a(?:ins|ns))|t(?:i[ao]ns|h(?:o(?:ians|ans)|a(?:i(?:ans|ns)|ns)|i(?:ians|ons|a(?:[ai]ns|n(?:[ao]s|s)?)|n(?:as|s)))?)?)?)|th(?:ians?)?)?)?)|1(?:st(?:\.[\s\xa0]*C(?:hor(?:anthians|i(?:nth(?:ains|i(?:ans|ns))|thians)|nthians)|o(?:r(?:anthians|ri(?:nth(?:ains|ians)|th(?:ains|ians))|n(?:i(?:nth(?:ians|a(?:ins|ns))|th(?:ians|a(?:i(?:ans|ns)|ns)))|th(?:ains|i(?:ians|ans|ns)))|i(?:inthi(?:ians|ans)|th(?:oans|a(?:ins|ns)|i(?:ians|ans|ns))|n(?:[an]thians|ith(?:i(?:ans|nas)|a(?:ins|ns))|t(?:i[ao]ns|h(?:o(?:ians|ans)|a(?:i(?:ans|ns)|ns)|i(?:ians|ons|a(?:[ai]ns|n(?:[ao]s|s)?)|n(?:as|s)))?)?)?)|th(?:ians?)?)?)?)|[\s\xa0]*C(?:hor(?:anthians|i(?:nth(?:ains|i(?:ans|ns))|thians)|nthians)|o(?:r(?:anthians|ri(?:nth(?:ains|ians)|th(?:ains|ians))|n(?:i(?:nth(?:ians|a(?:ins|ns))|th(?:ians|a(?:i(?:ans|ns)|ns)))|th(?:ains|i(?:ians|ans|ns)))|i(?:inthi(?:ians|ans)|th(?:oans|a(?:ins|ns)|i(?:ians|ans|ns))|n(?:[an]thians|ith(?:i(?:ans|nas)|a(?:ins|ns))|t(?:i[ao]ns|h(?:o(?:ians|ans)|a(?:i(?:ans|ns)|ns)|i(?:ians|ons|a(?:[ai]ns|n(?:[ao]s|s)?)|n(?:as|s)))?)?)?)|th(?:ians?)?)?)?))|\.[\s\xa0]*C(?:hor(?:anthians|i(?:nth(?:ains|i(?:ans|ns))|thians)|nthians)|o(?:r(?:anthians|ri(?:nth(?:ains|ians)|th(?:ains|ians))|n(?:i(?:nth(?:ians|a(?:ins|ns))|th(?:ians|a(?:i(?:ans|ns)|ns)))|th(?:ains|i(?:ians|ans|ns)))|i(?:inthi(?:ians|ans)|th(?:oans|a(?:ins|ns)|i(?:ians|ans|ns))|n(?:[an]thians|ith(?:i(?:ans|nas)|a(?:ins|ns))|t(?:i[ao]ns|h(?:o(?:ians|ans)|a(?:i(?:ans|ns)|ns)|i(?:ians|ons|a(?:[ai]ns|n(?:[ao]s|s)?)|n(?:as|s)))?)?)?)|th(?:ians?)?)?)?)|[\s\xa0]*C(?:hor(?:anthians|i(?:nth(?:ains|i(?:ans|ns))|thians)|nthians)|o(?:r(?:anthians|ri(?:nth(?:ains|ians)|th(?:ains|ians))|n(?:i(?:nth(?:ians|a(?:ins|ns))|th(?:ians|a(?:i(?:ans|ns)|ns)))|th(?:ains|i(?:ians|ans|ns)))|i(?:inthi(?:ians|ans)|th(?:oans|a(?:ins|ns)|i(?:ians|ans|ns))|n(?:[an]thians|ith(?:i(?:ans|nas)|a(?:ins|ns))|t(?:i[ao]ns|h(?:o(?:ians|ans)|a(?:i(?:ans|ns)|ns)|i(?:ians|ons|a(?:[ai]ns|n(?:[ao]s|s)?)|n(?:as|s)))?)?)?)|th(?:ians?)?)?)?)|Cor)|I(?:\.[\s\xa0]*C(?:hor(?:anthians|i(?:nth(?:ains|i(?:ans|ns))|thians)|nthians)|o(?:r(?:anthians|ri(?:nth(?:ains|ians)|th(?:ains|ians))|n(?:i(?:nth(?:ians|a(?:ins|ns))|th(?:ians|a(?:i(?:ans|ns)|ns)))|th(?:ains|i(?:ians|ans|ns)))|i(?:inthi(?:ians|ans)|th(?:oans|a(?:ins|ns)|i(?:ians|ans|ns))|n(?:[an]thians|ith(?:i(?:ans|nas)|a(?:ins|ns))|t(?:i[ao]ns|h(?:o(?:ians|ans)|a(?:i(?:ans|ns)|ns)|i(?:ians|ons|a(?:[ai]ns|n(?:[ao]s|s)?)|n(?:as|s)))?)?)?)|th(?:ians?)?)?)?)|[\s\xa0]*C(?:hor(?:anthians|i(?:nth(?:ains|i(?:ans|ns))|thians)|nthians)|o(?:r(?:anthians|ri(?:nth(?:ains|ians)|th(?:ains|ians))|n(?:i(?:nth(?:ians|a(?:ins|ns))|th(?:ians|a(?:i(?:ans|ns)|ns)))|th(?:ains|i(?:ians|ans|ns)))|i(?:inthi(?:ians|ans)|th(?:oans|a(?:ins|ns)|i(?:ians|ans|ns))|n(?:[an]thians|ith(?:i(?:ans|nas)|a(?:ins|ns))|t(?:i[ao]ns|h(?:o(?:ians|ans)|a(?:i(?:ans|ns)|ns)|i(?:ians|ons|a(?:[ai]ns|n(?:[ao]s|s)?)|n(?:as|s)))?)?)?)|th(?:ians?)?)?)?)))|C(?:hor(?:anthians|nthians|i(?:nth(?:ains|i(?:ans|ns))|thians))|or(?:ri(?:nth(?:ians|ains)|th(?:ains|ians))|n(?:i(?:nth(?:ians|a(?:ins|ns))|th(?:ians|a(?:i(?:ans|ns)|ns)))|th(?:ains|i(?:ians|ans|ns)))|i(?:inthi(?:ians|ans)|n(?:[an]thians|ith(?:i(?:ans|nas)|a(?:ins|ns))|t(?:h(?:o(?:ians|ans)|a(?:i(?:ans|ns)|ns)|i(?:ians|ons|a(?:[ia]ns|n(?:[ao]s|s)?)|n(?:as|s)))|i[ao]ns))|th(?:oans|i(?:ians|ans|ns)|a(?:ins|ns))))))(?:(?=[\d\s\xa0.:,;\x1e\x1f&\(\)\uff08\uff09\[\]\/"'\*=~\-\u2013\u2014])|$)/gi},
{osis:["Gal"],regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")(G(?:a(?:l(?:lati(?:[ao]ns|ns)|a(?:t(?:i(?:i(?:[ao]ns|ns)|a(?:[ai]ns|n(?:[ai]s|s)?|s)|n(?:a(?:ns|s)|s)|o(?:ans|n(?:[an]s|s)|s))|o(?:ans|ns)|a(?:[ao]ns|i(?:[ao]ns|ns)|ns|s)|ns)?)?)?)?|l))(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)","gi")},{osis:["Eph"],regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")(E(?:sphesians|hp(?:[ei]sians)?|p(?:e(?:hesians|sians)|h(?:isians?|e(?:s(?:ains?|i(?:ons|an[ds]?))?)?|s(?:ians?)?)?)?))(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)",
"gi")},{osis:["Phil"],regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")(Ph(?:l(?:ip(?:ians|p(?:ians)?)?|pp?)|i(?:l(?:l(?:l(?:ip(?:pians|i(?:ians|ans?))|p(?:pians|ians))|p(?:pians?|ans|i(?:ens|ans?))|i(?:p(?:p(?:pians|a(?:ins|ns)|eans?|i(?:[ei]ans|a(?:ins|ns?)|ns))|eans?|i(?:ians|e(?:ans|ns)|a(?:[ai]ns|ns?)|ns)|a(?:i(?:ans|ns?)|ns?))?)?)|i(?:p(?:e(?:ans|ns)|i(?:ians|ens|ans?|ns)|a(?:i(?:ans|ns?)|ns?)|p(?:pians?|eans?|a(?:i(?:ans|ns)|ns?)|i(?:ians|ens|a(?:[ai]ns|ns?)|ns?))?)?)?|p(?:eans|i(?:ans?|ns)|a(?:ins|n)|p(?:pians|i(?:ians|ans?))?)?)?)?|p))(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)",
"gi")},{osis:["Col"],regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")(C(?:al(?:l(?:asi[ao]ns|os(?:sians|i[ao]ns))|[ao]s(?:si(?:[ao]ns|i[ao]ns)))|o(?:l(?:l[ao]si(?:[ao]ns)|as(?:si[ao]ns|i[ao]ns)|os(?:i[ao]ns|s(?:ans|i(?:ons|ans?))?))?)?)|Cal[ao]si(?:[ao]ns))(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)","gi")},{osis:["2Thess"],regexp:/(^|[^0-9A-Za-z\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u024f\u1e00-\u1eff\u2c60-\u2c7f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua7ff])((?:Second[\s\xa0]*Th(?:es(?:al(?:lonians|oni(?:[ci]ans|ons|ans?|ns))|elon(?:ains|ians?)|olonians?|s(?:al(?:lonians|on(?:ciens|eans|o(?:ians|ans)|a(?:i(?:ans|ns?)|ns)|i(?:c(?:i[ae]ns|ans)|ions|ens|(?:[ao](?:ans|ns?))|ns)))|elon(?:ains|ians?)|oloni(?:ans?|ns)|s)?)?|s(?:ss?)?)?|II(?:\.[\s\xa0]*Th(?:es(?:al(?:lonians|oni(?:[ci]ans|ons|ans?|ns))|elon(?:ains|ians?)|olonians?|s(?:al(?:lonians|on(?:ciens|eans|o(?:ians|ans)|a(?:i(?:ans|ns?)|ns)|i(?:c(?:i[ae]ns|ans)|ions|ens|(?:[ao](?:ans|ns?))|ns)))|elon(?:ains|ians?)|oloni(?:ans?|ns)|s)?)?|s(?:ss?)?)?|[\s\xa0]*Th(?:es(?:al(?:lonians|oni(?:[ci]ans|ons|ans?|ns))|elon(?:ains|ians?)|olonians?|s(?:al(?:lonians|on(?:ciens|eans|o(?:ians|ans)|a(?:i(?:ans|ns?)|ns)|i(?:c(?:i[ae]ns|ans)|ions|ens|(?:[ao](?:ans|ns?))|ns)))|elon(?:ains|ians?)|oloni(?:ans?|ns)|s)?)?|s(?:ss?)?)?)|2(?:Thess|nd(?:\.[\s\xa0]*Th(?:es(?:al(?:lonians|oni(?:[ci]ans|ons|ans?|ns))|elon(?:ains|ians?)|olonians?|s(?:al(?:lonians|on(?:ciens|eans|o(?:ians|ans)|a(?:i(?:ans|ns?)|ns)|i(?:c(?:i[ae]ns|ans)|ions|ens|(?:[ao](?:ans|ns?))|ns)))|elon(?:ains|ians?)|oloni(?:ans?|ns)|s)?)?|s(?:ss?)?)?|[\s\xa0]*Th(?:es(?:al(?:lonians|oni(?:[ci]ans|ons|ans?|ns))|elon(?:ains|ians?)|olonians?|s(?:al(?:lonians|on(?:ciens|eans|o(?:ians|ans)|a(?:i(?:ans|ns?)|ns)|i(?:c(?:i[ae]ns|ans)|ions|ens|(?:[ao](?:ans|ns?))|ns)))|elon(?:ains|ians?)|oloni(?:ans?|ns)|s)?)?|s(?:ss?)?)?)|\.[\s\xa0]*Th(?:es(?:al(?:lonians|oni(?:[ci]ans|ons|ans?|ns))|elon(?:ains|ians?)|olonians?|s(?:al(?:lonians|on(?:ciens|eans|o(?:ians|ans)|a(?:i(?:ans|ns?)|ns)|i(?:c(?:i[ae]ns|ans)|ions|ens|(?:[ao](?:ans|ns?))|ns)))|elon(?:ains|ians?)|oloni(?:ans?|ns)|s)?)?|s(?:ss?)?)?|[\s\xa0]*Th(?:es(?:al(?:lonians|oni(?:[ci]ans|ons|ans?|ns))|elon(?:ains|ians?)|olonians?|s(?:al(?:lonians|on(?:ciens|eans|o(?:ians|ans)|a(?:i(?:ans|ns?)|ns)|i(?:c(?:i[ae]ns|ans)|ions|ens|(?:[ao](?:ans|ns?))|ns)))|elon(?:ains|ians?)|oloni(?:ans?|ns)|s)?)?|s(?:ss?)?)?)))(?:(?=[\d\s\xa0.:,;\x1e\x1f&\(\)\uff08\uff09\[\]\/"'\*=~\-\u2013\u2014])|$)/gi},
{osis:["1Thess"],regexp:/(^|[^0-9A-Za-z\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u024f\u1e00-\u1eff\u2c60-\u2c7f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua7ff])((?:First[\s\xa0]*Th(?:es(?:al(?:lonians|oni(?:[ci]ans|ons|ans?|ns))|elon(?:ains|ians?)|olonians?|s(?:al(?:lonians|on(?:ciens|eans|o(?:ians|ans)|a(?:i(?:ans|ns?)|ns)|i(?:c(?:i[ae]ns|ans)|ions|ens|(?:[ao](?:ans|ns?))|ns)))|elon(?:ains|ians?)|oloni(?:ans?|ns)|s)?)?|s(?:ss?)?)?|1(?:Thess|st(?:\.[\s\xa0]*Th(?:es(?:al(?:lonians|oni(?:[ci]ans|ons|ans?|ns))|elon(?:ains|ians?)|olonians?|s(?:al(?:lonians|on(?:ciens|eans|o(?:ians|ans)|a(?:i(?:ans|ns?)|ns)|i(?:c(?:i[ae]ns|ans)|ions|ens|(?:[ao](?:ans|ns?))|ns)))|elon(?:ains|ians?)|oloni(?:ans?|ns)|s)?)?|s(?:ss?)?)?|[\s\xa0]*Th(?:es(?:al(?:lonians|oni(?:[ci]ans|ons|ans?|ns))|elon(?:ains|ians?)|olonians?|s(?:al(?:lonians|on(?:ciens|eans|o(?:ians|ans)|a(?:i(?:ans|ns?)|ns)|i(?:c(?:i[ae]ns|ans)|ions|ens|(?:[ao](?:ans|ns?))|ns)))|elon(?:ains|ians?)|oloni(?:ans?|ns)|s)?)?|s(?:ss?)?)?)|\.[\s\xa0]*Th(?:es(?:al(?:lonians|oni(?:[ci]ans|ons|ans?|ns))|elon(?:ains|ians?)|olonians?|s(?:al(?:lonians|on(?:ciens|eans|o(?:ians|ans)|a(?:i(?:ans|ns?)|ns)|i(?:c(?:i[ae]ns|ans)|ions|ens|(?:[ao](?:ans|ns?))|ns)))|elon(?:ains|ians?)|oloni(?:ans?|ns)|s)?)?|s(?:ss?)?)?|[\s\xa0]*Th(?:es(?:al(?:lonians|oni(?:[ci]ans|ons|ans?|ns))|elon(?:ains|ians?)|olonians?|s(?:al(?:lonians|on(?:ciens|eans|o(?:ians|ans)|a(?:i(?:ans|ns?)|ns)|i(?:c(?:i[ae]ns|ans)|ions|ens|(?:[ao](?:ans|ns?))|ns)))|elon(?:ains|ians?)|oloni(?:ans?|ns)|s)?)?|s(?:ss?)?)?)|I(?:\.[\s\xa0]*Th(?:es(?:al(?:lonians|oni(?:[ci]ans|ons|ans?|ns))|elon(?:ains|ians?)|olonians?|s(?:al(?:lonians|on(?:ciens|eans|o(?:ians|ans)|a(?:i(?:ans|ns?)|ns)|i(?:c(?:i[ae]ns|ans)|ions|ens|(?:[ao](?:ans|ns?))|ns)))|elon(?:ains|ians?)|oloni(?:ans?|ns)|s)?)?|s(?:ss?)?)?|[\s\xa0]*Th(?:es(?:al(?:lonians|oni(?:[ci]ans|ons|ans?|ns))|elon(?:ains|ians?)|olonians?|s(?:al(?:lonians|on(?:ciens|eans|o(?:ians|ans)|a(?:i(?:ans|ns?)|ns)|i(?:c(?:i[ae]ns|ans)|ions|ens|(?:[ao](?:ans|ns?))|ns)))|elon(?:ains|ians?)|oloni(?:ans?|ns)|s)?)?|s(?:ss?)?)?))|Thes(?:s(?:elon(?:ains|ians?)|al(?:lonians|on(?:ciens|o(?:ians|ans)|eans|a(?:ns|i(?:ans|ns?))|i(?:c(?:i[ae]ns|ans)|ions|ns|(?:[oa](?:ans|ns?)))))|oloni(?:ns|ans?))|olonians?|al(?:lonians|oni(?:[ci]ans|ons|ans?|ns))|elon(?:ains|ians?)))(?:(?=[\d\s\xa0.:,;\x1e\x1f&\(\)\uff08\uff09\[\]\/"'\*=~\-\u2013\u2014])|$)/gi},
{osis:["2Tim"],regexp:/(^|[^0-9A-Za-z\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u024f\u1e00-\u1eff\u2c60-\u2c7f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua7ff])((?:Second[\s\xa0]*T(?:himot(?:hy|y)|omothy|i(?:m(?:ot(?:hy?|y))?)?|m)|II(?:\.[\s\xa0]*T(?:himot(?:hy|y)|omothy|i(?:m(?:ot(?:hy?|y))?)?|m)|[\s\xa0]*T(?:himot(?:hy|y)|omothy|i(?:m(?:ot(?:hy?|y))?)?|m))|2(?:nd(?:\.[\s\xa0]*T(?:himot(?:hy|y)|omothy|i(?:m(?:ot(?:hy?|y))?)?|m)|[\s\xa0]*T(?:himot(?:hy|y)|omothy|i(?:m(?:ot(?:hy?|y))?)?|m))|\.[\s\xa0]*T(?:himot(?:hy|y)|omothy|i(?:m(?:ot(?:hy?|y))?)?|m)|[\s\xa0]*T(?:himot(?:hy|y)|omothy|i(?:m(?:ot(?:hy?|y))?)?|m)|Tim)))(?:(?=[\d\s\xa0.:,;\x1e\x1f&\(\)\uff08\uff09\[\]\/"'\*=~\-\u2013\u2014])|$)/gi},
{osis:["1Tim"],regexp:/(^|[^0-9A-Za-z\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u024f\u1e00-\u1eff\u2c60-\u2c7f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua7ff])((?:First[\s\xa0]*T(?:himot(?:hy|y)|omothy|i(?:m(?:ot(?:hy?|y))?)?|m)|1(?:st(?:\.[\s\xa0]*T(?:himot(?:hy|y)|omothy|i(?:m(?:ot(?:hy?|y))?)?|m)|[\s\xa0]*T(?:himot(?:hy|y)|omothy|i(?:m(?:ot(?:hy?|y))?)?|m))|\.[\s\xa0]*T(?:himot(?:hy|y)|omothy|i(?:m(?:ot(?:hy?|y))?)?|m)|[\s\xa0]*T(?:himot(?:hy|y)|omothy|i(?:m(?:ot(?:hy?|y))?)?|m)|Tim)|I(?:\.[\s\xa0]*T(?:himot(?:hy|y)|omothy|i(?:m(?:ot(?:hy?|y))?)?|m)|[\s\xa0]*T(?:himot(?:hy|y)|omothy|i(?:m(?:ot(?:hy?|y))?)?|m)))|Timothy?)(?:(?=[\d\s\xa0.:,;\x1e\x1f&\(\)\uff08\uff09\[\]\/"'\*=~\-\u2013\u2014])|$)/gi},
{osis:["Titus"],regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")(Ti(?:t(?:us)?)?)(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)","gi")},{osis:["Phlm"],regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")(Ph(?:ile(?:m(?:on)?)?|l(?:[ei]mon|mn?)|mn?))(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)","gi")},{osis:["Heb"],regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")(H(?:w(?:(?:[ew]brew(?:ws|s))|brew(?:ws|s))|brew(?:ws|s)|e(?:(?:[ew]brew(?:ws|s))|b(?:e(?:rws|w[erw]s)|w(?:ers|res)|r(?:rws|e(?:s|w(?:ws|s)?)|w(?:es|s)|s))?)))(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)",
"gi")},{osis:["Jas"],regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")(J(?:a(?:m(?:es?)?|s)?|ms?))(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)","gi")},{osis:["2Pet"],regexp:/(^|[^0-9A-Za-z\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u024f\u1e00-\u1eff\u2c60-\u2c7f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua7ff])((?:Second[\s\xa0]*P(?:e(?:r|t(?:er?|r)?)?|tr?)?|II(?:\.[\s\xa0]*P(?:e(?:r|t(?:er?|r)?)?|tr?)?|[\s\xa0]*P(?:e(?:r|t(?:er?|r)?)?|tr?)?)|2(?:nd(?:\.[\s\xa0]*P(?:e(?:r|t(?:er?|r)?)?|tr?)?|[\s\xa0]*P(?:e(?:r|t(?:er?|r)?)?|tr?)?)|\.[\s\xa0]*P(?:e(?:r|t(?:er?|r)?)?|tr?)?|Pet|[\s\xa0]*P(?:e(?:r|t(?:er?|r)?)?|tr?)?)))(?:(?=[\d\s\xa0.:,;\x1e\x1f&\(\)\uff08\uff09\[\]\/"'\*=~\-\u2013\u2014])|$)/gi},
{osis:["1Pet"],regexp:/(^|[^0-9A-Za-z\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u024f\u1e00-\u1eff\u2c60-\u2c7f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua7ff])((?:First[\s\xa0]*P(?:e(?:r|t(?:er?|r)?)?|tr?)?|1(?:st(?:\.[\s\xa0]*P(?:e(?:r|t(?:er?|r)?)?|tr?)?|[\s\xa0]*P(?:e(?:r|t(?:er?|r)?)?|tr?)?)|\.[\s\xa0]*P(?:e(?:r|t(?:er?|r)?)?|tr?)?|Pet|[\s\xa0]*P(?:e(?:r|t(?:er?|r)?)?|tr?)?)|I(?:\.[\s\xa0]*P(?:e(?:r|t(?:er?|r)?)?|tr?)?|[\s\xa0]*P(?:e(?:r|t(?:er?|r)?)?|tr?)?))|Peter)(?:(?=[\d\s\xa0.:,;\x1e\x1f&\(\)\uff08\uff09\[\]\/"'\*=~\-\u2013\u2014])|$)/gi},
{osis:["Jude"],regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")(J(?:ude|de))(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)","gi")},{osis:["Tob"],apocrypha:!0,regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")(T(?:ob(?:i(?:as|t)?|t)?|b))(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)","gi")},{osis:["Jdt"],apocrypha:!0,regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")(J(?:ud(?:ith?|th?)|d(?:ith?|th?)))(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)",
"gi")},{osis:["Bar"],apocrypha:!0,regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")(B(?:ar(?:uch)?|r))(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)","gi")},{osis:["Sus"],apocrypha:!0,regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")(S(?:hoshana|us(?:annah?)?))(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)","gi")},{osis:["2Macc"],apocrypha:!0,regexp:/(^|[^0-9A-Za-z\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u024f\u1e00-\u1eff\u2c60-\u2c7f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua7ff])((?:Second[\s\xa0]*Mac(?:ab(?:b(?:be(?:e[es]?|s)?|e(?:e(?:es?|s)?|s)?)|e(?:e(?:es?|s)?|s)?)|c(?:ab(?:b(?:be[es]?|e(?:e[es]?|s)?)|e(?:e(?:es?|s)?|s)?)|c(?:ab(?:b(?:be|e[es]?)|e(?:e[es]?|s)?))?)?)?|II(?:\.[\s\xa0]*Mac(?:ab(?:b(?:be(?:e[es]?|s)?|e(?:e(?:es?|s)?|s)?)|e(?:e(?:es?|s)?|s)?)|c(?:ab(?:b(?:be[es]?|e(?:e[es]?|s)?)|e(?:e(?:es?|s)?|s)?)|c(?:ab(?:b(?:be|e[es]?)|e(?:e[es]?|s)?))?)?)?|[\s\xa0]*Mac(?:ab(?:b(?:be(?:e[es]?|s)?|e(?:e(?:es?|s)?|s)?)|e(?:e(?:es?|s)?|s)?)|c(?:ab(?:b(?:be[es]?|e(?:e[es]?|s)?)|e(?:e(?:es?|s)?|s)?)|c(?:ab(?:b(?:be|e[es]?)|e(?:e[es]?|s)?))?)?)?)|2(?:nd(?:\.[\s\xa0]*Mac(?:ab(?:b(?:be(?:e[es]?|s)?|e(?:e(?:es?|s)?|s)?)|e(?:e(?:es?|s)?|s)?)|c(?:ab(?:b(?:be[es]?|e(?:e[es]?|s)?)|e(?:e(?:es?|s)?|s)?)|c(?:ab(?:b(?:be|e[es]?)|e(?:e[es]?|s)?))?)?)?|[\s\xa0]*Mac(?:ab(?:b(?:be(?:e[es]?|s)?|e(?:e(?:es?|s)?|s)?)|e(?:e(?:es?|s)?|s)?)|c(?:ab(?:b(?:be[es]?|e(?:e[es]?|s)?)|e(?:e(?:es?|s)?|s)?)|c(?:ab(?:b(?:be|e[es]?)|e(?:e[es]?|s)?))?)?)?)|\.[\s\xa0]*Mac(?:ab(?:b(?:be(?:e[es]?|s)?|e(?:e(?:es?|s)?|s)?)|e(?:e(?:es?|s)?|s)?)|c(?:ab(?:b(?:be[es]?|e(?:e[es]?|s)?)|e(?:e(?:es?|s)?|s)?)|c(?:ab(?:b(?:be|e[es]?)|e(?:e[es]?|s)?))?)?)?|Macc|[\s\xa0]*M(?:a(?:c(?:ab(?:b(?:be(?:e[es]?|s)?|e(?:e(?:es?|s)?|s)?)|e(?:e(?:es?|s)?|s)?)|c(?:ab(?:b(?:be[es]?|e(?:e[es]?|s)?)|e(?:e(?:es?|s)?|s)?)|c(?:ab(?:b(?:be|e[es]?)|e(?:e[es]?|s)?))?)?)?)?|c))))(?:(?=[\d\s\xa0.:,;\x1e\x1f&\(\)\uff08\uff09\[\]\/"'\*=~\-\u2013\u2014])|$)/gi},
{osis:["3Macc"],apocrypha:!0,regexp:/(^|[^0-9A-Za-z\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u024f\u1e00-\u1eff\u2c60-\u2c7f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua7ff])((?:Third[\s\xa0]*Mac(?:ab(?:b(?:be(?:e[es]?|s)?|e(?:e(?:es?|s)?|s)?)|e(?:e(?:es?|s)?|s)?)|c(?:ab(?:b(?:be[es]?|e(?:e[es]?|s)?)|e(?:e(?:es?|s)?|s)?)|c(?:ab(?:b(?:be|e[es]?)|e(?:e[es]?|s)?))?)?)?|III(?:\.[\s\xa0]*Mac(?:ab(?:b(?:be(?:e[es]?|s)?|e(?:e(?:es?|s)?|s)?)|e(?:e(?:es?|s)?|s)?)|c(?:ab(?:b(?:be[es]?|e(?:e[es]?|s)?)|e(?:e(?:es?|s)?|s)?)|c(?:ab(?:b(?:be|e[es]?)|e(?:e[es]?|s)?))?)?)?|[\s\xa0]*Mac(?:ab(?:b(?:be(?:e[es]?|s)?|e(?:e(?:es?|s)?|s)?)|e(?:e(?:es?|s)?|s)?)|c(?:ab(?:b(?:be[es]?|e(?:e[es]?|s)?)|e(?:e(?:es?|s)?|s)?)|c(?:ab(?:b(?:be|e[es]?)|e(?:e[es]?|s)?))?)?)?)|3(?:rd(?:\.[\s\xa0]*Mac(?:ab(?:b(?:be(?:e[es]?|s)?|e(?:e(?:es?|s)?|s)?)|e(?:e(?:es?|s)?|s)?)|c(?:ab(?:b(?:be[es]?|e(?:e[es]?|s)?)|e(?:e(?:es?|s)?|s)?)|c(?:ab(?:b(?:be|e[es]?)|e(?:e[es]?|s)?))?)?)?|[\s\xa0]*Mac(?:ab(?:b(?:be(?:e[es]?|s)?|e(?:e(?:es?|s)?|s)?)|e(?:e(?:es?|s)?|s)?)|c(?:ab(?:b(?:be[es]?|e(?:e[es]?|s)?)|e(?:e(?:es?|s)?|s)?)|c(?:ab(?:b(?:be|e[es]?)|e(?:e[es]?|s)?))?)?)?)|\.[\s\xa0]*Mac(?:ab(?:b(?:be(?:e[es]?|s)?|e(?:e(?:es?|s)?|s)?)|e(?:e(?:es?|s)?|s)?)|c(?:ab(?:b(?:be[es]?|e(?:e[es]?|s)?)|e(?:e(?:es?|s)?|s)?)|c(?:ab(?:b(?:be|e[es]?)|e(?:e[es]?|s)?))?)?)?|Macc|[\s\xa0]*M(?:ac(?:ab(?:b(?:be(?:e[es]?|s)?|e(?:e(?:es?|s)?|s)?)|e(?:e(?:es?|s)?|s)?)|c(?:ab(?:b(?:be[es]?|e(?:e[es]?|s)?)|e(?:e(?:es?|s)?|s)?)|c(?:ab(?:b(?:be|e[es]?)|e(?:e[es]?|s)?))?)?)?|c))))(?:(?=[\d\s\xa0.:,;\x1e\x1f&\(\)\uff08\uff09\[\]\/"'\*=~\-\u2013\u2014])|$)/gi},
{osis:["4Macc"],apocrypha:!0,regexp:/(^|[^0-9A-Za-z\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u024f\u1e00-\u1eff\u2c60-\u2c7f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua7ff])((?:Fourth[\s\xa0]*Mac(?:ab(?:b(?:be(?:e[es]?|s)?|e(?:e(?:es?|s)?|s)?)|e(?:e(?:es?|s)?|s)?)|c(?:ab(?:b(?:be[es]?|e(?:e[es]?|s)?)|e(?:e(?:es?|s)?|s)?)|c(?:ab(?:b(?:be|e[es]?)|e(?:e[es]?|s)?))?)?)?|IV(?:\.[\s\xa0]*Mac(?:ab(?:b(?:be(?:e[es]?|s)?|e(?:e(?:es?|s)?|s)?)|e(?:e(?:es?|s)?|s)?)|c(?:ab(?:b(?:be[es]?|e(?:e[es]?|s)?)|e(?:e(?:es?|s)?|s)?)|c(?:ab(?:b(?:be|e[es]?)|e(?:e[es]?|s)?))?)?)?|[\s\xa0]*Mac(?:ab(?:b(?:be(?:e[es]?|s)?|e(?:e(?:es?|s)?|s)?)|e(?:e(?:es?|s)?|s)?)|c(?:ab(?:b(?:be[es]?|e(?:e[es]?|s)?)|e(?:e(?:es?|s)?|s)?)|c(?:ab(?:b(?:be|e[es]?)|e(?:e[es]?|s)?))?)?)?)|4(?:th(?:\.[\s\xa0]*Mac(?:ab(?:b(?:be(?:e[es]?|s)?|e(?:e(?:es?|s)?|s)?)|e(?:e(?:es?|s)?|s)?)|c(?:ab(?:b(?:be[es]?|e(?:e[es]?|s)?)|e(?:e(?:es?|s)?|s)?)|c(?:ab(?:b(?:be|e[es]?)|e(?:e[es]?|s)?))?)?)?|[\s\xa0]*Mac(?:ab(?:b(?:be(?:e[es]?|s)?|e(?:e(?:es?|s)?|s)?)|e(?:e(?:es?|s)?|s)?)|c(?:ab(?:b(?:be[es]?|e(?:e[es]?|s)?)|e(?:e(?:es?|s)?|s)?)|c(?:ab(?:b(?:be|e[es]?)|e(?:e[es]?|s)?))?)?)?)|\.[\s\xa0]*Mac(?:ab(?:b(?:be(?:e[es]?|s)?|e(?:e(?:es?|s)?|s)?)|e(?:e(?:es?|s)?|s)?)|c(?:ab(?:b(?:be[es]?|e(?:e[es]?|s)?)|e(?:e(?:es?|s)?|s)?)|c(?:ab(?:b(?:be|e[es]?)|e(?:e[es]?|s)?))?)?)?|Macc|[\s\xa0]*M(?:ac(?:ab(?:b(?:be(?:e[es]?|s)?|e(?:e(?:es?|s)?|s)?)|e(?:e(?:es?|s)?|s)?)|c(?:ab(?:b(?:be[es]?|e(?:e[es]?|s)?)|e(?:e(?:es?|s)?|s)?)|c(?:ab(?:b(?:be|e[es]?)|e(?:e[es]?|s)?))?)?)?|c))))(?:(?=[\d\s\xa0.:,;\x1e\x1f&\(\)\uff08\uff09\[\]\/"'\*=~\-\u2013\u2014])|$)/gi},
{osis:["1Macc"],apocrypha:!0,regexp:/(^|[^0-9A-Za-z\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u024f\u1e00-\u1eff\u2c60-\u2c7f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua7ff])((?:First[\s\xa0]*Mac(?:ab(?:b(?:be(?:e[es]?|s)?|e(?:e(?:es?|s)?|s)?)|e(?:e(?:es?|s)?|s)?)|c(?:ab(?:b(?:be[es]?|e(?:e[es]?|s)?)|e(?:e(?:es?|s)?|s)?)|c(?:ab(?:b(?:be|e[es]?)|e(?:e[es]?|s)?))?)?)?|I(?:\.[\s\xa0]*Mac(?:ab(?:b(?:be(?:e[es]?|s)?|e(?:e(?:es?|s)?|s)?)|e(?:e(?:es?|s)?|s)?)|c(?:ab(?:b(?:be[es]?|e(?:e[es]?|s)?)|e(?:e(?:es?|s)?|s)?)|c(?:ab(?:b(?:be|e[es]?)|e(?:e[es]?|s)?))?)?)?|[\s\xa0]*Mac(?:ab(?:b(?:be(?:e[es]?|s)?|e(?:e(?:es?|s)?|s)?)|e(?:e(?:es?|s)?|s)?)|c(?:ab(?:b(?:be[es]?|e(?:e[es]?|s)?)|e(?:e(?:es?|s)?|s)?)|c(?:ab(?:b(?:be|e[es]?)|e(?:e[es]?|s)?))?)?)?)|1(?:st(?:\.[\s\xa0]*Mac(?:ab(?:b(?:be(?:e[es]?|s)?|e(?:e(?:es?|s)?|s)?)|e(?:e(?:es?|s)?|s)?)|c(?:ab(?:b(?:be[es]?|e(?:e[es]?|s)?)|e(?:e(?:es?|s)?|s)?)|c(?:ab(?:b(?:be|e[es]?)|e(?:e[es]?|s)?))?)?)?|[\s\xa0]*Mac(?:ab(?:b(?:be(?:e[es]?|s)?|e(?:e(?:es?|s)?|s)?)|e(?:e(?:es?|s)?|s)?)|c(?:ab(?:b(?:be[es]?|e(?:e[es]?|s)?)|e(?:e(?:es?|s)?|s)?)|c(?:ab(?:b(?:be|e[es]?)|e(?:e[es]?|s)?))?)?)?)|\.[\s\xa0]*Mac(?:ab(?:b(?:be(?:e[es]?|s)?|e(?:e(?:es?|s)?|s)?)|e(?:e(?:es?|s)?|s)?)|c(?:ab(?:b(?:be[es]?|e(?:e[es]?|s)?)|e(?:e(?:es?|s)?|s)?)|c(?:ab(?:b(?:be|e[es]?)|e(?:e[es]?|s)?))?)?)?|Macc|[\s\xa0]*M(?:a(?:c(?:ab(?:b(?:be(?:e[es]?|s)?|e(?:e(?:es?|s)?|s)?)|e(?:e(?:es?|s)?|s)?)|c(?:ab(?:b(?:be[es]?|e(?:e[es]?|s)?)|e(?:e(?:es?|s)?|s)?)|c(?:ab(?:b(?:be|e[es]?)|e(?:e[es]?|s)?))?)?)?)?|c)))|Maccabees)(?:(?=[\d\s\xa0.:,;\x1e\x1f&\(\)\uff08\uff09\[\]\/"'\*=~\-\u2013\u2014])|$)/gi},
{osis:["Ezek","Ezra"],regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")(Ez)(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)","gi")},{osis:["Hab","Hag"],regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")(Ha)(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)","gi")},{osis:["Heb","Hab"],regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")(Hb)(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)",
"gi")},{osis:["John","Jonah","Job","Josh","Joel"],regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")(Jo)(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)","gi")},{osis:["Jude","Judg"],regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")(J(?:d|ud?))(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)","gi")},{osis:["Matt","Mark","Mal"],regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")(Ma)(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)",
"gi")},{osis:["Phil","Phlm"],regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")(Ph)(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)","gi")},{osis:["Zeph","Zech"],regexp:RegExp("(^|"+g.prototype.regexps.pre_book+")(Ze)(?:(?=[\\d\\s\\xa0.:,;\\x1e\\x1f&\\(\\)\uff08\uff09\\[\\]/\"'\\*=~\\-\\u2013\\u2014])|$)","gi")}];if(!0===n&&"none"===a)return d;t=[];e=0;for(h=d.length;e<h;e++)if(c=d[e],!1!==n||null==c.apocrypha||!0!==c.apocrypha)"books"===a&&(c.regexp=new RegExp(c.regexp.source,
"g")),t.push(c);return t};g.prototype.regexps.books=g.prototype.regexps.get_books(!1,"none");var La=function(){function g(a,c,d,e,h,n){this.message=a;this.expected=c;this.found=d;this.offset=e;this.line=h;this.column=n;this.name="SyntaxError"}(function(a,c){function d(){this.constructor=a}d.prototype=c.prototype;a.prototype=new d})(g,Error);return{SyntaxError:g,parse:function(a){function c(b){if(la!==b){la>b&&(la=0,Ma={line:1,column:1,seenCR:!1});var f=Ma,d,k;for(d=la;d<b;d++)k=a.charAt(d),"\n"===
k?(f.seenCR||f.line++,f.column=1,f.seenCR=!1):"\r"===k||"\u2028"===k||"\u2029"===k?(f.line++,f.column=1,f.seenCR=!0):(f.column++,f.seenCR=!1);la=b}return Ma}function d(a){b<ua||(b>ua&&(ua=b,Na=[]),Na.push(a))}function e(){var a,b;a=[];b=J();b===f&&(b=h(),b===f&&(b=va(),b===f&&(b=q(),b===f&&(b=ma(),b===f&&(b=O(),b===f&&(b=w(),b===f&&(b=U(),b===f&&(b=A(),b===f&&(b=C(),b===f&&(b=P(),b===f&&(b=x(),b===f&&(b=da(),b===f&&(b=G(),b===f&&(b=V(),b===f&&(b=u(),b===f&&(b=ea(),b===f&&(b=fa(),b===f&&(b=W(),b===
f&&(b=X(),b===f&&(b=Wa(),b===f&&(b=Xa(),b===f&&(b=F(),b===f&&(b=na(),b===f&&(b=oa(),b===f&&(b=Y(),b===f&&(b=ga(),b===f&&(b=Q(),b===f&&(b=R(),b===f&&(b=H(),b===f&&(b=B(),b===f&&(b=Ya(),b===f&&(b=Za(),b===f&&(b=Oa())))))))))))))))))))))))))))))))));if(b!==f)for(;b!==f;)a.push(b),b=J(),b===f&&(b=h(),b===f&&(b=va(),b===f&&(b=q(),b===f&&(b=ma(),b===f&&(b=O(),b===f&&(b=w(),b===f&&(b=U(),b===f&&(b=A(),b===f&&(b=C(),b===f&&(b=P(),b===f&&(b=x(),b===f&&(b=da(),b===f&&(b=G(),b===f&&(b=V(),b===f&&(b=u(),b===
f&&(b=ea(),b===f&&(b=fa(),b===f&&(b=W(),b===f&&(b=X(),b===f&&(b=Wa(),b===f&&(b=Xa(),b===f&&(b=F(),b===f&&(b=na(),b===f&&(b=oa(),b===f&&(b=Y(),b===f&&(b=ga(),b===f&&(b=Q(),b===f&&(b=R(),b===f&&(b=H(),b===f&&(b=B(),b===f&&(b=Ya(),b===f&&(b=Za(),b===f&&(b=Oa())))))))))))))))))))))))))))))))));else a=m;return a}function h(){var a,d,l,k,c,e;a=b;d=va();d===f&&(d=J(),d===f&&(d=q(),d===f&&(d=ma(),d===f&&(d=O(),d===f&&(d=w(),d===f&&(d=U(),d===f&&(d=A(),d===f&&(d=C(),d===f&&(d=P(),d===f&&(d=x(),d===f&&(d=da(),
d===f&&(d=G(),d===f&&(d=V(),d===f&&(d=u(),d===f&&(d=ea(),d===f&&(d=fa(),d===f&&(d=W(),d===f&&(d=X(),d===f&&(d=Oa())))))))))))))))))));if(d!==f){l=[];k=b;c=F();c===f&&(c=z);c!==f?(e=t(),e!==f?k=c=[c,e]:(b=k,k=m)):(b=k,k=m);if(k!==f)for(;k!==f;)l.push(k),k=b,c=F(),c===f&&(c=z),c!==f?(e=t(),e!==f?k=c=[c,e]:(b=k,k=m)):(b=k,k=m);else l=m;l!==f?(v=a,a=l,a.unshift([d]),a=d={type:"sequence",value:a,indices:[v,b-1]}):(b=a,a=m)}else b=a,a=m;return a}function t(){var r,E,l,k,c,e;r=b;40===a.charCodeAt(b)?(E=
La,b++):(E=f,0===p&&d(jc));if(E!==f)if(E=y(),E!==f)if(E=F(),E===f&&(E=z),E!==f)if(E=t(),E!==f){l=[];k=b;c=F();c===f&&(c=z);c!==f?(e=t(),e!==f?k=c=[c,e]:(b=k,k=m)):(b=k,k=m);for(;k!==f;)l.push(k),k=b,c=F(),c===f&&(c=z),c!==f?(e=t(),e!==f?k=c=[c,e]:(b=k,k=m)):(b=k,k=m);l!==f?(k=y(),k!==f?(41===a.charCodeAt(b)?(c=kc,b++):(c=f,0===p&&d(lc)),c!==f?(v=r,r=l,"undefined"===typeof r&&(r=[]),r.unshift([E]),r=E={type:"sequence_post_enclosed",value:r,indices:[v,b-1]}):(b=r,r=m)):(b=r,r=m)):(b=r,r=m)}else b=r,
r=m;else b=r,r=m;else b=r,r=m;else b=r,r=m;r===f&&(r=va(),r===f&&(r=J(),r===f&&(r=q(),r===f&&(r=ma(),r===f&&(r=O(),r===f&&(r=w(),r===f&&(r=U(),r===f&&(r=A(),r===f&&(r=C(),r===f&&(r=P(),r===f&&(r=x(),r===f&&(r=da(),r===f&&(r=G(),r===f&&(r=V(),r===f&&(r=u(),r===f&&(r=ea(),r===f&&(r=fa(),r===f&&(r=W(),r===f&&(r=X(),r===f&&(r=na(),r===f&&(r=oa(),r===f&&(r=Y(),r===f&&(r=ga(),r===f&&(r=Q(),r===f&&(r=R(),r===f&&(r=H(),r===f&&(r=B())))))))))))))))))))))))))));return r}function q(){var a,d,l,k,c,e,g;a=b;d=
O();d===f&&(d=w(),d===f&&(d=U(),d===f&&(d=A(),d===f&&(d=C(),d===f&&(d=P(),d===f&&(d=x(),d===f&&(d=da(),d===f&&(d=G(),d===f&&(d=b,l=u(),l!==f?(k=b,p++,c=b,e=Z(),e!==f?(g=O(),g===f&&(g=w(),g===f&&(g=U(),g===f&&(g=A(),g===f&&(g=C(),g===f&&(g=P(),g===f&&(g=x(),g===f&&(g=G(),g===f&&(g=u())))))))),g!==f?c=e=[e,g]:(b=c,c=m)):(b=c,c=m),p--,c!==f?(b=k,k=D):k=m,k!==f?d=l=[l,k]:(b=d,d=m)):(b=d,d=m),d===f&&(d=ea(),d===f&&(d=fa(),d===f&&(d=V(),d===f&&(d=W(),d===f&&(d=X(),d===f&&(d=na(),d===f&&(d=oa(),d===f&&(d=
Y(),d===f&&(d=ga(),d===f&&(d=Q(),d===f&&(d=R(),d===f&&(d=H(),d===f&&(d=B()))))))))))))))))))))));d!==f?(l=Z(),l!==f?(k=ma(),k===f&&(k=O(),k===f&&(k=w(),k===f&&(k=U(),k===f&&(k=A(),k===f&&(k=C(),k===f&&(k=P(),k===f&&(k=x(),k===f&&(k=da(),k===f&&(k=G(),k===f&&(k=u(),k===f&&(k=ea(),k===f&&(k=fa(),k===f&&(k=V(),k===f&&(k=W(),k===f&&(k=X(),k===f&&(k=na(),k===f&&(k=oa(),k===f&&(k=Y(),k===f&&(k=Q(),k===f&&(k=R(),k===f&&(k=ga(),k===f&&(k=H(),k===f&&(k=B()))))))))))))))))))))))),k!==f?(v=a,a=d,a.length&&2===
a.length&&(a=a[0]),a=d={type:"range",value:[a,k],indices:[v,b-1]}):(b=a,a=m)):(b=a,a=m)):(b=a,a=m);return a}function u(){var r,E,l,k,c;r=b;31===a.charCodeAt(b)?(E=pa,b++):(E=f,0===p&&d(qa));E!==f?(E=ra(),E!==f?(l=b,47===a.charCodeAt(b)?(k=mc,b++):(k=f,0===p&&d(nc)),k!==f?(oc.test(a.charAt(b))?(c=a.charAt(b),b++):(c=f,0===p&&d(pc)),c!==f?l=k=[k,c]:(b=l,l=m)):(b=l,l=m),l===f&&(l=z),l!==f?(31===a.charCodeAt(b)?(k=pa,b++):(k=f,0===p&&d(qa)),k!==f?(v=r,r=E=$a(E)):(b=r,r=m)):(b=r,r=m)):(b=r,r=m)):(b=r,
r=m);return r}function x(){var a,d,l,k,c,e,g,h,n;a=b;d=u();if(d!==f){l=b;k=N();k!==f?(c=b,p++,e=b,g=H(),g!==f?(h=M(),h!==f?(n=B(),n!==f?e=g=[g,h,n]:(b=e,e=m)):(b=e,e=m)):(b=e,e=m),p--,e!==f?(b=c,c=D):c=m,c!==f?l=k=[k,c]:(b=l,l=m)):(b=l,l=m);if(l===f){l=[];k=M();if(k!==f)for(;k!==f;)l.push(k),k=M();else l=m;if(l===f){l=[];k=ha();if(k!==f)for(;k!==f;)l.push(k),k=ha();else l=m;if(l===f){l=[];k=Z();if(k!==f)for(;k!==f;)l.push(k),k=Z();else l=m;l===f&&(l=y())}}}l!==f?(k=H(),k!==f?(v=a,a=d=ab(d,k)):(b=
a,a=m)):(b=a,a=m)}else b=a,a=m;return a}function w(){var a,d,l;a=b;d=P();d===f&&(d=x());d!==f?(l=ja(),l!==f?(v=a,a=d={type:"bc_title",value:[d,l],indices:[v,b-1]}):(b=a,a=m)):(b=a,a=m);return a}function A(){var r,c,l,k,e,g,h;r=b;c=P();c===f&&(c=x());c!==f?(l=b,p++,k=b,46===a.charCodeAt(b)?(e=K,b++):(e=f,0===p&&d(L)),e!==f?(g=N(),g!==f?(h=B(),h!==f?k=e=[e,g,h]:(b=k,k=m)):(b=k,k=m)):(b=k,k=m),k===f&&(k=b,e=F(),e===f&&(e=z),e!==f?(g=N(),g!==f?(h=Y(),h!==f?k=e=[e,g,h]:(b=k,k=m)):(b=k,k=m)):(b=k,k=m)),
p--,k===f?l=D:(b=l,l=m),l!==f?(k=b,e=M(),e===f&&(e=F()),e===f&&(e=z),e!==f?(g=N(),g!==f?k=e=[e,g]:(b=k,k=m)):(b=k,k=m),k===f&&(k=M()),k!==f?(e=Q(),e===f&&(e=B()),e!==f?(v=r,r=c=sa(c,e)):(b=r,r=m)):(b=r,r=m)):(b=r,r=m)):(b=r,r=m);return r}function C(){var a,d,l,k,c,e,g;a=b;d=P();d===f&&(d=x());d!==f?(l=ha(),l!==f?(l=Q(),l===f&&(l=B()),l!==f?(k=b,p++,c=b,e=M(),e!==f?(g=B(),g!==f?c=e=[e,g]:(b=c,c=m)):(b=c,c=m),p--,c===f?k=D:(b=k,k=m),k!==f?(v=a,a=d=sa(d,l)):(b=a,a=m)):(b=a,a=m)):(b=a,a=m)):(b=a,a=m);
return a}function O(){var r,c,l,k,e,g,h;c=r=b;l=u();l!==f?(k=y(),k!==f?(44===a.charCodeAt(b)?(k=Pa,b++):(k=f,0===p&&d(Qa)),k!==f?(k=y(),k!==f?(k=H(),k!==f?(v=c,c=l=ab(l,k)):(b=c,c=m)):(b=c,c=m)):(b=c,c=m)):(b=c,c=m)):(b=c,c=m);c!==f?(l=y(),l!==f?(44===a.charCodeAt(b)?(l=Pa,b++):(l=f,0===p&&d(Qa)),l!==f?(l=y(),l!==f?(l=Q(),l===f&&(l=B()),l!==f?(k=b,p++,e=b,g=M(),g!==f?(h=B(),h!==f?e=g=[g,h]:(b=e,e=m)):(b=e,e=m),p--,e===f?k=D:(b=k,k=m),k!==f?(v=r,r=c=sa(c,l)):(b=r,r=m)):(b=r,r=m)):(b=r,r=m)):(b=r,r=
m)):(b=r,r=m)):(b=r,r=m);return r}function J(){var r,c,l,k,e;r=b;c=u();c!==f?(45===a.charCodeAt(b)?(l=Ra,b++):(l=f,0===p&&d(Sa)),l===f&&(l=aa()),l===f&&(l=z),l!==f?(l=H(),l!==f?(45===a.charCodeAt(b)?(k=Ra,b++):(k=f,0===p&&d(Sa)),k!==f?(k=B(),k!==f?(45===a.charCodeAt(b)?(e=Ra,b++):(e=f,0===p&&d(Sa)),e!==f?(e=B(),e!==f?(v=r,r=c={type:"range",value:[{type:"bcv",value:[{type:"bc",value:[c,l],indices:[c.indices[0],l.indices[1]]},k],indices:[c.indices[0],k.indices[1]]},e],indices:[v,b-1]}):(b=r,r=m)):(b=
r,r=m)):(b=r,r=m)):(b=r,r=m)):(b=r,r=m)):(b=r,r=m)):(b=r,r=m);return r}function G(){var a,d,l,c,e,g;a=b;d=u();if(d!==f){l=[];c=M();if(c!==f)for(;c!==f;)l.push(c),c=M();else l=m;if(l===f){l=[];c=ha();if(c!==f)for(;c!==f;)l.push(c),c=ha();else l=m;if(l===f){l=[];c=Z();if(c!==f)for(;c!==f;)l.push(c),c=Z();else l=m;if(l===f){l=b;c=[];e=F();if(e!==f)for(;e!==f;)c.push(e),e=F();else c=m;c!==f?(e=b,p++,g=N(),p--,g!==f?(b=e,e=D):e=m,e!==f?l=c=[c,e]:(b=l,l=m)):(b=l,l=m);l===f&&(l=y())}}}l!==f?(c=Q(),c===f&&
(c=B()),c!==f?(v=a,a=d={type:"bv",value:[d,c],indices:[v,b-1]}):(b=a,a=m)):(b=a,a=m)}else b=a,a=m;return a}function W(){var a,d,c;a=b;d=ta();d!==f?(d=H(),d!==f?(c=Ta(),c===f&&(c=z),c!==f?(c=u(),c!==f?(v=a,a=d=bb(d,c)):(b=a,a=m)):(b=a,a=m)):(b=a,a=m)):(b=a,a=m);return a}function va(){var a,d,c,k;a=b;d=ta();d!==f?(d=H(),d!==f?(c=Z(),c!==f?(c=H(),c!==f?(k=Ta(),k===f&&(k=z),k!==f?(k=u(),k!==f?(v=a,a=d={type:"cb_range",value:[k,d,c],indices:[v,b-1]}):(b=a,a=m)):(b=a,a=m)):(b=a,a=m)):(b=a,a=m)):(b=a,a=
m)):(b=a,a=m);return a}function ea(){var a,d,c;a=b;d=W();d!==f?(c=F(),c===f&&(c=z),c!==f?(c=N(),c!==f?(c=B(),c!==f?(v=a,a=d=sa(d,c)):(b=a,a=m)):(b=a,a=m)):(b=a,a=m)):(b=a,a=m);return a}function X(){var c,e,l;c=b;e=H();e!==f?(a.substr(b,2)===cb?(l=cb,b+=2):(l=f,0===p&&d(qc)),l===f&&(a.substr(b,2)===db?(l=db,b+=2):(l=f,0===p&&d(rc)),l===f&&(a.substr(b,2)===eb?(l=eb,b+=2):(l=f,0===p&&d(sc)))),l!==f?(l=ta(),l!==f?(l=Ta(),l===f&&(l=z),l!==f?(l=u(),l!==f?(v=c,c=e=bb(e,l)):(b=c,c=m)):(b=c,c=m)):(b=c,c=m)):
(b=c,c=m)):(b=c,c=m);return c}function fa(){var a,d,c;a=b;d=X();d!==f?(c=F(),c===f&&(c=z),c!==f?(c=N(),c!==f?(c=B(),c!==f?(v=a,a=d=sa(d,c)):(b=a,a=m)):(b=a,a=m)):(b=a,a=m)):(b=a,a=m);return a}function V(){var c,e,l;c=b;31===a.charCodeAt(b)?(e=pa,b++):(e=f,0===p&&d(qa));e!==f?(e=ra(),e!==f?(a.substr(b,3)===fb?(l=fb,b+=3):(l=f,0===p&&d(tc)),l!==f?(v=c,c=e={type:"c_psalm",value:e.value,indices:[v,b-1]}):(b=c,c=m)):(b=c,c=m)):(b=c,c=m);return c}function da(){var a,d,c;a=b;d=V();d!==f?(c=F(),c===f&&(c=
z),c!==f?(c=N(),c!==f?(c=B(),c!==f?(v=a,a=d={type:"cv_psalm",value:[d,c],indices:[v,b-1]}):(b=a,a=m)):(b=a,a=m)):(b=a,a=m)):(b=a,a=m);return a}function na(){var a,d,c;a=b;d=ta();d!==f?(d=H(),d!==f?(c=ja(),c!==f?(v=a,a=d={type:"c_title",value:[d,c],indices:[v,b-1]}):(b=a,a=m)):(b=a,a=m)):(b=a,a=m);return a}function Y(){var c,e,l,k,g,h,n;c=b;e=N();e===f&&(e=z);e!==f?(e=H(),e!==f?(l=b,p++,k=b,46===a.charCodeAt(b)?(g=K,b++):(g=f,0===p&&d(L)),g!==f?(h=N(),h!==f?(n=B(),n!==f?k=g=[g,h,n]:(b=k,k=m)):(b=k,
k=m)):(b=k,k=m),p--,k===f?l=D:(b=l,l=m),l!==f?(k=b,g=M(),g===f&&(g=z),g!==f?(h=N(),h!==f?k=g=[g,h]:(b=k,k=m)):(b=k,k=m),k===f&&(k=M()),k!==f?(g=Q(),g===f&&(g=B()),g!==f?(v=c,c=e=gb(e,g)):(b=c,c=m)):(b=c,c=m)):(b=c,c=m)):(b=c,c=m)):(b=c,c=m);return c}function ga(){var a,d,c,e,g,h,n;a=b;d=H();d!==f?(c=ha(),c!==f?(c=Q(),c===f&&(c=B()),c!==f?(e=b,p++,g=b,h=M(),h!==f?(n=B(),n!==f?g=h=[h,n]:(b=g,g=m)):(b=g,g=m),p--,g===f?e=D:(b=e,e=m),e!==f?(v=a,a=d=gb(d,c)):(b=a,a=m)):(b=a,a=m)):(b=a,a=m)):(b=a,a=m);return a}
function H(){var a,d;a=b;d=ta();d===f&&(d=z);d!==f?(d=R(),d!==f?(v=a,a=d={type:"c",value:[d],indices:[v,b-1]}):(b=a,a=m)):(b=a,a=m);return a}function ma(){var c,e,l,k,g,h;c=b;e=A();e===f&&(e=C(),e===f&&(e=x(),e===f&&(e=G(),e===f&&(e=Y(),e===f&&(e=ga(),e===f&&(e=R(),e===f&&(e=H(),e===f&&(e=B()))))))));e!==f?(l=y(),l!==f?(l=b,a.substr(b,2)===wa?(k=wa,b+=2):(k=f,0===p&&d(hb)),k!==f?(g=b,p++,xa.test(a.charAt(b))?(h=a.charAt(b),b++):(h=f,0===p&&d(ya)),p--,h===f?g=D:(b=g,g=m),g!==f?l=k=[k,g]:(b=l,l=m)):
(b=l,l=m),l===f&&(l=b,102===a.charCodeAt(b)?(k=ib,b++):(k=f,0===p&&d(jb)),k!==f?(g=b,p++,xa.test(a.charAt(b))?(h=a.charAt(b),b++):(h=f,0===p&&d(ya)),p--,h===f?g=D:(b=g,g=m),g!==f?l=k=[k,g]:(b=l,l=m)):(b=l,l=m)),l!==f?(k=I(),k===f&&(k=z),k!==f?(g=b,p++,Ua.test(a.charAt(b))?(h=a.charAt(b),b++):(h=f,0===p&&d(Va)),p--,h===f?g=D:(b=g,g=m),g!==f?(v=c,c=e={type:"ff",value:[e],indices:[v,b-1]}):(b=c,c=m)):(b=c,c=m)):(b=c,c=m)):(b=c,c=m)):(b=c,c=m);return c}function oa(){var c,e,l;c=b;e=R();e!==f?(l=M(),l===
f&&(l=F()),l===f&&(l=z),l!==f?(a.substr(b,5)===za?(l=za,b+=5):(l=f,0===p&&d(kb)),l!==f?(v=c,c=e={type:"integer_title",value:[e],indices:[v,b-1]}):(b=c,c=m)):(b=c,c=m)):(b=c,c=m);return c}function Oa(){var c,e,l;c=b;31===a.charCodeAt(b)?(e=pa,b++):(e=f,0===p&&d(qa));e!==f?(e=ra(),e!==f?(a.substr(b,3)===lb?(l=lb,b+=3):(l=f,0===p&&d(uc)),l!==f?(v=c,c=e={type:"context",value:e.value,indices:[v,b-1]}):(b=c,c=m)):(b=c,c=m)):(b=c,c=m);return c}function P(){var c,e,l,k;e=c=b;31===a.charCodeAt(b)?(l=pa,b++):
(l=f,0===p&&d(qa));l!==f?(l=ra(),l!==f?(a.substr(b,3)===mb?(k=mb,b+=3):(k=f,0===p&&d(vc)),k!==f?(v=e,e=l=$a(l)):(b=e,e=m)):(b=e,e=m)):(b=e,e=m);e!==f?(a.substr(b,2)===nb?(l=nb,b+=2):(l=f,0===p&&d(wc)),l!==f?(l=b,p++,ba.test(a.charAt(b))?(k=a.charAt(b),b++):(k=f,0===p&&d(ca)),p--,k===f?l=D:(b=l,l=m),l!==f?(v=c,c=e={type:"bc",value:[e,{type:"c",value:[{type:"integer",value:151,indices:[b-2,b-1]}],indices:[b-2,b-1]}],indices:[v,b-1]}):(b=c,c=m)):(b=c,c=m)):(b=c,c=m);return c}function U(){var c,e,l;c=
b;e=P();e!==f?(46===a.charCodeAt(b)?(l=K,b++):(l=f,0===p&&d(L)),l!==f?(l=R(),l!==f?(v=c,c=e={type:"bcv",value:[e,{type:"v",value:[l],indices:[l.indices[0],l.indices[1]]}],indices:[v,b-1]}):(b=c,c=m)):(b=c,c=m)):(b=c,c=m);return c}function Q(){var c,e,l,k,g,h,n;c=b;e=N();e===f&&(e=z);e!==f?(e=R(),e!==f?(l=y(),l!==f?(l=b,p++,k=b,a.substr(b,2)===wa?(g=wa,b+=2):(g=f,0===p&&d(hb)),g!==f?(h=b,p++,xa.test(a.charAt(b))?(n=a.charAt(b),b++):(n=f,0===p&&d(ya)),p--,n===f?h=D:(b=h,h=m),h!==f?k=g=[g,h]:(b=k,k=
m)):(b=k,k=m),k===f&&(k=b,102===a.charCodeAt(b)?(g=ib,b++):(g=f,0===p&&d(jb)),g!==f?(h=b,p++,xa.test(a.charAt(b))?(n=a.charAt(b),b++):(n=f,0===p&&d(ya)),p--,n===f?h=D:(b=h,h=m),h!==f?k=g=[g,h]:(b=k,k=m)):(b=k,k=m)),p--,k===f?l=D:(b=l,l=m),l!==f?(xc.test(a.charAt(b))?(k=a.charAt(b),b++):(k=f,0===p&&d(yc)),k!==f?(g=b,p++,Ua.test(a.charAt(b))?(h=a.charAt(b),b++):(h=f,0===p&&d(Va)),p--,h===f?g=D:(b=g,g=m),g!==f?(v=c,c=e=ob(e)):(b=c,c=m)):(b=c,c=m)):(b=c,c=m)):(b=c,c=m)):(b=c,c=m)):(b=c,c=m);return c}
function B(){var a,d;a=b;d=N();d===f&&(d=z);d!==f?(d=R(),d!==f?(v=a,a=d=ob(d)):(b=a,a=m)):(b=a,a=m);return a}function ta(){var c,e,l,k;c=b;e=y();e!==f?(a.substr(b,8)===pb?(e=pb,b+=8):(e=f,0===p&&d(zc)),e===f&&(a.substr(b,7)===qb?(e=qb,b+=7):(e=f,0===p&&d(Ac)),e===f&&(e=b,a.substr(b,6)===rb?(l=rb,b+=6):(l=f,0===p&&d(Bc)),l!==f?(k=I(),k===f&&(k=z),k!==f?e=l=[l,k]:(b=e,e=m)):(b=e,e=m),e===f&&(e=b,a.substr(b,5)===sb?(l=sb,b+=5):(l=f,0===p&&d(Cc)),l!==f?(k=I(),k===f&&(k=z),k!==f?e=l=[l,k]:(b=e,e=m)):(b=
e,e=m),e===f&&(e=b,a.substr(b,5)===tb?(l=tb,b+=5):(l=f,0===p&&d(Dc)),l!==f?(k=I(),k===f&&(k=z),k!==f?e=l=[l,k]:(b=e,e=m)):(b=e,e=m),e===f&&(e=b,a.substr(b,5)===ub?(l=ub,b+=5):(l=f,0===p&&d(Ec)),l!==f?(k=I(),k===f&&(k=z),k!==f?e=l=[l,k]:(b=e,e=m)):(b=e,e=m),e===f&&(e=b,a.substr(b,4)===vb?(l=vb,b+=4):(l=f,0===p&&d(Fc)),l!==f?(k=I(),k===f&&(k=z),k!==f?e=l=[l,k]:(b=e,e=m)):(b=e,e=m),e===f&&(e=b,a.substr(b,3)===wb?(l=wb,b+=3):(l=f,0===p&&d(Gc)),l!==f?(k=I(),k===f&&(k=z),k!==f?e=l=[l,k]:(b=e,e=m)):(b=e,
e=m),e===f&&(e=b,a.substr(b,3)===xb?(l=xb,b+=3):(l=f,0===p&&d(Hc)),l!==f?(k=I(),k===f&&(k=z),k!==f?e=l=[l,k]:(b=e,e=m)):(b=e,e=m),e===f&&(e=b,a.substr(b,3)===yb?(l=yb,b+=3):(l=f,0===p&&d(Ic)),l!==f?(k=I(),k===f&&(k=z),k!==f?e=l=[l,k]:(b=e,e=m)):(b=e,e=m),e===f&&(e=b,a.substr(b,2)===zb?(l=zb,b+=2):(l=f,0===p&&d(Jc)),l!==f?(k=I(),k===f&&(k=z),k!==f?e=l=[l,k]:(b=e,e=m)):(b=e,e=m))))))))))),e!==f?(l=y(),l!==f?(v=c,c=e={type:"c_explicit"}):(b=c,c=m)):(b=c,c=m)):(b=c,c=m);return c}function N(){var c,e,
l,k;c=b;e=y();e!==f?(a.substr(b,6)===Ab?(e=Ab,b+=6):(e=f,0===p&&d(Kc)),e===f&&(a.substr(b,5)===Bb?(e=Bb,b+=5):(e=f,0===p&&d(Lc)),e===f&&(e=b,a.substr(b,3)===Cb?(l=Cb,b+=3):(l=f,0===p&&d(Mc)),l!==f?(k=I(),k===f&&(k=z),k!==f?e=l=[l,k]:(b=e,e=m)):(b=e,e=m),e===f&&(e=b,a.substr(b,3)===Db?(l=Db,b+=3):(l=f,0===p&&d(Nc)),l!==f?(k=I(),k===f&&(k=z),k!==f?e=l=[l,k]:(b=e,e=m)):(b=e,e=m),e===f&&(e=b,a.substr(b,2)===Eb?(l=Eb,b+=2):(l=f,0===p&&d(Oc)),l!==f?(k=I(),k===f&&(k=z),k!==f?e=l=[l,k]:(b=e,e=m)):(b=e,e=
m),e===f&&(e=b,a.substr(b,2)===Fb?(l=Fb,b+=2):(l=f,0===p&&d(Pc)),l!==f?(k=I(),k===f&&(k=z),k!==f?e=l=[l,k]:(b=e,e=m)):(b=e,e=m),e===f&&(e=b,118===a.charCodeAt(b)?(l=Qc,b++):(l=f,0===p&&d(Rc)),l!==f?(k=I(),k===f&&(k=z),k!==f?e=l=[l,k]:(b=e,e=m)):(b=e,e=m))))))),e!==f?(l=b,p++,Ua.test(a.charAt(b))?(k=a.charAt(b),b++):(k=f,0===p&&d(Va)),p--,k===f?l=D:(b=l,l=m),l!==f?(k=y(),k!==f?(v=c,c=e={type:"v_explicit"}):(b=c,c=m)):(b=c,c=m)):(b=c,c=m)):(b=c,c=m);return c}function M(){var c,e,l,k,g,h,n,q,t,v;c=b;
e=y();if(e!==f){l=[];58===a.charCodeAt(b)?(k=Gb,b++):(k=f,0===p&&d(Hb));if(k!==f)for(;k!==f;)l.push(k),58===a.charCodeAt(b)?(k=Gb,b++):(k=f,0===p&&d(Hb));else l=m;l===f&&(l=b,46===a.charCodeAt(b)?(k=K,b++):(k=f,0===p&&d(L)),k!==f?(g=b,p++,h=b,n=y(),n!==f?(46===a.charCodeAt(b)?(q=K,b++):(q=f,0===p&&d(L)),q!==f?(t=y(),t!==f?(46===a.charCodeAt(b)?(v=K,b++):(v=f,0===p&&d(L)),v!==f?h=n=[n,q,t,v]:(b=h,h=m)):(b=h,h=m)):(b=h,h=m)):(b=h,h=m),p--,h===f?g=D:(b=g,g=m),g!==f?l=k=[k,g]:(b=l,l=m)):(b=l,l=m));l!==
f?(k=y(),k!==f?c=e=[e,l,k]:(b=c,c=m)):(b=c,c=m)}else b=c,c=m;return c}function ha(){var c,e,l,k;c=b;e=y();e!==f?(Sc.test(a.charAt(b))?(l=a.charAt(b),b++):(l=f,0===p&&d(Tc)),l!==f?(k=y(),k!==f?c=e=[e,l,k]:(b=c,c=m)):(b=c,c=m)):(b=c,c=m);c===f&&(c=aa());return c}function F(){var c,e,l,k,g,h,n,q,t,u;c=b;e=[];Ib.test(a.charAt(b))?(l=a.charAt(b),b++):(l=f,0===p&&d(Jb));l===f&&(l=b,46===a.charCodeAt(b)?(k=K,b++):(k=f,0===p&&d(L)),k!==f?(g=b,p++,h=b,n=y(),n!==f?(46===a.charCodeAt(b)?(q=K,b++):(q=f,0===p&&
d(L)),q!==f?(t=y(),t!==f?(46===a.charCodeAt(b)?(u=K,b++):(u=f,0===p&&d(L)),u!==f?h=n=[n,q,t,u]:(b=h,h=m)):(b=h,h=m)):(b=h,h=m)):(b=h,h=m),p--,h===f?g=D:(b=g,g=m),g!==f?l=k=[k,g]:(b=l,l=m)):(b=l,l=m),l===f&&(a.substr(b,3)===Aa?(l=Aa,b+=3):(l=f,0===p&&d(Kb)),l===f&&(a.substr(b,7)===Ba?(l=Ba,b+=7):(l=f,0===p&&d(Lb)),l===f&&(l=b,a.substr(b,2)===Ca?(k=Ca,b+=2):(k=f,0===p&&d(Mb)),k!==f?(g=I(),g===f&&(g=z),g!==f?l=k=[k,g]:(b=l,l=m)):(b=l,l=m),l===f&&(l=b,a.substr(b,3)===S?(k=S,b+=3):(k=f,0===p&&d(Da)),k!==
f?(g=aa(),g!==f?(a.substr(b,4)===T?(h=T,b+=4):(h=f,0===p&&d(Ea)),h!==f?l=k=[k,g,h]:(b=l,l=m)):(b=l,l=m)):(b=l,l=m),l===f&&(a.substr(b,4)===T?(l=T,b+=4):(l=f,0===p&&d(Ea)),l===f&&(a.substr(b,3)===S?(l=S,b+=3):(l=f,0===p&&d(Da)),l===f&&(l=aa()))))))));if(l!==f)for(;l!==f;)e.push(l),Ib.test(a.charAt(b))?(l=a.charAt(b),b++):(l=f,0===p&&d(Jb)),l===f&&(l=b,46===a.charCodeAt(b)?(k=K,b++):(k=f,0===p&&d(L)),k!==f?(g=b,p++,h=b,n=y(),n!==f?(46===a.charCodeAt(b)?(q=K,b++):(q=f,0===p&&d(L)),q!==f?(t=y(),t!==f?
(46===a.charCodeAt(b)?(u=K,b++):(u=f,0===p&&d(L)),u!==f?h=n=[n,q,t,u]:(b=h,h=m)):(b=h,h=m)):(b=h,h=m)):(b=h,h=m),p--,h===f?g=D:(b=g,g=m),g!==f?l=k=[k,g]:(b=l,l=m)):(b=l,l=m),l===f&&(a.substr(b,3)===Aa?(l=Aa,b+=3):(l=f,0===p&&d(Kb)),l===f&&(a.substr(b,7)===Ba?(l=Ba,b+=7):(l=f,0===p&&d(Lb)),l===f&&(l=b,a.substr(b,2)===Ca?(k=Ca,b+=2):(k=f,0===p&&d(Mb)),k!==f?(g=I(),g===f&&(g=z),g!==f?l=k=[k,g]:(b=l,l=m)):(b=l,l=m),l===f&&(l=b,a.substr(b,3)===S?(k=S,b+=3):(k=f,0===p&&d(Da)),k!==f?(g=aa(),g!==f?(a.substr(b,
4)===T?(h=T,b+=4):(h=f,0===p&&d(Ea)),h!==f?l=k=[k,g,h]:(b=l,l=m)):(b=l,l=m)):(b=l,l=m),l===f&&(a.substr(b,4)===T?(l=T,b+=4):(l=f,0===p&&d(Ea)),l===f&&(a.substr(b,3)===S?(l=S,b+=3):(l=f,0===p&&d(Da)),l===f&&(l=aa()))))))));else e=m;e!==f&&(v=c,e="");return e}function Z(){var c,e,g,k,h,n;c=b;e=y();if(e!==f){g=[];k=b;Nb.test(a.charAt(b))?(h=a.charAt(b),b++):(h=f,0===p&&d(Ob));h!==f?(n=y(),n!==f?k=h=[h,n]:(b=k,k=m)):(b=k,k=m);k===f&&(k=b,a.substr(b,7)===Fa?(h=Fa,b+=7):(h=f,0===p&&d(Pb)),h!==f?(n=y(),
n!==f?k=h=[h,n]:(b=k,k=m)):(b=k,k=m),k===f&&(k=b,a.substr(b,4)===Ga?(h=Ga,b+=4):(h=f,0===p&&d(Qb)),h!==f?(n=y(),n!==f?k=h=[h,n]:(b=k,k=m)):(b=k,k=m),k===f&&(k=b,a.substr(b,2)===Ha?(h=Ha,b+=2):(h=f,0===p&&d(Rb)),h!==f?(n=y(),n!==f?k=h=[h,n]:(b=k,k=m)):(b=k,k=m))));if(k!==f)for(;k!==f;)g.push(k),k=b,Nb.test(a.charAt(b))?(h=a.charAt(b),b++):(h=f,0===p&&d(Ob)),h!==f?(n=y(),n!==f?k=h=[h,n]:(b=k,k=m)):(b=k,k=m),k===f&&(k=b,a.substr(b,7)===Fa?(h=Fa,b+=7):(h=f,0===p&&d(Pb)),h!==f?(n=y(),n!==f?k=h=[h,n]:(b=
k,k=m)):(b=k,k=m),k===f&&(k=b,a.substr(b,4)===Ga?(h=Ga,b+=4):(h=f,0===p&&d(Qb)),h!==f?(n=y(),n!==f?k=h=[h,n]:(b=k,k=m)):(b=k,k=m),k===f&&(k=b,a.substr(b,2)===Ha?(h=Ha,b+=2):(h=f,0===p&&d(Rb)),h!==f?(n=y(),n!==f?k=h=[h,n]:(b=k,k=m)):(b=k,k=m))));else g=m;g!==f?c=e=[e,g]:(b=c,c=m)}else b=c,c=m;return c}function ja(){var c,e;c=b;e=M();e===f&&(e=F());e===f&&(e=z);e!==f?(a.substr(b,5)===za?(e=za,b+=5):(e=f,0===p&&d(kb)),e!==f?(v=c,c=e={type:"title",value:[e],indices:[v,b-1]}):(b=c,c=m)):(b=c,c=m);return c}
function Ta(){var c,e,g,k,h,n,q,t,u,v,w;c=b;e=y();e!==f?(a.substr(b,4)===Sb?(g=Sb,b+=4):(g=f,0===p&&d(Uc)),g===f&&(a.substr(b,2)===Ia?(g=Ia,b+=2):(g=f,0===p&&d(Tb)),g===f&&(a.substr(b,2)===Ub?(g=Ub,b+=2):(g=f,0===p&&d(Vc)))),g!==f?(k=y(),k!==f?(h=b,a.substr(b,3)===Vb?(n=Vb,b+=3):(n=f,0===p&&d(Wc)),n!==f?(q=y(),q!==f?(a.substr(b,4)===Wb?(t=Wb,b+=4):(t=f,0===p&&d(Xc)),t!==f?(u=y(),u!==f?(a.substr(b,2)===Ia?(v=Ia,b+=2):(v=f,0===p&&d(Tb)),v!==f?(w=y(),w!==f?h=n=[n,q,t,u,v,w]:(b=h,h=m)):(b=h,h=m)):(b=
h,h=m)):(b=h,h=m)):(b=h,h=m)):(b=h,h=m),h===f&&(h=z),h!==f?c=e=[e,g,k,h]:(b=c,c=m)):(b=c,c=m)):(b=c,c=m)):(b=c,c=m);return c}function I(){var c,e,g,k,h,n,q,t,u;c=b;e=y();e!==f?(46===a.charCodeAt(b)?(g=K,b++):(g=f,0===p&&d(L)),g!==f?(k=b,p++,h=b,n=y(),n!==f?(46===a.charCodeAt(b)?(q=K,b++):(q=f,0===p&&d(L)),q!==f?(t=y(),t!==f?(46===a.charCodeAt(b)?(u=K,b++):(u=f,0===p&&d(L)),u!==f?h=n=[n,q,t,u]:(b=h,h=m)):(b=h,h=m)):(b=h,h=m)):(b=h,h=m),p--,h===f?k=D:(b=k,k=m),k!==f?c=e=[e,g,k]:(b=c,c=m)):(b=c,c=m)):
(b=c,c=m);return c}function Wa(){var c,e,g,k,h,n,q;c=b;e=y();if(e!==f)if(Xb.test(a.charAt(b))?(e=a.charAt(b),b++):(e=f,0===p&&d(Yb)),e!==f)if(e=y(),e!==f){e=b;g=ia();if(g!==f){k=[];h=b;n=F();n!==f?(q=ia(),q!==f?h=n=[n,q]:(b=h,h=m)):(b=h,h=m);for(;h!==f;)k.push(h),h=b,n=F(),n!==f?(q=ia(),q!==f?h=n=[n,q]:(b=h,h=m)):(b=h,h=m);k!==f?e=g=[g,k]:(b=e,e=m)}else b=e,e=m;e!==f?(g=y(),g!==f?(Yc.test(a.charAt(b))?(k=a.charAt(b),b++):(k=f,0===p&&d(Zc)),k!==f?(v=c,c=e=Zb(e)):(b=c,c=m)):(b=c,c=m)):(b=c,c=m)}else b=
c,c=m;else b=c,c=m;else b=c,c=m;return c}function Xa(){var c,e,g,k,h,n,q;c=b;e=y();if(e!==f)if(g=b,44===a.charCodeAt(b)?(e=Pa,b++):(e=f,0===p&&d(Qa)),e!==f?(k=y(),k!==f?g=e=[e,k]:(b=g,g=m)):(b=g,g=m),g===f&&(g=z),g!==f){e=b;k=ia();if(k!==f){g=[];h=b;n=F();n!==f?(q=ia(),q!==f?h=n=[n,q]:(b=h,h=m)):(b=h,h=m);for(;h!==f;)g.push(h),h=b,n=F(),n!==f?(q=ia(),q!==f?h=n=[n,q]:(b=h,h=m)):(b=h,h=m);g!==f?e=k=[k,g]:(b=e,e=m)}else b=e,e=m;e!==f?(v=c,c=e=Zb(e)):(b=c,c=m)}else b=c,c=m;else b=c,c=m;return c}function ia(){var c,
e,g;c=b;30===a.charCodeAt(b)?(e=$b,b++):(e=f,0===p&&d(ac));e!==f?(e=ra(),e!==f?(30===a.charCodeAt(b)?(g=$b,b++):(g=f,0===p&&d(ac)),g!==f?(v=c,c=e={type:"translation",value:e.value,indices:[v,b-1]}):(b=c,c=m)):(b=c,c=m)):(b=c,c=m);return c}function R(){var c,e,g,k,h;e=c=b;ba.test(a.charAt(b))?(g=a.charAt(b),b++):(g=f,0===p&&d(ca));g!==f?(ba.test(a.charAt(b))?(k=a.charAt(b),b++):(k=f,0===p&&d(ca)),k===f&&(k=z),k!==f?(ba.test(a.charAt(b))?(h=a.charAt(b),b++):(h=f,0===p&&d(ca)),h===f&&(h=z),h!==f?e=g=
[g,k,h]:(b=e,e=m)):(b=e,e=m)):(b=e,e=m);e!==f?(g=b,p++,ba.test(a.charAt(b))?(k=a.charAt(b),b++):(k=f,0===p&&d(ca)),k===f&&(a.substr(b,4)===bc?(k=bc,b+=4):(k=f,0===p&&d($c))),p--,k===f?g=D:(b=g,g=m),g!==f?(v=c,c=e=cc(e)):(b=c,c=m)):(b=c,c=m);return c}function ra(){var c,e,g;c=b;e=[];ba.test(a.charAt(b))?(g=a.charAt(b),b++):(g=f,0===p&&d(ca));if(g!==f)for(;g!==f;)e.push(g),ba.test(a.charAt(b))?(g=a.charAt(b),b++):(g=f,0===p&&d(ca));else e=m;e!==f&&(v=c,e=cc(e));return e}function Ya(){var c,e,g;c=b;
e=[];dc.test(a.charAt(b))?(g=a.charAt(b),b++):(g=f,0===p&&d(ec));if(g!==f)for(;g!==f;)e.push(g),dc.test(a.charAt(b))?(g=a.charAt(b),b++):(g=f,0===p&&d(ec));else e=m;e!==f&&(v=c,e={type:"word",value:e.join(""),indices:[v,b-1]});return e}function Za(){var c,e;c=b;Xb.test(a.charAt(b))?(e=a.charAt(b),b++):(e=f,0===p&&d(Yb));e!==f&&(v=c,e={type:"stop",value:e,indices:[v,b-1]});return e}function y(){var a;a=aa();a===f&&(a=z);return a}function aa(){var c,e;c=[];fc.test(a.charAt(b))?(e=a.charAt(b),b++):(e=
f,0===p&&d(gc));if(e!==f)for(;e!==f;)c.push(e),fc.test(a.charAt(b))?(e=a.charAt(b),b++):(e=f,0===p&&d(gc));else c=m;return c}var Ja=1<arguments.length?arguments[1]:{},f={},hc={start:e},ic=e,m=f,z=null,La="(",jc={type:"literal",value:"(",description:'"("'},kc=")",lc={type:"literal",value:")",description:'")"'},D=void 0,pa="\u001f",qa={type:"literal",value:"\u001f",description:'"\\x1F"'},mc="/",nc={type:"literal",value:"/",description:'"/"'},oc=/^[1-8]/,pc={type:"class",value:"[1-8]",description:"[1-8]"},
$a=function(a){return{type:"b",value:a.value,indices:[v,b-1]}},ab=function(a,c){return{type:"bc",value:[a,c],indices:[v,b-1]}},Pa=",",Qa={type:"literal",value:",",description:'","'},K=".",L={type:"literal",value:".",description:'"."'},sa=function(a,c){return{type:"bcv",value:[a,c],indices:[v,b-1]}},Ra="-",Sa={type:"literal",value:"-",description:'"-"'},bb=function(a,c){return{type:"bc",value:[c,a],indices:[v,b-1]}},cb="th",qc={type:"literal",value:"th",description:'"th"'},db="nd",rc={type:"literal",
value:"nd",description:'"nd"'},eb="st",sc={type:"literal",value:"st",description:'"st"'},fb="/1\u001f",tc={type:"literal",value:"/1\u001f",description:'"/1\\x1F"'},gb=function(a,c){return{type:"cv",value:[a,c],indices:[v,b-1]}},wa="ff",hb={type:"literal",value:"ff",description:'"ff"'},xa=/^[a-z0-9]/,ya={type:"class",value:"[a-z0-9]",description:"[a-z0-9]"},ib="f",jb={type:"literal",value:"f",description:'"f"'},Ua=/^[a-z]/,Va={type:"class",value:"[a-z]",description:"[a-z]"},za="title",kb={type:"literal",
value:"title",description:'"title"'},lb="/9\u001f",uc={type:"literal",value:"/9\u001f",description:'"/9\\x1F"'},mb="/2\u001f",vc={type:"literal",value:"/2\u001f",description:'"/2\\x1F"'},nb=".1",wc={type:"literal",value:".1",description:'".1"'},ba=/^[0-9]/,ca={type:"class",value:"[0-9]",description:"[0-9]"},xc=/^[a-e]/,yc={type:"class",value:"[a-e]",description:"[a-e]"},ob=function(a){return{type:"v",value:[a],indices:[v,b-1]}},pb="chapters",zc={type:"literal",value:"chapters",description:'"chapters"'},
qb="chapter",Ac={type:"literal",value:"chapter",description:'"chapter"'},rb="chapts",Bc={type:"literal",value:"chapts",description:'"chapts"'},sb="chpts",Cc={type:"literal",value:"chpts",description:'"chpts"'},tb="chapt",Dc={type:"literal",value:"chapt",description:'"chapt"'},ub="chaps",Ec={type:"literal",value:"chaps",description:'"chaps"'},vb="chap",Fc={type:"literal",value:"chap",description:'"chap"'},wb="chp",Gc={type:"literal",value:"chp",description:'"chp"'},xb="chs",Hc={type:"literal",value:"chs",
description:'"chs"'},yb="cha",Ic={type:"literal",value:"cha",description:'"cha"'},zb="ch",Jc={type:"literal",value:"ch",description:'"ch"'},Ab="verses",Kc={type:"literal",value:"verses",description:'"verses"'},Bb="verse",Lc={type:"literal",value:"verse",description:'"verse"'},Cb="ver",Mc={type:"literal",value:"ver",description:'"ver"'},Db="vss",Nc={type:"literal",value:"vss",description:'"vss"'},Eb="vs",Oc={type:"literal",value:"vs",description:'"vs"'},Fb="vv",Pc={type:"literal",value:"vv",description:'"vv"'},
Qc="v",Rc={type:"literal",value:"v",description:'"v"'},Gb=":",Hb={type:"literal",value:":",description:'":"'},Sc=/^["']/,Tc={type:"class",value:"[\"']",description:"[\"']"},Ib=/^[,;\/:&\-\u2013\u2014~]/,Jb={type:"class",value:"[,;\\/:&\\-\\u2013\\u2014~]",description:"[,;\\/:&\\-\\u2013\\u2014~]"},Aa="and",Kb={type:"literal",value:"and",description:'"and"'},Ba="compare",Lb={type:"literal",value:"compare",description:'"compare"'},Ca="cf",Mb={type:"literal",value:"cf",description:'"cf"'},S="see",Da=
{type:"literal",value:"see",description:'"see"'},T="also",Ea={type:"literal",value:"also",description:'"also"'},Nb=/^[\-\u2013\u2014]/,Ob={type:"class",value:"[\\-\\u2013\\u2014]",description:"[\\-\\u2013\\u2014]"},Fa="through",Pb={type:"literal",value:"through",description:'"through"'},Ga="thru",Qb={type:"literal",value:"thru",description:'"thru"'},Ha="to",Rb={type:"literal",value:"to",description:'"to"'},Sb="from",Uc={type:"literal",value:"from",description:'"from"'},Ia="of",Tb={type:"literal",
value:"of",description:'"of"'},Ub="in",Vc={type:"literal",value:"in",description:'"in"'},Vb="the",Wc={type:"literal",value:"the",description:'"the"'},Wb="book",Xc={type:"literal",value:"book",description:'"book"'},Xb=/^[([]/,Yb={type:"class",value:"[([]",description:"[([]"},Yc=/^[)\]]/,Zc={type:"class",value:"[)\\]]",description:"[)\\]]"},Zb=function(a){return{type:"translation_sequence",value:a,indices:[v,b-1]}},$b="\u001e",ac={type:"literal",value:"\u001e",description:'"\\x1E"'},bc=",000",$c={type:"literal",
value:",000",description:'",000"'},cc=function(a){return{type:"integer",value:parseInt(a.join(""),10),indices:[v,b-1]}},dc=/^[^\x1F\x1E([]/,ec={type:"class",value:"[^\\x1F\\x1E([]",description:"[^\\x1F\\x1E([]"},fc=/^[\s\xa0*]/,gc={type:"class",value:"[\\s\\xa0*]",description:"[\\s\\xa0*]"},b=0,v=0,la=0,Ma={line:1,column:1,seenCR:!1},ua=0,Na=[],p=0,Ka;if("startRule"in Ja){if(!(Ja.startRule in hc))throw Error("Can't start parsing from rule \""+Ja.startRule+'".');ic=hc[Ja.startRule]}Ka=ic();if(Ka!==
f&&b===a.length)return Ka;Ka!==f&&b<a.length&&d({type:"end",description:"end of input"});throw function(b,d,e){function f(a){var b=1;for(a.sort(function(a,b){return a.description<b.description?-1:a.description>b.description?1:0});b<a.length;)a[b-1]===a[b]?a.splice(b,1):b++}function h(a,b){function c(a){function b(a){return a.charCodeAt(0).toString(16).toUpperCase()}return a.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\x08/g,"\\b").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\f/g,"\\f").replace(/\r/g,
"\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g,function(a){return"\\x0"+b(a)}).replace(/[\x10-\x1F\x80-\xFF]/g,function(a){return"\\x"+b(a)}).replace(/[\u0180-\u0FFF]/g,function(a){return"\\u0"+b(a)}).replace(/[\u1080-\uFFFF]/g,function(a){return"\\u"+b(a)})}var d=Array(a.length),e;for(e=0;e<a.length;e++)d[e]=a[e].description;d=1<a.length?d.slice(0,-1).join(", ")+" or "+d[a.length-1]:d[0];e=b?'"'+c(b)+'"':"end of input";return"Expected "+d+" but "+e+" found."}var m=c(e),p=e<a.length?a.charAt(e):null;null!==
d&&f(d);return new g(null!==b?b:h(d,p),d,p,e,m.line,m.column)}(null,Na,ua);}}}()}).call(this);
; browserify_shim__define__module__export__(typeof bcv_parser != "undefined" ? bcv_parser : window.bcv_parser);

}).call(global, undefined, undefined, undefined, undefined, function defineExport(ex) { module.exports = ex; });

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],"/home/zefanja/Projekte/common-sword/node_modules/async/lib/async.js":[function(require,module,exports){
(function (process){
/*!
 * async
 * https://github.com/caolan/async
 *
 * Copyright 2010-2014 Caolan McMahon
 * Released under the MIT license
 */
/*jshint onevar: false, indent:4 */
/*global setImmediate: false, setTimeout: false, console: false */
(function () {

    var async = {};

    // global on the server, window in the browser
    var root, previous_async;

    root = this;
    if (root != null) {
      previous_async = root.async;
    }

    async.noConflict = function () {
        root.async = previous_async;
        return async;
    };

    function only_once(fn) {
        var called = false;
        return function() {
            if (called) throw new Error("Callback was already called.");
            called = true;
            fn.apply(root, arguments);
        }
    }

    //// cross-browser compatiblity functions ////

    var _toString = Object.prototype.toString;

    var _isArray = Array.isArray || function (obj) {
        return _toString.call(obj) === '[object Array]';
    };

    var _each = function (arr, iterator) {
        if (arr.forEach) {
            return arr.forEach(iterator);
        }
        for (var i = 0; i < arr.length; i += 1) {
            iterator(arr[i], i, arr);
        }
    };

    var _map = function (arr, iterator) {
        if (arr.map) {
            return arr.map(iterator);
        }
        var results = [];
        _each(arr, function (x, i, a) {
            results.push(iterator(x, i, a));
        });
        return results;
    };

    var _reduce = function (arr, iterator, memo) {
        if (arr.reduce) {
            return arr.reduce(iterator, memo);
        }
        _each(arr, function (x, i, a) {
            memo = iterator(memo, x, i, a);
        });
        return memo;
    };

    var _keys = function (obj) {
        if (Object.keys) {
            return Object.keys(obj);
        }
        var keys = [];
        for (var k in obj) {
            if (obj.hasOwnProperty(k)) {
                keys.push(k);
            }
        }
        return keys;
    };

    //// exported async module functions ////

    //// nextTick implementation with browser-compatible fallback ////
    if (typeof process === 'undefined' || !(process.nextTick)) {
        if (typeof setImmediate === 'function') {
            async.nextTick = function (fn) {
                // not a direct alias for IE10 compatibility
                setImmediate(fn);
            };
            async.setImmediate = async.nextTick;
        }
        else {
            async.nextTick = function (fn) {
                setTimeout(fn, 0);
            };
            async.setImmediate = async.nextTick;
        }
    }
    else {
        async.nextTick = process.nextTick;
        if (typeof setImmediate !== 'undefined') {
            async.setImmediate = function (fn) {
              // not a direct alias for IE10 compatibility
              setImmediate(fn);
            };
        }
        else {
            async.setImmediate = async.nextTick;
        }
    }

    async.each = function (arr, iterator, callback) {
        callback = callback || function () {};
        if (!arr.length) {
            return callback();
        }
        var completed = 0;
        _each(arr, function (x) {
            iterator(x, only_once(done) );
        });
        function done(err) {
          if (err) {
              callback(err);
              callback = function () {};
          }
          else {
              completed += 1;
              if (completed >= arr.length) {
                  callback();
              }
          }
        }
    };
    async.forEach = async.each;

    async.eachSeries = function (arr, iterator, callback) {
        callback = callback || function () {};
        if (!arr.length) {
            return callback();
        }
        var completed = 0;
        var iterate = function () {
            iterator(arr[completed], function (err) {
                if (err) {
                    callback(err);
                    callback = function () {};
                }
                else {
                    completed += 1;
                    if (completed >= arr.length) {
                        callback();
                    }
                    else {
                        iterate();
                    }
                }
            });
        };
        iterate();
    };
    async.forEachSeries = async.eachSeries;

    async.eachLimit = function (arr, limit, iterator, callback) {
        var fn = _eachLimit(limit);
        fn.apply(null, [arr, iterator, callback]);
    };
    async.forEachLimit = async.eachLimit;

    var _eachLimit = function (limit) {

        return function (arr, iterator, callback) {
            callback = callback || function () {};
            if (!arr.length || limit <= 0) {
                return callback();
            }
            var completed = 0;
            var started = 0;
            var running = 0;

            (function replenish () {
                if (completed >= arr.length) {
                    return callback();
                }

                while (running < limit && started < arr.length) {
                    started += 1;
                    running += 1;
                    iterator(arr[started - 1], function (err) {
                        if (err) {
                            callback(err);
                            callback = function () {};
                        }
                        else {
                            completed += 1;
                            running -= 1;
                            if (completed >= arr.length) {
                                callback();
                            }
                            else {
                                replenish();
                            }
                        }
                    });
                }
            })();
        };
    };


    var doParallel = function (fn) {
        return function () {
            var args = Array.prototype.slice.call(arguments);
            return fn.apply(null, [async.each].concat(args));
        };
    };
    var doParallelLimit = function(limit, fn) {
        return function () {
            var args = Array.prototype.slice.call(arguments);
            return fn.apply(null, [_eachLimit(limit)].concat(args));
        };
    };
    var doSeries = function (fn) {
        return function () {
            var args = Array.prototype.slice.call(arguments);
            return fn.apply(null, [async.eachSeries].concat(args));
        };
    };


    var _asyncMap = function (eachfn, arr, iterator, callback) {
        arr = _map(arr, function (x, i) {
            return {index: i, value: x};
        });
        if (!callback) {
            eachfn(arr, function (x, callback) {
                iterator(x.value, function (err) {
                    callback(err);
                });
            });
        } else {
            var results = [];
            eachfn(arr, function (x, callback) {
                iterator(x.value, function (err, v) {
                    results[x.index] = v;
                    callback(err);
                });
            }, function (err) {
                callback(err, results);
            });
        }
    };
    async.map = doParallel(_asyncMap);
    async.mapSeries = doSeries(_asyncMap);
    async.mapLimit = function (arr, limit, iterator, callback) {
        return _mapLimit(limit)(arr, iterator, callback);
    };

    var _mapLimit = function(limit) {
        return doParallelLimit(limit, _asyncMap);
    };

    // reduce only has a series version, as doing reduce in parallel won't
    // work in many situations.
    async.reduce = function (arr, memo, iterator, callback) {
        async.eachSeries(arr, function (x, callback) {
            iterator(memo, x, function (err, v) {
                memo = v;
                callback(err);
            });
        }, function (err) {
            callback(err, memo);
        });
    };
    // inject alias
    async.inject = async.reduce;
    // foldl alias
    async.foldl = async.reduce;

    async.reduceRight = function (arr, memo, iterator, callback) {
        var reversed = _map(arr, function (x) {
            return x;
        }).reverse();
        async.reduce(reversed, memo, iterator, callback);
    };
    // foldr alias
    async.foldr = async.reduceRight;

    var _filter = function (eachfn, arr, iterator, callback) {
        var results = [];
        arr = _map(arr, function (x, i) {
            return {index: i, value: x};
        });
        eachfn(arr, function (x, callback) {
            iterator(x.value, function (v) {
                if (v) {
                    results.push(x);
                }
                callback();
            });
        }, function (err) {
            callback(_map(results.sort(function (a, b) {
                return a.index - b.index;
            }), function (x) {
                return x.value;
            }));
        });
    };
    async.filter = doParallel(_filter);
    async.filterSeries = doSeries(_filter);
    // select alias
    async.select = async.filter;
    async.selectSeries = async.filterSeries;

    var _reject = function (eachfn, arr, iterator, callback) {
        var results = [];
        arr = _map(arr, function (x, i) {
            return {index: i, value: x};
        });
        eachfn(arr, function (x, callback) {
            iterator(x.value, function (v) {
                if (!v) {
                    results.push(x);
                }
                callback();
            });
        }, function (err) {
            callback(_map(results.sort(function (a, b) {
                return a.index - b.index;
            }), function (x) {
                return x.value;
            }));
        });
    };
    async.reject = doParallel(_reject);
    async.rejectSeries = doSeries(_reject);

    var _detect = function (eachfn, arr, iterator, main_callback) {
        eachfn(arr, function (x, callback) {
            iterator(x, function (result) {
                if (result) {
                    main_callback(x);
                    main_callback = function () {};
                }
                else {
                    callback();
                }
            });
        }, function (err) {
            main_callback();
        });
    };
    async.detect = doParallel(_detect);
    async.detectSeries = doSeries(_detect);

    async.some = function (arr, iterator, main_callback) {
        async.each(arr, function (x, callback) {
            iterator(x, function (v) {
                if (v) {
                    main_callback(true);
                    main_callback = function () {};
                }
                callback();
            });
        }, function (err) {
            main_callback(false);
        });
    };
    // any alias
    async.any = async.some;

    async.every = function (arr, iterator, main_callback) {
        async.each(arr, function (x, callback) {
            iterator(x, function (v) {
                if (!v) {
                    main_callback(false);
                    main_callback = function () {};
                }
                callback();
            });
        }, function (err) {
            main_callback(true);
        });
    };
    // all alias
    async.all = async.every;

    async.sortBy = function (arr, iterator, callback) {
        async.map(arr, function (x, callback) {
            iterator(x, function (err, criteria) {
                if (err) {
                    callback(err);
                }
                else {
                    callback(null, {value: x, criteria: criteria});
                }
            });
        }, function (err, results) {
            if (err) {
                return callback(err);
            }
            else {
                var fn = function (left, right) {
                    var a = left.criteria, b = right.criteria;
                    return a < b ? -1 : a > b ? 1 : 0;
                };
                callback(null, _map(results.sort(fn), function (x) {
                    return x.value;
                }));
            }
        });
    };

    async.auto = function (tasks, callback) {
        callback = callback || function () {};
        var keys = _keys(tasks);
        var remainingTasks = keys.length
        if (!remainingTasks) {
            return callback();
        }

        var results = {};

        var listeners = [];
        var addListener = function (fn) {
            listeners.unshift(fn);
        };
        var removeListener = function (fn) {
            for (var i = 0; i < listeners.length; i += 1) {
                if (listeners[i] === fn) {
                    listeners.splice(i, 1);
                    return;
                }
            }
        };
        var taskComplete = function () {
            remainingTasks--
            _each(listeners.slice(0), function (fn) {
                fn();
            });
        };

        addListener(function () {
            if (!remainingTasks) {
                var theCallback = callback;
                // prevent final callback from calling itself if it errors
                callback = function () {};

                theCallback(null, results);
            }
        });

        _each(keys, function (k) {
            var task = _isArray(tasks[k]) ? tasks[k]: [tasks[k]];
            var taskCallback = function (err) {
                var args = Array.prototype.slice.call(arguments, 1);
                if (args.length <= 1) {
                    args = args[0];
                }
                if (err) {
                    var safeResults = {};
                    _each(_keys(results), function(rkey) {
                        safeResults[rkey] = results[rkey];
                    });
                    safeResults[k] = args;
                    callback(err, safeResults);
                    // stop subsequent errors hitting callback multiple times
                    callback = function () {};
                }
                else {
                    results[k] = args;
                    async.setImmediate(taskComplete);
                }
            };
            var requires = task.slice(0, Math.abs(task.length - 1)) || [];
            var ready = function () {
                return _reduce(requires, function (a, x) {
                    return (a && results.hasOwnProperty(x));
                }, true) && !results.hasOwnProperty(k);
            };
            if (ready()) {
                task[task.length - 1](taskCallback, results);
            }
            else {
                var listener = function () {
                    if (ready()) {
                        removeListener(listener);
                        task[task.length - 1](taskCallback, results);
                    }
                };
                addListener(listener);
            }
        });
    };

    async.retry = function(times, task, callback) {
        var DEFAULT_TIMES = 5;
        var attempts = [];
        // Use defaults if times not passed
        if (typeof times === 'function') {
            callback = task;
            task = times;
            times = DEFAULT_TIMES;
        }
        // Make sure times is a number
        times = parseInt(times, 10) || DEFAULT_TIMES;
        var wrappedTask = function(wrappedCallback, wrappedResults) {
            var retryAttempt = function(task, finalAttempt) {
                return function(seriesCallback) {
                    task(function(err, result){
                        seriesCallback(!err || finalAttempt, {err: err, result: result});
                    }, wrappedResults);
                };
            };
            while (times) {
                attempts.push(retryAttempt(task, !(times-=1)));
            }
            async.series(attempts, function(done, data){
                data = data[data.length - 1];
                (wrappedCallback || callback)(data.err, data.result);
            });
        }
        // If a callback is passed, run this as a controll flow
        return callback ? wrappedTask() : wrappedTask
    };

    async.waterfall = function (tasks, callback) {
        callback = callback || function () {};
        if (!_isArray(tasks)) {
          var err = new Error('First argument to waterfall must be an array of functions');
          return callback(err);
        }
        if (!tasks.length) {
            return callback();
        }
        var wrapIterator = function (iterator) {
            return function (err) {
                if (err) {
                    callback.apply(null, arguments);
                    callback = function () {};
                }
                else {
                    var args = Array.prototype.slice.call(arguments, 1);
                    var next = iterator.next();
                    if (next) {
                        args.push(wrapIterator(next));
                    }
                    else {
                        args.push(callback);
                    }
                    async.setImmediate(function () {
                        iterator.apply(null, args);
                    });
                }
            };
        };
        wrapIterator(async.iterator(tasks))();
    };

    var _parallel = function(eachfn, tasks, callback) {
        callback = callback || function () {};
        if (_isArray(tasks)) {
            eachfn.map(tasks, function (fn, callback) {
                if (fn) {
                    fn(function (err) {
                        var args = Array.prototype.slice.call(arguments, 1);
                        if (args.length <= 1) {
                            args = args[0];
                        }
                        callback.call(null, err, args);
                    });
                }
            }, callback);
        }
        else {
            var results = {};
            eachfn.each(_keys(tasks), function (k, callback) {
                tasks[k](function (err) {
                    var args = Array.prototype.slice.call(arguments, 1);
                    if (args.length <= 1) {
                        args = args[0];
                    }
                    results[k] = args;
                    callback(err);
                });
            }, function (err) {
                callback(err, results);
            });
        }
    };

    async.parallel = function (tasks, callback) {
        _parallel({ map: async.map, each: async.each }, tasks, callback);
    };

    async.parallelLimit = function(tasks, limit, callback) {
        _parallel({ map: _mapLimit(limit), each: _eachLimit(limit) }, tasks, callback);
    };

    async.series = function (tasks, callback) {
        callback = callback || function () {};
        if (_isArray(tasks)) {
            async.mapSeries(tasks, function (fn, callback) {
                if (fn) {
                    fn(function (err) {
                        var args = Array.prototype.slice.call(arguments, 1);
                        if (args.length <= 1) {
                            args = args[0];
                        }
                        callback.call(null, err, args);
                    });
                }
            }, callback);
        }
        else {
            var results = {};
            async.eachSeries(_keys(tasks), function (k, callback) {
                tasks[k](function (err) {
                    var args = Array.prototype.slice.call(arguments, 1);
                    if (args.length <= 1) {
                        args = args[0];
                    }
                    results[k] = args;
                    callback(err);
                });
            }, function (err) {
                callback(err, results);
            });
        }
    };

    async.iterator = function (tasks) {
        var makeCallback = function (index) {
            var fn = function () {
                if (tasks.length) {
                    tasks[index].apply(null, arguments);
                }
                return fn.next();
            };
            fn.next = function () {
                return (index < tasks.length - 1) ? makeCallback(index + 1): null;
            };
            return fn;
        };
        return makeCallback(0);
    };

    async.apply = function (fn) {
        var args = Array.prototype.slice.call(arguments, 1);
        return function () {
            return fn.apply(
                null, args.concat(Array.prototype.slice.call(arguments))
            );
        };
    };

    var _concat = function (eachfn, arr, fn, callback) {
        var r = [];
        eachfn(arr, function (x, cb) {
            fn(x, function (err, y) {
                r = r.concat(y || []);
                cb(err);
            });
        }, function (err) {
            callback(err, r);
        });
    };
    async.concat = doParallel(_concat);
    async.concatSeries = doSeries(_concat);

    async.whilst = function (test, iterator, callback) {
        if (test()) {
            iterator(function (err) {
                if (err) {
                    return callback(err);
                }
                async.whilst(test, iterator, callback);
            });
        }
        else {
            callback();
        }
    };

    async.doWhilst = function (iterator, test, callback) {
        iterator(function (err) {
            if (err) {
                return callback(err);
            }
            var args = Array.prototype.slice.call(arguments, 1);
            if (test.apply(null, args)) {
                async.doWhilst(iterator, test, callback);
            }
            else {
                callback();
            }
        });
    };

    async.until = function (test, iterator, callback) {
        if (!test()) {
            iterator(function (err) {
                if (err) {
                    return callback(err);
                }
                async.until(test, iterator, callback);
            });
        }
        else {
            callback();
        }
    };

    async.doUntil = function (iterator, test, callback) {
        iterator(function (err) {
            if (err) {
                return callback(err);
            }
            var args = Array.prototype.slice.call(arguments, 1);
            if (!test.apply(null, args)) {
                async.doUntil(iterator, test, callback);
            }
            else {
                callback();
            }
        });
    };

    async.queue = function (worker, concurrency) {
        if (concurrency === undefined) {
            concurrency = 1;
        }
        function _insert(q, data, pos, callback) {
          if (!q.started){
            q.started = true;
          }
          if (!_isArray(data)) {
              data = [data];
          }
          if(data.length == 0) {
             // call drain immediately if there are no tasks
             return async.setImmediate(function() {
                 if (q.drain) {
                     q.drain();
                 }
             });
          }
          _each(data, function(task) {
              var item = {
                  data: task,
                  callback: typeof callback === 'function' ? callback : null
              };

              if (pos) {
                q.tasks.unshift(item);
              } else {
                q.tasks.push(item);
              }

              if (q.saturated && q.tasks.length === q.concurrency) {
                  q.saturated();
              }
              async.setImmediate(q.process);
          });
        }

        var workers = 0;
        var q = {
            tasks: [],
            concurrency: concurrency,
            saturated: null,
            empty: null,
            drain: null,
            started: false,
            paused: false,
            push: function (data, callback) {
              _insert(q, data, false, callback);
            },
            kill: function () {
              q.drain = null;
              q.tasks = [];
            },
            unshift: function (data, callback) {
              _insert(q, data, true, callback);
            },
            process: function () {
                if (!q.paused && workers < q.concurrency && q.tasks.length) {
                    var task = q.tasks.shift();
                    if (q.empty && q.tasks.length === 0) {
                        q.empty();
                    }
                    workers += 1;
                    var next = function () {
                        workers -= 1;
                        if (task.callback) {
                            task.callback.apply(task, arguments);
                        }
                        if (q.drain && q.tasks.length + workers === 0) {
                            q.drain();
                        }
                        q.process();
                    };
                    var cb = only_once(next);
                    worker(task.data, cb);
                }
            },
            length: function () {
                return q.tasks.length;
            },
            running: function () {
                return workers;
            },
            idle: function() {
                return q.tasks.length + workers === 0;
            },
            pause: function () {
                if (q.paused === true) { return; }
                q.paused = true;
                q.process();
            },
            resume: function () {
                if (q.paused === false) { return; }
                q.paused = false;
                q.process();
            }
        };
        return q;
    };
    
    async.priorityQueue = function (worker, concurrency) {
        
        function _compareTasks(a, b){
          return a.priority - b.priority;
        };
        
        function _binarySearch(sequence, item, compare) {
          var beg = -1,
              end = sequence.length - 1;
          while (beg < end) {
            var mid = beg + ((end - beg + 1) >>> 1);
            if (compare(item, sequence[mid]) >= 0) {
              beg = mid;
            } else {
              end = mid - 1;
            }
          }
          return beg;
        }
        
        function _insert(q, data, priority, callback) {
          if (!q.started){
            q.started = true;
          }
          if (!_isArray(data)) {
              data = [data];
          }
          if(data.length == 0) {
             // call drain immediately if there are no tasks
             return async.setImmediate(function() {
                 if (q.drain) {
                     q.drain();
                 }
             });
          }
          _each(data, function(task) {
              var item = {
                  data: task,
                  priority: priority,
                  callback: typeof callback === 'function' ? callback : null
              };
              
              q.tasks.splice(_binarySearch(q.tasks, item, _compareTasks) + 1, 0, item);

              if (q.saturated && q.tasks.length === q.concurrency) {
                  q.saturated();
              }
              async.setImmediate(q.process);
          });
        }
        
        // Start with a normal queue
        var q = async.queue(worker, concurrency);
        
        // Override push to accept second parameter representing priority
        q.push = function (data, priority, callback) {
          _insert(q, data, priority, callback);
        };
        
        // Remove unshift function
        delete q.unshift;

        return q;
    };

    async.cargo = function (worker, payload) {
        var working     = false,
            tasks       = [];

        var cargo = {
            tasks: tasks,
            payload: payload,
            saturated: null,
            empty: null,
            drain: null,
            drained: true,
            push: function (data, callback) {
                if (!_isArray(data)) {
                    data = [data];
                }
                _each(data, function(task) {
                    tasks.push({
                        data: task,
                        callback: typeof callback === 'function' ? callback : null
                    });
                    cargo.drained = false;
                    if (cargo.saturated && tasks.length === payload) {
                        cargo.saturated();
                    }
                });
                async.setImmediate(cargo.process);
            },
            process: function process() {
                if (working) return;
                if (tasks.length === 0) {
                    if(cargo.drain && !cargo.drained) cargo.drain();
                    cargo.drained = true;
                    return;
                }

                var ts = typeof payload === 'number'
                            ? tasks.splice(0, payload)
                            : tasks.splice(0, tasks.length);

                var ds = _map(ts, function (task) {
                    return task.data;
                });

                if(cargo.empty) cargo.empty();
                working = true;
                worker(ds, function () {
                    working = false;

                    var args = arguments;
                    _each(ts, function (data) {
                        if (data.callback) {
                            data.callback.apply(null, args);
                        }
                    });

                    process();
                });
            },
            length: function () {
                return tasks.length;
            },
            running: function () {
                return working;
            }
        };
        return cargo;
    };

    var _console_fn = function (name) {
        return function (fn) {
            var args = Array.prototype.slice.call(arguments, 1);
            fn.apply(null, args.concat([function (err) {
                var args = Array.prototype.slice.call(arguments, 1);
                if (typeof console !== 'undefined') {
                    if (err) {
                        if (console.error) {
                            console.error(err);
                        }
                    }
                    else if (console[name]) {
                        _each(args, function (x) {
                            console[name](x);
                        });
                    }
                }
            }]));
        };
    };
    async.log = _console_fn('log');
    async.dir = _console_fn('dir');
    /*async.info = _console_fn('info');
    async.warn = _console_fn('warn');
    async.error = _console_fn('error');*/

    async.memoize = function (fn, hasher) {
        var memo = {};
        var queues = {};
        hasher = hasher || function (x) {
            return x;
        };
        var memoized = function () {
            var args = Array.prototype.slice.call(arguments);
            var callback = args.pop();
            var key = hasher.apply(null, args);
            if (key in memo) {
                async.nextTick(function () {
                    callback.apply(null, memo[key]);
                });
            }
            else if (key in queues) {
                queues[key].push(callback);
            }
            else {
                queues[key] = [callback];
                fn.apply(null, args.concat([function () {
                    memo[key] = arguments;
                    var q = queues[key];
                    delete queues[key];
                    for (var i = 0, l = q.length; i < l; i++) {
                      q[i].apply(null, arguments);
                    }
                }]));
            }
        };
        memoized.memo = memo;
        memoized.unmemoized = fn;
        return memoized;
    };

    async.unmemoize = function (fn) {
      return function () {
        return (fn.unmemoized || fn).apply(null, arguments);
      };
    };

    async.times = function (count, iterator, callback) {
        var counter = [];
        for (var i = 0; i < count; i++) {
            counter.push(i);
        }
        return async.map(counter, iterator, callback);
    };

    async.timesSeries = function (count, iterator, callback) {
        var counter = [];
        for (var i = 0; i < count; i++) {
            counter.push(i);
        }
        return async.mapSeries(counter, iterator, callback);
    };

    async.seq = function (/* functions... */) {
        var fns = arguments;
        return function () {
            var that = this;
            var args = Array.prototype.slice.call(arguments);
            var callback = args.pop();
            async.reduce(fns, args, function (newargs, fn, cb) {
                fn.apply(that, newargs.concat([function () {
                    var err = arguments[0];
                    var nextargs = Array.prototype.slice.call(arguments, 1);
                    cb(err, nextargs);
                }]))
            },
            function (err, results) {
                callback.apply(that, [err].concat(results));
            });
        };
    };

    async.compose = function (/* functions... */) {
      return async.seq.apply(null, Array.prototype.reverse.call(arguments));
    };

    var _applyEach = function (eachfn, fns /*args...*/) {
        var go = function () {
            var that = this;
            var args = Array.prototype.slice.call(arguments);
            var callback = args.pop();
            return eachfn(fns, function (fn, cb) {
                fn.apply(that, args.concat([cb]));
            },
            callback);
        };
        if (arguments.length > 2) {
            var args = Array.prototype.slice.call(arguments, 2);
            return go.apply(this, args);
        }
        else {
            return go;
        }
    };
    async.applyEach = doParallel(_applyEach);
    async.applyEachSeries = doSeries(_applyEach);

    async.forever = function (fn, callback) {
        function next(err) {
            if (err) {
                if (callback) {
                    return callback(err);
                }
                throw err;
            }
            fn(next);
        }
        next();
    };

    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = async;
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([], function () {
            return async;
        });
    }
    // included directly via <script> tag
    else {
        root.async = async;
    }

}());

}).call(this,require('_process'))
},{"_process":"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/process/browser.js"}],"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/buffer/index.js":[function(require,module,exports){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

var base64 = require('base64-js')
var ieee754 = require('ieee754')
var isArray = require('is-array')

exports.Buffer = Buffer
exports.SlowBuffer = Buffer
exports.INSPECT_MAX_BYTES = 50
Buffer.poolSize = 8192 // not used by this implementation

var kMaxLength = 0x3fffffff

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Note:
 *
 * - Implementation must support adding new properties to `Uint8Array` instances.
 *   Firefox 4-29 lacked support, fixed in Firefox 30+.
 *   See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *  - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *  - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *    incorrect length in some situations.
 *
 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they will
 * get the Object implementation, which is slower but will work correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = (function () {
  try {
    var buf = new ArrayBuffer(0)
    var arr = new Uint8Array(buf)
    arr.foo = function () { return 42 }
    return 42 === arr.foo() && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        new Uint8Array(1).subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
})()

/**
 * Class: Buffer
 * =============
 *
 * The Buffer constructor returns instances of `Uint8Array` that are augmented
 * with function properties for all the node `Buffer` API functions. We use
 * `Uint8Array` so that square bracket notation works as expected -- it returns
 * a single octet.
 *
 * By augmenting the instances, we can avoid modifying the `Uint8Array`
 * prototype.
 */
function Buffer (subject, encoding, noZero) {
  if (!(this instanceof Buffer))
    return new Buffer(subject, encoding, noZero)

  var type = typeof subject

  // Find the length
  var length
  if (type === 'number')
    length = subject > 0 ? subject >>> 0 : 0
  else if (type === 'string') {
    if (encoding === 'base64')
      subject = base64clean(subject)
    length = Buffer.byteLength(subject, encoding)
  } else if (type === 'object' && subject !== null) { // assume object is array-like
    if (subject.type === 'Buffer' && isArray(subject.data))
      subject = subject.data
    length = +subject.length > 0 ? Math.floor(+subject.length) : 0
  } else
    throw new TypeError('must start with number, buffer, array or string')

  if (this.length > kMaxLength)
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
      'size: 0x' + kMaxLength.toString(16) + ' bytes')

  var buf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Preferred: Return an augmented `Uint8Array` instance for best performance
    buf = Buffer._augment(new Uint8Array(length))
  } else {
    // Fallback: Return THIS instance of Buffer (created by `new`)
    buf = this
    buf.length = length
    buf._isBuffer = true
  }

  var i
  if (Buffer.TYPED_ARRAY_SUPPORT && typeof subject.byteLength === 'number') {
    // Speed optimization -- use set if we're copying from a typed array
    buf._set(subject)
  } else if (isArrayish(subject)) {
    // Treat array-ish objects as a byte array
    if (Buffer.isBuffer(subject)) {
      for (i = 0; i < length; i++)
        buf[i] = subject.readUInt8(i)
    } else {
      for (i = 0; i < length; i++)
        buf[i] = ((subject[i] % 256) + 256) % 256
    }
  } else if (type === 'string') {
    buf.write(subject, 0, encoding)
  } else if (type === 'number' && !Buffer.TYPED_ARRAY_SUPPORT && !noZero) {
    for (i = 0; i < length; i++) {
      buf[i] = 0
    }
  }

  return buf
}

Buffer.isBuffer = function (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b))
    throw new TypeError('Arguments must be Buffers')

  var x = a.length
  var y = b.length
  for (var i = 0, len = Math.min(x, y); i < len && a[i] === b[i]; i++) {}
  if (i !== len) {
    x = a[i]
    y = b[i]
  }
  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'base64':
    case 'raw':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function (list, totalLength) {
  if (!isArray(list)) throw new TypeError('Usage: Buffer.concat(list[, length])')

  if (list.length === 0) {
    return new Buffer(0)
  } else if (list.length === 1) {
    return list[0]
  }

  var i
  if (totalLength === undefined) {
    totalLength = 0
    for (i = 0; i < list.length; i++) {
      totalLength += list[i].length
    }
  }

  var buf = new Buffer(totalLength)
  var pos = 0
  for (i = 0; i < list.length; i++) {
    var item = list[i]
    item.copy(buf, pos)
    pos += item.length
  }
  return buf
}

Buffer.byteLength = function (str, encoding) {
  var ret
  str = str + ''
  switch (encoding || 'utf8') {
    case 'ascii':
    case 'binary':
    case 'raw':
      ret = str.length
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = str.length * 2
      break
    case 'hex':
      ret = str.length >>> 1
      break
    case 'utf8':
    case 'utf-8':
      ret = utf8ToBytes(str).length
      break
    case 'base64':
      ret = base64ToBytes(str).length
      break
    default:
      ret = str.length
  }
  return ret
}

// pre-set for values that may exist in the future
Buffer.prototype.length = undefined
Buffer.prototype.parent = undefined

// toString(encoding, start=0, end=buffer.length)
Buffer.prototype.toString = function (encoding, start, end) {
  var loweredCase = false

  start = start >>> 0
  end = end === undefined || end === Infinity ? this.length : end >>> 0

  if (!encoding) encoding = 'utf8'
  if (start < 0) start = 0
  if (end > this.length) end = this.length
  if (end <= start) return ''

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'binary':
        return binarySlice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase)
          throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.equals = function (b) {
  if(!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max)
      str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  return Buffer.compare(this, b)
}

// `get` will be removed in Node 0.13+
Buffer.prototype.get = function (offset) {
  console.log('.get() is deprecated. Access using array indexes instead.')
  return this.readUInt8(offset)
}

// `set` will be removed in Node 0.13+
Buffer.prototype.set = function (v, offset) {
  console.log('.set() is deprecated. Access using array indexes instead.')
  return this.writeUInt8(v, offset)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new Error('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; i++) {
    var byte = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(byte)) throw new Error('Invalid hex string')
    buf[offset + i] = byte
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  var charsWritten = blitBuffer(utf8ToBytes(string), buf, offset, length)
  return charsWritten
}

function asciiWrite (buf, string, offset, length) {
  var charsWritten = blitBuffer(asciiToBytes(string), buf, offset, length)
  return charsWritten
}

function binaryWrite (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  var charsWritten = blitBuffer(base64ToBytes(string), buf, offset, length)
  return charsWritten
}

function utf16leWrite (buf, string, offset, length) {
  var charsWritten = blitBuffer(utf16leToBytes(string), buf, offset, length, 2)
  return charsWritten
}

Buffer.prototype.write = function (string, offset, length, encoding) {
  // Support both (string, offset, length, encoding)
  // and the legacy (string, encoding, offset, length)
  if (isFinite(offset)) {
    if (!isFinite(length)) {
      encoding = length
      length = undefined
    }
  } else {  // legacy
    var swap = encoding
    encoding = offset
    offset = length
    length = swap
  }

  offset = Number(offset) || 0
  var remaining = this.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }
  encoding = String(encoding || 'utf8').toLowerCase()

  var ret
  switch (encoding) {
    case 'hex':
      ret = hexWrite(this, string, offset, length)
      break
    case 'utf8':
    case 'utf-8':
      ret = utf8Write(this, string, offset, length)
      break
    case 'ascii':
      ret = asciiWrite(this, string, offset, length)
      break
    case 'binary':
      ret = binaryWrite(this, string, offset, length)
      break
    case 'base64':
      ret = base64Write(this, string, offset, length)
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = utf16leWrite(this, string, offset, length)
      break
    default:
      throw new TypeError('Unknown encoding: ' + encoding)
  }
  return ret
}

Buffer.prototype.toJSON = function () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  var res = ''
  var tmp = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    if (buf[i] <= 0x7F) {
      res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i])
      tmp = ''
    } else {
      tmp += '%' + buf[i].toString(16)
    }
  }

  return res + decodeUtf8Char(tmp)
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function binarySlice (buf, start, end) {
  return asciiSlice(buf, start, end)
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; i++) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len;
    if (start < 0)
      start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0)
      end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start)
    end = start

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    return Buffer._augment(this.subarray(start, end))
  } else {
    var sliceLen = end - start
    var newBuf = new Buffer(sliceLen, undefined, true)
    for (var i = 0; i < sliceLen; i++) {
      newBuf[i] = this[i + start]
    }
    return newBuf
  }
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0)
    throw new RangeError('offset is not uint')
  if (offset + ext > length)
    throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUInt8 = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
      ((this[offset + 1] << 16) |
      (this[offset + 2] << 8) |
      this[offset + 3])
}

Buffer.prototype.readInt8 = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80))
    return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)

  return (this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16) |
      (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
      (this[offset + 1] << 16) |
      (this[offset + 2] << 8) |
      (this[offset + 3])
}

Buffer.prototype.readFloatLE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('buffer must be a Buffer instance')
  if (value > max || value < min) throw new TypeError('value is out of bounds')
  if (offset + ext > buf.length) throw new TypeError('index out of range')
}

Buffer.prototype.writeUInt8 = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = value
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value
    this[offset + 1] = (value >>> 8)
  } else objectWriteUInt16(this, value, offset, true)
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = value
  } else objectWriteUInt16(this, value, offset, false)
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = value
  } else objectWriteUInt32(this, value, offset, true)
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = value
  } else objectWriteUInt32(this, value, offset, false)
  return offset + 4
}

Buffer.prototype.writeInt8 = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = value
  return offset + 1
}

Buffer.prototype.writeInt16LE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value
    this[offset + 1] = (value >>> 8)
  } else objectWriteUInt16(this, value, offset, true)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = value
  } else objectWriteUInt16(this, value, offset, false)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else objectWriteUInt32(this, value, offset, true)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = value
  } else objectWriteUInt32(this, value, offset, false)
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (value > max || value < min) throw new TypeError('value is out of bounds')
  if (offset + ext > buf.length) throw new TypeError('index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert)
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert)
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function (target, target_start, start, end) {
  var source = this

  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (!target_start) target_start = 0

  // Copy 0 bytes; we're done
  if (end === start) return
  if (target.length === 0 || source.length === 0) return

  // Fatal error conditions
  if (end < start) throw new TypeError('sourceEnd < sourceStart')
  if (target_start < 0 || target_start >= target.length)
    throw new TypeError('targetStart out of bounds')
  if (start < 0 || start >= source.length) throw new TypeError('sourceStart out of bounds')
  if (end < 0 || end > source.length) throw new TypeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length)
    end = this.length
  if (target.length - target_start < end - start)
    end = target.length - target_start + start

  var len = end - start

  if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < len; i++) {
      target[i + target_start] = this[i + start]
    }
  } else {
    target._set(this.subarray(start, start + len), target_start)
  }
}

// fill(value, start=0, end=buffer.length)
Buffer.prototype.fill = function (value, start, end) {
  if (!value) value = 0
  if (!start) start = 0
  if (!end) end = this.length

  if (end < start) throw new TypeError('end < start')

  // Fill 0 bytes; we're done
  if (end === start) return
  if (this.length === 0) return

  if (start < 0 || start >= this.length) throw new TypeError('start out of bounds')
  if (end < 0 || end > this.length) throw new TypeError('end out of bounds')

  var i
  if (typeof value === 'number') {
    for (i = start; i < end; i++) {
      this[i] = value
    }
  } else {
    var bytes = utf8ToBytes(value.toString())
    var len = bytes.length
    for (i = start; i < end; i++) {
      this[i] = bytes[i % len]
    }
  }

  return this
}

/**
 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
 */
Buffer.prototype.toArrayBuffer = function () {
  if (typeof Uint8Array !== 'undefined') {
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      return (new Buffer(this)).buffer
    } else {
      var buf = new Uint8Array(this.length)
      for (var i = 0, len = buf.length; i < len; i += 1) {
        buf[i] = this[i]
      }
      return buf.buffer
    }
  } else {
    throw new TypeError('Buffer.toArrayBuffer not supported in this browser')
  }
}

// HELPER FUNCTIONS
// ================

var BP = Buffer.prototype

/**
 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
 */
Buffer._augment = function (arr) {
  arr.constructor = Buffer
  arr._isBuffer = true

  // save reference to original Uint8Array get/set methods before overwriting
  arr._get = arr.get
  arr._set = arr.set

  // deprecated, will be removed in node 0.13+
  arr.get = BP.get
  arr.set = BP.set

  arr.write = BP.write
  arr.toString = BP.toString
  arr.toLocaleString = BP.toString
  arr.toJSON = BP.toJSON
  arr.equals = BP.equals
  arr.compare = BP.compare
  arr.copy = BP.copy
  arr.slice = BP.slice
  arr.readUInt8 = BP.readUInt8
  arr.readUInt16LE = BP.readUInt16LE
  arr.readUInt16BE = BP.readUInt16BE
  arr.readUInt32LE = BP.readUInt32LE
  arr.readUInt32BE = BP.readUInt32BE
  arr.readInt8 = BP.readInt8
  arr.readInt16LE = BP.readInt16LE
  arr.readInt16BE = BP.readInt16BE
  arr.readInt32LE = BP.readInt32LE
  arr.readInt32BE = BP.readInt32BE
  arr.readFloatLE = BP.readFloatLE
  arr.readFloatBE = BP.readFloatBE
  arr.readDoubleLE = BP.readDoubleLE
  arr.readDoubleBE = BP.readDoubleBE
  arr.writeUInt8 = BP.writeUInt8
  arr.writeUInt16LE = BP.writeUInt16LE
  arr.writeUInt16BE = BP.writeUInt16BE
  arr.writeUInt32LE = BP.writeUInt32LE
  arr.writeUInt32BE = BP.writeUInt32BE
  arr.writeInt8 = BP.writeInt8
  arr.writeInt16LE = BP.writeInt16LE
  arr.writeInt16BE = BP.writeInt16BE
  arr.writeInt32LE = BP.writeInt32LE
  arr.writeInt32BE = BP.writeInt32BE
  arr.writeFloatLE = BP.writeFloatLE
  arr.writeFloatBE = BP.writeFloatBE
  arr.writeDoubleLE = BP.writeDoubleLE
  arr.writeDoubleBE = BP.writeDoubleBE
  arr.fill = BP.fill
  arr.inspect = BP.inspect
  arr.toArrayBuffer = BP.toArrayBuffer

  return arr
}

var INVALID_BASE64_RE = /[^+\/0-9A-z]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function isArrayish (subject) {
  return isArray(subject) || Buffer.isBuffer(subject) ||
      subject && typeof subject === 'object' &&
      typeof subject.length === 'number'
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    var b = str.charCodeAt(i)
    if (b <= 0x7F) {
      byteArray.push(b)
    } else {
      var start = i
      if (b >= 0xD800 && b <= 0xDFFF) i++
      var h = encodeURIComponent(str.slice(start, i+1)).substr(1).split('%')
      for (var j = 0; j < h.length; j++) {
        byteArray.push(parseInt(h[j], 16))
      }
    }
  }
  return byteArray
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(str)
}

function blitBuffer (src, dst, offset, length, unitSize) {
  if (unitSize) length -= length % unitSize;
  for (var i = 0; i < length; i++) {
    if ((i + offset >= dst.length) || (i >= src.length))
      break
    dst[i + offset] = src[i]
  }
  return i
}

function decodeUtf8Char (str) {
  try {
    return decodeURIComponent(str)
  } catch (err) {
    return String.fromCharCode(0xFFFD) // UTF 8 invalid char
  }
}

},{"base64-js":"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib/b64.js","ieee754":"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/buffer/node_modules/ieee754/index.js","is-array":"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/buffer/node_modules/is-array/index.js"}],"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib/b64.js":[function(require,module,exports){
var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

;(function (exports) {
	'use strict';

  var Arr = (typeof Uint8Array !== 'undefined')
    ? Uint8Array
    : Array

	var PLUS   = '+'.charCodeAt(0)
	var SLASH  = '/'.charCodeAt(0)
	var NUMBER = '0'.charCodeAt(0)
	var LOWER  = 'a'.charCodeAt(0)
	var UPPER  = 'A'.charCodeAt(0)

	function decode (elt) {
		var code = elt.charCodeAt(0)
		if (code === PLUS)
			return 62 // '+'
		if (code === SLASH)
			return 63 // '/'
		if (code < NUMBER)
			return -1 //no match
		if (code < NUMBER + 10)
			return code - NUMBER + 26 + 26
		if (code < UPPER + 26)
			return code - UPPER
		if (code < LOWER + 26)
			return code - LOWER + 26
	}

	function b64ToByteArray (b64) {
		var i, j, l, tmp, placeHolders, arr

		if (b64.length % 4 > 0) {
			throw new Error('Invalid string. Length must be a multiple of 4')
		}

		// the number of equal signs (place holders)
		// if there are two placeholders, than the two characters before it
		// represent one byte
		// if there is only one, then the three characters before it represent 2 bytes
		// this is just a cheap hack to not do indexOf twice
		var len = b64.length
		placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

		// base64 is 4/3 + up to two characters of the original data
		arr = new Arr(b64.length * 3 / 4 - placeHolders)

		// if there are placeholders, only get up to the last complete 4 chars
		l = placeHolders > 0 ? b64.length - 4 : b64.length

		var L = 0

		function push (v) {
			arr[L++] = v
		}

		for (i = 0, j = 0; i < l; i += 4, j += 3) {
			tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
			push((tmp & 0xFF0000) >> 16)
			push((tmp & 0xFF00) >> 8)
			push(tmp & 0xFF)
		}

		if (placeHolders === 2) {
			tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
			push(tmp & 0xFF)
		} else if (placeHolders === 1) {
			tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
			push((tmp >> 8) & 0xFF)
			push(tmp & 0xFF)
		}

		return arr
	}

	function uint8ToBase64 (uint8) {
		var i,
			extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
			output = "",
			temp, length

		function encode (num) {
			return lookup.charAt(num)
		}

		function tripletToBase64 (num) {
			return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
		}

		// go through the array every three bytes, we'll deal with trailing stuff later
		for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
			temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
			output += tripletToBase64(temp)
		}

		// pad the end with zeros, but make sure to not forget the extra bytes
		switch (extraBytes) {
			case 1:
				temp = uint8[uint8.length - 1]
				output += encode(temp >> 2)
				output += encode((temp << 4) & 0x3F)
				output += '=='
				break
			case 2:
				temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
				output += encode(temp >> 10)
				output += encode((temp >> 4) & 0x3F)
				output += encode((temp << 2) & 0x3F)
				output += '='
				break
		}

		return output
	}

	exports.toByteArray = b64ToByteArray
	exports.fromByteArray = uint8ToBase64
}(typeof exports === 'undefined' ? (this.base64js = {}) : exports))

},{}],"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/buffer/node_modules/ieee754/index.js":[function(require,module,exports){
exports.read = function(buffer, offset, isLE, mLen, nBytes) {
  var e, m,
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      nBits = -7,
      i = isLE ? (nBytes - 1) : 0,
      d = isLE ? -1 : 1,
      s = buffer[offset + i];

  i += d;

  e = s & ((1 << (-nBits)) - 1);
  s >>= (-nBits);
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);

  m = e & ((1 << (-nBits)) - 1);
  e >>= (-nBits);
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity);
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c,
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0),
      i = isLE ? 0 : (nBytes - 1),
      d = isLE ? 1 : -1,
      s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);

  e = (e << mLen) | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);

  buffer[offset + i - d] |= s * 128;
};

},{}],"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/buffer/node_modules/is-array/index.js":[function(require,module,exports){

/**
 * isArray
 */

var isArray = Array.isArray;

/**
 * toString
 */

var str = Object.prototype.toString;

/**
 * Whether or not the given `val`
 * is an array.
 *
 * example:
 *
 *        isArray([]);
 *        // > true
 *        isArray(arguments);
 *        // > false
 *        isArray('');
 *        // > false
 *
 * @param {mixed} val
 * @return {bool}
 */

module.exports = isArray || function (val) {
  return !! val && '[object Array]' == str.call(val);
};

},{}],"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/events/events.js":[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      }
      throw TypeError('Uncaught, unspecified "error" event.');
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        len = arguments.length;
        args = new Array(len - 1);
        for (i = 1; i < len; i++)
          args[i - 1] = arguments[i];
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    len = arguments.length;
    args = new Array(len - 1);
    for (i = 1; i < len; i++)
      args[i - 1] = arguments[i];

    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    var m;
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.listenerCount = function(emitter, type) {
  var ret;
  if (!emitter._events || !emitter._events[type])
    ret = 0;
  else if (isFunction(emitter._events[type]))
    ret = 1;
  else
    ret = emitter._events[type].length;
  return ret;
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

},{}],"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/inherits/inherits_browser.js":[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/isarray/index.js":[function(require,module,exports){
module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

},{}],"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/process/browser.js":[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canMutationObserver = typeof window !== 'undefined'
    && window.MutationObserver;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    var queue = [];

    if (canMutationObserver) {
        var hiddenDiv = document.createElement("div");
        var observer = new MutationObserver(function () {
            var queueList = queue.slice();
            queue.length = 0;
            queueList.forEach(function (fn) {
                fn();
            });
        });

        observer.observe(hiddenDiv, { attributes: true });

        return function nextTick(fn) {
            if (!queue.length) {
                hiddenDiv.setAttribute('yes', 'no');
            }
            queue.push(fn);
        };
    }

    if (canPost) {
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}],"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/readable-stream/duplex.js":[function(require,module,exports){
module.exports = require("./lib/_stream_duplex.js")

},{"./lib/_stream_duplex.js":"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/readable-stream/lib/_stream_duplex.js"}],"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/readable-stream/lib/_stream_duplex.js":[function(require,module,exports){
(function (process){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.

module.exports = Duplex;

/*<replacement>*/
var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}
/*</replacement>*/


/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

var Readable = require('./_stream_readable');
var Writable = require('./_stream_writable');

util.inherits(Duplex, Readable);

forEach(objectKeys(Writable.prototype), function(method) {
  if (!Duplex.prototype[method])
    Duplex.prototype[method] = Writable.prototype[method];
});

function Duplex(options) {
  if (!(this instanceof Duplex))
    return new Duplex(options);

  Readable.call(this, options);
  Writable.call(this, options);

  if (options && options.readable === false)
    this.readable = false;

  if (options && options.writable === false)
    this.writable = false;

  this.allowHalfOpen = true;
  if (options && options.allowHalfOpen === false)
    this.allowHalfOpen = false;

  this.once('end', onend);
}

// the no-half-open enforcer
function onend() {
  // if we allow half-open state, or if the writable side ended,
  // then we're ok.
  if (this.allowHalfOpen || this._writableState.ended)
    return;

  // no more data can be written.
  // But allow more writes to happen in this tick.
  process.nextTick(this.end.bind(this));
}

function forEach (xs, f) {
  for (var i = 0, l = xs.length; i < l; i++) {
    f(xs[i], i);
  }
}

}).call(this,require('_process'))
},{"./_stream_readable":"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/readable-stream/lib/_stream_readable.js","./_stream_writable":"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/readable-stream/lib/_stream_writable.js","_process":"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/process/browser.js","core-util-is":"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/readable-stream/node_modules/core-util-is/lib/util.js","inherits":"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/inherits/inherits_browser.js"}],"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/readable-stream/lib/_stream_passthrough.js":[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.

module.exports = PassThrough;

var Transform = require('./_stream_transform');

/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

util.inherits(PassThrough, Transform);

function PassThrough(options) {
  if (!(this instanceof PassThrough))
    return new PassThrough(options);

  Transform.call(this, options);
}

PassThrough.prototype._transform = function(chunk, encoding, cb) {
  cb(null, chunk);
};

},{"./_stream_transform":"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/readable-stream/lib/_stream_transform.js","core-util-is":"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/readable-stream/node_modules/core-util-is/lib/util.js","inherits":"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/inherits/inherits_browser.js"}],"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/readable-stream/lib/_stream_readable.js":[function(require,module,exports){
(function (process){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

module.exports = Readable;

/*<replacement>*/
var isArray = require('isarray');
/*</replacement>*/


/*<replacement>*/
var Buffer = require('buffer').Buffer;
/*</replacement>*/

Readable.ReadableState = ReadableState;

var EE = require('events').EventEmitter;

/*<replacement>*/
if (!EE.listenerCount) EE.listenerCount = function(emitter, type) {
  return emitter.listeners(type).length;
};
/*</replacement>*/

var Stream = require('stream');

/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

var StringDecoder;

util.inherits(Readable, Stream);

function ReadableState(options, stream) {
  options = options || {};

  // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"
  var hwm = options.highWaterMark;
  this.highWaterMark = (hwm || hwm === 0) ? hwm : 16 * 1024;

  // cast to ints.
  this.highWaterMark = ~~this.highWaterMark;

  this.buffer = [];
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = false;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false;

  // In streams that never have any data, and do push(null) right away,
  // the consumer can miss the 'end' event if they do some I/O before
  // consuming the stream.  So, we don't emit('end') until some reading
  // happens.
  this.calledRead = false;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, becuase any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.
  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;


  // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away
  this.objectMode = !!options.objectMode;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // when piping, we only care about 'readable' events that happen
  // after read()ing all the bytes and not getting any pushback.
  this.ranOut = false;

  // the number of writers that are awaiting a drain event in .pipe()s
  this.awaitDrain = 0;

  // if true, a maybeReadMore has been scheduled
  this.readingMore = false;

  this.decoder = null;
  this.encoding = null;
  if (options.encoding) {
    if (!StringDecoder)
      StringDecoder = require('string_decoder/').StringDecoder;
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}

function Readable(options) {
  if (!(this instanceof Readable))
    return new Readable(options);

  this._readableState = new ReadableState(options, this);

  // legacy
  this.readable = true;

  Stream.call(this);
}

// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
Readable.prototype.push = function(chunk, encoding) {
  var state = this._readableState;

  if (typeof chunk === 'string' && !state.objectMode) {
    encoding = encoding || state.defaultEncoding;
    if (encoding !== state.encoding) {
      chunk = new Buffer(chunk, encoding);
      encoding = '';
    }
  }

  return readableAddChunk(this, state, chunk, encoding, false);
};

// Unshift should *always* be something directly out of read()
Readable.prototype.unshift = function(chunk) {
  var state = this._readableState;
  return readableAddChunk(this, state, chunk, '', true);
};

function readableAddChunk(stream, state, chunk, encoding, addToFront) {
  var er = chunkInvalid(state, chunk);
  if (er) {
    stream.emit('error', er);
  } else if (chunk === null || chunk === undefined) {
    state.reading = false;
    if (!state.ended)
      onEofChunk(stream, state);
  } else if (state.objectMode || chunk && chunk.length > 0) {
    if (state.ended && !addToFront) {
      var e = new Error('stream.push() after EOF');
      stream.emit('error', e);
    } else if (state.endEmitted && addToFront) {
      var e = new Error('stream.unshift() after end event');
      stream.emit('error', e);
    } else {
      if (state.decoder && !addToFront && !encoding)
        chunk = state.decoder.write(chunk);

      // update the buffer info.
      state.length += state.objectMode ? 1 : chunk.length;
      if (addToFront) {
        state.buffer.unshift(chunk);
      } else {
        state.reading = false;
        state.buffer.push(chunk);
      }

      if (state.needReadable)
        emitReadable(stream);

      maybeReadMore(stream, state);
    }
  } else if (!addToFront) {
    state.reading = false;
  }

  return needMoreData(state);
}



// if it's past the high water mark, we can push in some more.
// Also, if we have no data yet, we can stand some
// more bytes.  This is to work around cases where hwm=0,
// such as the repl.  Also, if the push() triggered a
// readable event, and the user called read(largeNumber) such that
// needReadable was set, then we ought to push more, so that another
// 'readable' event will be triggered.
function needMoreData(state) {
  return !state.ended &&
         (state.needReadable ||
          state.length < state.highWaterMark ||
          state.length === 0);
}

// backwards compatibility.
Readable.prototype.setEncoding = function(enc) {
  if (!StringDecoder)
    StringDecoder = require('string_decoder/').StringDecoder;
  this._readableState.decoder = new StringDecoder(enc);
  this._readableState.encoding = enc;
};

// Don't raise the hwm > 128MB
var MAX_HWM = 0x800000;
function roundUpToNextPowerOf2(n) {
  if (n >= MAX_HWM) {
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2
    n--;
    for (var p = 1; p < 32; p <<= 1) n |= n >> p;
    n++;
  }
  return n;
}

function howMuchToRead(n, state) {
  if (state.length === 0 && state.ended)
    return 0;

  if (state.objectMode)
    return n === 0 ? 0 : 1;

  if (n === null || isNaN(n)) {
    // only flow one buffer at a time
    if (state.flowing && state.buffer.length)
      return state.buffer[0].length;
    else
      return state.length;
  }

  if (n <= 0)
    return 0;

  // If we're asking for more than the target buffer level,
  // then raise the water mark.  Bump up to the next highest
  // power of 2, to prevent increasing it excessively in tiny
  // amounts.
  if (n > state.highWaterMark)
    state.highWaterMark = roundUpToNextPowerOf2(n);

  // don't have that much.  return null, unless we've ended.
  if (n > state.length) {
    if (!state.ended) {
      state.needReadable = true;
      return 0;
    } else
      return state.length;
  }

  return n;
}

// you can override either this method, or the async _read(n) below.
Readable.prototype.read = function(n) {
  var state = this._readableState;
  state.calledRead = true;
  var nOrig = n;
  var ret;

  if (typeof n !== 'number' || n > 0)
    state.emittedReadable = false;

  // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.
  if (n === 0 &&
      state.needReadable &&
      (state.length >= state.highWaterMark || state.ended)) {
    emitReadable(this);
    return null;
  }

  n = howMuchToRead(n, state);

  // if we've ended, and we're now clear, then finish it up.
  if (n === 0 && state.ended) {
    ret = null;

    // In cases where the decoder did not receive enough data
    // to produce a full chunk, then immediately received an
    // EOF, state.buffer will contain [<Buffer >, <Buffer 00 ...>].
    // howMuchToRead will see this and coerce the amount to
    // read to zero (because it's looking at the length of the
    // first <Buffer > in state.buffer), and we'll end up here.
    //
    // This can only happen via state.decoder -- no other venue
    // exists for pushing a zero-length chunk into state.buffer
    // and triggering this behavior. In this case, we return our
    // remaining data and end the stream, if appropriate.
    if (state.length > 0 && state.decoder) {
      ret = fromList(n, state);
      state.length -= ret.length;
    }

    if (state.length === 0)
      endReadable(this);

    return ret;
  }

  // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.

  // if we need a readable event, then we need to do some reading.
  var doRead = state.needReadable;

  // if we currently have less than the highWaterMark, then also read some
  if (state.length - n <= state.highWaterMark)
    doRead = true;

  // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.
  if (state.ended || state.reading)
    doRead = false;

  if (doRead) {
    state.reading = true;
    state.sync = true;
    // if the length is currently zero, then we *need* a readable event.
    if (state.length === 0)
      state.needReadable = true;
    // call internal read method
    this._read(state.highWaterMark);
    state.sync = false;
  }

  // If _read called its callback synchronously, then `reading`
  // will be false, and we need to re-evaluate how much data we
  // can return to the user.
  if (doRead && !state.reading)
    n = howMuchToRead(nOrig, state);

  if (n > 0)
    ret = fromList(n, state);
  else
    ret = null;

  if (ret === null) {
    state.needReadable = true;
    n = 0;
  }

  state.length -= n;

  // If we have nothing in the buffer, then we want to know
  // as soon as we *do* get something into the buffer.
  if (state.length === 0 && !state.ended)
    state.needReadable = true;

  // If we happened to read() exactly the remaining amount in the
  // buffer, and the EOF has been seen at this point, then make sure
  // that we emit 'end' on the very next tick.
  if (state.ended && !state.endEmitted && state.length === 0)
    endReadable(this);

  return ret;
};

function chunkInvalid(state, chunk) {
  var er = null;
  if (!Buffer.isBuffer(chunk) &&
      'string' !== typeof chunk &&
      chunk !== null &&
      chunk !== undefined &&
      !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  return er;
}


function onEofChunk(stream, state) {
  if (state.decoder && !state.ended) {
    var chunk = state.decoder.end();
    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }
  state.ended = true;

  // if we've ended and we have some data left, then emit
  // 'readable' now to make sure it gets picked up.
  if (state.length > 0)
    emitReadable(stream);
  else
    endReadable(stream);
}

// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function emitReadable(stream) {
  var state = stream._readableState;
  state.needReadable = false;
  if (state.emittedReadable)
    return;

  state.emittedReadable = true;
  if (state.sync)
    process.nextTick(function() {
      emitReadable_(stream);
    });
  else
    emitReadable_(stream);
}

function emitReadable_(stream) {
  stream.emit('readable');
}


// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    process.nextTick(function() {
      maybeReadMore_(stream, state);
    });
  }
}

function maybeReadMore_(stream, state) {
  var len = state.length;
  while (!state.reading && !state.flowing && !state.ended &&
         state.length < state.highWaterMark) {
    stream.read(0);
    if (len === state.length)
      // didn't get any data, stop spinning.
      break;
    else
      len = state.length;
  }
  state.readingMore = false;
}

// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
Readable.prototype._read = function(n) {
  this.emit('error', new Error('not implemented'));
};

Readable.prototype.pipe = function(dest, pipeOpts) {
  var src = this;
  var state = this._readableState;

  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;
    case 1:
      state.pipes = [state.pipes, dest];
      break;
    default:
      state.pipes.push(dest);
      break;
  }
  state.pipesCount += 1;

  var doEnd = (!pipeOpts || pipeOpts.end !== false) &&
              dest !== process.stdout &&
              dest !== process.stderr;

  var endFn = doEnd ? onend : cleanup;
  if (state.endEmitted)
    process.nextTick(endFn);
  else
    src.once('end', endFn);

  dest.on('unpipe', onunpipe);
  function onunpipe(readable) {
    if (readable !== src) return;
    cleanup();
  }

  function onend() {
    dest.end();
  }

  // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.
  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);

  function cleanup() {
    // cleanup event handlers once the pipe is broken
    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', cleanup);

    // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.
    if (!dest._writableState || dest._writableState.needDrain)
      ondrain();
  }

  // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.
  function onerror(er) {
    unpipe();
    dest.removeListener('error', onerror);
    if (EE.listenerCount(dest, 'error') === 0)
      dest.emit('error', er);
  }
  // This is a brutally ugly hack to make sure that our error handler
  // is attached before any userland ones.  NEVER DO THIS.
  if (!dest._events || !dest._events.error)
    dest.on('error', onerror);
  else if (isArray(dest._events.error))
    dest._events.error.unshift(onerror);
  else
    dest._events.error = [onerror, dest._events.error];



  // Both close and finish should trigger unpipe, but only once.
  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }
  dest.once('close', onclose);
  function onfinish() {
    dest.removeListener('close', onclose);
    unpipe();
  }
  dest.once('finish', onfinish);

  function unpipe() {
    src.unpipe(dest);
  }

  // tell the dest that it's being piped to
  dest.emit('pipe', src);

  // start the flow if it hasn't been started already.
  if (!state.flowing) {
    // the handler that waits for readable events after all
    // the data gets sucked out in flow.
    // This would be easier to follow with a .once() handler
    // in flow(), but that is too slow.
    this.on('readable', pipeOnReadable);

    state.flowing = true;
    process.nextTick(function() {
      flow(src);
    });
  }

  return dest;
};

function pipeOnDrain(src) {
  return function() {
    var dest = this;
    var state = src._readableState;
    state.awaitDrain--;
    if (state.awaitDrain === 0)
      flow(src);
  };
}

function flow(src) {
  var state = src._readableState;
  var chunk;
  state.awaitDrain = 0;

  function write(dest, i, list) {
    var written = dest.write(chunk);
    if (false === written) {
      state.awaitDrain++;
    }
  }

  while (state.pipesCount && null !== (chunk = src.read())) {

    if (state.pipesCount === 1)
      write(state.pipes, 0, null);
    else
      forEach(state.pipes, write);

    src.emit('data', chunk);

    // if anyone needs a drain, then we have to wait for that.
    if (state.awaitDrain > 0)
      return;
  }

  // if every destination was unpiped, either before entering this
  // function, or in the while loop, then stop flowing.
  //
  // NB: This is a pretty rare edge case.
  if (state.pipesCount === 0) {
    state.flowing = false;

    // if there were data event listeners added, then switch to old mode.
    if (EE.listenerCount(src, 'data') > 0)
      emitDataEvents(src);
    return;
  }

  // at this point, no one needed a drain, so we just ran out of data
  // on the next readable event, start it over again.
  state.ranOut = true;
}

function pipeOnReadable() {
  if (this._readableState.ranOut) {
    this._readableState.ranOut = false;
    flow(this);
  }
}


Readable.prototype.unpipe = function(dest) {
  var state = this._readableState;

  // if we're not piping anywhere, then do nothing.
  if (state.pipesCount === 0)
    return this;

  // just one destination.  most common case.
  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes)
      return this;

    if (!dest)
      dest = state.pipes;

    // got a match.
    state.pipes = null;
    state.pipesCount = 0;
    this.removeListener('readable', pipeOnReadable);
    state.flowing = false;
    if (dest)
      dest.emit('unpipe', this);
    return this;
  }

  // slow case. multiple pipe destinations.

  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    this.removeListener('readable', pipeOnReadable);
    state.flowing = false;

    for (var i = 0; i < len; i++)
      dests[i].emit('unpipe', this);
    return this;
  }

  // try to find the right one.
  var i = indexOf(state.pipes, dest);
  if (i === -1)
    return this;

  state.pipes.splice(i, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1)
    state.pipes = state.pipes[0];

  dest.emit('unpipe', this);

  return this;
};

// set up data events if they are asked for
// Ensure readable listeners eventually get something
Readable.prototype.on = function(ev, fn) {
  var res = Stream.prototype.on.call(this, ev, fn);

  if (ev === 'data' && !this._readableState.flowing)
    emitDataEvents(this);

  if (ev === 'readable' && this.readable) {
    var state = this._readableState;
    if (!state.readableListening) {
      state.readableListening = true;
      state.emittedReadable = false;
      state.needReadable = true;
      if (!state.reading) {
        this.read(0);
      } else if (state.length) {
        emitReadable(this, state);
      }
    }
  }

  return res;
};
Readable.prototype.addListener = Readable.prototype.on;

// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
Readable.prototype.resume = function() {
  emitDataEvents(this);
  this.read(0);
  this.emit('resume');
};

Readable.prototype.pause = function() {
  emitDataEvents(this, true);
  this.emit('pause');
};

function emitDataEvents(stream, startPaused) {
  var state = stream._readableState;

  if (state.flowing) {
    // https://github.com/isaacs/readable-stream/issues/16
    throw new Error('Cannot switch to old mode now.');
  }

  var paused = startPaused || false;
  var readable = false;

  // convert to an old-style stream.
  stream.readable = true;
  stream.pipe = Stream.prototype.pipe;
  stream.on = stream.addListener = Stream.prototype.on;

  stream.on('readable', function() {
    readable = true;

    var c;
    while (!paused && (null !== (c = stream.read())))
      stream.emit('data', c);

    if (c === null) {
      readable = false;
      stream._readableState.needReadable = true;
    }
  });

  stream.pause = function() {
    paused = true;
    this.emit('pause');
  };

  stream.resume = function() {
    paused = false;
    if (readable)
      process.nextTick(function() {
        stream.emit('readable');
      });
    else
      this.read(0);
    this.emit('resume');
  };

  // now make it start, just in case it hadn't already.
  stream.emit('readable');
}

// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
Readable.prototype.wrap = function(stream) {
  var state = this._readableState;
  var paused = false;

  var self = this;
  stream.on('end', function() {
    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length)
        self.push(chunk);
    }

    self.push(null);
  });

  stream.on('data', function(chunk) {
    if (state.decoder)
      chunk = state.decoder.write(chunk);

    // don't skip over falsy values in objectMode
    //if (state.objectMode && util.isNullOrUndefined(chunk))
    if (state.objectMode && (chunk === null || chunk === undefined))
      return;
    else if (!state.objectMode && (!chunk || !chunk.length))
      return;

    var ret = self.push(chunk);
    if (!ret) {
      paused = true;
      stream.pause();
    }
  });

  // proxy all the other methods.
  // important when wrapping filters and duplexes.
  for (var i in stream) {
    if (typeof stream[i] === 'function' &&
        typeof this[i] === 'undefined') {
      this[i] = function(method) { return function() {
        return stream[method].apply(stream, arguments);
      }}(i);
    }
  }

  // proxy certain important events.
  var events = ['error', 'close', 'destroy', 'pause', 'resume'];
  forEach(events, function(ev) {
    stream.on(ev, self.emit.bind(self, ev));
  });

  // when we try to consume some more bytes, simply unpause the
  // underlying stream.
  self._read = function(n) {
    if (paused) {
      paused = false;
      stream.resume();
    }
  };

  return self;
};



// exposed for testing purposes only.
Readable._fromList = fromList;

// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
function fromList(n, state) {
  var list = state.buffer;
  var length = state.length;
  var stringMode = !!state.decoder;
  var objectMode = !!state.objectMode;
  var ret;

  // nothing in the list, definitely empty.
  if (list.length === 0)
    return null;

  if (length === 0)
    ret = null;
  else if (objectMode)
    ret = list.shift();
  else if (!n || n >= length) {
    // read it all, truncate the array.
    if (stringMode)
      ret = list.join('');
    else
      ret = Buffer.concat(list, length);
    list.length = 0;
  } else {
    // read just some of it.
    if (n < list[0].length) {
      // just take a part of the first list item.
      // slice is the same for buffers and strings.
      var buf = list[0];
      ret = buf.slice(0, n);
      list[0] = buf.slice(n);
    } else if (n === list[0].length) {
      // first list is a perfect match
      ret = list.shift();
    } else {
      // complex case.
      // we have enough to cover it, but it spans past the first buffer.
      if (stringMode)
        ret = '';
      else
        ret = new Buffer(n);

      var c = 0;
      for (var i = 0, l = list.length; i < l && c < n; i++) {
        var buf = list[0];
        var cpy = Math.min(n - c, buf.length);

        if (stringMode)
          ret += buf.slice(0, cpy);
        else
          buf.copy(ret, c, 0, cpy);

        if (cpy < buf.length)
          list[0] = buf.slice(cpy);
        else
          list.shift();

        c += cpy;
      }
    }
  }

  return ret;
}

function endReadable(stream) {
  var state = stream._readableState;

  // If we get here before consuming all the bytes, then that is a
  // bug in node.  Should never happen.
  if (state.length > 0)
    throw new Error('endReadable called on non-empty stream');

  if (!state.endEmitted && state.calledRead) {
    state.ended = true;
    process.nextTick(function() {
      // Check that we didn't get one last unshift.
      if (!state.endEmitted && state.length === 0) {
        state.endEmitted = true;
        stream.readable = false;
        stream.emit('end');
      }
    });
  }
}

function forEach (xs, f) {
  for (var i = 0, l = xs.length; i < l; i++) {
    f(xs[i], i);
  }
}

function indexOf (xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }
  return -1;
}

}).call(this,require('_process'))
},{"_process":"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/process/browser.js","buffer":"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/buffer/index.js","core-util-is":"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/readable-stream/node_modules/core-util-is/lib/util.js","events":"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/events/events.js","inherits":"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/inherits/inherits_browser.js","isarray":"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/isarray/index.js","stream":"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/stream-browserify/index.js","string_decoder/":"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/string_decoder/index.js"}],"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/readable-stream/lib/_stream_transform.js":[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.

module.exports = Transform;

var Duplex = require('./_stream_duplex');

/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

util.inherits(Transform, Duplex);


function TransformState(options, stream) {
  this.afterTransform = function(er, data) {
    return afterTransform(stream, er, data);
  };

  this.needTransform = false;
  this.transforming = false;
  this.writecb = null;
  this.writechunk = null;
}

function afterTransform(stream, er, data) {
  var ts = stream._transformState;
  ts.transforming = false;

  var cb = ts.writecb;

  if (!cb)
    return stream.emit('error', new Error('no writecb in Transform class'));

  ts.writechunk = null;
  ts.writecb = null;

  if (data !== null && data !== undefined)
    stream.push(data);

  if (cb)
    cb(er);

  var rs = stream._readableState;
  rs.reading = false;
  if (rs.needReadable || rs.length < rs.highWaterMark) {
    stream._read(rs.highWaterMark);
  }
}


function Transform(options) {
  if (!(this instanceof Transform))
    return new Transform(options);

  Duplex.call(this, options);

  var ts = this._transformState = new TransformState(options, this);

  // when the writable side finishes, then flush out anything remaining.
  var stream = this;

  // start out asking for a readable event once data is transformed.
  this._readableState.needReadable = true;

  // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.
  this._readableState.sync = false;

  this.once('finish', function() {
    if ('function' === typeof this._flush)
      this._flush(function(er) {
        done(stream, er);
      });
    else
      done(stream);
  });
}

Transform.prototype.push = function(chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
};

// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
Transform.prototype._transform = function(chunk, encoding, cb) {
  throw new Error('not implemented');
};

Transform.prototype._write = function(chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;
  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform ||
        rs.needReadable ||
        rs.length < rs.highWaterMark)
      this._read(rs.highWaterMark);
  }
};

// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
Transform.prototype._read = function(n) {
  var ts = this._transformState;

  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
    ts.transforming = true;
    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};


function done(stream, er) {
  if (er)
    return stream.emit('error', er);

  // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided
  var ws = stream._writableState;
  var rs = stream._readableState;
  var ts = stream._transformState;

  if (ws.length)
    throw new Error('calling transform done when ws.length != 0');

  if (ts.transforming)
    throw new Error('calling transform done when still transforming');

  return stream.push(null);
}

},{"./_stream_duplex":"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/readable-stream/lib/_stream_duplex.js","core-util-is":"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/readable-stream/node_modules/core-util-is/lib/util.js","inherits":"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/inherits/inherits_browser.js"}],"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/readable-stream/lib/_stream_writable.js":[function(require,module,exports){
(function (process){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// A bit simpler than readable streams.
// Implement an async ._write(chunk, cb), and it'll handle all
// the drain event emission and buffering.

module.exports = Writable;

/*<replacement>*/
var Buffer = require('buffer').Buffer;
/*</replacement>*/

Writable.WritableState = WritableState;


/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

var Stream = require('stream');

util.inherits(Writable, Stream);

function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
}

function WritableState(options, stream) {
  options = options || {};

  // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()
  var hwm = options.highWaterMark;
  this.highWaterMark = (hwm || hwm === 0) ? hwm : 16 * 1024;

  // object stream flag to indicate whether or not this stream
  // contains buffers or objects.
  this.objectMode = !!options.objectMode;

  // cast to ints.
  this.highWaterMark = ~~this.highWaterMark;

  this.needDrain = false;
  // at the start of calling end()
  this.ending = false;
  // when end() has been called, and returned
  this.ended = false;
  // when 'finish' is emitted
  this.finished = false;

  // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.
  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.
  this.length = 0;

  // a flag to see when we're in the middle of a write.
  this.writing = false;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, becuase any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.
  this.bufferProcessing = false;

  // the callback that's passed to _write(chunk,cb)
  this.onwrite = function(er) {
    onwrite(stream, er);
  };

  // the callback that the user supplies to write(chunk,encoding,cb)
  this.writecb = null;

  // the amount that is being written when _write is called.
  this.writelen = 0;

  this.buffer = [];

  // True if the error was already emitted and should not be thrown again
  this.errorEmitted = false;
}

function Writable(options) {
  var Duplex = require('./_stream_duplex');

  // Writable ctor is applied to Duplexes, though they're not
  // instanceof Writable, they're instanceof Readable.
  if (!(this instanceof Writable) && !(this instanceof Duplex))
    return new Writable(options);

  this._writableState = new WritableState(options, this);

  // legacy.
  this.writable = true;

  Stream.call(this);
}

// Otherwise people can pipe Writable streams, which is just wrong.
Writable.prototype.pipe = function() {
  this.emit('error', new Error('Cannot pipe. Not readable.'));
};


function writeAfterEnd(stream, state, cb) {
  var er = new Error('write after end');
  // TODO: defer error events consistently everywhere, not just the cb
  stream.emit('error', er);
  process.nextTick(function() {
    cb(er);
  });
}

// If we get something that is not a buffer, string, null, or undefined,
// and we're not in objectMode, then that's an error.
// Otherwise stream chunks are all considered to be of length=1, and the
// watermarks determine how many objects to keep in the buffer, rather than
// how many bytes or characters.
function validChunk(stream, state, chunk, cb) {
  var valid = true;
  if (!Buffer.isBuffer(chunk) &&
      'string' !== typeof chunk &&
      chunk !== null &&
      chunk !== undefined &&
      !state.objectMode) {
    var er = new TypeError('Invalid non-string/buffer chunk');
    stream.emit('error', er);
    process.nextTick(function() {
      cb(er);
    });
    valid = false;
  }
  return valid;
}

Writable.prototype.write = function(chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;

  if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (Buffer.isBuffer(chunk))
    encoding = 'buffer';
  else if (!encoding)
    encoding = state.defaultEncoding;

  if (typeof cb !== 'function')
    cb = function() {};

  if (state.ended)
    writeAfterEnd(this, state, cb);
  else if (validChunk(this, state, chunk, cb))
    ret = writeOrBuffer(this, state, chunk, encoding, cb);

  return ret;
};

function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode &&
      state.decodeStrings !== false &&
      typeof chunk === 'string') {
    chunk = new Buffer(chunk, encoding);
  }
  return chunk;
}

// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function writeOrBuffer(stream, state, chunk, encoding, cb) {
  chunk = decodeChunk(state, chunk, encoding);
  if (Buffer.isBuffer(chunk))
    encoding = 'buffer';
  var len = state.objectMode ? 1 : chunk.length;

  state.length += len;

  var ret = state.length < state.highWaterMark;
  // we must ensure that previous needDrain will not be reset to false.
  if (!ret)
    state.needDrain = true;

  if (state.writing)
    state.buffer.push(new WriteReq(chunk, encoding, cb));
  else
    doWrite(stream, state, len, chunk, encoding, cb);

  return ret;
}

function doWrite(stream, state, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}

function onwriteError(stream, state, sync, er, cb) {
  if (sync)
    process.nextTick(function() {
      cb(er);
    });
  else
    cb(er);

  stream._writableState.errorEmitted = true;
  stream.emit('error', er);
}

function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}

function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;

  onwriteStateUpdate(state);

  if (er)
    onwriteError(stream, state, sync, er, cb);
  else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(stream, state);

    if (!finished && !state.bufferProcessing && state.buffer.length)
      clearBuffer(stream, state);

    if (sync) {
      process.nextTick(function() {
        afterWrite(stream, state, finished, cb);
      });
    } else {
      afterWrite(stream, state, finished, cb);
    }
  }
}

function afterWrite(stream, state, finished, cb) {
  if (!finished)
    onwriteDrain(stream, state);
  cb();
  if (finished)
    finishMaybe(stream, state);
}

// Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
}


// if there's something in the buffer waiting, then process it
function clearBuffer(stream, state) {
  state.bufferProcessing = true;

  for (var c = 0; c < state.buffer.length; c++) {
    var entry = state.buffer[c];
    var chunk = entry.chunk;
    var encoding = entry.encoding;
    var cb = entry.callback;
    var len = state.objectMode ? 1 : chunk.length;

    doWrite(stream, state, len, chunk, encoding, cb);

    // if we didn't call the onwrite immediately, then
    // it means that we need to wait until it does.
    // also, that means that the chunk and cb are currently
    // being processed, so move the buffer counter past them.
    if (state.writing) {
      c++;
      break;
    }
  }

  state.bufferProcessing = false;
  if (c < state.buffer.length)
    state.buffer = state.buffer.slice(c);
  else
    state.buffer.length = 0;
}

Writable.prototype._write = function(chunk, encoding, cb) {
  cb(new Error('not implemented'));
};

Writable.prototype.end = function(chunk, encoding, cb) {
  var state = this._writableState;

  if (typeof chunk === 'function') {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (typeof chunk !== 'undefined' && chunk !== null)
    this.write(chunk, encoding);

  // ignore unnecessary end() calls.
  if (!state.ending && !state.finished)
    endWritable(this, state, cb);
};


function needFinish(stream, state) {
  return (state.ending &&
          state.length === 0 &&
          !state.finished &&
          !state.writing);
}

function finishMaybe(stream, state) {
  var need = needFinish(stream, state);
  if (need) {
    state.finished = true;
    stream.emit('finish');
  }
  return need;
}

function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);
  if (cb) {
    if (state.finished)
      process.nextTick(cb);
    else
      stream.once('finish', cb);
  }
  state.ended = true;
}

}).call(this,require('_process'))
},{"./_stream_duplex":"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/readable-stream/lib/_stream_duplex.js","_process":"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/process/browser.js","buffer":"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/buffer/index.js","core-util-is":"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/readable-stream/node_modules/core-util-is/lib/util.js","inherits":"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/inherits/inherits_browser.js","stream":"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/stream-browserify/index.js"}],"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/readable-stream/node_modules/core-util-is/lib/util.js":[function(require,module,exports){
(function (Buffer){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

function isBuffer(arg) {
  return Buffer.isBuffer(arg);
}
exports.isBuffer = isBuffer;

function objectToString(o) {
  return Object.prototype.toString.call(o);
}
}).call(this,require("buffer").Buffer)
},{"buffer":"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/buffer/index.js"}],"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/readable-stream/passthrough.js":[function(require,module,exports){
module.exports = require("./lib/_stream_passthrough.js")

},{"./lib/_stream_passthrough.js":"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/readable-stream/lib/_stream_passthrough.js"}],"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/readable-stream/readable.js":[function(require,module,exports){
var Stream = require('stream'); // hack to fix a circular dependency issue when used with browserify
exports = module.exports = require('./lib/_stream_readable.js');
exports.Stream = Stream;
exports.Readable = exports;
exports.Writable = require('./lib/_stream_writable.js');
exports.Duplex = require('./lib/_stream_duplex.js');
exports.Transform = require('./lib/_stream_transform.js');
exports.PassThrough = require('./lib/_stream_passthrough.js');

},{"./lib/_stream_duplex.js":"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/readable-stream/lib/_stream_duplex.js","./lib/_stream_passthrough.js":"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/readable-stream/lib/_stream_passthrough.js","./lib/_stream_readable.js":"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/readable-stream/lib/_stream_readable.js","./lib/_stream_transform.js":"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/readable-stream/lib/_stream_transform.js","./lib/_stream_writable.js":"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/readable-stream/lib/_stream_writable.js","stream":"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/stream-browserify/index.js"}],"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/readable-stream/transform.js":[function(require,module,exports){
module.exports = require("./lib/_stream_transform.js")

},{"./lib/_stream_transform.js":"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/readable-stream/lib/_stream_transform.js"}],"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/readable-stream/writable.js":[function(require,module,exports){
module.exports = require("./lib/_stream_writable.js")

},{"./lib/_stream_writable.js":"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/readable-stream/lib/_stream_writable.js"}],"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/stream-browserify/index.js":[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

module.exports = Stream;

var EE = require('events').EventEmitter;
var inherits = require('inherits');

inherits(Stream, EE);
Stream.Readable = require('readable-stream/readable.js');
Stream.Writable = require('readable-stream/writable.js');
Stream.Duplex = require('readable-stream/duplex.js');
Stream.Transform = require('readable-stream/transform.js');
Stream.PassThrough = require('readable-stream/passthrough.js');

// Backwards-compat with node 0.4.x
Stream.Stream = Stream;



// old-style streams.  Note that the pipe method (the only relevant
// part of this class) is overridden in the Readable class.

function Stream() {
  EE.call(this);
}

Stream.prototype.pipe = function(dest, options) {
  var source = this;

  function ondata(chunk) {
    if (dest.writable) {
      if (false === dest.write(chunk) && source.pause) {
        source.pause();
      }
    }
  }

  source.on('data', ondata);

  function ondrain() {
    if (source.readable && source.resume) {
      source.resume();
    }
  }

  dest.on('drain', ondrain);

  // If the 'end' option is not supplied, dest.end() will be called when
  // source gets the 'end' or 'close' events.  Only dest.end() once.
  if (!dest._isStdio && (!options || options.end !== false)) {
    source.on('end', onend);
    source.on('close', onclose);
  }

  var didOnEnd = false;
  function onend() {
    if (didOnEnd) return;
    didOnEnd = true;

    dest.end();
  }


  function onclose() {
    if (didOnEnd) return;
    didOnEnd = true;

    if (typeof dest.destroy === 'function') dest.destroy();
  }

  // don't leave dangling pipes when there are errors.
  function onerror(er) {
    cleanup();
    if (EE.listenerCount(this, 'error') === 0) {
      throw er; // Unhandled stream error in pipe.
    }
  }

  source.on('error', onerror);
  dest.on('error', onerror);

  // remove all the event listeners that were added.
  function cleanup() {
    source.removeListener('data', ondata);
    dest.removeListener('drain', ondrain);

    source.removeListener('end', onend);
    source.removeListener('close', onclose);

    source.removeListener('error', onerror);
    dest.removeListener('error', onerror);

    source.removeListener('end', cleanup);
    source.removeListener('close', cleanup);

    dest.removeListener('close', cleanup);
  }

  source.on('end', cleanup);
  source.on('close', cleanup);

  dest.on('close', cleanup);

  dest.emit('pipe', source);

  // Allow for unix-like usage: A.pipe(B).pipe(C)
  return dest;
};

},{"events":"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/events/events.js","inherits":"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/inherits/inherits_browser.js","readable-stream/duplex.js":"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/readable-stream/duplex.js","readable-stream/passthrough.js":"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/readable-stream/passthrough.js","readable-stream/readable.js":"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/readable-stream/readable.js","readable-stream/transform.js":"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/readable-stream/transform.js","readable-stream/writable.js":"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/readable-stream/writable.js"}],"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/string_decoder/index.js":[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var Buffer = require('buffer').Buffer;

var isBufferEncoding = Buffer.isEncoding
  || function(encoding) {
       switch (encoding && encoding.toLowerCase()) {
         case 'hex': case 'utf8': case 'utf-8': case 'ascii': case 'binary': case 'base64': case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': case 'raw': return true;
         default: return false;
       }
     }


function assertEncoding(encoding) {
  if (encoding && !isBufferEncoding(encoding)) {
    throw new Error('Unknown encoding: ' + encoding);
  }
}

// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters. CESU-8 is handled as part of the UTF-8 encoding.
//
// @TODO Handling all encodings inside a single object makes it very difficult
// to reason about this code, so it should be split up in the future.
// @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code
// points as used by CESU-8.
var StringDecoder = exports.StringDecoder = function(encoding) {
  this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
  assertEncoding(encoding);
  switch (this.encoding) {
    case 'utf8':
      // CESU-8 represents each of Surrogate Pair by 3-bytes
      this.surrogateSize = 3;
      break;
    case 'ucs2':
    case 'utf16le':
      // UTF-16 represents each of Surrogate Pair by 2-bytes
      this.surrogateSize = 2;
      this.detectIncompleteChar = utf16DetectIncompleteChar;
      break;
    case 'base64':
      // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
      this.surrogateSize = 3;
      this.detectIncompleteChar = base64DetectIncompleteChar;
      break;
    default:
      this.write = passThroughWrite;
      return;
  }

  // Enough space to store all bytes of a single character. UTF-8 needs 4
  // bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).
  this.charBuffer = new Buffer(6);
  // Number of bytes received for the current incomplete multi-byte character.
  this.charReceived = 0;
  // Number of bytes expected for the current incomplete multi-byte character.
  this.charLength = 0;
};


// write decodes the given buffer and returns it as JS string that is
// guaranteed to not contain any partial multi-byte characters. Any partial
// character found at the end of the buffer is buffered up, and will be
// returned when calling write again with the remaining bytes.
//
// Note: Converting a Buffer containing an orphan surrogate to a String
// currently works, but converting a String to a Buffer (via `new Buffer`, or
// Buffer#write) will replace incomplete surrogates with the unicode
// replacement character. See https://codereview.chromium.org/121173009/ .
StringDecoder.prototype.write = function(buffer) {
  var charStr = '';
  // if our last write ended with an incomplete multibyte character
  while (this.charLength) {
    // determine how many remaining bytes this buffer has to offer for this char
    var available = (buffer.length >= this.charLength - this.charReceived) ?
        this.charLength - this.charReceived :
        buffer.length;

    // add the new bytes to the char buffer
    buffer.copy(this.charBuffer, this.charReceived, 0, available);
    this.charReceived += available;

    if (this.charReceived < this.charLength) {
      // still not enough chars in this buffer? wait for more ...
      return '';
    }

    // remove bytes belonging to the current character from the buffer
    buffer = buffer.slice(available, buffer.length);

    // get the character that was split
    charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);

    // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
    var charCode = charStr.charCodeAt(charStr.length - 1);
    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
      this.charLength += this.surrogateSize;
      charStr = '';
      continue;
    }
    this.charReceived = this.charLength = 0;

    // if there are no more bytes in this buffer, just emit our char
    if (buffer.length === 0) {
      return charStr;
    }
    break;
  }

  // determine and set charLength / charReceived
  this.detectIncompleteChar(buffer);

  var end = buffer.length;
  if (this.charLength) {
    // buffer the incomplete character bytes we got
    buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
    end -= this.charReceived;
  }

  charStr += buffer.toString(this.encoding, 0, end);

  var end = charStr.length - 1;
  var charCode = charStr.charCodeAt(end);
  // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
  if (charCode >= 0xD800 && charCode <= 0xDBFF) {
    var size = this.surrogateSize;
    this.charLength += size;
    this.charReceived += size;
    this.charBuffer.copy(this.charBuffer, size, 0, size);
    buffer.copy(this.charBuffer, 0, 0, size);
    return charStr.substring(0, end);
  }

  // or just emit the charStr
  return charStr;
};

// detectIncompleteChar determines if there is an incomplete UTF-8 character at
// the end of the given buffer. If so, it sets this.charLength to the byte
// length that character, and sets this.charReceived to the number of bytes
// that are available for this character.
StringDecoder.prototype.detectIncompleteChar = function(buffer) {
  // determine how many bytes we have to check at the end of this buffer
  var i = (buffer.length >= 3) ? 3 : buffer.length;

  // Figure out if one of the last i bytes of our buffer announces an
  // incomplete char.
  for (; i > 0; i--) {
    var c = buffer[buffer.length - i];

    // See http://en.wikipedia.org/wiki/UTF-8#Description

    // 110XXXXX
    if (i == 1 && c >> 5 == 0x06) {
      this.charLength = 2;
      break;
    }

    // 1110XXXX
    if (i <= 2 && c >> 4 == 0x0E) {
      this.charLength = 3;
      break;
    }

    // 11110XXX
    if (i <= 3 && c >> 3 == 0x1E) {
      this.charLength = 4;
      break;
    }
  }
  this.charReceived = i;
};

StringDecoder.prototype.end = function(buffer) {
  var res = '';
  if (buffer && buffer.length)
    res = this.write(buffer);

  if (this.charReceived) {
    var cr = this.charReceived;
    var buf = this.charBuffer;
    var enc = this.encoding;
    res += buf.slice(0, cr).toString(enc);
  }

  return res;
};

function passThroughWrite(buffer) {
  return buffer.toString(this.encoding);
}

function utf16DetectIncompleteChar(buffer) {
  this.charReceived = buffer.length % 2;
  this.charLength = this.charReceived ? 2 : 0;
}

function base64DetectIncompleteChar(buffer) {
  this.charReceived = buffer.length % 3;
  this.charLength = this.charReceived ? 3 : 0;
}

},{"buffer":"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/buffer/index.js"}],"/home/zefanja/Projekte/common-sword/node_modules/idb-wrapper/idbstore.js":[function(require,module,exports){
/*global window:false, self:false, define:false, module:false */

/**
 * @license IDBWrapper - A cross-browser wrapper for IndexedDB
 * Copyright (c) 2011 - 2013 Jens Arps
 * http://jensarps.de/
 *
 * Licensed under the MIT (X11) license
 */

(function (name, definition, global) {
  if (typeof define === 'function') {
    define(definition);
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports = definition();
  } else {
    global[name] = definition();
  }
})('IDBStore', function () {

  'use strict';

  var defaultErrorHandler = function (error) {
    throw error;
  };

  var defaults = {
    storeName: 'Store',
    storePrefix: 'IDBWrapper-',
    dbVersion: 1,
    keyPath: 'id',
    autoIncrement: true,
    onStoreReady: function () {
    },
    onError: defaultErrorHandler,
    indexes: []
  };

  /**
   *
   * The IDBStore constructor
   *
   * @constructor
   * @name IDBStore
   * @version 1.4.1
   *
   * @param {Object} [kwArgs] An options object used to configure the store and
   *  set callbacks
   * @param {String} [kwArgs.storeName='Store'] The name of the store
   * @param {String} [kwArgs.storePrefix='IDBWrapper-'] A prefix that is
   *  internally used to construct the name of the database, which will be
   *  kwArgs.storePrefix + kwArgs.storeName
   * @param {Number} [kwArgs.dbVersion=1] The version of the store
   * @param {String} [kwArgs.keyPath='id'] The key path to use. If you want to
   *  setup IDBWrapper to work with out-of-line keys, you need to set this to
   *  `null`
   * @param {Boolean} [kwArgs.autoIncrement=true] If set to true, IDBStore will
   *  automatically make sure a unique keyPath value is present on each object
   *  that is stored.
   * @param {Function} [kwArgs.onStoreReady] A callback to be called when the
   *  store is ready to be used.
   * @param {Function} [kwArgs.onError=throw] A callback to be called when an
   *  error occurred during instantiation of the store.
   * @param {Array} [kwArgs.indexes=[]] An array of indexData objects
   *  defining the indexes to use with the store. For every index to be used
   *  one indexData object needs to be passed in the array.
   *  An indexData object is defined as follows:
   * @param {Object} [kwArgs.indexes.indexData] An object defining the index to
   *  use
   * @param {String} kwArgs.indexes.indexData.name The name of the index
   * @param {String} [kwArgs.indexes.indexData.keyPath] The key path of the index
   * @param {Boolean} [kwArgs.indexes.indexData.unique] Whether the index is unique
   * @param {Boolean} [kwArgs.indexes.indexData.multiEntry] Whether the index is multi entry
   * @param {Function} [onStoreReady] A callback to be called when the store
   * is ready to be used.
   * @example
      // create a store for customers with an additional index over the
      // `lastname` property.
      var myCustomerStore = new IDBStore({
        dbVersion: 1,
        storeName: 'customer-index',
        keyPath: 'customerid',
        autoIncrement: true,
        onStoreReady: populateTable,
        indexes: [
          { name: 'lastname', keyPath: 'lastname', unique: false, multiEntry: false }
        ]
      });
   * @example
      // create a generic store
      var myCustomerStore = new IDBStore({
        storeName: 'my-data-store',
        onStoreReady: function(){
          // start working with the store.
        }
      });
   */
  var IDBStore = function (kwArgs, onStoreReady) {

    if (typeof onStoreReady == 'undefined' && typeof kwArgs == 'function') {
      onStoreReady = kwArgs;
    }
    if (Object.prototype.toString.call(kwArgs) != '[object Object]') {
      kwArgs = {};
    }

    for (var key in defaults) {
      this[key] = typeof kwArgs[key] != 'undefined' ? kwArgs[key] : defaults[key];
    }

    this.dbName = this.storePrefix + this.storeName;
    this.dbVersion = parseInt(this.dbVersion, 10) || 1;

    onStoreReady && (this.onStoreReady = onStoreReady);

    var env = typeof window == 'object' ? window : self;
    this.idb = env.indexedDB || env.webkitIndexedDB || env.mozIndexedDB;
    this.keyRange = env.IDBKeyRange || env.webkitIDBKeyRange || env.mozIDBKeyRange;

    this.features = {
      hasAutoIncrement: !env.mozIndexedDB
    };

    this.consts = {
      'READ_ONLY':         'readonly',
      'READ_WRITE':        'readwrite',
      'VERSION_CHANGE':    'versionchange',
      'NEXT':              'next',
      'NEXT_NO_DUPLICATE': 'nextunique',
      'PREV':              'prev',
      'PREV_NO_DUPLICATE': 'prevunique'
    };

    this.openDB();
  };

  IDBStore.prototype = /** @lends IDBStore */ {

    /**
     * A pointer to the IDBStore ctor
     *
     * @type IDBStore
     */
    constructor: IDBStore,

    /**
     * The version of IDBStore
     *
     * @type String
     */
    version: '1.4.1',

    /**
     * A reference to the IndexedDB object
     *
     * @type Object
     */
    db: null,

    /**
     * The full name of the IndexedDB used by IDBStore, composed of
     * this.storePrefix + this.storeName
     *
     * @type String
     */
    dbName: null,

    /**
     * The version of the IndexedDB used by IDBStore
     *
     * @type Number
     */
    dbVersion: null,

    /**
     * A reference to the objectStore used by IDBStore
     *
     * @type Object
     */
    store: null,

    /**
     * The store name
     *
     * @type String
     */
    storeName: null,

    /**
     * The key path
     *
     * @type String
     */
    keyPath: null,

    /**
     * Whether IDBStore uses autoIncrement
     *
     * @type Boolean
     */
    autoIncrement: null,

    /**
     * The indexes used by IDBStore
     *
     * @type Array
     */
    indexes: null,

    /**
     * A hashmap of features of the used IDB implementation
     *
     * @type Object
     * @proprty {Boolean} autoIncrement If the implementation supports
     *  native auto increment
     */
    features: null,

    /**
     * The callback to be called when the store is ready to be used
     *
     * @type Function
     */
    onStoreReady: null,

    /**
     * The callback to be called if an error occurred during instantiation
     * of the store
     *
     * @type Function
     */
    onError: null,

    /**
     * The internal insertID counter
     *
     * @type Number
     * @private
     */
    _insertIdCount: 0,

    /**
     * Opens an IndexedDB; called by the constructor.
     *
     * Will check if versions match and compare provided index configuration
     * with existing ones, and update indexes if necessary.
     *
     * Will call this.onStoreReady() if everything went well and the store
     * is ready to use, and this.onError() is something went wrong.
     *
     * @private
     *
     */
    openDB: function () {

      var openRequest = this.idb.open(this.dbName, this.dbVersion);
      var preventSuccessCallback = false;

      openRequest.onerror = function (error) {

        var gotVersionErr = false;
        if ('error' in error.target) {
          gotVersionErr = error.target.error.name == 'VersionError';
        } else if ('errorCode' in error.target) {
          gotVersionErr = error.target.errorCode == 12;
        }

        if (gotVersionErr) {
          this.onError(new Error('The version number provided is lower than the existing one.'));
        } else {
          this.onError(error);
        }
      }.bind(this);

      openRequest.onsuccess = function (event) {

        if (preventSuccessCallback) {
          return;
        }

        if(this.db){
          this.onStoreReady();
          return;
        }

        this.db = event.target.result;

        if(typeof this.db.version == 'string'){
          this.onError(new Error('The IndexedDB implementation in this browser is outdated. Please upgrade your browser.'));
          return;
        }

        if(!this.db.objectStoreNames.contains(this.storeName)){
          // We should never ever get here.
          // Lets notify the user anyway.
          this.onError(new Error('Something is wrong with the IndexedDB implementation in this browser. Please upgrade your browser.'));
          return;
        }

        var emptyTransaction = this.db.transaction([this.storeName], this.consts.READ_ONLY);
        this.store = emptyTransaction.objectStore(this.storeName);

        // check indexes
        var existingIndexes = Array.prototype.slice.call(this.getIndexList());
        this.indexes.forEach(function(indexData){
          var indexName = indexData.name;

          if(!indexName){
            preventSuccessCallback = true;
            this.onError(new Error('Cannot create index: No index name given.'));
            return;
          }

          this.normalizeIndexData(indexData);

          if(this.hasIndex(indexName)){
            // check if it complies
            var actualIndex = this.store.index(indexName);
            var complies = this.indexComplies(actualIndex, indexData);
            if(!complies){
              preventSuccessCallback = true;
              this.onError(new Error('Cannot modify index "' + indexName + '" for current version. Please bump version number to ' + ( this.dbVersion + 1 ) + '.'));
            }

            existingIndexes.splice(existingIndexes.indexOf(indexName), 1);
          } else {
            preventSuccessCallback = true;
            this.onError(new Error('Cannot create new index "' + indexName + '" for current version. Please bump version number to ' + ( this.dbVersion + 1 ) + '.'));
          }

        }, this);

        if (existingIndexes.length) {
          preventSuccessCallback = true;
          this.onError(new Error('Cannot delete index(es) "' + existingIndexes.toString() + '" for current version. Please bump version number to ' + ( this.dbVersion + 1 ) + '.'));
        }

        preventSuccessCallback || this.onStoreReady();
      }.bind(this);

      openRequest.onupgradeneeded = function(/* IDBVersionChangeEvent */ event){

        this.db = event.target.result;

        if(this.db.objectStoreNames.contains(this.storeName)){
          this.store = event.target.transaction.objectStore(this.storeName);
        } else {
          var optionalParameters = { autoIncrement: this.autoIncrement };
          if (this.keyPath !== null) {
            optionalParameters.keyPath = this.keyPath;
          }
          this.store = this.db.createObjectStore(this.storeName, optionalParameters);
        }

        var existingIndexes = Array.prototype.slice.call(this.getIndexList());
        this.indexes.forEach(function(indexData){
          var indexName = indexData.name;

          if(!indexName){
            preventSuccessCallback = true;
            this.onError(new Error('Cannot create index: No index name given.'));
          }

          this.normalizeIndexData(indexData);

          if(this.hasIndex(indexName)){
            // check if it complies
            var actualIndex = this.store.index(indexName);
            var complies = this.indexComplies(actualIndex, indexData);
            if(!complies){
              // index differs, need to delete and re-create
              this.store.deleteIndex(indexName);
              this.store.createIndex(indexName, indexData.keyPath, { unique: indexData.unique, multiEntry: indexData.multiEntry });
            }

            existingIndexes.splice(existingIndexes.indexOf(indexName), 1);
          } else {
            this.store.createIndex(indexName, indexData.keyPath, { unique: indexData.unique, multiEntry: indexData.multiEntry });
          }

        }, this);

        if (existingIndexes.length) {
          existingIndexes.forEach(function(_indexName){
            this.store.deleteIndex(_indexName);
          }, this);
        }

      }.bind(this);
    },

    /**
     * Deletes the database used for this store if the IDB implementations
     * provides that functionality.
     */
    deleteDatabase: function () {
      if (this.idb.deleteDatabase) {
        this.idb.deleteDatabase(this.dbName);
      }
    },

    /*********************
     * data manipulation *
     *********************/

    /**
     * Puts an object into the store. If an entry with the given id exists,
     * it will be overwritten. This method has a different signature for inline
     * keys and out-of-line keys; please see the examples below.
     *
     * @param {*} [key] The key to store. This is only needed if IDBWrapper
     *  is set to use out-of-line keys. For inline keys - the default scenario -
     *  this can be omitted.
     * @param {Object} value The data object to store.
     * @param {Function} [onSuccess] A callback that is called if insertion
     *  was successful.
     * @param {Function} [onError] A callback that is called if insertion
     *  failed.
     * @returns {IDBTransaction} The transaction used for this operation.
     * @example
        // Storing an object, using inline keys (the default scenario):
        var myCustomer = {
          customerid: 2346223,
          lastname: 'Doe',
          firstname: 'John'
        };
        myCustomerStore.put(myCustomer, mySuccessHandler, myErrorHandler);
        // Note that passing success- and error-handlers is optional.
     * @example
        // Storing an object, using out-of-line keys:
       var myCustomer = {
         lastname: 'Doe',
         firstname: 'John'
       };
       myCustomerStore.put(2346223, myCustomer, mySuccessHandler, myErrorHandler);
      // Note that passing success- and error-handlers is optional.
     */
    put: function (key, value, onSuccess, onError) {
      if (this.keyPath !== null) {
        onError = onSuccess;
        onSuccess = value;
        value = key;
      }
      onError || (onError = defaultErrorHandler);
      onSuccess || (onSuccess = noop);

      var hasSuccess = false,
          result = null,
          putRequest;

      var putTransaction = this.db.transaction([this.storeName], this.consts.READ_WRITE);
      putTransaction.oncomplete = function () {
        var callback = hasSuccess ? onSuccess : onError;
        callback(result);
      };
      putTransaction.onabort = onError;
      putTransaction.onerror = onError;

      if (this.keyPath !== null) { // in-line keys
        this._addIdPropertyIfNeeded(value);
        putRequest = putTransaction.objectStore(this.storeName).put(value);
      } else { // out-of-line keys
        putRequest = putTransaction.objectStore(this.storeName).put(value, key);
      }
      putRequest.onsuccess = function (event) {
        hasSuccess = true;
        result = event.target.result;
      };
      putRequest.onerror = onError;

      return putTransaction;
    },

    /**
     * Retrieves an object from the store. If no entry exists with the given id,
     * the success handler will be called with null as first and only argument.
     *
     * @param {*} key The id of the object to fetch.
     * @param {Function} [onSuccess] A callback that is called if fetching
     *  was successful. Will receive the object as only argument.
     * @param {Function} [onError] A callback that will be called if an error
     *  occurred during the operation.
     * @returns {IDBTransaction} The transaction used for this operation.
     */
    get: function (key, onSuccess, onError) {
      onError || (onError = defaultErrorHandler);
      onSuccess || (onSuccess = noop);

      var hasSuccess = false,
          result = null;
      
      var getTransaction = this.db.transaction([this.storeName], this.consts.READ_ONLY);
      getTransaction.oncomplete = function () {
        var callback = hasSuccess ? onSuccess : onError;
        callback(result);
      };
      getTransaction.onabort = onError;
      getTransaction.onerror = onError;
      var getRequest = getTransaction.objectStore(this.storeName).get(key);
      getRequest.onsuccess = function (event) {
        hasSuccess = true;
        result = event.target.result;
      };
      getRequest.onerror = onError;

      return getTransaction;
    },

    /**
     * Removes an object from the store.
     *
     * @param {*} key The id of the object to remove.
     * @param {Function} [onSuccess] A callback that is called if the removal
     *  was successful.
     * @param {Function} [onError] A callback that will be called if an error
     *  occurred during the operation.
     * @returns {IDBTransaction} The transaction used for this operation.
     */
    remove: function (key, onSuccess, onError) {
      onError || (onError = defaultErrorHandler);
      onSuccess || (onSuccess = noop);

      var hasSuccess = false,
          result = null;

      var removeTransaction = this.db.transaction([this.storeName], this.consts.READ_WRITE);
      removeTransaction.oncomplete = function () {
        var callback = hasSuccess ? onSuccess : onError;
        callback(result);
      };
      removeTransaction.onabort = onError;
      removeTransaction.onerror = onError;

      var deleteRequest = removeTransaction.objectStore(this.storeName)['delete'](key);
      deleteRequest.onsuccess = function (event) {
        hasSuccess = true;
        result = event.target.result;
      };
      deleteRequest.onerror = onError;

      return removeTransaction;
    },

    /**
     * Runs a batch of put and/or remove operations on the store.
     *
     * @param {Array} dataArray An array of objects containing the operation to run
     *  and the data object (for put operations).
     * @param {Function} [onSuccess] A callback that is called if all operations
     *  were successful.
     * @param {Function} [onError] A callback that is called if an error
     *  occurred during one of the operations.
     * @returns {IDBTransaction} The transaction used for this operation.
     */
    batch: function (dataArray, onSuccess, onError) {
      onError || (onError = defaultErrorHandler);
      onSuccess || (onSuccess = noop);

      if(Object.prototype.toString.call(dataArray) != '[object Array]'){
        onError(new Error('dataArray argument must be of type Array.'));
      }
      var batchTransaction = this.db.transaction([this.storeName] , this.consts.READ_WRITE);
      batchTransaction.oncomplete = function () {
        var callback = hasSuccess ? onSuccess : onError;
        callback(hasSuccess);
      };
      batchTransaction.onabort = onError;
      batchTransaction.onerror = onError;
      
      var count = dataArray.length;
      var called = false;
      var hasSuccess = false;

      var onItemSuccess = function () {
        count--;
        if (count === 0 && !called) {
          called = true;
          hasSuccess = true;
        }
      };

      dataArray.forEach(function (operation) {
        var type = operation.type;
        var key = operation.key;
        var value = operation.value;

        var onItemError = function (err) {
          batchTransaction.abort();
          if (!called) {
            called = true;
            onError(err, type, key);
          }
        };

        if (type == 'remove') {
          var deleteRequest = batchTransaction.objectStore(this.storeName)['delete'](key);
          deleteRequest.onsuccess = onItemSuccess;
          deleteRequest.onerror = onItemError;
        } else if (type == 'put') {
          var putRequest;
          if (this.keyPath !== null) { // in-line keys
            this._addIdPropertyIfNeeded(value);
            putRequest = batchTransaction.objectStore(this.storeName).put(value);
          } else { // out-of-line keys
            putRequest = batchTransaction.objectStore(this.storeName).put(value, key);
          }
          putRequest.onsuccess = onItemSuccess;
          putRequest.onerror = onItemError;
        }
      }, this);

      return batchTransaction;
    },

    /**
     * Takes an array of objects and stores them in a single transaction.
     *
     * @param {Array} dataArray An array of objects to store
     * @param {Function} [onSuccess] A callback that is called if all operations
     *  were successful.
     * @param {Function} [onError] A callback that is called if an error
     *  occurred during one of the operations.
     * @returns {IDBTransaction} The transaction used for this operation.
     */
    putBatch: function (dataArray, onSuccess, onError) {
      var batchData = dataArray.map(function(item){
        return { type: 'put', value: item };
      });

      return this.batch(batchData, onSuccess, onError);
    },

    /**
     * Takes an array of keys and removes matching objects in a single
     * transaction.
     *
     * @param {Array} keyArray An array of keys to remove
     * @param {Function} [onSuccess] A callback that is called if all operations
     *  were successful.
     * @param {Function} [onError] A callback that is called if an error
     *  occurred during one of the operations.
     * @returns {IDBTransaction} The transaction used for this operation.
     */
    removeBatch: function (keyArray, onSuccess, onError) {
      var batchData = keyArray.map(function(key){
        return { type: 'remove', key: key };
      });

      return this.batch(batchData, onSuccess, onError);
    },

    /**
     * Takes an array of keys and fetches matching objects
     *
     * @param {Array} keyArray An array of keys identifying the objects to fetch
     * @param {Function} [onSuccess] A callback that is called if all operations
     *  were successful.
     * @param {Function} [onError] A callback that is called if an error
     *  occurred during one of the operations.
     * @param {String} [arrayType='sparse'] The type of array to pass to the
     *  success handler. May be one of 'sparse', 'dense' or 'skip'. Defaults to
     *  'sparse'. This parameter specifies how to handle the situation if a get
     *  operation did not throw an error, but there was no matching object in
     *  the database. In most cases, 'sparse' provides the most desired
     *  behavior. See the examples for details.
     * @returns {IDBTransaction} The transaction used for this operation.
     * @example
     // given that there are two objects in the database with the keypath
     // values 1 and 2, and the call looks like this:
     myStore.getBatch([1, 5, 2], onError, function (data) { … }, arrayType);

     // this is what the `data` array will be like:

     // arrayType == 'sparse':
     // data is a sparse array containing two entries and having a length of 3:
       [Object, 2: Object]
         0: Object
         2: Object
         length: 3
         __proto__: Array[0]
     // calling forEach on data will result in the callback being called two
     // times, with the index parameter matching the index of the key in the
     // keyArray.

     // arrayType == 'dense':
     // data is a dense array containing three entries and having a length of 3,
     // where data[1] is of type undefined:
       [Object, undefined, Object]
         0: Object
         1: undefined
         2: Object
         length: 3
         __proto__: Array[0]
     // calling forEach on data will result in the callback being called three
     // times, with the index parameter matching the index of the key in the
     // keyArray, but the second call will have undefined as first argument.

     // arrayType == 'skip':
     // data is a dense array containing two entries and having a length of 2:
       [Object, Object]
         0: Object
         1: Object
         length: 2
         __proto__: Array[0]
     // calling forEach on data will result in the callback being called two
     // times, with the index parameter not matching the index of the key in the
     // keyArray.
     */
    getBatch: function (keyArray, onSuccess, onError, arrayType) {
      onError || (onError = defaultErrorHandler);
      onSuccess || (onSuccess = noop);
      arrayType || (arrayType = 'sparse');

      if(Object.prototype.toString.call(keyArray) != '[object Array]'){
        onError(new Error('keyArray argument must be of type Array.'));
      }
      var batchTransaction = this.db.transaction([this.storeName] , this.consts.READ_ONLY);
      batchTransaction.oncomplete = function () {
        var callback = hasSuccess ? onSuccess : onError;
        callback(result);
      };
      batchTransaction.onabort = onError;
      batchTransaction.onerror = onError;

      var data = [];
      var count = keyArray.length;
      var called = false;
      var hasSuccess = false;
      var result = null;

      var onItemSuccess = function (event) {
        if (event.target.result || arrayType == 'dense') {
          data.push(event.target.result);
        } else if (arrayType == 'sparse') {
          data.length++;
        }
        count--;
        if (count === 0) {
          called = true;
          hasSuccess = true;
          result = data;
        }
      };

      keyArray.forEach(function (key) {

        var onItemError = function (err) {
          called = true;
          result = err;
          onError(err);
          batchTransaction.abort();
        };

        var getRequest = batchTransaction.objectStore(this.storeName).get(key);
        getRequest.onsuccess = onItemSuccess;
        getRequest.onerror = onItemError;

      }, this);

      return batchTransaction;
    },

    /**
     * Fetches all entries in the store.
     *
     * @param {Function} [onSuccess] A callback that is called if the operation
     *  was successful. Will receive an array of objects.
     * @param {Function} [onError] A callback that will be called if an error
     *  occurred during the operation.
     * @returns {IDBTransaction} The transaction used for this operation.
     */
    getAll: function (onSuccess, onError) {
      onError || (onError = defaultErrorHandler);
      onSuccess || (onSuccess = noop);
      var getAllTransaction = this.db.transaction([this.storeName], this.consts.READ_ONLY);
      var store = getAllTransaction.objectStore(this.storeName);
      if (store.getAll) {
        this._getAllNative(getAllTransaction, store, onSuccess, onError);
      } else {
        this._getAllCursor(getAllTransaction, store, onSuccess, onError);
      }

      return getAllTransaction;
    },

    /**
     * Implements getAll for IDB implementations that have a non-standard
     * getAll() method.
     *
     * @param {Object} getAllTransaction An open READ transaction.
     * @param {Object} store A reference to the store.
     * @param {Function} onSuccess A callback that will be called if the
     *  operation was successful.
     * @param {Function} onError A callback that will be called if an
     *  error occurred during the operation.
     * @private
     */
    _getAllNative: function (getAllTransaction, store, onSuccess, onError) {
      var hasSuccess = false,
          result = null;

      getAllTransaction.oncomplete = function () {
        var callback = hasSuccess ? onSuccess : onError;
        callback(result);
      };
      getAllTransaction.onabort = onError;
      getAllTransaction.onerror = onError;

      var getAllRequest = store.getAll();
      getAllRequest.onsuccess = function (event) {
        hasSuccess = true;
        result = event.target.result;
      };
      getAllRequest.onerror = onError;
    },

    /**
     * Implements getAll for IDB implementations that do not have a getAll()
     * method.
     *
     * @param {Object} getAllTransaction An open READ transaction.
     * @param {Object} store A reference to the store.
     * @param {Function} onSuccess A callback that will be called if the
     *  operation was successful.
     * @param {Function} onError A callback that will be called if an
     *  error occurred during the operation.
     * @private
     */
    _getAllCursor: function (getAllTransaction, store, onSuccess, onError) {
      var all = [],
          hasSuccess = false,
          result = null;

      getAllTransaction.oncomplete = function () {
        var callback = hasSuccess ? onSuccess : onError;
        callback(result);
      };
      getAllTransaction.onabort = onError;
      getAllTransaction.onerror = onError;

      var cursorRequest = store.openCursor();
      cursorRequest.onsuccess = function (event) {
        var cursor = event.target.result;
        if (cursor) {
          all.push(cursor.value);
          cursor['continue']();
        }
        else {
          hasSuccess = true;
          result = all;
        }
      };
      cursorRequest.onError = onError;
    },

    /**
     * Clears the store, i.e. deletes all entries in the store.
     *
     * @param {Function} [onSuccess] A callback that will be called if the
     *  operation was successful.
     * @param {Function} [onError] A callback that will be called if an
     *  error occurred during the operation.
     * @returns {IDBTransaction} The transaction used for this operation.
     */
    clear: function (onSuccess, onError) {
      onError || (onError = defaultErrorHandler);
      onSuccess || (onSuccess = noop);

      var hasSuccess = false,
          result = null;

      var clearTransaction = this.db.transaction([this.storeName], this.consts.READ_WRITE);
      clearTransaction.oncomplete = function () {
        var callback = hasSuccess ? onSuccess : onError;
        callback(result);
      };
      clearTransaction.onabort = onError;
      clearTransaction.onerror = onError;

      var clearRequest = clearTransaction.objectStore(this.storeName).clear();
      clearRequest.onsuccess = function (event) {
        hasSuccess = true;
        result = event.target.result;
      };
      clearRequest.onerror = onError;

      return clearTransaction;
    },

    /**
     * Checks if an id property needs to present on a object and adds one if
     * necessary.
     *
     * @param {Object} dataObj The data object that is about to be stored
     * @private
     */
    _addIdPropertyIfNeeded: function (dataObj) {
      if (!this.features.hasAutoIncrement && typeof dataObj[this.keyPath] == 'undefined') {
        dataObj[this.keyPath] = this._insertIdCount++ + Date.now();
      }
    },

    /************
     * indexing *
     ************/

    /**
     * Returns a DOMStringList of index names of the store.
     *
     * @return {DOMStringList} The list of index names
     */
    getIndexList: function () {
      return this.store.indexNames;
    },

    /**
     * Checks if an index with the given name exists in the store.
     *
     * @param {String} indexName The name of the index to look for
     * @return {Boolean} Whether the store contains an index with the given name
     */
    hasIndex: function (indexName) {
      return this.store.indexNames.contains(indexName);
    },

    /**
     * Normalizes an object containing index data and assures that all
     * properties are set.
     *
     * @param {Object} indexData The index data object to normalize
     * @param {String} indexData.name The name of the index
     * @param {String} [indexData.keyPath] The key path of the index
     * @param {Boolean} [indexData.unique] Whether the index is unique
     * @param {Boolean} [indexData.multiEntry] Whether the index is multi entry
     */
    normalizeIndexData: function (indexData) {
      indexData.keyPath = indexData.keyPath || indexData.name;
      indexData.unique = !!indexData.unique;
      indexData.multiEntry = !!indexData.multiEntry;
    },

    /**
     * Checks if an actual index complies with an expected index.
     *
     * @param {Object} actual The actual index found in the store
     * @param {Object} expected An Object describing an expected index
     * @return {Boolean} Whether both index definitions are identical
     */
    indexComplies: function (actual, expected) {
      var complies = ['keyPath', 'unique', 'multiEntry'].every(function (key) {
        // IE10 returns undefined for no multiEntry
        if (key == 'multiEntry' && actual[key] === undefined && expected[key] === false) {
          return true;
        }
        // Compound keys
        if (key == 'keyPath' && Object.prototype.toString.call(expected[key]) == '[object Array]') {
          var exp = expected.keyPath;
          var act = actual.keyPath;

          // IE10 can't handle keyPath sequences and stores them as a string.
          // The index will be unusable there, but let's still return true if
          // the keyPath sequence matches.
          if (typeof act == 'string') {
            return exp.toString() == act;
          }

          // Chrome/Opera stores keyPath squences as DOMStringList, Firefox
          // as Array
          if ( ! (typeof act.contains == 'function' || typeof act.indexOf == 'function') ) {
            return false;
          }

          if (act.length !== exp.length) {
            return false;
          }

          for (var i = 0, m = exp.length; i<m; i++) {
            if ( ! ( (act.contains && act.contains(exp[i])) || act.indexOf(exp[i] !== -1) )) {
              return false;
            }
          }
          return true;
        }
        return expected[key] == actual[key];
      });
      return complies;
    },

    /**********
     * cursor *
     **********/

    /**
     * Iterates over the store using the given options and calling onItem
     * for each entry matching the options.
     *
     * @param {Function} onItem A callback to be called for each match
     * @param {Object} [options] An object defining specific options
     * @param {Object} [options.index=null] An IDBIndex to operate on
     * @param {String} [options.order=ASC] The order in which to provide the
     *  results, can be 'DESC' or 'ASC'
     * @param {Boolean} [options.autoContinue=true] Whether to automatically
     *  iterate the cursor to the next result
     * @param {Boolean} [options.filterDuplicates=false] Whether to exclude
     *  duplicate matches
     * @param {Object} [options.keyRange=null] An IDBKeyRange to use
     * @param {Boolean} [options.writeAccess=false] Whether grant write access
     *  to the store in the onItem callback
     * @param {Function} [options.onEnd=null] A callback to be called after
     *  iteration has ended
     * @param {Function} [options.onError=throw] A callback to be called
     *  if an error occurred during the operation.
     * @returns {IDBTransaction} The transaction used for this operation.
     */
    iterate: function (onItem, options) {
      options = mixin({
        index: null,
        order: 'ASC',
        autoContinue: true,
        filterDuplicates: false,
        keyRange: null,
        writeAccess: false,
        onEnd: null,
        onError: defaultErrorHandler
      }, options || {});

      var directionType = options.order.toLowerCase() == 'desc' ? 'PREV' : 'NEXT';
      if (options.filterDuplicates) {
        directionType += '_NO_DUPLICATE';
      }

      var hasSuccess = false;
      var cursorTransaction = this.db.transaction([this.storeName], this.consts[options.writeAccess ? 'READ_WRITE' : 'READ_ONLY']);
      var cursorTarget = cursorTransaction.objectStore(this.storeName);
      if (options.index) {
        cursorTarget = cursorTarget.index(options.index);
      }

      cursorTransaction.oncomplete = function () {
        if (!hasSuccess) {
          options.onError(null);
          return;
        }
        if (options.onEnd) {
          options.onEnd();
        } else {
          onItem(null);
        }
      };
      cursorTransaction.onabort = options.onError;
      cursorTransaction.onerror = options.onError;

      var cursorRequest = cursorTarget.openCursor(options.keyRange, this.consts[directionType]);
      cursorRequest.onerror = options.onError;
      cursorRequest.onsuccess = function (event) {
        var cursor = event.target.result;
        if (cursor) {
          onItem(cursor.value, cursor, cursorTransaction);
          if (options.autoContinue) {
            cursor['continue']();
          }
        } else {
          hasSuccess = true;
        }
      };

      return cursorTransaction;
    },

    /**
     * Runs a query against the store and passes an array containing matched
     * objects to the success handler.
     *
     * @param {Function} onSuccess A callback to be called when the operation
     *  was successful.
     * @param {Object} [options] An object defining specific query options
     * @param {Object} [options.index=null] An IDBIndex to operate on
     * @param {String} [options.order=ASC] The order in which to provide the
     *  results, can be 'DESC' or 'ASC'
     * @param {Boolean} [options.filterDuplicates=false] Whether to exclude
     *  duplicate matches
     * @param {Object} [options.keyRange=null] An IDBKeyRange to use
     * @param {Function} [options.onError=throw] A callback to be called if an error
     *  occurred during the operation.
     * @returns {IDBTransaction} The transaction used for this operation.
     */
    query: function (onSuccess, options) {
      var result = [];
      options = options || {};
      options.onEnd = function () {
        onSuccess(result);
      };
      return this.iterate(function (item) {
        result.push(item);
      }, options);
    },

    /**
     *
     * Runs a query against the store, but only returns the number of matches
     * instead of the matches itself.
     *
     * @param {Function} onSuccess A callback to be called if the opration
     *  was successful.
     * @param {Object} [options] An object defining specific options
     * @param {Object} [options.index=null] An IDBIndex to operate on
     * @param {Object} [options.keyRange=null] An IDBKeyRange to use
     * @param {Function} [options.onError=throw] A callback to be called if an error
     *  occurred during the operation.
     * @returns {IDBTransaction} The transaction used for this operation.
     */
    count: function (onSuccess, options) {

      options = mixin({
        index: null,
        keyRange: null
      }, options || {});

      var onError = options.onError || defaultErrorHandler;

      var hasSuccess = false,
          result = null;

      var cursorTransaction = this.db.transaction([this.storeName], this.consts.READ_ONLY);
      cursorTransaction.oncomplete = function () {
        var callback = hasSuccess ? onSuccess : onError;
        callback(result);
      };
      cursorTransaction.onabort = onError;
      cursorTransaction.onerror = onError;

      var cursorTarget = cursorTransaction.objectStore(this.storeName);
      if (options.index) {
        cursorTarget = cursorTarget.index(options.index);
      }
      var countRequest = cursorTarget.count(options.keyRange);
      countRequest.onsuccess = function (evt) {
        hasSuccess = true;
        result = evt.target.result;
      };
      countRequest.onError = onError;

      return cursorTransaction;
    },

    /**************/
    /* key ranges */
    /**************/

    /**
     * Creates a key range using specified options. This key range can be
     * handed over to the count() and iterate() methods.
     *
     * Note: You must provide at least one or both of "lower" or "upper" value.
     *
     * @param {Object} options The options for the key range to create
     * @param {*} [options.lower] The lower bound
     * @param {Boolean} [options.excludeLower] Whether to exclude the lower
     *  bound passed in options.lower from the key range
     * @param {*} [options.upper] The upper bound
     * @param {Boolean} [options.excludeUpper] Whether to exclude the upper
     *  bound passed in options.upper from the key range
     * @param {*} [options.only] A single key value. Use this if you need a key
     *  range that only includes one value for a key. Providing this
     *  property invalidates all other properties.
     * @return {Object} The IDBKeyRange representing the specified options
     */
    makeKeyRange: function(options){
      /*jshint onecase:true */
      var keyRange,
          hasLower = typeof options.lower != 'undefined',
          hasUpper = typeof options.upper != 'undefined',
          isOnly = typeof options.only != 'undefined';

      switch(true){
        case isOnly:
          keyRange = this.keyRange.only(options.only);
          break;
        case hasLower && hasUpper:
          keyRange = this.keyRange.bound(options.lower, options.upper, options.excludeLower, options.excludeUpper);
          break;
        case hasLower:
          keyRange = this.keyRange.lowerBound(options.lower, options.excludeLower);
          break;
        case hasUpper:
          keyRange = this.keyRange.upperBound(options.upper, options.excludeUpper);
          break;
        default:
          throw new Error('Cannot create KeyRange. Provide one or both of "lower" or "upper" value, or an "only" value.');
      }

      return keyRange;

    }

  };

  /** helpers **/

  var noop = function () {
  };
  var empty = {};
  var mixin = function (target, source) {
    var name, s;
    for (name in source) {
      s = source[name];
      if (s !== empty[name] && s !== target[name]) {
        target[name] = s;
      }
    }
    return target;
  };

  IDBStore.version = IDBStore.prototype.version;

  return IDBStore;

}, this);

},{}],"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/base64.js":[function(require,module,exports){
'use strict';
// private property
var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";


// public method for encoding
exports.encode = function(input, utf8) {
    var output = "";
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;

    while (i < input.length) {

        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);

        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;

        if (isNaN(chr2)) {
            enc3 = enc4 = 64;
        }
        else if (isNaN(chr3)) {
            enc4 = 64;
        }

        output = output + _keyStr.charAt(enc1) + _keyStr.charAt(enc2) + _keyStr.charAt(enc3) + _keyStr.charAt(enc4);

    }

    return output;
};

// public method for decoding
exports.decode = function(input, utf8) {
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;

    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

    while (i < input.length) {

        enc1 = _keyStr.indexOf(input.charAt(i++));
        enc2 = _keyStr.indexOf(input.charAt(i++));
        enc3 = _keyStr.indexOf(input.charAt(i++));
        enc4 = _keyStr.indexOf(input.charAt(i++));

        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;

        output = output + String.fromCharCode(chr1);

        if (enc3 != 64) {
            output = output + String.fromCharCode(chr2);
        }
        if (enc4 != 64) {
            output = output + String.fromCharCode(chr3);
        }

    }

    return output;

};

},{}],"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/compressedObject.js":[function(require,module,exports){
'use strict';
function CompressedObject() {
    this.compressedSize = 0;
    this.uncompressedSize = 0;
    this.crc32 = 0;
    this.compressionMethod = null;
    this.compressedContent = null;
}

CompressedObject.prototype = {
    /**
     * Return the decompressed content in an unspecified format.
     * The format will depend on the decompressor.
     * @return {Object} the decompressed content.
     */
    getContent: function() {
        return null; // see implementation
    },
    /**
     * Return the compressed content in an unspecified format.
     * The format will depend on the compressed conten source.
     * @return {Object} the compressed content.
     */
    getCompressedContent: function() {
        return null; // see implementation
    }
};
module.exports = CompressedObject;

},{}],"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/compressions.js":[function(require,module,exports){
'use strict';
exports.STORE = {
    magic: "\x00\x00",
    compress: function(content) {
        return content; // no compression
    },
    uncompress: function(content) {
        return content; // no compression
    },
    compressInputType: null,
    uncompressInputType: null
};
exports.DEFLATE = require('./flate');

},{"./flate":"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/flate.js"}],"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/crc32.js":[function(require,module,exports){
'use strict';

var utils = require('./utils');

var table = [
    0x00000000, 0x77073096, 0xEE0E612C, 0x990951BA,
    0x076DC419, 0x706AF48F, 0xE963A535, 0x9E6495A3,
    0x0EDB8832, 0x79DCB8A4, 0xE0D5E91E, 0x97D2D988,
    0x09B64C2B, 0x7EB17CBD, 0xE7B82D07, 0x90BF1D91,
    0x1DB71064, 0x6AB020F2, 0xF3B97148, 0x84BE41DE,
    0x1ADAD47D, 0x6DDDE4EB, 0xF4D4B551, 0x83D385C7,
    0x136C9856, 0x646BA8C0, 0xFD62F97A, 0x8A65C9EC,
    0x14015C4F, 0x63066CD9, 0xFA0F3D63, 0x8D080DF5,
    0x3B6E20C8, 0x4C69105E, 0xD56041E4, 0xA2677172,
    0x3C03E4D1, 0x4B04D447, 0xD20D85FD, 0xA50AB56B,
    0x35B5A8FA, 0x42B2986C, 0xDBBBC9D6, 0xACBCF940,
    0x32D86CE3, 0x45DF5C75, 0xDCD60DCF, 0xABD13D59,
    0x26D930AC, 0x51DE003A, 0xC8D75180, 0xBFD06116,
    0x21B4F4B5, 0x56B3C423, 0xCFBA9599, 0xB8BDA50F,
    0x2802B89E, 0x5F058808, 0xC60CD9B2, 0xB10BE924,
    0x2F6F7C87, 0x58684C11, 0xC1611DAB, 0xB6662D3D,
    0x76DC4190, 0x01DB7106, 0x98D220BC, 0xEFD5102A,
    0x71B18589, 0x06B6B51F, 0x9FBFE4A5, 0xE8B8D433,
    0x7807C9A2, 0x0F00F934, 0x9609A88E, 0xE10E9818,
    0x7F6A0DBB, 0x086D3D2D, 0x91646C97, 0xE6635C01,
    0x6B6B51F4, 0x1C6C6162, 0x856530D8, 0xF262004E,
    0x6C0695ED, 0x1B01A57B, 0x8208F4C1, 0xF50FC457,
    0x65B0D9C6, 0x12B7E950, 0x8BBEB8EA, 0xFCB9887C,
    0x62DD1DDF, 0x15DA2D49, 0x8CD37CF3, 0xFBD44C65,
    0x4DB26158, 0x3AB551CE, 0xA3BC0074, 0xD4BB30E2,
    0x4ADFA541, 0x3DD895D7, 0xA4D1C46D, 0xD3D6F4FB,
    0x4369E96A, 0x346ED9FC, 0xAD678846, 0xDA60B8D0,
    0x44042D73, 0x33031DE5, 0xAA0A4C5F, 0xDD0D7CC9,
    0x5005713C, 0x270241AA, 0xBE0B1010, 0xC90C2086,
    0x5768B525, 0x206F85B3, 0xB966D409, 0xCE61E49F,
    0x5EDEF90E, 0x29D9C998, 0xB0D09822, 0xC7D7A8B4,
    0x59B33D17, 0x2EB40D81, 0xB7BD5C3B, 0xC0BA6CAD,
    0xEDB88320, 0x9ABFB3B6, 0x03B6E20C, 0x74B1D29A,
    0xEAD54739, 0x9DD277AF, 0x04DB2615, 0x73DC1683,
    0xE3630B12, 0x94643B84, 0x0D6D6A3E, 0x7A6A5AA8,
    0xE40ECF0B, 0x9309FF9D, 0x0A00AE27, 0x7D079EB1,
    0xF00F9344, 0x8708A3D2, 0x1E01F268, 0x6906C2FE,
    0xF762575D, 0x806567CB, 0x196C3671, 0x6E6B06E7,
    0xFED41B76, 0x89D32BE0, 0x10DA7A5A, 0x67DD4ACC,
    0xF9B9DF6F, 0x8EBEEFF9, 0x17B7BE43, 0x60B08ED5,
    0xD6D6A3E8, 0xA1D1937E, 0x38D8C2C4, 0x4FDFF252,
    0xD1BB67F1, 0xA6BC5767, 0x3FB506DD, 0x48B2364B,
    0xD80D2BDA, 0xAF0A1B4C, 0x36034AF6, 0x41047A60,
    0xDF60EFC3, 0xA867DF55, 0x316E8EEF, 0x4669BE79,
    0xCB61B38C, 0xBC66831A, 0x256FD2A0, 0x5268E236,
    0xCC0C7795, 0xBB0B4703, 0x220216B9, 0x5505262F,
    0xC5BA3BBE, 0xB2BD0B28, 0x2BB45A92, 0x5CB36A04,
    0xC2D7FFA7, 0xB5D0CF31, 0x2CD99E8B, 0x5BDEAE1D,
    0x9B64C2B0, 0xEC63F226, 0x756AA39C, 0x026D930A,
    0x9C0906A9, 0xEB0E363F, 0x72076785, 0x05005713,
    0x95BF4A82, 0xE2B87A14, 0x7BB12BAE, 0x0CB61B38,
    0x92D28E9B, 0xE5D5BE0D, 0x7CDCEFB7, 0x0BDBDF21,
    0x86D3D2D4, 0xF1D4E242, 0x68DDB3F8, 0x1FDA836E,
    0x81BE16CD, 0xF6B9265B, 0x6FB077E1, 0x18B74777,
    0x88085AE6, 0xFF0F6A70, 0x66063BCA, 0x11010B5C,
    0x8F659EFF, 0xF862AE69, 0x616BFFD3, 0x166CCF45,
    0xA00AE278, 0xD70DD2EE, 0x4E048354, 0x3903B3C2,
    0xA7672661, 0xD06016F7, 0x4969474D, 0x3E6E77DB,
    0xAED16A4A, 0xD9D65ADC, 0x40DF0B66, 0x37D83BF0,
    0xA9BCAE53, 0xDEBB9EC5, 0x47B2CF7F, 0x30B5FFE9,
    0xBDBDF21C, 0xCABAC28A, 0x53B39330, 0x24B4A3A6,
    0xBAD03605, 0xCDD70693, 0x54DE5729, 0x23D967BF,
    0xB3667A2E, 0xC4614AB8, 0x5D681B02, 0x2A6F2B94,
    0xB40BBE37, 0xC30C8EA1, 0x5A05DF1B, 0x2D02EF8D
];

/**
 *
 *  Javascript crc32
 *  http://www.webtoolkit.info/
 *
 */
module.exports = function crc32(input, crc) {
    if (typeof input === "undefined" || !input.length) {
        return 0;
    }

    var isArray = utils.getTypeOf(input) !== "string";

    if (typeof(crc) == "undefined") {
        crc = 0;
    }
    var x = 0;
    var y = 0;
    var b = 0;

    crc = crc ^ (-1);
    for (var i = 0, iTop = input.length; i < iTop; i++) {
        b = isArray ? input[i] : input.charCodeAt(i);
        y = (crc ^ b) & 0xFF;
        x = table[y];
        crc = (crc >>> 8) ^ x;
    }

    return crc ^ (-1);
};
// vim: set shiftwidth=4 softtabstop=4:

},{"./utils":"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/utils.js"}],"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/dataReader.js":[function(require,module,exports){
'use strict';
var utils = require('./utils');

function DataReader(data) {
    this.data = null; // type : see implementation
    this.length = 0;
    this.index = 0;
}
DataReader.prototype = {
    /**
     * Check that the offset will not go too far.
     * @param {string} offset the additional offset to check.
     * @throws {Error} an Error if the offset is out of bounds.
     */
    checkOffset: function(offset) {
        this.checkIndex(this.index + offset);
    },
    /**
     * Check that the specifed index will not be too far.
     * @param {string} newIndex the index to check.
     * @throws {Error} an Error if the index is out of bounds.
     */
    checkIndex: function(newIndex) {
        if (this.length < newIndex || newIndex < 0) {
            throw new Error("End of data reached (data length = " + this.length + ", asked index = " + (newIndex) + "). Corrupted zip ?");
        }
    },
    /**
     * Change the index.
     * @param {number} newIndex The new index.
     * @throws {Error} if the new index is out of the data.
     */
    setIndex: function(newIndex) {
        this.checkIndex(newIndex);
        this.index = newIndex;
    },
    /**
     * Skip the next n bytes.
     * @param {number} n the number of bytes to skip.
     * @throws {Error} if the new index is out of the data.
     */
    skip: function(n) {
        this.setIndex(this.index + n);
    },
    /**
     * Get the byte at the specified index.
     * @param {number} i the index to use.
     * @return {number} a byte.
     */
    byteAt: function(i) {
        // see implementations
    },
    /**
     * Get the next number with a given byte size.
     * @param {number} size the number of bytes to read.
     * @return {number} the corresponding number.
     */
    readInt: function(size) {
        var result = 0,
            i;
        this.checkOffset(size);
        for (i = this.index + size - 1; i >= this.index; i--) {
            result = (result << 8) + this.byteAt(i);
        }
        this.index += size;
        return result;
    },
    /**
     * Get the next string with a given byte size.
     * @param {number} size the number of bytes to read.
     * @return {string} the corresponding string.
     */
    readString: function(size) {
        return utils.transformTo("string", this.readData(size));
    },
    /**
     * Get raw data without conversion, <size> bytes.
     * @param {number} size the number of bytes to read.
     * @return {Object} the raw data, implementation specific.
     */
    readData: function(size) {
        // see implementations
    },
    /**
     * Find the last occurence of a zip signature (4 bytes).
     * @param {string} sig the signature to find.
     * @return {number} the index of the last occurence, -1 if not found.
     */
    lastIndexOfSignature: function(sig) {
        // see implementations
    },
    /**
     * Get the next date.
     * @return {Date} the date.
     */
    readDate: function() {
        var dostime = this.readInt(4);
        return new Date(
        ((dostime >> 25) & 0x7f) + 1980, // year
        ((dostime >> 21) & 0x0f) - 1, // month
        (dostime >> 16) & 0x1f, // day
        (dostime >> 11) & 0x1f, // hour
        (dostime >> 5) & 0x3f, // minute
        (dostime & 0x1f) << 1); // second
    }
};
module.exports = DataReader;

},{"./utils":"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/utils.js"}],"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/defaults.js":[function(require,module,exports){
'use strict';
exports.base64 = false;
exports.binary = false;
exports.dir = false;
exports.createFolders = false;
exports.date = null;
exports.compression = null;
exports.comment = null;

},{}],"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/deprecatedPublicUtils.js":[function(require,module,exports){
'use strict';
var utils = require('./utils');

/**
 * @deprecated
 * This function will be removed in a future version without replacement.
 */
exports.string2binary = function(str) {
    return utils.string2binary(str);
};

/**
 * @deprecated
 * This function will be removed in a future version without replacement.
 */
exports.string2Uint8Array = function(str) {
    return utils.transformTo("uint8array", str);
};

/**
 * @deprecated
 * This function will be removed in a future version without replacement.
 */
exports.uint8Array2String = function(array) {
    return utils.transformTo("string", array);
};

/**
 * @deprecated
 * This function will be removed in a future version without replacement.
 */
exports.string2Blob = function(str) {
    var buffer = utils.transformTo("arraybuffer", str);
    return utils.arrayBuffer2Blob(buffer);
};

/**
 * @deprecated
 * This function will be removed in a future version without replacement.
 */
exports.arrayBuffer2Blob = function(buffer) {
    return utils.arrayBuffer2Blob(buffer);
};

/**
 * @deprecated
 * This function will be removed in a future version without replacement.
 */
exports.transformTo = function(outputType, input) {
    return utils.transformTo(outputType, input);
};

/**
 * @deprecated
 * This function will be removed in a future version without replacement.
 */
exports.getTypeOf = function(input) {
    return utils.getTypeOf(input);
};

/**
 * @deprecated
 * This function will be removed in a future version without replacement.
 */
exports.checkSupport = function(type) {
    return utils.checkSupport(type);
};

/**
 * @deprecated
 * This value will be removed in a future version without replacement.
 */
exports.MAX_VALUE_16BITS = utils.MAX_VALUE_16BITS;

/**
 * @deprecated
 * This value will be removed in a future version without replacement.
 */
exports.MAX_VALUE_32BITS = utils.MAX_VALUE_32BITS;


/**
 * @deprecated
 * This function will be removed in a future version without replacement.
 */
exports.pretty = function(str) {
    return utils.pretty(str);
};

/**
 * @deprecated
 * This function will be removed in a future version without replacement.
 */
exports.findCompression = function(compressionMethod) {
    return utils.findCompression(compressionMethod);
};

/**
 * @deprecated
 * This function will be removed in a future version without replacement.
 */
exports.isRegExp = function (object) {
    return utils.isRegExp(object);
};


},{"./utils":"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/utils.js"}],"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/flate.js":[function(require,module,exports){
'use strict';
var USE_TYPEDARRAY = (typeof Uint8Array !== 'undefined') && (typeof Uint16Array !== 'undefined') && (typeof Uint32Array !== 'undefined');

var pako = require("pako");
exports.uncompressInputType = USE_TYPEDARRAY ? "uint8array" : "array";
exports.compressInputType = USE_TYPEDARRAY ? "uint8array" : "array";

exports.magic = "\x08\x00";
exports.compress = function(input) {
    return pako.deflateRaw(input);
};
exports.uncompress =  function(input) {
    return pako.inflateRaw(input);
};

},{"pako":"/home/zefanja/Projekte/common-sword/node_modules/jszip/node_modules/pako/index.js"}],"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/index.js":[function(require,module,exports){
'use strict';

var base64 = require('./base64');

/**
Usage:
   zip = new JSZip();
   zip.file("hello.txt", "Hello, World!").file("tempfile", "nothing");
   zip.folder("images").file("smile.gif", base64Data, {base64: true});
   zip.file("Xmas.txt", "Ho ho ho !", {date : new Date("December 25, 2007 00:00:01")});
   zip.remove("tempfile");

   base64zip = zip.generate();

**/

/**
 * Representation a of zip file in js
 * @constructor
 * @param {String=|ArrayBuffer=|Uint8Array=} data the data to load, if any (optional).
 * @param {Object=} options the options for creating this objects (optional).
 */
function JSZip(data, options) {
    // if this constructor is used without `new`, it adds `new` before itself:
    if(!(this instanceof JSZip)) return new JSZip(data, options);
    
    // object containing the files :
    // {
    //   "folder/" : {...},
    //   "folder/data.txt" : {...}
    // }
    this.files = {};

    this.comment = null;

    // Where we are in the hierarchy
    this.root = "";
    if (data) {
        this.load(data, options);
    }
    this.clone = function() {
        var newObj = new JSZip();
        for (var i in this) {
            if (typeof this[i] !== "function") {
                newObj[i] = this[i];
            }
        }
        return newObj;
    };
}
JSZip.prototype = require('./object');
JSZip.prototype.load = require('./load');
JSZip.support = require('./support');
JSZip.defaults = require('./defaults');

/**
 * @deprecated
 * This namespace will be removed in a future version without replacement.
 */
JSZip.utils = require('./deprecatedPublicUtils');

JSZip.base64 = {
    /**
     * @deprecated
     * This method will be removed in a future version without replacement.
     */
    encode : function(input) {
        return base64.encode(input);
    },
    /**
     * @deprecated
     * This method will be removed in a future version without replacement.
     */
    decode : function(input) {
        return base64.decode(input);
    }
};
JSZip.compressions = require('./compressions');
module.exports = JSZip;

},{"./base64":"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/base64.js","./compressions":"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/compressions.js","./defaults":"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/defaults.js","./deprecatedPublicUtils":"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/deprecatedPublicUtils.js","./load":"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/load.js","./object":"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/object.js","./support":"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/support.js"}],"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/load.js":[function(require,module,exports){
'use strict';
var base64 = require('./base64');
var ZipEntries = require('./zipEntries');
module.exports = function(data, options) {
    var files, zipEntries, i, input;
    options = options || {};
    if (options.base64) {
        data = base64.decode(data);
    }

    zipEntries = new ZipEntries(data, options);
    files = zipEntries.files;
    for (i = 0; i < files.length; i++) {
        input = files[i];
        this.file(input.fileName, input.decompressed, {
            binary: true,
            optimizedBinaryString: true,
            date: input.date,
            dir: input.dir,
            comment : input.fileComment.length ? input.fileComment : null,
            createFolders: options.createFolders
        });
    }
    if (zipEntries.zipComment.length) {
        this.comment = zipEntries.zipComment;
    }

    return this;
};

},{"./base64":"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/base64.js","./zipEntries":"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/zipEntries.js"}],"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/nodeBuffer.js":[function(require,module,exports){
(function (Buffer){
'use strict';
module.exports = function(data, encoding){
    return new Buffer(data, encoding);   
};
module.exports.test = function(b){
    return Buffer.isBuffer(b);
};
}).call(this,require("buffer").Buffer)
},{"buffer":"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/buffer/index.js"}],"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/nodeBufferReader.js":[function(require,module,exports){
'use strict';
var Uint8ArrayReader = require('./uint8ArrayReader');

function NodeBufferReader(data) {
    this.data = data;
    this.length = this.data.length;
    this.index = 0;
}
NodeBufferReader.prototype = new Uint8ArrayReader();

/**
 * @see DataReader.readData
 */
NodeBufferReader.prototype.readData = function(size) {
    this.checkOffset(size);
    var result = this.data.slice(this.index, this.index + size);
    this.index += size;
    return result;
};
module.exports = NodeBufferReader;

},{"./uint8ArrayReader":"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/uint8ArrayReader.js"}],"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/object.js":[function(require,module,exports){
'use strict';
var support = require('./support');
var utils = require('./utils');
var crc32 = require('./crc32');
var signature = require('./signature');
var defaults = require('./defaults');
var base64 = require('./base64');
var compressions = require('./compressions');
var CompressedObject = require('./compressedObject');
var nodeBuffer = require('./nodeBuffer');
var utf8 = require('./utf8');
var StringWriter = require('./stringWriter');
var Uint8ArrayWriter = require('./uint8ArrayWriter');

/**
 * Returns the raw data of a ZipObject, decompress the content if necessary.
 * @param {ZipObject} file the file to use.
 * @return {String|ArrayBuffer|Uint8Array|Buffer} the data.
 */
var getRawData = function(file) {
    if (file._data instanceof CompressedObject) {
        file._data = file._data.getContent();
        file.options.binary = true;
        file.options.base64 = false;

        if (utils.getTypeOf(file._data) === "uint8array") {
            var copy = file._data;
            // when reading an arraybuffer, the CompressedObject mechanism will keep it and subarray() a Uint8Array.
            // if we request a file in the same format, we might get the same Uint8Array or its ArrayBuffer (the original zip file).
            file._data = new Uint8Array(copy.length);
            // with an empty Uint8Array, Opera fails with a "Offset larger than array size"
            if (copy.length !== 0) {
                file._data.set(copy, 0);
            }
        }
    }
    return file._data;
};

/**
 * Returns the data of a ZipObject in a binary form. If the content is an unicode string, encode it.
 * @param {ZipObject} file the file to use.
 * @return {String|ArrayBuffer|Uint8Array|Buffer} the data.
 */
var getBinaryData = function(file) {
    var result = getRawData(file),
        type = utils.getTypeOf(result);
    if (type === "string") {
        if (!file.options.binary) {
            // unicode text !
            // unicode string => binary string is a painful process, check if we can avoid it.
            if (support.nodebuffer) {
                return nodeBuffer(result, "utf-8");
            }
        }
        return file.asBinary();
    }
    return result;
};

/**
 * Transform this._data into a string.
 * @param {function} filter a function String -> String, applied if not null on the result.
 * @return {String} the string representing this._data.
 */
var dataToString = function(asUTF8) {
    var result = getRawData(this);
    if (result === null || typeof result === "undefined") {
        return "";
    }
    // if the data is a base64 string, we decode it before checking the encoding !
    if (this.options.base64) {
        result = base64.decode(result);
    }
    if (asUTF8 && this.options.binary) {
        // JSZip.prototype.utf8decode supports arrays as input
        // skip to array => string step, utf8decode will do it.
        result = out.utf8decode(result);
    }
    else {
        // no utf8 transformation, do the array => string step.
        result = utils.transformTo("string", result);
    }

    if (!asUTF8 && !this.options.binary) {
        result = utils.transformTo("string", out.utf8encode(result));
    }
    return result;
};
/**
 * A simple object representing a file in the zip file.
 * @constructor
 * @param {string} name the name of the file
 * @param {String|ArrayBuffer|Uint8Array|Buffer} data the data
 * @param {Object} options the options of the file
 */
var ZipObject = function(name, data, options) {
    this.name = name;
    this.dir = options.dir;
    this.date = options.date;
    this.comment = options.comment;

    this._data = data;
    this.options = options;

    /*
     * This object contains initial values for dir and date.
     * With them, we can check if the user changed the deprecated metadata in
     * `ZipObject#options` or not.
     */
    this._initialMetadata = {
      dir : options.dir,
      date : options.date
    };
};

ZipObject.prototype = {
    /**
     * Return the content as UTF8 string.
     * @return {string} the UTF8 string.
     */
    asText: function() {
        return dataToString.call(this, true);
    },
    /**
     * Returns the binary content.
     * @return {string} the content as binary.
     */
    asBinary: function() {
        return dataToString.call(this, false);
    },
    /**
     * Returns the content as a nodejs Buffer.
     * @return {Buffer} the content as a Buffer.
     */
    asNodeBuffer: function() {
        var result = getBinaryData(this);
        return utils.transformTo("nodebuffer", result);
    },
    /**
     * Returns the content as an Uint8Array.
     * @return {Uint8Array} the content as an Uint8Array.
     */
    asUint8Array: function() {
        var result = getBinaryData(this);
        return utils.transformTo("uint8array", result);
    },
    /**
     * Returns the content as an ArrayBuffer.
     * @return {ArrayBuffer} the content as an ArrayBufer.
     */
    asArrayBuffer: function() {
        return this.asUint8Array().buffer;
    }
};

/**
 * Transform an integer into a string in hexadecimal.
 * @private
 * @param {number} dec the number to convert.
 * @param {number} bytes the number of bytes to generate.
 * @returns {string} the result.
 */
var decToHex = function(dec, bytes) {
    var hex = "",
        i;
    for (i = 0; i < bytes; i++) {
        hex += String.fromCharCode(dec & 0xff);
        dec = dec >>> 8;
    }
    return hex;
};

/**
 * Merge the objects passed as parameters into a new one.
 * @private
 * @param {...Object} var_args All objects to merge.
 * @return {Object} a new object with the data of the others.
 */
var extend = function() {
    var result = {}, i, attr;
    for (i = 0; i < arguments.length; i++) { // arguments is not enumerable in some browsers
        for (attr in arguments[i]) {
            if (arguments[i].hasOwnProperty(attr) && typeof result[attr] === "undefined") {
                result[attr] = arguments[i][attr];
            }
        }
    }
    return result;
};

/**
 * Transforms the (incomplete) options from the user into the complete
 * set of options to create a file.
 * @private
 * @param {Object} o the options from the user.
 * @return {Object} the complete set of options.
 */
var prepareFileAttrs = function(o) {
    o = o || {};
    if (o.base64 === true && (o.binary === null || o.binary === undefined)) {
        o.binary = true;
    }
    o = extend(o, defaults);
    o.date = o.date || new Date();
    if (o.compression !== null) o.compression = o.compression.toUpperCase();

    return o;
};

/**
 * Add a file in the current folder.
 * @private
 * @param {string} name the name of the file
 * @param {String|ArrayBuffer|Uint8Array|Buffer} data the data of the file
 * @param {Object} o the options of the file
 * @return {Object} the new file.
 */
var fileAdd = function(name, data, o) {
    // be sure sub folders exist
    var dataType = utils.getTypeOf(data),
        parent;

    o = prepareFileAttrs(o);

    if (o.createFolders && (parent = parentFolder(name))) {
        folderAdd.call(this, parent, true);
    }

    if (o.dir || data === null || typeof data === "undefined") {
        o.base64 = false;
        o.binary = false;
        data = null;
    }
    else if (dataType === "string") {
        if (o.binary && !o.base64) {
            // optimizedBinaryString == true means that the file has already been filtered with a 0xFF mask
            if (o.optimizedBinaryString !== true) {
                // this is a string, not in a base64 format.
                // Be sure that this is a correct "binary string"
                data = utils.string2binary(data);
            }
        }
    }
    else { // arraybuffer, uint8array, ...
        o.base64 = false;
        o.binary = true;

        if (!dataType && !(data instanceof CompressedObject)) {
            throw new Error("The data of '" + name + "' is in an unsupported format !");
        }

        // special case : it's way easier to work with Uint8Array than with ArrayBuffer
        if (dataType === "arraybuffer") {
            data = utils.transformTo("uint8array", data);
        }
    }

    var object = new ZipObject(name, data, o);
    this.files[name] = object;
    return object;
};

/**
 * Find the parent folder of the path.
 * @private
 * @param {string} path the path to use
 * @return {string} the parent folder, or ""
 */
var parentFolder = function (path) {
    if (path.slice(-1) == '/') {
        path = path.substring(0, path.length - 1);
    }
    var lastSlash = path.lastIndexOf('/');
    return (lastSlash > 0) ? path.substring(0, lastSlash) : "";
};

/**
 * Add a (sub) folder in the current folder.
 * @private
 * @param {string} name the folder's name
 * @param {boolean=} [createFolders] If true, automatically create sub 
 *  folders. Defaults to false.
 * @return {Object} the new folder.
 */
var folderAdd = function(name, createFolders) {
    // Check the name ends with a /
    if (name.slice(-1) != "/") {
        name += "/"; // IE doesn't like substr(-1)
    }

    createFolders = (typeof createFolders !== 'undefined') ? createFolders : false;

    // Does this folder already exist?
    if (!this.files[name]) {
        fileAdd.call(this, name, null, {
            dir: true,
            createFolders: createFolders
        });
    }
    return this.files[name];
};

/**
 * Generate a JSZip.CompressedObject for a given zipOject.
 * @param {ZipObject} file the object to read.
 * @param {JSZip.compression} compression the compression to use.
 * @return {JSZip.CompressedObject} the compressed result.
 */
var generateCompressedObjectFrom = function(file, compression) {
    var result = new CompressedObject(),
        content;

    // the data has not been decompressed, we might reuse things !
    if (file._data instanceof CompressedObject) {
        result.uncompressedSize = file._data.uncompressedSize;
        result.crc32 = file._data.crc32;

        if (result.uncompressedSize === 0 || file.dir) {
            compression = compressions['STORE'];
            result.compressedContent = "";
            result.crc32 = 0;
        }
        else if (file._data.compressionMethod === compression.magic) {
            result.compressedContent = file._data.getCompressedContent();
        }
        else {
            content = file._data.getContent();
            // need to decompress / recompress
            result.compressedContent = compression.compress(utils.transformTo(compression.compressInputType, content));
        }
    }
    else {
        // have uncompressed data
        content = getBinaryData(file);
        if (!content || content.length === 0 || file.dir) {
            compression = compressions['STORE'];
            content = "";
        }
        result.uncompressedSize = content.length;
        result.crc32 = crc32(content);
        result.compressedContent = compression.compress(utils.transformTo(compression.compressInputType, content));
    }

    result.compressedSize = result.compressedContent.length;
    result.compressionMethod = compression.magic;

    return result;
};

/**
 * Generate the various parts used in the construction of the final zip file.
 * @param {string} name the file name.
 * @param {ZipObject} file the file content.
 * @param {JSZip.CompressedObject} compressedObject the compressed object.
 * @param {number} offset the current offset from the start of the zip file.
 * @return {object} the zip parts.
 */
var generateZipParts = function(name, file, compressedObject, offset) {
    var data = compressedObject.compressedContent,
        utfEncodedFileName = utils.transformTo("string", utf8.utf8encode(file.name)),
        comment = file.comment || "",
        utfEncodedComment = utils.transformTo("string", utf8.utf8encode(comment)),
        useUTF8ForFileName = utfEncodedFileName.length !== file.name.length,
        useUTF8ForComment = utfEncodedComment.length !== comment.length,
        o = file.options,
        dosTime,
        dosDate,
        extraFields = "",
        unicodePathExtraField = "",
        unicodeCommentExtraField = "",
        dir, date;


    // handle the deprecated options.dir
    if (file._initialMetadata.dir !== file.dir) {
        dir = file.dir;
    } else {
        dir = o.dir;
    }

    // handle the deprecated options.date
    if(file._initialMetadata.date !== file.date) {
        date = file.date;
    } else {
        date = o.date;
    }

    // date
    // @see http://www.delorie.com/djgpp/doc/rbinter/it/52/13.html
    // @see http://www.delorie.com/djgpp/doc/rbinter/it/65/16.html
    // @see http://www.delorie.com/djgpp/doc/rbinter/it/66/16.html

    dosTime = date.getHours();
    dosTime = dosTime << 6;
    dosTime = dosTime | date.getMinutes();
    dosTime = dosTime << 5;
    dosTime = dosTime | date.getSeconds() / 2;

    dosDate = date.getFullYear() - 1980;
    dosDate = dosDate << 4;
    dosDate = dosDate | (date.getMonth() + 1);
    dosDate = dosDate << 5;
    dosDate = dosDate | date.getDate();

    if (useUTF8ForFileName) {
        // set the unicode path extra field. unzip needs at least one extra
        // field to correctly handle unicode path, so using the path is as good
        // as any other information. This could improve the situation with
        // other archive managers too.
        // This field is usually used without the utf8 flag, with a non
        // unicode path in the header (winrar, winzip). This helps (a bit)
        // with the messy Windows' default compressed folders feature but
        // breaks on p7zip which doesn't seek the unicode path extra field.
        // So for now, UTF-8 everywhere !
        unicodePathExtraField =
            // Version
            decToHex(1, 1) +
            // NameCRC32
            decToHex(crc32(utfEncodedFileName), 4) +
            // UnicodeName
            utfEncodedFileName;

        extraFields +=
            // Info-ZIP Unicode Path Extra Field
            "\x75\x70" +
            // size
            decToHex(unicodePathExtraField.length, 2) +
            // content
            unicodePathExtraField;
    }

    if(useUTF8ForComment) {

        unicodeCommentExtraField =
            // Version
            decToHex(1, 1) +
            // CommentCRC32
            decToHex(this.crc32(utfEncodedComment), 4) +
            // UnicodeName
            utfEncodedComment;

        extraFields +=
            // Info-ZIP Unicode Path Extra Field
            "\x75\x63" +
            // size
            decToHex(unicodeCommentExtraField.length, 2) +
            // content
            unicodeCommentExtraField;
    }

    var header = "";

    // version needed to extract
    header += "\x0A\x00";
    // general purpose bit flag
    // set bit 11 if utf8
    header += (useUTF8ForFileName || useUTF8ForComment) ? "\x00\x08" : "\x00\x00";
    // compression method
    header += compressedObject.compressionMethod;
    // last mod file time
    header += decToHex(dosTime, 2);
    // last mod file date
    header += decToHex(dosDate, 2);
    // crc-32
    header += decToHex(compressedObject.crc32, 4);
    // compressed size
    header += decToHex(compressedObject.compressedSize, 4);
    // uncompressed size
    header += decToHex(compressedObject.uncompressedSize, 4);
    // file name length
    header += decToHex(utfEncodedFileName.length, 2);
    // extra field length
    header += decToHex(extraFields.length, 2);


    var fileRecord = signature.LOCAL_FILE_HEADER + header + utfEncodedFileName + extraFields;

    var dirRecord = signature.CENTRAL_FILE_HEADER +
    // version made by (00: DOS)
    "\x14\x00" +
    // file header (common to file and central directory)
    header +
    // file comment length
    decToHex(utfEncodedComment.length, 2) +
    // disk number start
    "\x00\x00" +
    // internal file attributes TODO
    "\x00\x00" +
    // external file attributes
    (dir === true ? "\x10\x00\x00\x00" : "\x00\x00\x00\x00") +
    // relative offset of local header
    decToHex(offset, 4) +
    // file name
    utfEncodedFileName +
    // extra field
    extraFields +
    // file comment
    utfEncodedComment;

    return {
        fileRecord: fileRecord,
        dirRecord: dirRecord,
        compressedObject: compressedObject
    };
};


// return the actual prototype of JSZip
var out = {
    /**
     * Read an existing zip and merge the data in the current JSZip object.
     * The implementation is in jszip-load.js, don't forget to include it.
     * @param {String|ArrayBuffer|Uint8Array|Buffer} stream  The stream to load
     * @param {Object} options Options for loading the stream.
     *  options.base64 : is the stream in base64 ? default : false
     * @return {JSZip} the current JSZip object
     */
    load: function(stream, options) {
        throw new Error("Load method is not defined. Is the file jszip-load.js included ?");
    },

    /**
     * Filter nested files/folders with the specified function.
     * @param {Function} search the predicate to use :
     * function (relativePath, file) {...}
     * It takes 2 arguments : the relative path and the file.
     * @return {Array} An array of matching elements.
     */
    filter: function(search) {
        var result = [],
            filename, relativePath, file, fileClone;
        for (filename in this.files) {
            if (!this.files.hasOwnProperty(filename)) {
                continue;
            }
            file = this.files[filename];
            // return a new object, don't let the user mess with our internal objects :)
            fileClone = new ZipObject(file.name, file._data, extend(file.options));
            relativePath = filename.slice(this.root.length, filename.length);
            if (filename.slice(0, this.root.length) === this.root && // the file is in the current root
            search(relativePath, fileClone)) { // and the file matches the function
                result.push(fileClone);
            }
        }
        return result;
    },

    /**
     * Add a file to the zip file, or search a file.
     * @param   {string|RegExp} name The name of the file to add (if data is defined),
     * the name of the file to find (if no data) or a regex to match files.
     * @param   {String|ArrayBuffer|Uint8Array|Buffer} data  The file data, either raw or base64 encoded
     * @param   {Object} o     File options
     * @return  {JSZip|Object|Array} this JSZip object (when adding a file),
     * a file (when searching by string) or an array of files (when searching by regex).
     */
    file: function(name, data, o) {
        if (arguments.length === 1) {
            if (utils.isRegExp(name)) {
                var regexp = name;
                return this.filter(function(relativePath, file) {
                    return !file.dir && regexp.test(relativePath);
                });
            }
            else { // text
                return this.filter(function(relativePath, file) {
                    return !file.dir && relativePath === name;
                })[0] || null;
            }
        }
        else { // more than one argument : we have data !
            name = this.root + name;
            fileAdd.call(this, name, data, o);
        }
        return this;
    },

    /**
     * Add a directory to the zip file, or search.
     * @param   {String|RegExp} arg The name of the directory to add, or a regex to search folders.
     * @return  {JSZip} an object with the new directory as the root, or an array containing matching folders.
     */
    folder: function(arg) {
        if (!arg) {
            return this;
        }

        if (utils.isRegExp(arg)) {
            return this.filter(function(relativePath, file) {
                return file.dir && arg.test(relativePath);
            });
        }

        // else, name is a new folder
        var name = this.root + arg;
        var newFolder = folderAdd.call(this, name);

        // Allow chaining by returning a new object with this folder as the root
        var ret = this.clone();
        ret.root = newFolder.name;
        return ret;
    },

    /**
     * Delete a file, or a directory and all sub-files, from the zip
     * @param {string} name the name of the file to delete
     * @return {JSZip} this JSZip object
     */
    remove: function(name) {
        name = this.root + name;
        var file = this.files[name];
        if (!file) {
            // Look for any folders
            if (name.slice(-1) != "/") {
                name += "/";
            }
            file = this.files[name];
        }

        if (file && !file.dir) {
            // file
            delete this.files[name];
        } else {
            // maybe a folder, delete recursively
            var kids = this.filter(function(relativePath, file) {
                return file.name.slice(0, name.length) === name;
            });
            for (var i = 0; i < kids.length; i++) {
                delete this.files[kids[i].name];
            }
        }

        return this;
    },

    /**
     * Generate the complete zip file
     * @param {Object} options the options to generate the zip file :
     * - base64, (deprecated, use type instead) true to generate base64.
     * - compression, "STORE" by default.
     * - type, "base64" by default. Values are : string, base64, uint8array, arraybuffer, blob.
     * @return {String|Uint8Array|ArrayBuffer|Buffer|Blob} the zip file
     */
    generate: function(options) {
        options = extend(options || {}, {
            base64: true,
            compression: "STORE",
            type: "base64",
            comment: null
        });

        utils.checkSupport(options.type);

        var zipData = [],
            localDirLength = 0,
            centralDirLength = 0,
            writer, i,
            utfEncodedComment = utils.transformTo("string", this.utf8encode(options.comment || this.comment || ""));

        // first, generate all the zip parts.
        for (var name in this.files) {
            if (!this.files.hasOwnProperty(name)) {
                continue;
            }
            var file = this.files[name];

            var compressionName = file.options.compression || options.compression.toUpperCase();
            var compression = compressions[compressionName];
            if (!compression) {
                throw new Error(compressionName + " is not a valid compression method !");
            }

            var compressedObject = generateCompressedObjectFrom.call(this, file, compression);

            var zipPart = generateZipParts.call(this, name, file, compressedObject, localDirLength);
            localDirLength += zipPart.fileRecord.length + compressedObject.compressedSize;
            centralDirLength += zipPart.dirRecord.length;
            zipData.push(zipPart);
        }

        var dirEnd = "";

        // end of central dir signature
        dirEnd = signature.CENTRAL_DIRECTORY_END +
        // number of this disk
        "\x00\x00" +
        // number of the disk with the start of the central directory
        "\x00\x00" +
        // total number of entries in the central directory on this disk
        decToHex(zipData.length, 2) +
        // total number of entries in the central directory
        decToHex(zipData.length, 2) +
        // size of the central directory   4 bytes
        decToHex(centralDirLength, 4) +
        // offset of start of central directory with respect to the starting disk number
        decToHex(localDirLength, 4) +
        // .ZIP file comment length
        decToHex(utfEncodedComment.length, 2) +
        // .ZIP file comment
        utfEncodedComment;


        // we have all the parts (and the total length)
        // time to create a writer !
        var typeName = options.type.toLowerCase();
        if(typeName==="uint8array"||typeName==="arraybuffer"||typeName==="blob"||typeName==="nodebuffer") {
            writer = new Uint8ArrayWriter(localDirLength + centralDirLength + dirEnd.length);
        }else{
            writer = new StringWriter(localDirLength + centralDirLength + dirEnd.length);
        }

        for (i = 0; i < zipData.length; i++) {
            writer.append(zipData[i].fileRecord);
            writer.append(zipData[i].compressedObject.compressedContent);
        }
        for (i = 0; i < zipData.length; i++) {
            writer.append(zipData[i].dirRecord);
        }

        writer.append(dirEnd);

        var zip = writer.finalize();



        switch(options.type.toLowerCase()) {
            // case "zip is an Uint8Array"
            case "uint8array" :
            case "arraybuffer" :
            case "nodebuffer" :
               return utils.transformTo(options.type.toLowerCase(), zip);
            case "blob" :
               return utils.arrayBuffer2Blob(utils.transformTo("arraybuffer", zip));
            // case "zip is a string"
            case "base64" :
               return (options.base64) ? base64.encode(zip) : zip;
            default : // case "string" :
               return zip;
         }
      
    },

    /**
     * @deprecated
     * This method will be removed in a future version without replacement.
     */
    crc32: function (input, crc) {
        return crc32(input, crc);
    },

    /**
     * @deprecated
     * This method will be removed in a future version without replacement.
     */
    utf8encode: function (string) {
        return utils.transformTo("string", utf8.utf8encode(string));
    },

    /**
     * @deprecated
     * This method will be removed in a future version without replacement.
     */
    utf8decode: function (input) {
        return utf8.utf8decode(input);
    }
};
module.exports = out;

},{"./base64":"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/base64.js","./compressedObject":"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/compressedObject.js","./compressions":"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/compressions.js","./crc32":"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/crc32.js","./defaults":"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/defaults.js","./nodeBuffer":"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/nodeBuffer.js","./signature":"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/signature.js","./stringWriter":"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/stringWriter.js","./support":"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/support.js","./uint8ArrayWriter":"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/uint8ArrayWriter.js","./utf8":"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/utf8.js","./utils":"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/utils.js"}],"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/signature.js":[function(require,module,exports){
'use strict';
exports.LOCAL_FILE_HEADER = "PK\x03\x04";
exports.CENTRAL_FILE_HEADER = "PK\x01\x02";
exports.CENTRAL_DIRECTORY_END = "PK\x05\x06";
exports.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x06\x07";
exports.ZIP64_CENTRAL_DIRECTORY_END = "PK\x06\x06";
exports.DATA_DESCRIPTOR = "PK\x07\x08";

},{}],"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/stringReader.js":[function(require,module,exports){
'use strict';
var DataReader = require('./dataReader');
var utils = require('./utils');

function StringReader(data, optimizedBinaryString) {
    this.data = data;
    if (!optimizedBinaryString) {
        this.data = utils.string2binary(this.data);
    }
    this.length = this.data.length;
    this.index = 0;
}
StringReader.prototype = new DataReader();
/**
 * @see DataReader.byteAt
 */
StringReader.prototype.byteAt = function(i) {
    return this.data.charCodeAt(i);
};
/**
 * @see DataReader.lastIndexOfSignature
 */
StringReader.prototype.lastIndexOfSignature = function(sig) {
    return this.data.lastIndexOf(sig);
};
/**
 * @see DataReader.readData
 */
StringReader.prototype.readData = function(size) {
    this.checkOffset(size);
    // this will work because the constructor applied the "& 0xff" mask.
    var result = this.data.slice(this.index, this.index + size);
    this.index += size;
    return result;
};
module.exports = StringReader;

},{"./dataReader":"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/dataReader.js","./utils":"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/utils.js"}],"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/stringWriter.js":[function(require,module,exports){
'use strict';

var utils = require('./utils');

/**
 * An object to write any content to a string.
 * @constructor
 */
var StringWriter = function() {
    this.data = [];
};
StringWriter.prototype = {
    /**
     * Append any content to the current string.
     * @param {Object} input the content to add.
     */
    append: function(input) {
        input = utils.transformTo("string", input);
        this.data.push(input);
    },
    /**
     * Finalize the construction an return the result.
     * @return {string} the generated string.
     */
    finalize: function() {
        return this.data.join("");
    }
};

module.exports = StringWriter;

},{"./utils":"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/utils.js"}],"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/support.js":[function(require,module,exports){
(function (Buffer){
'use strict';
exports.base64 = true;
exports.array = true;
exports.string = true;
exports.arraybuffer = typeof ArrayBuffer !== "undefined" && typeof Uint8Array !== "undefined";
// contains true if JSZip can read/generate nodejs Buffer, false otherwise.
// Browserify will provide a Buffer implementation for browsers, which is
// an augmented Uint8Array (i.e., can be used as either Buffer or U8).
exports.nodebuffer = typeof Buffer !== "undefined";
// contains true if JSZip can read/generate Uint8Array, false otherwise.
exports.uint8array = typeof Uint8Array !== "undefined";

if (typeof ArrayBuffer === "undefined") {
    exports.blob = false;
}
else {
    var buffer = new ArrayBuffer(0);
    try {
        exports.blob = new Blob([buffer], {
            type: "application/zip"
        }).size === 0;
    }
    catch (e) {
        try {
            var Builder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
            var builder = new Builder();
            builder.append(buffer);
            exports.blob = builder.getBlob('application/zip').size === 0;
        }
        catch (e) {
            exports.blob = false;
        }
    }
}

}).call(this,require("buffer").Buffer)
},{"buffer":"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/buffer/index.js"}],"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/uint8ArrayReader.js":[function(require,module,exports){
'use strict';
var DataReader = require('./dataReader');

function Uint8ArrayReader(data) {
    if (data) {
        this.data = data;
        this.length = this.data.length;
        this.index = 0;
    }
}
Uint8ArrayReader.prototype = new DataReader();
/**
 * @see DataReader.byteAt
 */
Uint8ArrayReader.prototype.byteAt = function(i) {
    return this.data[i];
};
/**
 * @see DataReader.lastIndexOfSignature
 */
Uint8ArrayReader.prototype.lastIndexOfSignature = function(sig) {
    var sig0 = sig.charCodeAt(0),
        sig1 = sig.charCodeAt(1),
        sig2 = sig.charCodeAt(2),
        sig3 = sig.charCodeAt(3);
    for (var i = this.length - 4; i >= 0; --i) {
        if (this.data[i] === sig0 && this.data[i + 1] === sig1 && this.data[i + 2] === sig2 && this.data[i + 3] === sig3) {
            return i;
        }
    }

    return -1;
};
/**
 * @see DataReader.readData
 */
Uint8ArrayReader.prototype.readData = function(size) {
    this.checkOffset(size);
    if(size === 0) {
        // in IE10, when using subarray(idx, idx), we get the array [0x00] instead of [].
        return new Uint8Array(0);
    }
    var result = this.data.subarray(this.index, this.index + size);
    this.index += size;
    return result;
};
module.exports = Uint8ArrayReader;

},{"./dataReader":"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/dataReader.js"}],"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/uint8ArrayWriter.js":[function(require,module,exports){
'use strict';

var utils = require('./utils');

/**
 * An object to write any content to an Uint8Array.
 * @constructor
 * @param {number} length The length of the array.
 */
var Uint8ArrayWriter = function(length) {
    this.data = new Uint8Array(length);
    this.index = 0;
};
Uint8ArrayWriter.prototype = {
    /**
     * Append any content to the current array.
     * @param {Object} input the content to add.
     */
    append: function(input) {
        if (input.length !== 0) {
            // with an empty Uint8Array, Opera fails with a "Offset larger than array size"
            input = utils.transformTo("uint8array", input);
            this.data.set(input, this.index);
            this.index += input.length;
        }
    },
    /**
     * Finalize the construction an return the result.
     * @return {Uint8Array} the generated array.
     */
    finalize: function() {
        return this.data;
    }
};

module.exports = Uint8ArrayWriter;

},{"./utils":"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/utils.js"}],"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/utf8.js":[function(require,module,exports){
'use strict';

var utils = require('./utils');
var support = require('./support');
var nodeBuffer = require('./nodeBuffer');

/**
 * The following functions come from pako, from pako/lib/utils/strings
 * released under the MIT license, see pako https://github.com/nodeca/pako/
 */

// Table with utf8 lengths (calculated by first byte of sequence)
// Note, that 5 & 6-byte values and some 4-byte values can not be represented in JS,
// because max possible codepoint is 0x10ffff
var _utf8len = new Array(256);
for (var i=0; i<256; i++) {
  _utf8len[i] = (i >= 252 ? 6 : i >= 248 ? 5 : i >= 240 ? 4 : i >= 224 ? 3 : i >= 192 ? 2 : 1);
}
_utf8len[254]=_utf8len[254]=1; // Invalid sequence start

// convert string to array (typed, when possible)
var string2buf = function (str) {
    var buf, c, c2, m_pos, i, str_len = str.length, buf_len = 0;

    // count binary size
    for (m_pos = 0; m_pos < str_len; m_pos++) {
        c = str.charCodeAt(m_pos);
        if ((c & 0xfc00) === 0xd800 && (m_pos+1 < str_len)) {
            c2 = str.charCodeAt(m_pos+1);
            if ((c2 & 0xfc00) === 0xdc00) {
                c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
                m_pos++;
            }
        }
        buf_len += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
    }

    // allocate buffer
    if (support.uint8array) {
        buf = new Uint8Array(buf_len);
    } else {
        buf = new Array(buf_len);
    }

    // convert
    for (i=0, m_pos = 0; i < buf_len; m_pos++) {
        c = str.charCodeAt(m_pos);
        if ((c & 0xfc00) === 0xd800 && (m_pos+1 < str_len)) {
            c2 = str.charCodeAt(m_pos+1);
            if ((c2 & 0xfc00) === 0xdc00) {
                c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
                m_pos++;
            }
        }
        if (c < 0x80) {
            /* one byte */
            buf[i++] = c;
        } else if (c < 0x800) {
            /* two bytes */
            buf[i++] = 0xC0 | (c >>> 6);
            buf[i++] = 0x80 | (c & 0x3f);
        } else if (c < 0x10000) {
            /* three bytes */
            buf[i++] = 0xE0 | (c >>> 12);
            buf[i++] = 0x80 | (c >>> 6 & 0x3f);
            buf[i++] = 0x80 | (c & 0x3f);
        } else {
            /* four bytes */
            buf[i++] = 0xf0 | (c >>> 18);
            buf[i++] = 0x80 | (c >>> 12 & 0x3f);
            buf[i++] = 0x80 | (c >>> 6 & 0x3f);
            buf[i++] = 0x80 | (c & 0x3f);
        }
    }

    return buf;
};

// Calculate max possible position in utf8 buffer,
// that will not break sequence. If that's not possible
// - (very small limits) return max size as is.
//
// buf[] - utf8 bytes array
// max   - length limit (mandatory);
var utf8border = function(buf, max) {
    var pos;

    max = max || buf.length;
    if (max > buf.length) { max = buf.length; }

    // go back from last position, until start of sequence found
    pos = max-1;
    while (pos >= 0 && (buf[pos] & 0xC0) === 0x80) { pos--; }

    // Fuckup - very small and broken sequence,
    // return max, because we should return something anyway.
    if (pos < 0) { return max; }

    // If we came to start of buffer - that means vuffer is too small,
    // return max too.
    if (pos === 0) { return max; }

    return (pos + _utf8len[buf[pos]] > max) ? pos : max;
};

// convert array to string
var buf2string = function (buf) {
    var str, i, out, c, c_len;
    var len = buf.length;

    // Reserve max possible length (2 words per char)
    // NB: by unknown reasons, Array is significantly faster for
    //     String.fromCharCode.apply than Uint16Array.
    var utf16buf = new Array(len*2);

    for (out=0, i=0; i<len;) {
        c = buf[i++];
        // quick process ascii
        if (c < 0x80) { utf16buf[out++] = c; continue; }

        c_len = _utf8len[c];
        // skip 5 & 6 byte codes
        if (c_len > 4) { utf16buf[out++] = 0xfffd; i += c_len-1; continue; }

        // apply mask on first byte
        c &= c_len === 2 ? 0x1f : c_len === 3 ? 0x0f : 0x07;
        // join the rest
        while (c_len > 1 && i < len) {
            c = (c << 6) | (buf[i++] & 0x3f);
            c_len--;
        }

        // terminated by end of string?
        if (c_len > 1) { utf16buf[out++] = 0xfffd; continue; }

        if (c < 0x10000) {
            utf16buf[out++] = c;
        } else {
            c -= 0x10000;
            utf16buf[out++] = 0xd800 | ((c >> 10) & 0x3ff);
            utf16buf[out++] = 0xdc00 | (c & 0x3ff);
        }
    }

    // shrinkBuf(utf16buf, out)
    if (utf16buf.length !== out) {
        if(utf16buf.subarray) {
            utf16buf = utf16buf.subarray(0, out);
        } else {
            utf16buf.length = out;
        }
    }

    // return String.fromCharCode.apply(null, utf16buf);
    return utils.applyFromCharCode(utf16buf);
};


// That's all for the pako functions.


/**
 * Transform a javascript string into an array (typed if possible) of bytes,
 * UTF-8 encoded.
 * @param {String} str the string to encode
 * @return {Array|Uint8Array|Buffer} the UTF-8 encoded string.
 */
exports.utf8encode = function utf8encode(str) {
    if (support.nodebuffer) {
        return nodeBuffer(str, "utf-8");
    }

    return string2buf(str);
};


/**
 * Transform a bytes array (or a representation) representing an UTF-8 encoded
 * string into a javascript string.
 * @param {Array|Uint8Array|Buffer} buf the data de decode
 * @return {String} the decoded string.
 */
exports.utf8decode = function utf8decode(buf) {
    if (support.nodebuffer) {
        return utils.transformTo("nodebuffer", buf).toString("utf-8");
    }

    buf = utils.transformTo(support.uint8array ? "uint8array" : "array", buf);

    // return buf2string(buf);
    // Chrome prefers to work with "small" chunks of data
    // for the method buf2string.
    // Firefox and Chrome has their own shortcut, IE doesn't seem to really care.
    var result = [], k = 0, len = buf.length, chunk = 65536;
    while (k < len) {
        var nextBoundary = utf8border(buf, Math.min(k + chunk, len));
        if (support.uint8array) {
            result.push(buf2string(buf.subarray(k, nextBoundary)));
        } else {
            result.push(buf2string(buf.slice(k, nextBoundary)));
        }
        k = nextBoundary;
    }
    return result.join("");

};
// vim: set shiftwidth=4 softtabstop=4:

},{"./nodeBuffer":"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/nodeBuffer.js","./support":"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/support.js","./utils":"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/utils.js"}],"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/utils.js":[function(require,module,exports){
'use strict';
var support = require('./support');
var compressions = require('./compressions');
var nodeBuffer = require('./nodeBuffer');
/**
 * Convert a string to a "binary string" : a string containing only char codes between 0 and 255.
 * @param {string} str the string to transform.
 * @return {String} the binary string.
 */
exports.string2binary = function(str) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
        result += String.fromCharCode(str.charCodeAt(i) & 0xff);
    }
    return result;
};
exports.arrayBuffer2Blob = function(buffer) {
    exports.checkSupport("blob");

    try {
        // Blob constructor
        return new Blob([buffer], {
            type: "application/zip"
        });
    }
    catch (e) {

        try {
            // deprecated, browser only, old way
            var Builder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
            var builder = new Builder();
            builder.append(buffer);
            return builder.getBlob('application/zip');
        }
        catch (e) {

            // well, fuck ?!
            throw new Error("Bug : can't construct the Blob.");
        }
    }


};
/**
 * The identity function.
 * @param {Object} input the input.
 * @return {Object} the same input.
 */
function identity(input) {
    return input;
}

/**
 * Fill in an array with a string.
 * @param {String} str the string to use.
 * @param {Array|ArrayBuffer|Uint8Array|Buffer} array the array to fill in (will be mutated).
 * @return {Array|ArrayBuffer|Uint8Array|Buffer} the updated array.
 */
function stringToArrayLike(str, array) {
    for (var i = 0; i < str.length; ++i) {
        array[i] = str.charCodeAt(i) & 0xFF;
    }
    return array;
}

/**
 * Transform an array-like object to a string.
 * @param {Array|ArrayBuffer|Uint8Array|Buffer} array the array to transform.
 * @return {String} the result.
 */
function arrayLikeToString(array) {
    // Performances notes :
    // --------------------
    // String.fromCharCode.apply(null, array) is the fastest, see
    // see http://jsperf.com/converting-a-uint8array-to-a-string/2
    // but the stack is limited (and we can get huge arrays !).
    //
    // result += String.fromCharCode(array[i]); generate too many strings !
    //
    // This code is inspired by http://jsperf.com/arraybuffer-to-string-apply-performance/2
    var chunk = 65536;
    var result = [],
        len = array.length,
        type = exports.getTypeOf(array),
        k = 0,
        canUseApply = true;
      try {
         switch(type) {
            case "uint8array":
               String.fromCharCode.apply(null, new Uint8Array(0));
               break;
            case "nodebuffer":
               String.fromCharCode.apply(null, nodeBuffer(0));
               break;
         }
      } catch(e) {
         canUseApply = false;
      }

      // no apply : slow and painful algorithm
      // default browser on android 4.*
      if (!canUseApply) {
         var resultStr = "";
         for(var i = 0; i < array.length;i++) {
            resultStr += String.fromCharCode(array[i]);
         }
    return resultStr;
    }
    while (k < len && chunk > 1) {
        try {
            if (type === "array" || type === "nodebuffer") {
                result.push(String.fromCharCode.apply(null, array.slice(k, Math.min(k + chunk, len))));
            }
            else {
                result.push(String.fromCharCode.apply(null, array.subarray(k, Math.min(k + chunk, len))));
            }
            k += chunk;
        }
        catch (e) {
            chunk = Math.floor(chunk / 2);
        }
    }
    return result.join("");
}

exports.applyFromCharCode = arrayLikeToString;


/**
 * Copy the data from an array-like to an other array-like.
 * @param {Array|ArrayBuffer|Uint8Array|Buffer} arrayFrom the origin array.
 * @param {Array|ArrayBuffer|Uint8Array|Buffer} arrayTo the destination array which will be mutated.
 * @return {Array|ArrayBuffer|Uint8Array|Buffer} the updated destination array.
 */
function arrayLikeToArrayLike(arrayFrom, arrayTo) {
    for (var i = 0; i < arrayFrom.length; i++) {
        arrayTo[i] = arrayFrom[i];
    }
    return arrayTo;
}

// a matrix containing functions to transform everything into everything.
var transform = {};

// string to ?
transform["string"] = {
    "string": identity,
    "array": function(input) {
        return stringToArrayLike(input, new Array(input.length));
    },
    "arraybuffer": function(input) {
        return transform["string"]["uint8array"](input).buffer;
    },
    "uint8array": function(input) {
        return stringToArrayLike(input, new Uint8Array(input.length));
    },
    "nodebuffer": function(input) {
        return stringToArrayLike(input, nodeBuffer(input.length));
    }
};

// array to ?
transform["array"] = {
    "string": arrayLikeToString,
    "array": identity,
    "arraybuffer": function(input) {
        return (new Uint8Array(input)).buffer;
    },
    "uint8array": function(input) {
        return new Uint8Array(input);
    },
    "nodebuffer": function(input) {
        return nodeBuffer(input);
    }
};

// arraybuffer to ?
transform["arraybuffer"] = {
    "string": function(input) {
        return arrayLikeToString(new Uint8Array(input));
    },
    "array": function(input) {
        return arrayLikeToArrayLike(new Uint8Array(input), new Array(input.byteLength));
    },
    "arraybuffer": identity,
    "uint8array": function(input) {
        return new Uint8Array(input);
    },
    "nodebuffer": function(input) {
        return nodeBuffer(new Uint8Array(input));
    }
};

// uint8array to ?
transform["uint8array"] = {
    "string": arrayLikeToString,
    "array": function(input) {
        return arrayLikeToArrayLike(input, new Array(input.length));
    },
    "arraybuffer": function(input) {
        return input.buffer;
    },
    "uint8array": identity,
    "nodebuffer": function(input) {
        return nodeBuffer(input);
    }
};

// nodebuffer to ?
transform["nodebuffer"] = {
    "string": arrayLikeToString,
    "array": function(input) {
        return arrayLikeToArrayLike(input, new Array(input.length));
    },
    "arraybuffer": function(input) {
        return transform["nodebuffer"]["uint8array"](input).buffer;
    },
    "uint8array": function(input) {
        return arrayLikeToArrayLike(input, new Uint8Array(input.length));
    },
    "nodebuffer": identity
};

/**
 * Transform an input into any type.
 * The supported output type are : string, array, uint8array, arraybuffer, nodebuffer.
 * If no output type is specified, the unmodified input will be returned.
 * @param {String} outputType the output type.
 * @param {String|Array|ArrayBuffer|Uint8Array|Buffer} input the input to convert.
 * @throws {Error} an Error if the browser doesn't support the requested output type.
 */
exports.transformTo = function(outputType, input) {
    if (!input) {
        // undefined, null, etc
        // an empty string won't harm.
        input = "";
    }
    if (!outputType) {
        return input;
    }
    exports.checkSupport(outputType);
    var inputType = exports.getTypeOf(input);
    var result = transform[inputType][outputType](input);
    return result;
};

/**
 * Return the type of the input.
 * The type will be in a format valid for JSZip.utils.transformTo : string, array, uint8array, arraybuffer.
 * @param {Object} input the input to identify.
 * @return {String} the (lowercase) type of the input.
 */
exports.getTypeOf = function(input) {
    if (typeof input === "string") {
        return "string";
    }
    if (Object.prototype.toString.call(input) === "[object Array]") {
        return "array";
    }
    if (support.nodebuffer && nodeBuffer.test(input)) {
        return "nodebuffer";
    }
    if (support.uint8array && input instanceof Uint8Array) {
        return "uint8array";
    }
    if (support.arraybuffer && input instanceof ArrayBuffer) {
        return "arraybuffer";
    }
};

/**
 * Throw an exception if the type is not supported.
 * @param {String} type the type to check.
 * @throws {Error} an Error if the browser doesn't support the requested type.
 */
exports.checkSupport = function(type) {
    var supported = support[type.toLowerCase()];
    if (!supported) {
        throw new Error(type + " is not supported by this browser");
    }
};
exports.MAX_VALUE_16BITS = 65535;
exports.MAX_VALUE_32BITS = -1; // well, "\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF" is parsed as -1

/**
 * Prettify a string read as binary.
 * @param {string} str the string to prettify.
 * @return {string} a pretty string.
 */
exports.pretty = function(str) {
    var res = '',
        code, i;
    for (i = 0; i < (str || "").length; i++) {
        code = str.charCodeAt(i);
        res += '\\x' + (code < 16 ? "0" : "") + code.toString(16).toUpperCase();
    }
    return res;
};

/**
 * Find a compression registered in JSZip.
 * @param {string} compressionMethod the method magic to find.
 * @return {Object|null} the JSZip compression object, null if none found.
 */
exports.findCompression = function(compressionMethod) {
    for (var method in compressions) {
        if (!compressions.hasOwnProperty(method)) {
            continue;
        }
        if (compressions[method].magic === compressionMethod) {
            return compressions[method];
        }
    }
    return null;
};
/**
* Cross-window, cross-Node-context regular expression detection
* @param  {Object}  object Anything
* @return {Boolean}        true if the object is a regular expression,
* false otherwise
*/
exports.isRegExp = function (object) {
    return Object.prototype.toString.call(object) === "[object RegExp]";
};


},{"./compressions":"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/compressions.js","./nodeBuffer":"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/nodeBuffer.js","./support":"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/support.js"}],"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/zipEntries.js":[function(require,module,exports){
'use strict';
var StringReader = require('./stringReader');
var NodeBufferReader = require('./nodeBufferReader');
var Uint8ArrayReader = require('./uint8ArrayReader');
var utils = require('./utils');
var sig = require('./signature');
var ZipEntry = require('./zipEntry');
var support = require('./support');
var jszipProto = require('./object');
//  class ZipEntries {{{
/**
 * All the entries in the zip file.
 * @constructor
 * @param {String|ArrayBuffer|Uint8Array} data the binary stream to load.
 * @param {Object} loadOptions Options for loading the stream.
 */
function ZipEntries(data, loadOptions) {
    this.files = [];
    this.loadOptions = loadOptions;
    if (data) {
        this.load(data);
    }
}
ZipEntries.prototype = {
    /**
     * Check that the reader is on the speficied signature.
     * @param {string} expectedSignature the expected signature.
     * @throws {Error} if it is an other signature.
     */
    checkSignature: function(expectedSignature) {
        var signature = this.reader.readString(4);
        if (signature !== expectedSignature) {
            throw new Error("Corrupted zip or bug : unexpected signature " + "(" + utils.pretty(signature) + ", expected " + utils.pretty(expectedSignature) + ")");
        }
    },
    /**
     * Read the end of the central directory.
     */
    readBlockEndOfCentral: function() {
        this.diskNumber = this.reader.readInt(2);
        this.diskWithCentralDirStart = this.reader.readInt(2);
        this.centralDirRecordsOnThisDisk = this.reader.readInt(2);
        this.centralDirRecords = this.reader.readInt(2);
        this.centralDirSize = this.reader.readInt(4);
        this.centralDirOffset = this.reader.readInt(4);

        this.zipCommentLength = this.reader.readInt(2);
        // warning : the encoding depends of the system locale
        // On a linux machine with LANG=en_US.utf8, this field is utf8 encoded.
        // On a windows machine, this field is encoded with the localized windows code page.
        this.zipComment = this.reader.readString(this.zipCommentLength);
        // To get consistent behavior with the generation part, we will assume that
        // this is utf8 encoded.
        this.zipComment = jszipProto.utf8decode(this.zipComment);
    },
    /**
     * Read the end of the Zip 64 central directory.
     * Not merged with the method readEndOfCentral :
     * The end of central can coexist with its Zip64 brother,
     * I don't want to read the wrong number of bytes !
     */
    readBlockZip64EndOfCentral: function() {
        this.zip64EndOfCentralSize = this.reader.readInt(8);
        this.versionMadeBy = this.reader.readString(2);
        this.versionNeeded = this.reader.readInt(2);
        this.diskNumber = this.reader.readInt(4);
        this.diskWithCentralDirStart = this.reader.readInt(4);
        this.centralDirRecordsOnThisDisk = this.reader.readInt(8);
        this.centralDirRecords = this.reader.readInt(8);
        this.centralDirSize = this.reader.readInt(8);
        this.centralDirOffset = this.reader.readInt(8);

        this.zip64ExtensibleData = {};
        var extraDataSize = this.zip64EndOfCentralSize - 44,
            index = 0,
            extraFieldId,
            extraFieldLength,
            extraFieldValue;
        while (index < extraDataSize) {
            extraFieldId = this.reader.readInt(2);
            extraFieldLength = this.reader.readInt(4);
            extraFieldValue = this.reader.readString(extraFieldLength);
            this.zip64ExtensibleData[extraFieldId] = {
                id: extraFieldId,
                length: extraFieldLength,
                value: extraFieldValue
            };
        }
    },
    /**
     * Read the end of the Zip 64 central directory locator.
     */
    readBlockZip64EndOfCentralLocator: function() {
        this.diskWithZip64CentralDirStart = this.reader.readInt(4);
        this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8);
        this.disksCount = this.reader.readInt(4);
        if (this.disksCount > 1) {
            throw new Error("Multi-volumes zip are not supported");
        }
    },
    /**
     * Read the local files, based on the offset read in the central part.
     */
    readLocalFiles: function() {
        var i, file;
        for (i = 0; i < this.files.length; i++) {
            file = this.files[i];
            this.reader.setIndex(file.localHeaderOffset);
            this.checkSignature(sig.LOCAL_FILE_HEADER);
            file.readLocalPart(this.reader);
            file.handleUTF8();
        }
    },
    /**
     * Read the central directory.
     */
    readCentralDir: function() {
        var file;

        this.reader.setIndex(this.centralDirOffset);
        while (this.reader.readString(4) === sig.CENTRAL_FILE_HEADER) {
            file = new ZipEntry({
                zip64: this.zip64
            }, this.loadOptions);
            file.readCentralPart(this.reader);
            this.files.push(file);
        }
    },
    /**
     * Read the end of central directory.
     */
    readEndOfCentral: function() {
        var offset = this.reader.lastIndexOfSignature(sig.CENTRAL_DIRECTORY_END);
        if (offset === -1) {
            throw new Error("Corrupted zip : can't find end of central directory");
        }
        this.reader.setIndex(offset);
        this.checkSignature(sig.CENTRAL_DIRECTORY_END);
        this.readBlockEndOfCentral();


        /* extract from the zip spec :
            4)  If one of the fields in the end of central directory
                record is too small to hold required data, the field
                should be set to -1 (0xFFFF or 0xFFFFFFFF) and the
                ZIP64 format record should be created.
            5)  The end of central directory record and the
                Zip64 end of central directory locator record must
                reside on the same disk when splitting or spanning
                an archive.
         */
        if (this.diskNumber === utils.MAX_VALUE_16BITS || this.diskWithCentralDirStart === utils.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === utils.MAX_VALUE_16BITS || this.centralDirRecords === utils.MAX_VALUE_16BITS || this.centralDirSize === utils.MAX_VALUE_32BITS || this.centralDirOffset === utils.MAX_VALUE_32BITS) {
            this.zip64 = true;

            /*
            Warning : the zip64 extension is supported, but ONLY if the 64bits integer read from
            the zip file can fit into a 32bits integer. This cannot be solved : Javascript represents
            all numbers as 64-bit double precision IEEE 754 floating point numbers.
            So, we have 53bits for integers and bitwise operations treat everything as 32bits.
            see https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators/Bitwise_Operators
            and http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf section 8.5
            */

            // should look for a zip64 EOCD locator
            offset = this.reader.lastIndexOfSignature(sig.ZIP64_CENTRAL_DIRECTORY_LOCATOR);
            if (offset === -1) {
                throw new Error("Corrupted zip : can't find the ZIP64 end of central directory locator");
            }
            this.reader.setIndex(offset);
            this.checkSignature(sig.ZIP64_CENTRAL_DIRECTORY_LOCATOR);
            this.readBlockZip64EndOfCentralLocator();

            // now the zip64 EOCD record
            this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir);
            this.checkSignature(sig.ZIP64_CENTRAL_DIRECTORY_END);
            this.readBlockZip64EndOfCentral();
        }
    },
    prepareReader: function(data) {
        var type = utils.getTypeOf(data);
        if (type === "string" && !support.uint8array) {
            this.reader = new StringReader(data, this.loadOptions.optimizedBinaryString);
        }
        else if (type === "nodebuffer") {
            this.reader = new NodeBufferReader(data);
        }
        else {
            this.reader = new Uint8ArrayReader(utils.transformTo("uint8array", data));
        }
    },
    /**
     * Read a zip file and create ZipEntries.
     * @param {String|ArrayBuffer|Uint8Array|Buffer} data the binary string representing a zip file.
     */
    load: function(data) {
        this.prepareReader(data);
        this.readEndOfCentral();
        this.readCentralDir();
        this.readLocalFiles();
    }
};
// }}} end of ZipEntries
module.exports = ZipEntries;

},{"./nodeBufferReader":"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/nodeBufferReader.js","./object":"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/object.js","./signature":"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/signature.js","./stringReader":"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/stringReader.js","./support":"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/support.js","./uint8ArrayReader":"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/uint8ArrayReader.js","./utils":"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/utils.js","./zipEntry":"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/zipEntry.js"}],"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/zipEntry.js":[function(require,module,exports){
'use strict';
var StringReader = require('./stringReader');
var utils = require('./utils');
var CompressedObject = require('./compressedObject');
var jszipProto = require('./object');
// class ZipEntry {{{
/**
 * An entry in the zip file.
 * @constructor
 * @param {Object} options Options of the current file.
 * @param {Object} loadOptions Options for loading the stream.
 */
function ZipEntry(options, loadOptions) {
    this.options = options;
    this.loadOptions = loadOptions;
}
ZipEntry.prototype = {
    /**
     * say if the file is encrypted.
     * @return {boolean} true if the file is encrypted, false otherwise.
     */
    isEncrypted: function() {
        // bit 1 is set
        return (this.bitFlag & 0x0001) === 0x0001;
    },
    /**
     * say if the file has utf-8 filename/comment.
     * @return {boolean} true if the filename/comment is in utf-8, false otherwise.
     */
    useUTF8: function() {
        // bit 11 is set
        return (this.bitFlag & 0x0800) === 0x0800;
    },
    /**
     * Prepare the function used to generate the compressed content from this ZipFile.
     * @param {DataReader} reader the reader to use.
     * @param {number} from the offset from where we should read the data.
     * @param {number} length the length of the data to read.
     * @return {Function} the callback to get the compressed content (the type depends of the DataReader class).
     */
    prepareCompressedContent: function(reader, from, length) {
        return function() {
            var previousIndex = reader.index;
            reader.setIndex(from);
            var compressedFileData = reader.readData(length);
            reader.setIndex(previousIndex);

            return compressedFileData;
        };
    },
    /**
     * Prepare the function used to generate the uncompressed content from this ZipFile.
     * @param {DataReader} reader the reader to use.
     * @param {number} from the offset from where we should read the data.
     * @param {number} length the length of the data to read.
     * @param {JSZip.compression} compression the compression used on this file.
     * @param {number} uncompressedSize the uncompressed size to expect.
     * @return {Function} the callback to get the uncompressed content (the type depends of the DataReader class).
     */
    prepareContent: function(reader, from, length, compression, uncompressedSize) {
        return function() {

            var compressedFileData = utils.transformTo(compression.uncompressInputType, this.getCompressedContent());
            var uncompressedFileData = compression.uncompress(compressedFileData);

            if (uncompressedFileData.length !== uncompressedSize) {
                throw new Error("Bug : uncompressed data size mismatch");
            }

            return uncompressedFileData;
        };
    },
    /**
     * Read the local part of a zip file and add the info in this object.
     * @param {DataReader} reader the reader to use.
     */
    readLocalPart: function(reader) {
        var compression, localExtraFieldsLength;

        // we already know everything from the central dir !
        // If the central dir data are false, we are doomed.
        // On the bright side, the local part is scary  : zip64, data descriptors, both, etc.
        // The less data we get here, the more reliable this should be.
        // Let's skip the whole header and dash to the data !
        reader.skip(22);
        // in some zip created on windows, the filename stored in the central dir contains \ instead of /.
        // Strangely, the filename here is OK.
        // I would love to treat these zip files as corrupted (see http://www.info-zip.org/FAQ.html#backslashes
        // or APPNOTE#4.4.17.1, "All slashes MUST be forward slashes '/'") but there are a lot of bad zip generators...
        // Search "unzip mismatching "local" filename continuing with "central" filename version" on
        // the internet.
        //
        // I think I see the logic here : the central directory is used to display
        // content and the local directory is used to extract the files. Mixing / and \
        // may be used to display \ to windows users and use / when extracting the files.
        // Unfortunately, this lead also to some issues : http://seclists.org/fulldisclosure/2009/Sep/394
        this.fileNameLength = reader.readInt(2);
        localExtraFieldsLength = reader.readInt(2); // can't be sure this will be the same as the central dir
        this.fileName = reader.readString(this.fileNameLength);
        reader.skip(localExtraFieldsLength);

        if (this.compressedSize == -1 || this.uncompressedSize == -1) {
            throw new Error("Bug or corrupted zip : didn't get enough informations from the central directory " + "(compressedSize == -1 || uncompressedSize == -1)");
        }

        compression = utils.findCompression(this.compressionMethod);
        if (compression === null) { // no compression found
            throw new Error("Corrupted zip : compression " + utils.pretty(this.compressionMethod) + " unknown (inner file : " + this.fileName + ")");
        }
        this.decompressed = new CompressedObject();
        this.decompressed.compressedSize = this.compressedSize;
        this.decompressed.uncompressedSize = this.uncompressedSize;
        this.decompressed.crc32 = this.crc32;
        this.decompressed.compressionMethod = this.compressionMethod;
        this.decompressed.getCompressedContent = this.prepareCompressedContent(reader, reader.index, this.compressedSize, compression);
        this.decompressed.getContent = this.prepareContent(reader, reader.index, this.compressedSize, compression, this.uncompressedSize);

        // we need to compute the crc32...
        if (this.loadOptions.checkCRC32) {
            this.decompressed = utils.transformTo("string", this.decompressed.getContent());
            if (jszipProto.crc32(this.decompressed) !== this.crc32) {
                throw new Error("Corrupted zip : CRC32 mismatch");
            }
        }
    },

    /**
     * Read the central part of a zip file and add the info in this object.
     * @param {DataReader} reader the reader to use.
     */
    readCentralPart: function(reader) {
        this.versionMadeBy = reader.readString(2);
        this.versionNeeded = reader.readInt(2);
        this.bitFlag = reader.readInt(2);
        this.compressionMethod = reader.readString(2);
        this.date = reader.readDate();
        this.crc32 = reader.readInt(4);
        this.compressedSize = reader.readInt(4);
        this.uncompressedSize = reader.readInt(4);
        this.fileNameLength = reader.readInt(2);
        this.extraFieldsLength = reader.readInt(2);
        this.fileCommentLength = reader.readInt(2);
        this.diskNumberStart = reader.readInt(2);
        this.internalFileAttributes = reader.readInt(2);
        this.externalFileAttributes = reader.readInt(4);
        this.localHeaderOffset = reader.readInt(4);

        if (this.isEncrypted()) {
            throw new Error("Encrypted zip are not supported");
        }

        this.fileName = reader.readString(this.fileNameLength);
        this.readExtraFields(reader);
        this.parseZIP64ExtraField(reader);
        this.fileComment = reader.readString(this.fileCommentLength);

        // warning, this is true only for zip with madeBy == DOS (plateform dependent feature)
        this.dir = this.externalFileAttributes & 0x00000010 ? true : false;
    },
    /**
     * Parse the ZIP64 extra field and merge the info in the current ZipEntry.
     * @param {DataReader} reader the reader to use.
     */
    parseZIP64ExtraField: function(reader) {

        if (!this.extraFields[0x0001]) {
            return;
        }

        // should be something, preparing the extra reader
        var extraReader = new StringReader(this.extraFields[0x0001].value);

        // I really hope that these 64bits integer can fit in 32 bits integer, because js
        // won't let us have more.
        if (this.uncompressedSize === utils.MAX_VALUE_32BITS) {
            this.uncompressedSize = extraReader.readInt(8);
        }
        if (this.compressedSize === utils.MAX_VALUE_32BITS) {
            this.compressedSize = extraReader.readInt(8);
        }
        if (this.localHeaderOffset === utils.MAX_VALUE_32BITS) {
            this.localHeaderOffset = extraReader.readInt(8);
        }
        if (this.diskNumberStart === utils.MAX_VALUE_32BITS) {
            this.diskNumberStart = extraReader.readInt(4);
        }
    },
    /**
     * Read the central part of a zip file and add the info in this object.
     * @param {DataReader} reader the reader to use.
     */
    readExtraFields: function(reader) {
        var start = reader.index,
            extraFieldId,
            extraFieldLength,
            extraFieldValue;

        this.extraFields = this.extraFields || {};

        while (reader.index < start + this.extraFieldsLength) {
            extraFieldId = reader.readInt(2);
            extraFieldLength = reader.readInt(2);
            extraFieldValue = reader.readString(extraFieldLength);

            this.extraFields[extraFieldId] = {
                id: extraFieldId,
                length: extraFieldLength,
                value: extraFieldValue
            };
        }
    },
    /**
     * Apply an UTF8 transformation if needed.
     */
    handleUTF8: function() {
        if (this.useUTF8()) {
            this.fileName = jszipProto.utf8decode(this.fileName);
            this.fileComment = jszipProto.utf8decode(this.fileComment);
        } else {
            var upath = this.findExtraFieldUnicodePath();
            if (upath !== null) {
                this.fileName = upath;
            }
            var ucomment = this.findExtraFieldUnicodeComment();
            if (ucomment !== null) {
                this.fileComment = ucomment;
            }
        }
    },

    /**
     * Find the unicode path declared in the extra field, if any.
     * @return {String} the unicode path, null otherwise.
     */
    findExtraFieldUnicodePath: function() {
        var upathField = this.extraFields[0x7075];
        if (upathField) {
            var extraReader = new StringReader(upathField.value);

            // wrong version
            if (extraReader.readInt(1) !== 1) {
                return null;
            }

            // the crc of the filename changed, this field is out of date.
            if (jszipProto.crc32(this.fileName) !== extraReader.readInt(4)) {
                return null;
            }

            return jszipProto.utf8decode(extraReader.readString(upathField.length - 5));
        }
        return null;
    },

    /**
     * Find the unicode comment declared in the extra field, if any.
     * @return {String} the unicode comment, null otherwise.
     */
    findExtraFieldUnicodeComment: function() {
        var ucommentField = this.extraFields[0x6375];
        if (ucommentField) {
            var extraReader = new StringReader(ucommentField.value);

            // wrong version
            if (extraReader.readInt(1) !== 1) {
                return null;
            }

            // the crc of the comment changed, this field is out of date.
            if (jszipProto.crc32(this.fileComment) !== extraReader.readInt(4)) {
                return null;
            }

            return jszipProto.utf8decode(extraReader.readString(ucommentField.length - 5));
        }
        return null;
    }
};
module.exports = ZipEntry;

},{"./compressedObject":"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/compressedObject.js","./object":"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/object.js","./stringReader":"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/stringReader.js","./utils":"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/utils.js"}],"/home/zefanja/Projekte/common-sword/node_modules/jszip/node_modules/pako/index.js":[function(require,module,exports){
// Top level file is just a mixin of submodules & constants
'use strict';

var assign    = require('./lib/utils/common').assign;

var deflate   = require('./lib/deflate');
var inflate   = require('./lib/inflate');
var constants = require('./lib/zlib/constants');

var pako = {};

assign(pako, deflate, inflate, constants);

module.exports = pako;
},{"./lib/deflate":"/home/zefanja/Projekte/common-sword/node_modules/jszip/node_modules/pako/lib/deflate.js","./lib/inflate":"/home/zefanja/Projekte/common-sword/node_modules/jszip/node_modules/pako/lib/inflate.js","./lib/utils/common":"/home/zefanja/Projekte/common-sword/node_modules/jszip/node_modules/pako/lib/utils/common.js","./lib/zlib/constants":"/home/zefanja/Projekte/common-sword/node_modules/jszip/node_modules/pako/lib/zlib/constants.js"}],"/home/zefanja/Projekte/common-sword/node_modules/jszip/node_modules/pako/lib/deflate.js":[function(require,module,exports){
'use strict';


var zlib_deflate = require('./zlib/deflate.js');
var utils = require('./utils/common');
var strings = require('./utils/strings');
var msg = require('./zlib/messages');
var zstream = require('./zlib/zstream');


/* Public constants ==========================================================*/
/* ===========================================================================*/

var Z_NO_FLUSH      = 0;
var Z_FINISH        = 4;

var Z_OK            = 0;
var Z_STREAM_END    = 1;

var Z_DEFAULT_COMPRESSION = -1;

var Z_DEFAULT_STRATEGY    = 0;

var Z_DEFLATED  = 8;

/* ===========================================================================*/


/**
 * class Deflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[deflate]],
 * [[deflateRaw]] and [[gzip]].
 **/

/* internal
 * Deflate.chunks -> Array
 *
 * Chunks of output data, if [[Deflate#onData]] not overriden.
 **/

/**
 * Deflate.result -> Uint8Array|Array
 *
 * Compressed result, generated by default [[Deflate#onData]]
 * and [[Deflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Deflate#push]] with `Z_FINISH` / `true` param).
 **/

/**
 * Deflate.err -> Number
 *
 * Error code after deflate finished. 0 (Z_OK) on success.
 * You will not need it in real life, because deflate errors
 * are possible only on wrong options or bad `onData` / `onEnd`
 * custom handlers.
 **/

/**
 * Deflate.msg -> String
 *
 * Error message, if [[Deflate.err]] != 0
 **/


/**
 * new Deflate(options)
 * - options (Object): zlib deflate options.
 *
 * Creates new deflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `level`
 * - `windowBits`
 * - `memLevel`
 * - `strategy`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw deflate
 * - `gzip` (Boolean) - create gzip wrapper
 * - `to` (String) - if equal to 'string', then result will be "binary string"
 *    (each char code [0..255])
 * - `header` (Object) - custom header for gzip
 *   - `text` (Boolean) - true if compressed data believed to be text
 *   - `time` (Number) - modification time, unix timestamp
 *   - `os` (Number) - operation system code
 *   - `extra` (Array) - array of bytes with extra data (max 65536)
 *   - `name` (String) - file name (binary string)
 *   - `comment` (String) - comment (binary string)
 *   - `hcrc` (Boolean) - true if header crc should be added
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , chunk1 = Uint8Array([1,2,3,4,5,6,7,8,9])
 *   , chunk2 = Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * var deflate = new pako.Deflate({ level: 3});
 *
 * deflate.push(chunk1, false);
 * deflate.push(chunk2, true);  // true -> last chunk
 *
 * if (deflate.err) { throw new Error(deflate.err); }
 *
 * console.log(deflate.result);
 * ```
 **/
var Deflate = function(options) {

  this.options = utils.assign({
    level: Z_DEFAULT_COMPRESSION,
    method: Z_DEFLATED,
    chunkSize: 16384,
    windowBits: 15,
    memLevel: 8,
    strategy: Z_DEFAULT_STRATEGY,
    to: ''
  }, options || {});

  var opt = this.options;

  if (opt.raw && (opt.windowBits > 0)) {
    opt.windowBits = -opt.windowBits;
  }

  else if (opt.gzip && (opt.windowBits > 0) && (opt.windowBits < 16)) {
    opt.windowBits += 16;
  }

  this.err    = 0;      // error code, if happens (0 = Z_OK)
  this.msg    = '';     // error message
  this.ended  = false;  // used to avoid multiple onEnd() calls
  this.chunks = [];     // chunks of compressed data

  this.strm = new zstream();
  this.strm.avail_out = 0;

  var status = zlib_deflate.deflateInit2(
    this.strm,
    opt.level,
    opt.method,
    opt.windowBits,
    opt.memLevel,
    opt.strategy
  );

  if (status !== Z_OK) {
    throw new Error(msg[status]);
  }

  if (opt.header) {
    zlib_deflate.deflateSetHeader(this.strm, opt.header);
  }
};

/**
 * Deflate#push(data[, mode]) -> Boolean
 * - data (Uint8Array|Array|String): input data. Strings will be converted to
 *   utf8 byte sequence.
 * - mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
 *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` meansh Z_FINISH.
 *
 * Sends input data to deflate pipe, generating [[Deflate#onData]] calls with
 * new compressed chunks. Returns `true` on success. The last data block must have
 * mode Z_FINISH (or `true`). That flush internal pending buffers and call
 * [[Deflate#onEnd]].
 *
 * On fail call [[Deflate#onEnd]] with error code and return false.
 *
 * We strongly recommend to use `Uint8Array` on input for best speed (output
 * array format is detected automatically). Also, don't skip last param and always
 * use the same type in your code (boolean or number). That will improve JS speed.
 *
 * For regular `Array`-s make sure all elements are [0..255].
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/
Deflate.prototype.push = function(data, mode) {
  var strm = this.strm;
  var chunkSize = this.options.chunkSize;
  var status, _mode;

  if (this.ended) { return false; }

  _mode = (mode === ~~mode) ? mode : ((mode === true) ? Z_FINISH : Z_NO_FLUSH);

  // Convert data if needed
  if (typeof data === 'string') {
    // If we need to compress text, change encoding to utf8.
    strm.input = strings.string2buf(data);
  } else {
    strm.input = data;
  }

  strm.next_in = 0;
  strm.avail_in = strm.input.length;

  do {
    if (strm.avail_out === 0) {
      strm.output = new utils.Buf8(chunkSize);
      strm.next_out = 0;
      strm.avail_out = chunkSize;
    }
    status = zlib_deflate.deflate(strm, _mode);    /* no bad return value */

    if (status !== Z_STREAM_END && status !== Z_OK) {
      this.onEnd(status);
      this.ended = true;
      return false;
    }
    if (strm.avail_out === 0 || (strm.avail_in === 0 && _mode === Z_FINISH)) {
      if (this.options.to === 'string') {
        this.onData(strings.buf2binstring(utils.shrinkBuf(strm.output, strm.next_out)));
      } else {
        this.onData(utils.shrinkBuf(strm.output, strm.next_out));
      }
    }
  } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== Z_STREAM_END);

  // Finalize on the last chunk.
  if (_mode === Z_FINISH) {
    status = zlib_deflate.deflateEnd(this.strm);
    this.onEnd(status);
    this.ended = true;
    return status === Z_OK;
  }

  return true;
};


/**
 * Deflate#onData(chunk) -> Void
 * - chunk (Uint8Array|Array|String): ouput data. Type of array depends
 *   on js engine support. When string output requested, each chunk
 *   will be string.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/
Deflate.prototype.onData = function(chunk) {
  this.chunks.push(chunk);
};


/**
 * Deflate#onEnd(status) -> Void
 * - status (Number): deflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called once after you tell deflate that input stream complete
 * or error happenned. By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/
Deflate.prototype.onEnd = function(status) {
  // On success - join
  if (status === Z_OK) {
    if (this.options.to === 'string') {
      this.result = this.chunks.join('');
    } else {
      this.result = utils.flattenChunks(this.chunks);
    }
  }
  this.chunks = [];
  this.err = status;
  this.msg = this.strm.msg;
};


/**
 * deflate(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * Compress `data` with deflate alrorythm and `options`.
 *
 * Supported options are:
 *
 * - level
 * - windowBits
 * - memLevel
 * - strategy
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Sugar (options):
 *
 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 * - `to` (String) - if equal to 'string', then result will be "binary string"
 *    (each char code [0..255])
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , data = Uint8Array([1,2,3,4,5,6,7,8,9]);
 *
 * console.log(pako.deflate(data));
 * ```
 **/
function deflate(input, options) {
  var deflator = new Deflate(options);

  deflator.push(input, true);

  // That will never happens, if you don't cheat with options :)
  if (deflator.err) { throw deflator.msg; }

  return deflator.result;
}


/**
 * deflateRaw(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * The same as [[deflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/
function deflateRaw(input, options) {
  options = options || {};
  options.raw = true;
  return deflate(input, options);
}


/**
 * gzip(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * The same as [[deflate]], but create gzip wrapper instead of
 * deflate one.
 **/
function gzip(input, options) {
  options = options || {};
  options.gzip = true;
  return deflate(input, options);
}


exports.Deflate = Deflate;
exports.deflate = deflate;
exports.deflateRaw = deflateRaw;
exports.gzip = gzip;
},{"./utils/common":"/home/zefanja/Projekte/common-sword/node_modules/jszip/node_modules/pako/lib/utils/common.js","./utils/strings":"/home/zefanja/Projekte/common-sword/node_modules/jszip/node_modules/pako/lib/utils/strings.js","./zlib/deflate.js":"/home/zefanja/Projekte/common-sword/node_modules/jszip/node_modules/pako/lib/zlib/deflate.js","./zlib/messages":"/home/zefanja/Projekte/common-sword/node_modules/jszip/node_modules/pako/lib/zlib/messages.js","./zlib/zstream":"/home/zefanja/Projekte/common-sword/node_modules/jszip/node_modules/pako/lib/zlib/zstream.js"}],"/home/zefanja/Projekte/common-sword/node_modules/jszip/node_modules/pako/lib/inflate.js":[function(require,module,exports){
'use strict';


var zlib_inflate = require('./zlib/inflate.js');
var utils = require('./utils/common');
var strings = require('./utils/strings');
var c = require('./zlib/constants');
var msg = require('./zlib/messages');
var zstream = require('./zlib/zstream');
var gzheader = require('./zlib/gzheader');


/**
 * class Inflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[inflate]]
 * and [[inflateRaw]].
 **/

/* internal
 * inflate.chunks -> Array
 *
 * Chunks of output data, if [[Inflate#onData]] not overriden.
 **/

/**
 * Inflate.result -> Uint8Array|Array|String
 *
 * Uncompressed result, generated by default [[Inflate#onData]]
 * and [[Inflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Inflate#push]] with `Z_FINISH` / `true` param).
 **/

/**
 * Inflate.err -> Number
 *
 * Error code after inflate finished. 0 (Z_OK) on success.
 * Should be checked if broken data possible.
 **/

/**
 * Inflate.msg -> String
 *
 * Error message, if [[Inflate.err]] != 0
 **/


/**
 * new Inflate(options)
 * - options (Object): zlib inflate options.
 *
 * Creates new inflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `windowBits`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw inflate
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 * By default, when no options set, autodetect deflate/gzip data format via
 * wrapper header.
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , chunk1 = Uint8Array([1,2,3,4,5,6,7,8,9])
 *   , chunk2 = Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * var inflate = new pako.Inflate({ level: 3});
 *
 * inflate.push(chunk1, false);
 * inflate.push(chunk2, true);  // true -> last chunk
 *
 * if (inflate.err) { throw new Error(inflate.err); }
 *
 * console.log(inflate.result);
 * ```
 **/
var Inflate = function(options) {

  this.options = utils.assign({
    chunkSize: 16384,
    windowBits: 0,
    to: ''
  }, options || {});

  var opt = this.options;

  // Force window size for `raw` data, if not set directly,
  // because we have no header for autodetect.
  if (opt.raw && (opt.windowBits >= 0) && (opt.windowBits < 16)) {
    opt.windowBits = -opt.windowBits;
    if (opt.windowBits === 0) { opt.windowBits = -15; }
  }

  // If `windowBits` not defined (and mode not raw) - set autodetect flag for gzip/deflate
  if ((opt.windowBits >= 0) && (opt.windowBits < 16) &&
      !(options && options.windowBits)) {
    opt.windowBits += 32;
  }

  // Gzip header has no info about windows size, we can do autodetect only
  // for deflate. So, if window size not set, force it to max when gzip possible
  if ((opt.windowBits > 15) && (opt.windowBits < 48)) {
    // bit 3 (16) -> gzipped data
    // bit 4 (32) -> autodetect gzip/deflate
    if ((opt.windowBits & 15) === 0) {
      opt.windowBits |= 15;
    }
  }

  this.err    = 0;      // error code, if happens (0 = Z_OK)
  this.msg    = '';     // error message
  this.ended  = false;  // used to avoid multiple onEnd() calls
  this.chunks = [];     // chunks of compressed data

  this.strm   = new zstream();
  this.strm.avail_out = 0;

  var status  = zlib_inflate.inflateInit2(
    this.strm,
    opt.windowBits
  );

  if (status !== c.Z_OK) {
    throw new Error(msg[status]);
  }

  this.header = new gzheader();

  zlib_inflate.inflateGetHeader(this.strm, this.header);
};

/**
 * Inflate#push(data[, mode]) -> Boolean
 * - data (Uint8Array|Array|String): input data
 * - mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
 *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` meansh Z_FINISH.
 *
 * Sends input data to inflate pipe, generating [[Inflate#onData]] calls with
 * new output chunks. Returns `true` on success. The last data block must have
 * mode Z_FINISH (or `true`). That flush internal pending buffers and call
 * [[Inflate#onEnd]].
 *
 * On fail call [[Inflate#onEnd]] with error code and return false.
 *
 * We strongly recommend to use `Uint8Array` on input for best speed (output
 * format is detected automatically). Also, don't skip last param and always
 * use the same type in your code (boolean or number). That will improve JS speed.
 *
 * For regular `Array`-s make sure all elements are [0..255].
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/
Inflate.prototype.push = function(data, mode) {
  var strm = this.strm;
  var chunkSize = this.options.chunkSize;
  var status, _mode;
  var next_out_utf8, tail, utf8str;

  if (this.ended) { return false; }
  _mode = (mode === ~~mode) ? mode : ((mode === true) ? c.Z_FINISH : c.Z_NO_FLUSH);

  // Convert data if needed
  if (typeof data === 'string') {
    // Only binary strings can be decompressed on practice
    strm.input = strings.binstring2buf(data);
  } else {
    strm.input = data;
  }

  strm.next_in = 0;
  strm.avail_in = strm.input.length;

  do {
    if (strm.avail_out === 0) {
      strm.output = new utils.Buf8(chunkSize);
      strm.next_out = 0;
      strm.avail_out = chunkSize;
    }

    status = zlib_inflate.inflate(strm, c.Z_NO_FLUSH);    /* no bad return value */

    if (status !== c.Z_STREAM_END && status !== c.Z_OK) {
      this.onEnd(status);
      this.ended = true;
      return false;
    }

    if (strm.next_out) {
      if (strm.avail_out === 0 || status === c.Z_STREAM_END || (strm.avail_in === 0 && _mode === c.Z_FINISH)) {

        if (this.options.to === 'string') {

          next_out_utf8 = strings.utf8border(strm.output, strm.next_out);

          tail = strm.next_out - next_out_utf8;
          utf8str = strings.buf2string(strm.output, next_out_utf8);

          // move tail
          strm.next_out = tail;
          strm.avail_out = chunkSize - tail;
          if (tail) { utils.arraySet(strm.output, strm.output, next_out_utf8, tail, 0); }

          this.onData(utf8str);

        } else {
          this.onData(utils.shrinkBuf(strm.output, strm.next_out));
        }
      }
    }
  } while ((strm.avail_in > 0) && status !== c.Z_STREAM_END);

  if (status === c.Z_STREAM_END) {
    _mode = c.Z_FINISH;
  }
  // Finalize on the last chunk.
  if (_mode === c.Z_FINISH) {
    status = zlib_inflate.inflateEnd(this.strm);
    this.onEnd(status);
    this.ended = true;
    return status === c.Z_OK;
  }

  return true;
};


/**
 * Inflate#onData(chunk) -> Void
 * - chunk (Uint8Array|Array|String): ouput data. Type of array depends
 *   on js engine support. When string output requested, each chunk
 *   will be string.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/
Inflate.prototype.onData = function(chunk) {
  this.chunks.push(chunk);
};


/**
 * Inflate#onEnd(status) -> Void
 * - status (Number): inflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called once after you tell inflate that input stream complete
 * or error happenned. By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/
Inflate.prototype.onEnd = function(status) {
  // On success - join
  if (status === c.Z_OK) {
    if (this.options.to === 'string') {
      // Glue & convert here, until we teach pako to send
      // utf8 alligned strings to onData
      this.result = this.chunks.join('');
    } else {
      this.result = utils.flattenChunks(this.chunks);
    }
  }
  this.chunks = [];
  this.err = status;
  this.msg = this.strm.msg;
};


/**
 * inflate(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Decompress `data` with inflate/ungzip and `options`. Autodetect
 * format via wrapper header by default. That's why we don't provide
 * separate `ungzip` method.
 *
 * Supported options are:
 *
 * - windowBits
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information.
 *
 * Sugar (options):
 *
 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , input = pako.deflate([1,2,3,4,5,6,7,8,9])
 *   , output;
 *
 * try {
 *   output = pako.inflate(input);
 * } catch (err)
 *   console.log(err);
 * }
 * ```
 **/
function inflate(input, options) {
  var inflator = new Inflate(options);

  inflator.push(input, true);

  // That will never happens, if you don't cheat with options :)
  if (inflator.err) { throw inflator.msg; }

  return inflator.result;
}


/**
 * inflateRaw(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * The same as [[inflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/
function inflateRaw(input, options) {
  options = options || {};
  options.raw = true;
  return inflate(input, options);
}


/**
 * ungzip(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Just shortcut to [[inflate]], because it autodetects format
 * by header.content. Done for convenience.
 **/


exports.Inflate = Inflate;
exports.inflate = inflate;
exports.inflateRaw = inflateRaw;
exports.ungzip  = inflate;

},{"./utils/common":"/home/zefanja/Projekte/common-sword/node_modules/jszip/node_modules/pako/lib/utils/common.js","./utils/strings":"/home/zefanja/Projekte/common-sword/node_modules/jszip/node_modules/pako/lib/utils/strings.js","./zlib/constants":"/home/zefanja/Projekte/common-sword/node_modules/jszip/node_modules/pako/lib/zlib/constants.js","./zlib/gzheader":"/home/zefanja/Projekte/common-sword/node_modules/jszip/node_modules/pako/lib/zlib/gzheader.js","./zlib/inflate.js":"/home/zefanja/Projekte/common-sword/node_modules/jszip/node_modules/pako/lib/zlib/inflate.js","./zlib/messages":"/home/zefanja/Projekte/common-sword/node_modules/jszip/node_modules/pako/lib/zlib/messages.js","./zlib/zstream":"/home/zefanja/Projekte/common-sword/node_modules/jszip/node_modules/pako/lib/zlib/zstream.js"}],"/home/zefanja/Projekte/common-sword/node_modules/jszip/node_modules/pako/lib/utils/common.js":[function(require,module,exports){
'use strict';


var TYPED_OK =  (typeof Uint8Array !== 'undefined') &&
                (typeof Uint16Array !== 'undefined') &&
                (typeof Int32Array !== 'undefined');


exports.assign = function (obj /*from1, from2, from3, ...*/) {
  var sources = Array.prototype.slice.call(arguments, 1);
  while (sources.length) {
    var source = sources.shift();
    if (!source) { continue; }

    if (typeof(source) !== 'object') {
      throw new TypeError(source + 'must be non-object');
    }

    for (var p in source) {
      if (source.hasOwnProperty(p)) {
        obj[p] = source[p];
      }
    }
  }

  return obj;
};


// reduce buffer size, avoiding mem copy
exports.shrinkBuf = function (buf, size) {
  if (buf.length === size) { return buf; }
  if (buf.subarray) { return buf.subarray(0, size); }
  buf.length = size;
  return buf;
};


var fnTyped = {
  arraySet: function (dest, src, src_offs, len, dest_offs) {
    if (src.subarray && dest.subarray) {
      dest.set(src.subarray(src_offs, src_offs+len), dest_offs);
      return;
    }
    // Fallback to ordinary array
    for(var i=0; i<len; i++) {
      dest[dest_offs + i] = src[src_offs + i];
    }
  },
  // Join array of chunks to single array.
  flattenChunks: function(chunks) {
    var i, l, len, pos, chunk, result;

    // calculate data length
    len = 0;
    for (i=0, l=chunks.length; i<l; i++) {
      len += chunks[i].length;
    }

    // join chunks
    result = new Uint8Array(len);
    pos = 0;
    for (i=0, l=chunks.length; i<l; i++) {
      chunk = chunks[i];
      result.set(chunk, pos);
      pos += chunk.length;
    }

    return result;
  }
};

var fnUntyped = {
  arraySet: function (dest, src, src_offs, len, dest_offs) {
    for(var i=0; i<len; i++) {
      dest[dest_offs + i] = src[src_offs + i];
    }
  },
  // Join array of chunks to single array.
  flattenChunks: function(chunks) {
    return [].concat.apply([], chunks);
  }
};


// Enable/Disable typed arrays use, for testing
//
exports.setTyped = function (on) {
  if (on) {
    exports.Buf8  = Uint8Array;
    exports.Buf16 = Uint16Array;
    exports.Buf32 = Int32Array;
    exports.assign(exports, fnTyped);
  } else {
    exports.Buf8  = Array;
    exports.Buf16 = Array;
    exports.Buf32 = Array;
    exports.assign(exports, fnUntyped);
  }
};

exports.setTyped(TYPED_OK);
},{}],"/home/zefanja/Projekte/common-sword/node_modules/jszip/node_modules/pako/lib/utils/strings.js":[function(require,module,exports){
// String encode/decode helpers
'use strict';


var utils = require('./common');


// Quick check if we can use fast array to bin string conversion
//
// - apply(Array) can fail on Android 2.2
// - apply(Uint8Array) can fail on iOS 5.1 Safary
//
var STR_APPLY_OK = true;
var STR_APPLY_UIA_OK = true;

try { String.fromCharCode.apply(null, [0]); } catch(__) { STR_APPLY_OK = false; }
try { String.fromCharCode.apply(null, new Uint8Array(1)); } catch(__) { STR_APPLY_UIA_OK = false; }


// Table with utf8 lengths (calculated by first byte of sequence)
// Note, that 5 & 6-byte values and some 4-byte values can not be represented in JS,
// because max possible codepoint is 0x10ffff
var _utf8len = new utils.Buf8(256);
for (var i=0; i<256; i++) {
  _utf8len[i] = (i >= 252 ? 6 : i >= 248 ? 5 : i >= 240 ? 4 : i >= 224 ? 3 : i >= 192 ? 2 : 1);
}
_utf8len[254]=_utf8len[254]=1; // Invalid sequence start


// convert string to array (typed, when possible)
exports.string2buf = function (str) {
  var buf, c, c2, m_pos, i, str_len = str.length, buf_len = 0;

  // count binary size
  for (m_pos = 0; m_pos < str_len; m_pos++) {
    c = str.charCodeAt(m_pos);
    if ((c & 0xfc00) === 0xd800 && (m_pos+1 < str_len)) {
      c2 = str.charCodeAt(m_pos+1);
      if ((c2 & 0xfc00) === 0xdc00) {
        c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
        m_pos++;
      }
    }
    buf_len += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
  }

  // allocate buffer
  buf = new utils.Buf8(buf_len);

  // convert
  for (i=0, m_pos = 0; i < buf_len; m_pos++) {
    c = str.charCodeAt(m_pos);
    if ((c & 0xfc00) === 0xd800 && (m_pos+1 < str_len)) {
      c2 = str.charCodeAt(m_pos+1);
      if ((c2 & 0xfc00) === 0xdc00) {
        c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
        m_pos++;
      }
    }
    if (c < 0x80) {
      /* one byte */
      buf[i++] = c;
    } else if (c < 0x800) {
      /* two bytes */
      buf[i++] = 0xC0 | (c >>> 6);
      buf[i++] = 0x80 | (c & 0x3f);
    } else if (c < 0x10000) {
      /* three bytes */
      buf[i++] = 0xE0 | (c >>> 12);
      buf[i++] = 0x80 | (c >>> 6 & 0x3f);
      buf[i++] = 0x80 | (c & 0x3f);
    } else {
      /* four bytes */
      buf[i++] = 0xf0 | (c >>> 18);
      buf[i++] = 0x80 | (c >>> 12 & 0x3f);
      buf[i++] = 0x80 | (c >>> 6 & 0x3f);
      buf[i++] = 0x80 | (c & 0x3f);
    }
  }

  return buf;
};

// Helper (used in 2 places)
function buf2binstring(buf, len) {
  // use fallback for big arrays to avoid stack overflow
  if (len < 65537) {
    if ((buf.subarray && STR_APPLY_UIA_OK) || (!buf.subarray && STR_APPLY_OK)) {
      return String.fromCharCode.apply(null, utils.shrinkBuf(buf, len));
    }
  }

  var result = '';
  for(var i=0; i < len; i++) {
    result += String.fromCharCode(buf[i]);
  }
  return result;
}


// Convert byte array to binary string
exports.buf2binstring = function(buf) {
  return buf2binstring(buf, buf.length);
};


// Convert binary string (typed, when possible)
exports.binstring2buf = function(str) {
  var buf = new utils.Buf8(str.length);
  for(var i=0, len=buf.length; i < len; i++) {
    buf[i] = str.charCodeAt(i);
  }
  return buf;
};


// convert array to string
exports.buf2string = function (buf, max) {
  var i, out, c, c_len;
  var len = max || buf.length;

  // Reserve max possible length (2 words per char)
  // NB: by unknown reasons, Array is significantly faster for
  //     String.fromCharCode.apply than Uint16Array.
  var utf16buf = new Array(len*2);

  for (out=0, i=0; i<len;) {
    c = buf[i++];
    // quick process ascii
    if (c < 0x80) { utf16buf[out++] = c; continue; }

    c_len = _utf8len[c];
    // skip 5 & 6 byte codes
    if (c_len > 4) { utf16buf[out++] = 0xfffd; i += c_len-1; continue; }

    // apply mask on first byte
    c &= c_len === 2 ? 0x1f : c_len === 3 ? 0x0f : 0x07;
    // join the rest
    while (c_len > 1 && i < len) {
      c = (c << 6) | (buf[i++] & 0x3f);
      c_len--;
    }

    // terminated by end of string?
    if (c_len > 1) { utf16buf[out++] = 0xfffd; continue; }

    if (c < 0x10000) {
      utf16buf[out++] = c;
    } else {
      c -= 0x10000;
      utf16buf[out++] = 0xd800 | ((c >> 10) & 0x3ff);
      utf16buf[out++] = 0xdc00 | (c & 0x3ff);
    }
  }

  return buf2binstring(utf16buf, out);
};


// Calculate max possible position in utf8 buffer,
// that will not break sequence. If that's not possible
// - (very small limits) return max size as is.
//
// buf[] - utf8 bytes array
// max   - length limit (mandatory);
exports.utf8border = function(buf, max) {
  var pos;

  max = max || buf.length;
  if (max > buf.length) { max = buf.length; }

  // go back from last position, until start of sequence found
  pos = max-1;
  while (pos >= 0 && (buf[pos] & 0xC0) === 0x80) { pos--; }

  // Fuckup - very small and broken sequence,
  // return max, because we should return something anyway.
  if (pos < 0) { return max; }

  // If we came to start of buffer - that means vuffer is too small,
  // return max too.
  if (pos === 0) { return max; }

  return (pos + _utf8len[buf[pos]] > max) ? pos : max;
};

},{"./common":"/home/zefanja/Projekte/common-sword/node_modules/jszip/node_modules/pako/lib/utils/common.js"}],"/home/zefanja/Projekte/common-sword/node_modules/jszip/node_modules/pako/lib/zlib/adler32.js":[function(require,module,exports){
'use strict';

// Note: adler32 takes 12% for level 0 and 2% for level 6.
// It doesn't worth to make additional optimizationa as in original.
// Small size is preferable.

function adler32(adler, buf, len, pos) {
  var s1 = (adler & 0xffff) |0
    , s2 = ((adler >>> 16) & 0xffff) |0
    , n = 0;

  while (len !== 0) {
    // Set limit ~ twice less than 5552, to keep
    // s2 in 31-bits, because we force signed ints.
    // in other case %= will fail.
    n = len > 2000 ? 2000 : len;
    len -= n;

    do {
      s1 = (s1 + buf[pos++]) |0;
      s2 = (s2 + s1) |0;
    } while (--n);

    s1 %= 65521;
    s2 %= 65521;
  }

  return (s1 | (s2 << 16)) |0;
}


module.exports = adler32;
},{}],"/home/zefanja/Projekte/common-sword/node_modules/jszip/node_modules/pako/lib/zlib/constants.js":[function(require,module,exports){
module.exports = {

  /* Allowed flush values; see deflate() and inflate() below for details */
  Z_NO_FLUSH:         0,
  Z_PARTIAL_FLUSH:    1,
  Z_SYNC_FLUSH:       2,
  Z_FULL_FLUSH:       3,
  Z_FINISH:           4,
  Z_BLOCK:            5,
  Z_TREES:            6,

  /* Return codes for the compression/decompression functions. Negative values
  * are errors, positive values are used for special but normal events.
  */
  Z_OK:               0,
  Z_STREAM_END:       1,
  Z_NEED_DICT:        2,
  Z_ERRNO:           -1,
  Z_STREAM_ERROR:    -2,
  Z_DATA_ERROR:      -3,
  //Z_MEM_ERROR:     -4,
  Z_BUF_ERROR:       -5,
  //Z_VERSION_ERROR: -6,

  /* compression levels */
  Z_NO_COMPRESSION:         0,
  Z_BEST_SPEED:             1,
  Z_BEST_COMPRESSION:       9,
  Z_DEFAULT_COMPRESSION:   -1,


  Z_FILTERED:               1,
  Z_HUFFMAN_ONLY:           2,
  Z_RLE:                    3,
  Z_FIXED:                  4,
  Z_DEFAULT_STRATEGY:       0,

  /* Possible values of the data_type field (though see inflate()) */
  Z_BINARY:                 0,
  Z_TEXT:                   1,
  //Z_ASCII:                1, // = Z_TEXT (deprecated)
  Z_UNKNOWN:                2,

  /* The deflate compression method */
  Z_DEFLATED:               8
  //Z_NULL:                 null // Use -1 or null inline, depending on var type
};
},{}],"/home/zefanja/Projekte/common-sword/node_modules/jszip/node_modules/pako/lib/zlib/crc32.js":[function(require,module,exports){
'use strict';

// Note: we can't get significant speed boost here.
// So write code to minimize size - no pregenerated tables
// and array tools dependencies.


// Use ordinary array, since untyped makes no boost here
function makeTable() {
  var c, table = [];

  for(var n =0; n < 256; n++){
    c = n;
    for(var k =0; k < 8; k++){
      c = ((c&1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
    }
    table[n] = c;
  }

  return table;
}

// Create table on load. Just 255 signed longs. Not a problem.
var crcTable = makeTable();


function crc32(crc, buf, len, pos) {
  var t = crcTable
    , end = pos + len;

  crc = crc ^ (-1);

  for (var i = pos; i < end; i++ ) {
    crc = (crc >>> 8) ^ t[(crc ^ buf[i]) & 0xFF];
  }

  return (crc ^ (-1)); // >>> 0;
}


module.exports = crc32;
},{}],"/home/zefanja/Projekte/common-sword/node_modules/jszip/node_modules/pako/lib/zlib/deflate.js":[function(require,module,exports){
'use strict';

var utils   = require('../utils/common');
var trees   = require('./trees');
var adler32 = require('./adler32');
var crc32   = require('./crc32');
var msg   = require('./messages');

/* Public constants ==========================================================*/
/* ===========================================================================*/


/* Allowed flush values; see deflate() and inflate() below for details */
var Z_NO_FLUSH      = 0;
var Z_PARTIAL_FLUSH = 1;
//var Z_SYNC_FLUSH    = 2;
var Z_FULL_FLUSH    = 3;
var Z_FINISH        = 4;
var Z_BLOCK         = 5;
//var Z_TREES         = 6;


/* Return codes for the compression/decompression functions. Negative values
 * are errors, positive values are used for special but normal events.
 */
var Z_OK            = 0;
var Z_STREAM_END    = 1;
//var Z_NEED_DICT     = 2;
//var Z_ERRNO         = -1;
var Z_STREAM_ERROR  = -2;
var Z_DATA_ERROR    = -3;
//var Z_MEM_ERROR     = -4;
var Z_BUF_ERROR     = -5;
//var Z_VERSION_ERROR = -6;


/* compression levels */
//var Z_NO_COMPRESSION      = 0;
//var Z_BEST_SPEED          = 1;
//var Z_BEST_COMPRESSION    = 9;
var Z_DEFAULT_COMPRESSION = -1;


var Z_FILTERED            = 1;
var Z_HUFFMAN_ONLY        = 2;
var Z_RLE                 = 3;
var Z_FIXED               = 4;
var Z_DEFAULT_STRATEGY    = 0;

/* Possible values of the data_type field (though see inflate()) */
//var Z_BINARY              = 0;
//var Z_TEXT                = 1;
//var Z_ASCII               = 1; // = Z_TEXT
var Z_UNKNOWN             = 2;


/* The deflate compression method */
var Z_DEFLATED  = 8;

/*============================================================================*/


var MAX_MEM_LEVEL = 9;
/* Maximum value for memLevel in deflateInit2 */
var MAX_WBITS = 15;
/* 32K LZ77 window */
var DEF_MEM_LEVEL = 8;


var LENGTH_CODES  = 29;
/* number of length codes, not counting the special END_BLOCK code */
var LITERALS      = 256;
/* number of literal bytes 0..255 */
var L_CODES       = LITERALS + 1 + LENGTH_CODES;
/* number of Literal or Length codes, including the END_BLOCK code */
var D_CODES       = 30;
/* number of distance codes */
var BL_CODES      = 19;
/* number of codes used to transfer the bit lengths */
var HEAP_SIZE     = 2*L_CODES + 1;
/* maximum heap size */
var MAX_BITS  = 15;
/* All codes must not exceed MAX_BITS bits */

var MIN_MATCH = 3;
var MAX_MATCH = 258;
var MIN_LOOKAHEAD = (MAX_MATCH + MIN_MATCH + 1);

var PRESET_DICT = 0x20;

var INIT_STATE = 42;
var EXTRA_STATE = 69;
var NAME_STATE = 73;
var COMMENT_STATE = 91;
var HCRC_STATE = 103;
var BUSY_STATE = 113;
var FINISH_STATE = 666;

var BS_NEED_MORE      = 1; /* block not completed, need more input or more output */
var BS_BLOCK_DONE     = 2; /* block flush performed */
var BS_FINISH_STARTED = 3; /* finish started, need only more output at next deflate */
var BS_FINISH_DONE    = 4; /* finish done, accept no more input or output */

var OS_CODE = 0x03; // Unix :) . Don't detect, use this default.

function err(strm, errorCode) {
  strm.msg = msg[errorCode];
  return errorCode;
}

function rank(f) {
  return ((f) << 1) - ((f) > 4 ? 9 : 0);
}

function zero(buf) { var len = buf.length; while (--len >= 0) { buf[len] = 0; } }


/* =========================================================================
 * Flush as much pending output as possible. All deflate() output goes
 * through this function so some applications may wish to modify it
 * to avoid allocating a large strm->output buffer and copying into it.
 * (See also read_buf()).
 */
function flush_pending(strm) {
  var s = strm.state;

  //_tr_flush_bits(s);
  var len = s.pending;
  if (len > strm.avail_out) {
    len = strm.avail_out;
  }
  if (len === 0) { return; }

  utils.arraySet(strm.output, s.pending_buf, s.pending_out, len, strm.next_out);
  strm.next_out += len;
  s.pending_out += len;
  strm.total_out += len;
  strm.avail_out -= len;
  s.pending -= len;
  if (s.pending === 0) {
    s.pending_out = 0;
  }
}


function flush_block_only (s, last) {
  trees._tr_flush_block(s, (s.block_start >= 0 ? s.block_start : -1), s.strstart - s.block_start, last);
  s.block_start = s.strstart;
  flush_pending(s.strm);
}


function put_byte(s, b) {
  s.pending_buf[s.pending++] = b;
}


/* =========================================================================
 * Put a short in the pending buffer. The 16-bit value is put in MSB order.
 * IN assertion: the stream state is correct and there is enough room in
 * pending_buf.
 */
function putShortMSB(s, b) {
//  put_byte(s, (Byte)(b >> 8));
//  put_byte(s, (Byte)(b & 0xff));
  s.pending_buf[s.pending++] = (b >>> 8) & 0xff;
  s.pending_buf[s.pending++] = b & 0xff;
}


/* ===========================================================================
 * Read a new buffer from the current input stream, update the adler32
 * and total number of bytes read.  All deflate() input goes through
 * this function so some applications may wish to modify it to avoid
 * allocating a large strm->input buffer and copying from it.
 * (See also flush_pending()).
 */
function read_buf(strm, buf, start, size) {
  var len = strm.avail_in;

  if (len > size) { len = size; }
  if (len === 0) { return 0; }

  strm.avail_in -= len;

  utils.arraySet(buf, strm.input, strm.next_in, len, start);
  if (strm.state.wrap === 1) {
    strm.adler = adler32(strm.adler, buf, len, start);
  }

  else if (strm.state.wrap === 2) {
    strm.adler = crc32(strm.adler, buf, len, start);
  }

  strm.next_in += len;
  strm.total_in += len;

  return len;
}


/* ===========================================================================
 * Set match_start to the longest match starting at the given string and
 * return its length. Matches shorter or equal to prev_length are discarded,
 * in which case the result is equal to prev_length and match_start is
 * garbage.
 * IN assertions: cur_match is the head of the hash chain for the current
 *   string (strstart) and its distance is <= MAX_DIST, and prev_length >= 1
 * OUT assertion: the match length is not greater than s->lookahead.
 */
function longest_match(s, cur_match) {
  var chain_length = s.max_chain_length;      /* max hash chain length */
  var scan = s.strstart; /* current string */
  var match;                       /* matched string */
  var len;                           /* length of current match */
  var best_len = s.prev_length;              /* best match length so far */
  var nice_match = s.nice_match;             /* stop if match long enough */
  var limit = (s.strstart > (s.w_size - MIN_LOOKAHEAD)) ?
      s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0/*NIL*/;

  var _win = s.window; // shortcut

  var wmask = s.w_mask;
  var prev  = s.prev;

  /* Stop when cur_match becomes <= limit. To simplify the code,
   * we prevent matches with the string of window index 0.
   */

  var strend = s.strstart + MAX_MATCH;
  var scan_end1  = _win[scan + best_len - 1];
  var scan_end   = _win[scan + best_len];

  /* The code is optimized for HASH_BITS >= 8 and MAX_MATCH-2 multiple of 16.
   * It is easy to get rid of this optimization if necessary.
   */
  // Assert(s->hash_bits >= 8 && MAX_MATCH == 258, "Code too clever");

  /* Do not waste too much time if we already have a good match: */
  if (s.prev_length >= s.good_match) {
    chain_length >>= 2;
  }
  /* Do not look for matches beyond the end of the input. This is necessary
   * to make deflate deterministic.
   */
  if (nice_match > s.lookahead) { nice_match = s.lookahead; }

  // Assert((ulg)s->strstart <= s->window_size-MIN_LOOKAHEAD, "need lookahead");

  do {
    // Assert(cur_match < s->strstart, "no future");
    match = cur_match;

    /* Skip to next match if the match length cannot increase
     * or if the match length is less than 2.  Note that the checks below
     * for insufficient lookahead only occur occasionally for performance
     * reasons.  Therefore uninitialized memory will be accessed, and
     * conditional jumps will be made that depend on those values.
     * However the length of the match is limited to the lookahead, so
     * the output of deflate is not affected by the uninitialized values.
     */

    if (_win[match + best_len]     !== scan_end  ||
        _win[match + best_len - 1] !== scan_end1 ||
        _win[match]                !== _win[scan] ||
        _win[++match]              !== _win[scan + 1]) {
      continue;
    }

    /* The check at best_len-1 can be removed because it will be made
     * again later. (This heuristic is not always a win.)
     * It is not necessary to compare scan[2] and match[2] since they
     * are always equal when the other bytes match, given that
     * the hash keys are equal and that HASH_BITS >= 8.
     */
    scan += 2;
    match++;
    // Assert(*scan == *match, "match[2]?");

    /* We check for insufficient lookahead only every 8th comparison;
     * the 256th check will be made at strstart+258.
     */
    do {
      /*jshint noempty:false*/
    } while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             scan < strend);

    // Assert(scan <= s->window+(unsigned)(s->window_size-1), "wild scan");

    len = MAX_MATCH - (strend - scan);
    scan = strend - MAX_MATCH;

    if (len > best_len) {
      s.match_start = cur_match;
      best_len = len;
      if (len >= nice_match) {
        break;
      }
      scan_end1  = _win[scan + best_len - 1];
      scan_end   = _win[scan + best_len];
    }
  } while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);

  if (best_len <= s.lookahead) {
    return best_len;
  }
  return s.lookahead;
}


/* ===========================================================================
 * Fill the window when the lookahead becomes insufficient.
 * Updates strstart and lookahead.
 *
 * IN assertion: lookahead < MIN_LOOKAHEAD
 * OUT assertions: strstart <= window_size-MIN_LOOKAHEAD
 *    At least one byte has been read, or avail_in == 0; reads are
 *    performed for at least two bytes (required for the zip translate_eol
 *    option -- not supported here).
 */
function fill_window(s) {
  var _w_size = s.w_size;
  var p, n, m, more, str;

  //Assert(s->lookahead < MIN_LOOKAHEAD, "already enough lookahead");

  do {
    more = s.window_size - s.lookahead - s.strstart;

    // JS ints have 32 bit, block below not needed
    /* Deal with !@#$% 64K limit: */
    //if (sizeof(int) <= 2) {
    //    if (more == 0 && s->strstart == 0 && s->lookahead == 0) {
    //        more = wsize;
    //
    //  } else if (more == (unsigned)(-1)) {
    //        /* Very unlikely, but possible on 16 bit machine if
    //         * strstart == 0 && lookahead == 1 (input done a byte at time)
    //         */
    //        more--;
    //    }
    //}


    /* If the window is almost full and there is insufficient lookahead,
     * move the upper half to the lower one to make room in the upper half.
     */
    if (s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {

      utils.arraySet(s.window, s.window, _w_size, _w_size, 0);
      s.match_start -= _w_size;
      s.strstart -= _w_size;
      /* we now have strstart >= MAX_DIST */
      s.block_start -= _w_size;

      /* Slide the hash table (could be avoided with 32 bit values
       at the expense of memory usage). We slide even when level == 0
       to keep the hash table consistent if we switch back to level > 0
       later. (Using level 0 permanently is not an optimal usage of
       zlib, so we don't care about this pathological case.)
       */

      n = s.hash_size;
      p = n;
      do {
        m = s.head[--p];
        s.head[p] = (m >= _w_size ? m - _w_size : 0);
      } while (--n);

      n = _w_size;
      p = n;
      do {
        m = s.prev[--p];
        s.prev[p] = (m >= _w_size ? m - _w_size : 0);
        /* If n is not on any hash chain, prev[n] is garbage but
         * its value will never be used.
         */
      } while (--n);

      more += _w_size;
    }
    if (s.strm.avail_in === 0) {
      break;
    }

    /* If there was no sliding:
     *    strstart <= WSIZE+MAX_DIST-1 && lookahead <= MIN_LOOKAHEAD - 1 &&
     *    more == window_size - lookahead - strstart
     * => more >= window_size - (MIN_LOOKAHEAD-1 + WSIZE + MAX_DIST-1)
     * => more >= window_size - 2*WSIZE + 2
     * In the BIG_MEM or MMAP case (not yet supported),
     *   window_size == input_size + MIN_LOOKAHEAD  &&
     *   strstart + s->lookahead <= input_size => more >= MIN_LOOKAHEAD.
     * Otherwise, window_size == 2*WSIZE so more >= 2.
     * If there was sliding, more >= WSIZE. So in all cases, more >= 2.
     */
    //Assert(more >= 2, "more < 2");
    n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
    s.lookahead += n;

    /* Initialize the hash value now that we have some input: */
    if (s.lookahead + s.insert >= MIN_MATCH) {
      str = s.strstart - s.insert;
      s.ins_h = s.window[str];

      /* UPDATE_HASH(s, s->ins_h, s->window[str + 1]); */
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[str + 1]) & s.hash_mask;
//#if MIN_MATCH != 3
//        Call update_hash() MIN_MATCH-3 more times
//#endif
      while (s.insert) {
        /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
        s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[str + MIN_MATCH-1]) & s.hash_mask;

        s.prev[str & s.w_mask] = s.head[s.ins_h];
        s.head[s.ins_h] = str;
        str++;
        s.insert--;
        if (s.lookahead + s.insert < MIN_MATCH) {
          break;
        }
      }
    }
    /* If the whole input has less than MIN_MATCH bytes, ins_h is garbage,
     * but this is not important since only literal bytes will be emitted.
     */

  } while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);

  /* If the WIN_INIT bytes after the end of the current data have never been
   * written, then zero those bytes in order to avoid memory check reports of
   * the use of uninitialized (or uninitialised as Julian writes) bytes by
   * the longest match routines.  Update the high water mark for the next
   * time through here.  WIN_INIT is set to MAX_MATCH since the longest match
   * routines allow scanning to strstart + MAX_MATCH, ignoring lookahead.
   */
//  if (s.high_water < s.window_size) {
//    var curr = s.strstart + s.lookahead;
//    var init = 0;
//
//    if (s.high_water < curr) {
//      /* Previous high water mark below current data -- zero WIN_INIT
//       * bytes or up to end of window, whichever is less.
//       */
//      init = s.window_size - curr;
//      if (init > WIN_INIT)
//        init = WIN_INIT;
//      zmemzero(s->window + curr, (unsigned)init);
//      s->high_water = curr + init;
//    }
//    else if (s->high_water < (ulg)curr + WIN_INIT) {
//      /* High water mark at or above current data, but below current data
//       * plus WIN_INIT -- zero out to current data plus WIN_INIT, or up
//       * to end of window, whichever is less.
//       */
//      init = (ulg)curr + WIN_INIT - s->high_water;
//      if (init > s->window_size - s->high_water)
//        init = s->window_size - s->high_water;
//      zmemzero(s->window + s->high_water, (unsigned)init);
//      s->high_water += init;
//    }
//  }
//
//  Assert((ulg)s->strstart <= s->window_size - MIN_LOOKAHEAD,
//    "not enough room for search");
}

/* ===========================================================================
 * Copy without compression as much as possible from the input stream, return
 * the current block state.
 * This function does not insert new strings in the dictionary since
 * uncompressible data is probably not useful. This function is used
 * only for the level=0 compression option.
 * NOTE: this function should be optimized to avoid extra copying from
 * window to pending_buf.
 */
function deflate_stored(s, flush) {
  /* Stored blocks are limited to 0xffff bytes, pending_buf is limited
   * to pending_buf_size, and each stored block has a 5 byte header:
   */
  var max_block_size = 0xffff;

  if (max_block_size > s.pending_buf_size - 5) {
    max_block_size = s.pending_buf_size - 5;
  }

  /* Copy as much as possible from input to output: */
  for (;;) {
    /* Fill the window as much as possible: */
    if (s.lookahead <= 1) {

      //Assert(s->strstart < s->w_size+MAX_DIST(s) ||
      //  s->block_start >= (long)s->w_size, "slide too late");
//      if (!(s.strstart < s.w_size + (s.w_size - MIN_LOOKAHEAD) ||
//        s.block_start >= s.w_size)) {
//        throw  new Error("slide too late");
//      }

      fill_window(s);
      if (s.lookahead === 0 && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }

      if (s.lookahead === 0) {
        break;
      }
      /* flush the current block */
    }
    //Assert(s->block_start >= 0L, "block gone");
//    if (s.block_start < 0) throw new Error("block gone");

    s.strstart += s.lookahead;
    s.lookahead = 0;

    /* Emit a stored block if pending_buf will be full: */
    var max_start = s.block_start + max_block_size;

    if (s.strstart === 0 || s.strstart >= max_start) {
      /* strstart == 0 is possible when wraparound on 16-bit machine */
      s.lookahead = s.strstart - max_start;
      s.strstart = max_start;
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/


    }
    /* Flush if we may have to slide, otherwise block_start may become
     * negative and the data will be gone:
     */
    if (s.strstart - s.block_start >= (s.w_size - MIN_LOOKAHEAD)) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }

  s.insert = 0;

  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }

  if (s.strstart > s.block_start) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }

  return BS_NEED_MORE;
}

/* ===========================================================================
 * Compress as much as possible from the input stream, return the current
 * block state.
 * This function does not perform lazy evaluation of matches and inserts
 * new strings in the dictionary only for unmatched strings or for short
 * matches. It is used only for the fast compression options.
 */
function deflate_fast(s, flush) {
  var hash_head;        /* head of the hash chain */
  var bflush;           /* set if current block must be flushed */

  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */
    if (s.lookahead < MIN_LOOKAHEAD) {
      fill_window(s);
      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) {
        break; /* flush the current block */
      }
    }

    /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */
    hash_head = 0/*NIL*/;
    if (s.lookahead >= MIN_MATCH) {
      /*** INSERT_STRING(s, s.strstart, hash_head); ***/
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = s.strstart;
      /***/
    }

    /* Find the longest match, discarding those <= prev_length.
     * At this point we have always match_length < MIN_MATCH
     */
    if (hash_head !== 0/*NIL*/ && ((s.strstart - hash_head) <= (s.w_size - MIN_LOOKAHEAD))) {
      /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */
      s.match_length = longest_match(s, hash_head);
      /* longest_match() sets match_start */
    }
    if (s.match_length >= MIN_MATCH) {
      // check_match(s, s.strstart, s.match_start, s.match_length); // for debug only

      /*** _tr_tally_dist(s, s.strstart - s.match_start,
                     s.match_length - MIN_MATCH, bflush); ***/
      bflush = trees._tr_tally(s, s.strstart - s.match_start, s.match_length - MIN_MATCH);

      s.lookahead -= s.match_length;

      /* Insert new strings in the hash table only if the match length
       * is not too large. This saves time but degrades compression.
       */
      if (s.match_length <= s.max_lazy_match/*max_insert_length*/ && s.lookahead >= MIN_MATCH) {
        s.match_length--; /* string at strstart already in table */
        do {
          s.strstart++;
          /*** INSERT_STRING(s, s.strstart, hash_head); ***/
          s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
          /***/
          /* strstart never exceeds WSIZE-MAX_MATCH, so there are
           * always MIN_MATCH bytes ahead.
           */
        } while (--s.match_length !== 0);
        s.strstart++;
      } else
      {
        s.strstart += s.match_length;
        s.match_length = 0;
        s.ins_h = s.window[s.strstart];
        /* UPDATE_HASH(s, s.ins_h, s.window[s.strstart+1]); */
        s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + 1]) & s.hash_mask;

//#if MIN_MATCH != 3
//                Call UPDATE_HASH() MIN_MATCH-3 more times
//#endif
        /* If lookahead < MIN_MATCH, ins_h is garbage, but it does not
         * matter since it will be recomputed at next deflate call.
         */
      }
    } else {
      /* No match, output a literal byte */
      //Tracevv((stderr,"%c", s.window[s.strstart]));
      /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
      bflush = trees._tr_tally(s, 0, s.window[s.strstart]);

      s.lookahead--;
      s.strstart++;
    }
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = ((s.strstart < (MIN_MATCH-1)) ? s.strstart : MIN_MATCH-1);
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
}

/* ===========================================================================
 * Same as above, but achieves better compression. We use a lazy
 * evaluation for matches: a match is finally adopted only if there is
 * no better match at the next window position.
 */
function deflate_slow(s, flush) {
  var hash_head;          /* head of hash chain */
  var bflush;              /* set if current block must be flushed */

  var max_insert;

  /* Process the input block. */
  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */
    if (s.lookahead < MIN_LOOKAHEAD) {
      fill_window(s);
      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) { break; } /* flush the current block */
    }

    /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */
    hash_head = 0/*NIL*/;
    if (s.lookahead >= MIN_MATCH) {
      /*** INSERT_STRING(s, s.strstart, hash_head); ***/
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = s.strstart;
      /***/
    }

    /* Find the longest match, discarding those <= prev_length.
     */
    s.prev_length = s.match_length;
    s.prev_match = s.match_start;
    s.match_length = MIN_MATCH-1;

    if (hash_head !== 0/*NIL*/ && s.prev_length < s.max_lazy_match &&
        s.strstart - hash_head <= (s.w_size-MIN_LOOKAHEAD)/*MAX_DIST(s)*/) {
      /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */
      s.match_length = longest_match(s, hash_head);
      /* longest_match() sets match_start */

      if (s.match_length <= 5 &&
         (s.strategy === Z_FILTERED || (s.match_length === MIN_MATCH && s.strstart - s.match_start > 4096/*TOO_FAR*/))) {

        /* If prev_match is also MIN_MATCH, match_start is garbage
         * but we will ignore the current match anyway.
         */
        s.match_length = MIN_MATCH-1;
      }
    }
    /* If there was a match at the previous step and the current
     * match is not better, output the previous match:
     */
    if (s.prev_length >= MIN_MATCH && s.match_length <= s.prev_length) {
      max_insert = s.strstart + s.lookahead - MIN_MATCH;
      /* Do not insert strings in hash table beyond this. */

      //check_match(s, s.strstart-1, s.prev_match, s.prev_length);

      /***_tr_tally_dist(s, s.strstart - 1 - s.prev_match,
                     s.prev_length - MIN_MATCH, bflush);***/
      bflush = trees._tr_tally(s, s.strstart - 1- s.prev_match, s.prev_length - MIN_MATCH);
      /* Insert in hash table all strings up to the end of the match.
       * strstart-1 and strstart are already inserted. If there is not
       * enough lookahead, the last two strings are not inserted in
       * the hash table.
       */
      s.lookahead -= s.prev_length-1;
      s.prev_length -= 2;
      do {
        if (++s.strstart <= max_insert) {
          /*** INSERT_STRING(s, s.strstart, hash_head); ***/
          s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
          /***/
        }
      } while (--s.prev_length !== 0);
      s.match_available = 0;
      s.match_length = MIN_MATCH-1;
      s.strstart++;

      if (bflush) {
        /*** FLUSH_BLOCK(s, 0); ***/
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
        /***/
      }

    } else if (s.match_available) {
      /* If there was no match at the previous position, output a
       * single literal. If there was a match but the current match
       * is longer, truncate the previous match to a single literal.
       */
      //Tracevv((stderr,"%c", s->window[s->strstart-1]));
      /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
      bflush = trees._tr_tally(s, 0, s.window[s.strstart-1]);

      if (bflush) {
        /*** FLUSH_BLOCK_ONLY(s, 0) ***/
        flush_block_only(s, false);
        /***/
      }
      s.strstart++;
      s.lookahead--;
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    } else {
      /* There is no previous match to compare with, wait for
       * the next step to decide.
       */
      s.match_available = 1;
      s.strstart++;
      s.lookahead--;
    }
  }
  //Assert (flush != Z_NO_FLUSH, "no flush?");
  if (s.match_available) {
    //Tracevv((stderr,"%c", s->window[s->strstart-1]));
    /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
    bflush = trees._tr_tally(s, 0, s.window[s.strstart-1]);

    s.match_available = 0;
  }
  s.insert = s.strstart < MIN_MATCH-1 ? s.strstart : MIN_MATCH-1;
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }

  return BS_BLOCK_DONE;
}


/* ===========================================================================
 * For Z_RLE, simply look for runs of bytes, generate matches only of distance
 * one.  Do not maintain a hash table.  (It will be regenerated if this run of
 * deflate switches away from Z_RLE.)
 */
function deflate_rle(s, flush) {
  var bflush;            /* set if current block must be flushed */
  var prev;              /* byte at distance one to match */
  var scan, strend;      /* scan goes up to strend for length of run */

  var _win = s.window;

  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the longest run, plus one for the unrolled loop.
     */
    if (s.lookahead <= MAX_MATCH) {
      fill_window(s);
      if (s.lookahead <= MAX_MATCH && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) { break; } /* flush the current block */
    }

    /* See how many times the previous byte repeats */
    s.match_length = 0;
    if (s.lookahead >= MIN_MATCH && s.strstart > 0) {
      scan = s.strstart - 1;
      prev = _win[scan];
      if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
        strend = s.strstart + MAX_MATCH;
        do {
          /*jshint noempty:false*/
        } while (prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 scan < strend);
        s.match_length = MAX_MATCH - (strend - scan);
        if (s.match_length > s.lookahead) {
          s.match_length = s.lookahead;
        }
      }
      //Assert(scan <= s->window+(uInt)(s->window_size-1), "wild scan");
    }

    /* Emit match if have run of MIN_MATCH or longer, else emit literal */
    if (s.match_length >= MIN_MATCH) {
      //check_match(s, s.strstart, s.strstart - 1, s.match_length);

      /*** _tr_tally_dist(s, 1, s.match_length - MIN_MATCH, bflush); ***/
      bflush = trees._tr_tally(s, 1, s.match_length - MIN_MATCH);

      s.lookahead -= s.match_length;
      s.strstart += s.match_length;
      s.match_length = 0;
    } else {
      /* No match, output a literal byte */
      //Tracevv((stderr,"%c", s->window[s->strstart]));
      /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
      bflush = trees._tr_tally(s, 0, s.window[s.strstart]);

      s.lookahead--;
      s.strstart++;
    }
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
}

/* ===========================================================================
 * For Z_HUFFMAN_ONLY, do not look for matches.  Do not maintain a hash table.
 * (It will be regenerated if this run of deflate switches away from Huffman.)
 */
function deflate_huff(s, flush) {
  var bflush;             /* set if current block must be flushed */

  for (;;) {
    /* Make sure that we have a literal to write. */
    if (s.lookahead === 0) {
      fill_window(s);
      if (s.lookahead === 0) {
        if (flush === Z_NO_FLUSH) {
          return BS_NEED_MORE;
        }
        break;      /* flush the current block */
      }
    }

    /* Output a literal byte */
    s.match_length = 0;
    //Tracevv((stderr,"%c", s->window[s->strstart]));
    /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
    bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
    s.lookahead--;
    s.strstart++;
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
}

/* Values for max_lazy_match, good_match and max_chain_length, depending on
 * the desired pack level (0..9). The values given below have been tuned to
 * exclude worst case performance for pathological files. Better values may be
 * found for specific files.
 */
var Config = function (good_length, max_lazy, nice_length, max_chain, func) {
  this.good_length = good_length;
  this.max_lazy = max_lazy;
  this.nice_length = nice_length;
  this.max_chain = max_chain;
  this.func = func;
};

var configuration_table;

configuration_table = [
  /*      good lazy nice chain */
  new Config(0, 0, 0, 0, deflate_stored),          /* 0 store only */
  new Config(4, 4, 8, 4, deflate_fast),            /* 1 max speed, no lazy matches */
  new Config(4, 5, 16, 8, deflate_fast),           /* 2 */
  new Config(4, 6, 32, 32, deflate_fast),          /* 3 */

  new Config(4, 4, 16, 16, deflate_slow),          /* 4 lazy matches */
  new Config(8, 16, 32, 32, deflate_slow),         /* 5 */
  new Config(8, 16, 128, 128, deflate_slow),       /* 6 */
  new Config(8, 32, 128, 256, deflate_slow),       /* 7 */
  new Config(32, 128, 258, 1024, deflate_slow),    /* 8 */
  new Config(32, 258, 258, 4096, deflate_slow)     /* 9 max compression */
];


/* ===========================================================================
 * Initialize the "longest match" routines for a new zlib stream
 */
function lm_init(s) {
  s.window_size = 2 * s.w_size;

  /*** CLEAR_HASH(s); ***/
  zero(s.head); // Fill with NIL (= 0);

  /* Set the default configuration parameters:
   */
  s.max_lazy_match = configuration_table[s.level].max_lazy;
  s.good_match = configuration_table[s.level].good_length;
  s.nice_match = configuration_table[s.level].nice_length;
  s.max_chain_length = configuration_table[s.level].max_chain;

  s.strstart = 0;
  s.block_start = 0;
  s.lookahead = 0;
  s.insert = 0;
  s.match_length = s.prev_length = MIN_MATCH - 1;
  s.match_available = 0;
  s.ins_h = 0;
}


function DeflateState() {
  this.strm = null;            /* pointer back to this zlib stream */
  this.status = 0;            /* as the name implies */
  this.pending_buf = null;      /* output still pending */
  this.pending_buf_size = 0;  /* size of pending_buf */
  this.pending_out = 0;       /* next pending byte to output to the stream */
  this.pending = 0;           /* nb of bytes in the pending buffer */
  this.wrap = 0;              /* bit 0 true for zlib, bit 1 true for gzip */
  this.gzhead = null;         /* gzip header information to write */
  this.gzindex = 0;           /* where in extra, name, or comment */
  this.method = Z_DEFLATED; /* can only be DEFLATED */
  this.last_flush = -1;   /* value of flush param for previous deflate call */

  this.w_size = 0;  /* LZ77 window size (32K by default) */
  this.w_bits = 0;  /* log2(w_size)  (8..16) */
  this.w_mask = 0;  /* w_size - 1 */

  this.window = null;
  /* Sliding window. Input bytes are read into the second half of the window,
   * and move to the first half later to keep a dictionary of at least wSize
   * bytes. With this organization, matches are limited to a distance of
   * wSize-MAX_MATCH bytes, but this ensures that IO is always
   * performed with a length multiple of the block size.
   */

  this.window_size = 0;
  /* Actual size of window: 2*wSize, except when the user input buffer
   * is directly used as sliding window.
   */

  this.prev = null;
  /* Link to older string with same hash index. To limit the size of this
   * array to 64K, this link is maintained only for the last 32K strings.
   * An index in this array is thus a window index modulo 32K.
   */

  this.head = null;   /* Heads of the hash chains or NIL. */

  this.ins_h = 0;       /* hash index of string to be inserted */
  this.hash_size = 0;   /* number of elements in hash table */
  this.hash_bits = 0;   /* log2(hash_size) */
  this.hash_mask = 0;   /* hash_size-1 */

  this.hash_shift = 0;
  /* Number of bits by which ins_h must be shifted at each input
   * step. It must be such that after MIN_MATCH steps, the oldest
   * byte no longer takes part in the hash key, that is:
   *   hash_shift * MIN_MATCH >= hash_bits
   */

  this.block_start = 0;
  /* Window position at the beginning of the current output block. Gets
   * negative when the window is moved backwards.
   */

  this.match_length = 0;      /* length of best match */
  this.prev_match = 0;        /* previous match */
  this.match_available = 0;   /* set if previous match exists */
  this.strstart = 0;          /* start of string to insert */
  this.match_start = 0;       /* start of matching string */
  this.lookahead = 0;         /* number of valid bytes ahead in window */

  this.prev_length = 0;
  /* Length of the best match at previous step. Matches not greater than this
   * are discarded. This is used in the lazy match evaluation.
   */

  this.max_chain_length = 0;
  /* To speed up deflation, hash chains are never searched beyond this
   * length.  A higher limit improves compression ratio but degrades the
   * speed.
   */

  this.max_lazy_match = 0;
  /* Attempt to find a better match only when the current match is strictly
   * smaller than this value. This mechanism is used only for compression
   * levels >= 4.
   */
  // That's alias to max_lazy_match, don't use directly
  //this.max_insert_length = 0;
  /* Insert new strings in the hash table only if the match length is not
   * greater than this length. This saves time but degrades compression.
   * max_insert_length is used only for compression levels <= 3.
   */

  this.level = 0;     /* compression level (1..9) */
  this.strategy = 0;  /* favor or force Huffman coding*/

  this.good_match = 0;
  /* Use a faster search when the previous match is longer than this */

  this.nice_match = 0; /* Stop searching when current match exceeds this */

              /* used by trees.c: */

  /* Didn't use ct_data typedef below to suppress compiler warning */

  // struct ct_data_s dyn_ltree[HEAP_SIZE];   /* literal and length tree */
  // struct ct_data_s dyn_dtree[2*D_CODES+1]; /* distance tree */
  // struct ct_data_s bl_tree[2*BL_CODES+1];  /* Huffman tree for bit lengths */

  // Use flat array of DOUBLE size, with interleaved fata,
  // because JS does not support effective
  this.dyn_ltree  = new utils.Buf16(HEAP_SIZE * 2);
  this.dyn_dtree  = new utils.Buf16((2*D_CODES+1) * 2);
  this.bl_tree    = new utils.Buf16((2*BL_CODES+1) * 2);
  zero(this.dyn_ltree);
  zero(this.dyn_dtree);
  zero(this.bl_tree);

  this.l_desc   = null;         /* desc. for literal tree */
  this.d_desc   = null;         /* desc. for distance tree */
  this.bl_desc  = null;         /* desc. for bit length tree */

  //ush bl_count[MAX_BITS+1];
  this.bl_count = new utils.Buf16(MAX_BITS+1);
  /* number of codes at each bit length for an optimal tree */

  //int heap[2*L_CODES+1];      /* heap used to build the Huffman trees */
  this.heap = new utils.Buf16(2*L_CODES+1);  /* heap used to build the Huffman trees */
  zero(this.heap);

  this.heap_len = 0;               /* number of elements in the heap */
  this.heap_max = 0;               /* element of largest frequency */
  /* The sons of heap[n] are heap[2*n] and heap[2*n+1]. heap[0] is not used.
   * The same heap array is used to build all trees.
   */

  this.depth = new utils.Buf16(2*L_CODES+1); //uch depth[2*L_CODES+1];
  zero(this.depth);
  /* Depth of each subtree used as tie breaker for trees of equal frequency
   */

  this.l_buf = 0;          /* buffer index for literals or lengths */

  this.lit_bufsize = 0;
  /* Size of match buffer for literals/lengths.  There are 4 reasons for
   * limiting lit_bufsize to 64K:
   *   - frequencies can be kept in 16 bit counters
   *   - if compression is not successful for the first block, all input
   *     data is still in the window so we can still emit a stored block even
   *     when input comes from standard input.  (This can also be done for
   *     all blocks if lit_bufsize is not greater than 32K.)
   *   - if compression is not successful for a file smaller than 64K, we can
   *     even emit a stored file instead of a stored block (saving 5 bytes).
   *     This is applicable only for zip (not gzip or zlib).
   *   - creating new Huffman trees less frequently may not provide fast
   *     adaptation to changes in the input data statistics. (Take for
   *     example a binary file with poorly compressible code followed by
   *     a highly compressible string table.) Smaller buffer sizes give
   *     fast adaptation but have of course the overhead of transmitting
   *     trees more frequently.
   *   - I can't count above 4
   */

  this.last_lit = 0;      /* running index in l_buf */

  this.d_buf = 0;
  /* Buffer index for distances. To simplify the code, d_buf and l_buf have
   * the same number of elements. To use different lengths, an extra flag
   * array would be necessary.
   */

  this.opt_len = 0;       /* bit length of current block with optimal trees */
  this.static_len = 0;    /* bit length of current block with static trees */
  this.matches = 0;       /* number of string matches in current block */
  this.insert = 0;        /* bytes at end of window left to insert */


  this.bi_buf = 0;
  /* Output buffer. bits are inserted starting at the bottom (least
   * significant bits).
   */
  this.bi_valid = 0;
  /* Number of valid bits in bi_buf.  All bits above the last valid bit
   * are always zero.
   */

  // Used for window memory init. We safely ignore it for JS. That makes
  // sense only for pointers and memory check tools.
  //this.high_water = 0;
  /* High water mark offset in window for initialized bytes -- bytes above
   * this are set to zero in order to avoid memory check warnings when
   * longest match routines access bytes past the input.  This is then
   * updated to the new high water mark.
   */
}


function deflateResetKeep(strm) {
  var s;

  if (!strm || !strm.state) {
    return err(strm, Z_STREAM_ERROR);
  }

  strm.total_in = strm.total_out = 0;
  strm.data_type = Z_UNKNOWN;

  s = strm.state;
  s.pending = 0;
  s.pending_out = 0;

  if (s.wrap < 0) {
    s.wrap = -s.wrap;
    /* was made negative by deflate(..., Z_FINISH); */
  }
  s.status = (s.wrap ? INIT_STATE : BUSY_STATE);
  strm.adler = (s.wrap === 2) ?
    0  // crc32(0, Z_NULL, 0)
  :
    1; // adler32(0, Z_NULL, 0)
  s.last_flush = Z_NO_FLUSH;
  trees._tr_init(s);
  return Z_OK;
}


function deflateReset(strm) {
  var ret = deflateResetKeep(strm);
  if (ret === Z_OK) {
    lm_init(strm.state);
  }
  return ret;
}


function deflateSetHeader(strm, head) {
  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  if (strm.state.wrap !== 2) { return Z_STREAM_ERROR; }
  strm.state.gzhead = head;
  return Z_OK;
}


function deflateInit2(strm, level, method, windowBits, memLevel, strategy) {
  if (!strm) { // === Z_NULL
    return Z_STREAM_ERROR;
  }
  var wrap = 1;

  if (level === Z_DEFAULT_COMPRESSION) {
    level = 6;
  }

  if (windowBits < 0) { /* suppress zlib wrapper */
    wrap = 0;
    windowBits = -windowBits;
  }

  else if (windowBits > 15) {
    wrap = 2;           /* write gzip wrapper instead */
    windowBits -= 16;
  }


  if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED ||
    windowBits < 8 || windowBits > 15 || level < 0 || level > 9 ||
    strategy < 0 || strategy > Z_FIXED) {
    return err(strm, Z_STREAM_ERROR);
  }


  if (windowBits === 8) {
    windowBits = 9;
  }
  /* until 256-byte window bug fixed */

  var s = new DeflateState();

  strm.state = s;
  s.strm = strm;

  s.wrap = wrap;
  s.gzhead = null;
  s.w_bits = windowBits;
  s.w_size = 1 << s.w_bits;
  s.w_mask = s.w_size - 1;

  s.hash_bits = memLevel + 7;
  s.hash_size = 1 << s.hash_bits;
  s.hash_mask = s.hash_size - 1;
  s.hash_shift = ~~((s.hash_bits + MIN_MATCH - 1) / MIN_MATCH);

  s.window = new utils.Buf8(s.w_size * 2);
  s.head = new utils.Buf16(s.hash_size);
  s.prev = new utils.Buf16(s.w_size);

  // Don't need mem init magic for JS.
  //s.high_water = 0;  /* nothing written to s->window yet */

  s.lit_bufsize = 1 << (memLevel + 6); /* 16K elements by default */

  s.pending_buf_size = s.lit_bufsize * 4;
  s.pending_buf = new utils.Buf8(s.pending_buf_size);

  s.d_buf = s.lit_bufsize >> 1;
  s.l_buf = (1 + 2) * s.lit_bufsize;

  s.level = level;
  s.strategy = strategy;
  s.method = method;

  return deflateReset(strm);
}

function deflateInit(strm, level) {
  return deflateInit2(strm, level, Z_DEFLATED, MAX_WBITS, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY);
}


function deflate(strm, flush) {
  var old_flush, s;
  var beg, val; // for gzip header write only

  if (!strm || !strm.state ||
    flush > Z_BLOCK || flush < 0) {
    return strm ? err(strm, Z_STREAM_ERROR) : Z_STREAM_ERROR;
  }

  s = strm.state;

  if (!strm.output ||
      (!strm.input && strm.avail_in !== 0) ||
      (s.status === FINISH_STATE && flush !== Z_FINISH)) {
    return err(strm, (strm.avail_out === 0) ? Z_BUF_ERROR : Z_STREAM_ERROR);
  }

  s.strm = strm; /* just in case */
  old_flush = s.last_flush;
  s.last_flush = flush;

  /* Write the header */
  if (s.status === INIT_STATE) {

    if (s.wrap === 2) { // GZIP header
      strm.adler = 0;  //crc32(0L, Z_NULL, 0);
      put_byte(s, 31);
      put_byte(s, 139);
      put_byte(s, 8);
      if (!s.gzhead) { // s->gzhead == Z_NULL
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, s.level === 9 ? 2 :
                    (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ?
                     4 : 0));
        put_byte(s, OS_CODE);
        s.status = BUSY_STATE;
      }
      else {
        put_byte(s, (s.gzhead.text ? 1 : 0) +
                    (s.gzhead.hcrc ? 2 : 0) +
                    (!s.gzhead.extra ? 0 : 4) +
                    (!s.gzhead.name ? 0 : 8) +
                    (!s.gzhead.comment ? 0 : 16)
                );
        put_byte(s, s.gzhead.time & 0xff);
        put_byte(s, (s.gzhead.time >> 8) & 0xff);
        put_byte(s, (s.gzhead.time >> 16) & 0xff);
        put_byte(s, (s.gzhead.time >> 24) & 0xff);
        put_byte(s, s.level === 9 ? 2 :
                    (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ?
                     4 : 0));
        put_byte(s, s.gzhead.os & 0xff);
        if (s.gzhead.extra && s.gzhead.extra.length) {
          put_byte(s, s.gzhead.extra.length & 0xff);
          put_byte(s, (s.gzhead.extra.length >> 8) & 0xff);
        }
        if (s.gzhead.hcrc) {
          strm.adler = crc32(strm.adler, s.pending_buf, s.pending, 0);
        }
        s.gzindex = 0;
        s.status = EXTRA_STATE;
      }
    }
    else // DEFLATE header
    {
      var header = (Z_DEFLATED + ((s.w_bits - 8) << 4)) << 8;
      var level_flags = -1;

      if (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2) {
        level_flags = 0;
      } else if (s.level < 6) {
        level_flags = 1;
      } else if (s.level === 6) {
        level_flags = 2;
      } else {
        level_flags = 3;
      }
      header |= (level_flags << 6);
      if (s.strstart !== 0) { header |= PRESET_DICT; }
      header += 31 - (header % 31);

      s.status = BUSY_STATE;
      putShortMSB(s, header);

      /* Save the adler32 of the preset dictionary: */
      if (s.strstart !== 0) {
        putShortMSB(s, strm.adler >>> 16);
        putShortMSB(s, strm.adler & 0xffff);
      }
      strm.adler = 1; // adler32(0L, Z_NULL, 0);
    }
  }

//#ifdef GZIP
  if (s.status === EXTRA_STATE) {
    if (s.gzhead.extra/* != Z_NULL*/) {
      beg = s.pending;  /* start of bytes to update crc */

      while (s.gzindex < (s.gzhead.extra.length & 0xffff)) {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            break;
          }
        }
        put_byte(s, s.gzhead.extra[s.gzindex] & 0xff);
        s.gzindex++;
      }
      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (s.gzindex === s.gzhead.extra.length) {
        s.gzindex = 0;
        s.status = NAME_STATE;
      }
    }
    else {
      s.status = NAME_STATE;
    }
  }
  if (s.status === NAME_STATE) {
    if (s.gzhead.name/* != Z_NULL*/) {
      beg = s.pending;  /* start of bytes to update crc */
      //int val;

      do {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            val = 1;
            break;
          }
        }
        // JS specific: little magic to add zero terminator to end of string
        if (s.gzindex < s.gzhead.name.length) {
          val = s.gzhead.name.charCodeAt(s.gzindex++) & 0xff;
        } else {
          val = 0;
        }
        put_byte(s, val);
      } while (val !== 0);

      if (s.gzhead.hcrc && s.pending > beg){
        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (val === 0) {
        s.gzindex = 0;
        s.status = COMMENT_STATE;
      }
    }
    else {
      s.status = COMMENT_STATE;
    }
  }
  if (s.status === COMMENT_STATE) {
    if (s.gzhead.comment/* != Z_NULL*/) {
      beg = s.pending;  /* start of bytes to update crc */
      //int val;

      do {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            val = 1;
            break;
          }
        }
        // JS specific: little magic to add zero terminator to end of string
        if (s.gzindex < s.gzhead.comment.length) {
          val = s.gzhead.comment.charCodeAt(s.gzindex++) & 0xff;
        } else {
          val = 0;
        }
        put_byte(s, val);
      } while (val !== 0);

      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (val === 0) {
        s.status = HCRC_STATE;
      }
    }
    else {
      s.status = HCRC_STATE;
    }
  }
  if (s.status === HCRC_STATE) {
    if (s.gzhead.hcrc) {
      if (s.pending + 2 > s.pending_buf_size) {
        flush_pending(strm);
      }
      if (s.pending + 2 <= s.pending_buf_size) {
        put_byte(s, strm.adler & 0xff);
        put_byte(s, (strm.adler >> 8) & 0xff);
        strm.adler = 0; //crc32(0L, Z_NULL, 0);
        s.status = BUSY_STATE;
      }
    }
    else {
      s.status = BUSY_STATE;
    }
  }
//#endif

  /* Flush as much pending output as possible */
  if (s.pending !== 0) {
    flush_pending(strm);
    if (strm.avail_out === 0) {
      /* Since avail_out is 0, deflate will be called again with
       * more output space, but possibly with both pending and
       * avail_in equal to zero. There won't be anything to do,
       * but this is not an error situation so make sure we
       * return OK instead of BUF_ERROR at next call of deflate:
       */
      s.last_flush = -1;
      return Z_OK;
    }

    /* Make sure there is something to do and avoid duplicate consecutive
     * flushes. For repeated and useless calls with Z_FINISH, we keep
     * returning Z_STREAM_END instead of Z_BUF_ERROR.
     */
  } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) &&
    flush !== Z_FINISH) {
    return err(strm, Z_BUF_ERROR);
  }

  /* User must not provide more input after the first FINISH: */
  if (s.status === FINISH_STATE && strm.avail_in !== 0) {
    return err(strm, Z_BUF_ERROR);
  }

  /* Start a new block or continue the current one.
   */
  if (strm.avail_in !== 0 || s.lookahead !== 0 ||
    (flush !== Z_NO_FLUSH && s.status !== FINISH_STATE)) {
    var bstate = (s.strategy === Z_HUFFMAN_ONLY) ? deflate_huff(s, flush) :
      (s.strategy === Z_RLE ? deflate_rle(s, flush) :
        configuration_table[s.level].func(s, flush));

    if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) {
      s.status = FINISH_STATE;
    }
    if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
      if (strm.avail_out === 0) {
        s.last_flush = -1;
        /* avoid BUF_ERROR next call, see above */
      }
      return Z_OK;
      /* If flush != Z_NO_FLUSH && avail_out == 0, the next call
       * of deflate should use the same flush parameter to make sure
       * that the flush is complete. So we don't have to output an
       * empty block here, this will be done at next call. This also
       * ensures that for a very small output buffer, we emit at most
       * one empty block.
       */
    }
    if (bstate === BS_BLOCK_DONE) {
      if (flush === Z_PARTIAL_FLUSH) {
        trees._tr_align(s);
      }
      else if (flush !== Z_BLOCK) { /* FULL_FLUSH or SYNC_FLUSH */

        trees._tr_stored_block(s, 0, 0, false);
        /* For a full flush, this empty block will be recognized
         * as a special marker by inflate_sync().
         */
        if (flush === Z_FULL_FLUSH) {
          /*** CLEAR_HASH(s); ***/             /* forget history */
          zero(s.head); // Fill with NIL (= 0);

          if (s.lookahead === 0) {
            s.strstart = 0;
            s.block_start = 0;
            s.insert = 0;
          }
        }
      }
      flush_pending(strm);
      if (strm.avail_out === 0) {
        s.last_flush = -1; /* avoid BUF_ERROR at next call, see above */
        return Z_OK;
      }
    }
  }
  //Assert(strm->avail_out > 0, "bug2");
  //if (strm.avail_out <= 0) { throw new Error("bug2");}

  if (flush !== Z_FINISH) { return Z_OK; }
  if (s.wrap <= 0) { return Z_STREAM_END; }

  /* Write the trailer */
  if (s.wrap === 2) {
    put_byte(s, strm.adler & 0xff);
    put_byte(s, (strm.adler >> 8) & 0xff);
    put_byte(s, (strm.adler >> 16) & 0xff);
    put_byte(s, (strm.adler >> 24) & 0xff);
    put_byte(s, strm.total_in & 0xff);
    put_byte(s, (strm.total_in >> 8) & 0xff);
    put_byte(s, (strm.total_in >> 16) & 0xff);
    put_byte(s, (strm.total_in >> 24) & 0xff);
  }
  else
  {
    putShortMSB(s, strm.adler >>> 16);
    putShortMSB(s, strm.adler & 0xffff);
  }

  flush_pending(strm);
  /* If avail_out is zero, the application will call deflate again
   * to flush the rest.
   */
  if (s.wrap > 0) { s.wrap = -s.wrap; }
  /* write the trailer only once! */
  return s.pending !== 0 ? Z_OK : Z_STREAM_END;
}

function deflateEnd(strm) {
  var status;

  if (!strm/*== Z_NULL*/ || !strm.state/*== Z_NULL*/) {
    return Z_STREAM_ERROR;
  }

  status = strm.state.status;
  if (status !== INIT_STATE &&
    status !== EXTRA_STATE &&
    status !== NAME_STATE &&
    status !== COMMENT_STATE &&
    status !== HCRC_STATE &&
    status !== BUSY_STATE &&
    status !== FINISH_STATE
  ) {
    return err(strm, Z_STREAM_ERROR);
  }

  strm.state = null;

  return status === BUSY_STATE ? err(strm, Z_DATA_ERROR) : Z_OK;
}

/* =========================================================================
 * Copy the source state to the destination state
 */
//function deflateCopy(dest, source) {
//
//}

exports.deflateInit = deflateInit;
exports.deflateInit2 = deflateInit2;
exports.deflateReset = deflateReset;
exports.deflateResetKeep = deflateResetKeep;
exports.deflateSetHeader = deflateSetHeader;
exports.deflate = deflate;
exports.deflateEnd = deflateEnd;
exports.deflateInfo = 'pako deflate (from Nodeca project)';

/* Not implemented
exports.deflateBound = deflateBound;
exports.deflateCopy = deflateCopy;
exports.deflateSetDictionary = deflateSetDictionary;
exports.deflateParams = deflateParams;
exports.deflatePending = deflatePending;
exports.deflatePrime = deflatePrime;
exports.deflateTune = deflateTune;
*/
},{"../utils/common":"/home/zefanja/Projekte/common-sword/node_modules/jszip/node_modules/pako/lib/utils/common.js","./adler32":"/home/zefanja/Projekte/common-sword/node_modules/jszip/node_modules/pako/lib/zlib/adler32.js","./crc32":"/home/zefanja/Projekte/common-sword/node_modules/jszip/node_modules/pako/lib/zlib/crc32.js","./messages":"/home/zefanja/Projekte/common-sword/node_modules/jszip/node_modules/pako/lib/zlib/messages.js","./trees":"/home/zefanja/Projekte/common-sword/node_modules/jszip/node_modules/pako/lib/zlib/trees.js"}],"/home/zefanja/Projekte/common-sword/node_modules/jszip/node_modules/pako/lib/zlib/gzheader.js":[function(require,module,exports){
'use strict';


function GZheader() {
  /* true if compressed data believed to be text */
  this.text       = 0;
  /* modification time */
  this.time       = 0;
  /* extra flags (not used when writing a gzip file) */
  this.xflags     = 0;
  /* operating system */
  this.os         = 0;
  /* pointer to extra field or Z_NULL if none */
  this.extra      = null;
  /* extra field length (valid if extra != Z_NULL) */
  this.extra_len  = 0; // Actually, we don't need it in JS,
                       // but leave for few code modifications

  //
  // Setup limits is not necessary because in js we should not preallocate memory 
  // for inflate use constant limit in 65536 bytes
  //

  /* space at extra (only when reading header) */
  // this.extra_max  = 0;
  /* pointer to zero-terminated file name or Z_NULL */
  this.name       = '';
  /* space at name (only when reading header) */
  // this.name_max   = 0;
  /* pointer to zero-terminated comment or Z_NULL */
  this.comment    = '';
  /* space at comment (only when reading header) */
  // this.comm_max   = 0;
  /* true if there was or will be a header crc */
  this.hcrc       = 0;
  /* true when done reading gzip header (not used when writing a gzip file) */
  this.done       = false;
}

module.exports = GZheader;
},{}],"/home/zefanja/Projekte/common-sword/node_modules/jszip/node_modules/pako/lib/zlib/inffast.js":[function(require,module,exports){
'use strict';

// See state defs from inflate.js
var BAD = 30;       /* got a data error -- remain here until reset */
var TYPE = 12;      /* i: waiting for type bits, including last-flag bit */

/*
   Decode literal, length, and distance codes and write out the resulting
   literal and match bytes until either not enough input or output is
   available, an end-of-block is encountered, or a data error is encountered.
   When large enough input and output buffers are supplied to inflate(), for
   example, a 16K input buffer and a 64K output buffer, more than 95% of the
   inflate execution time is spent in this routine.

   Entry assumptions:

        state.mode === LEN
        strm.avail_in >= 6
        strm.avail_out >= 258
        start >= strm.avail_out
        state.bits < 8

   On return, state.mode is one of:

        LEN -- ran out of enough output space or enough available input
        TYPE -- reached end of block code, inflate() to interpret next block
        BAD -- error in block data

   Notes:

    - The maximum input bits used by a length/distance pair is 15 bits for the
      length code, 5 bits for the length extra, 15 bits for the distance code,
      and 13 bits for the distance extra.  This totals 48 bits, or six bytes.
      Therefore if strm.avail_in >= 6, then there is enough input to avoid
      checking for available input while decoding.

    - The maximum bytes that a single length/distance pair can output is 258
      bytes, which is the maximum length that can be coded.  inflate_fast()
      requires strm.avail_out >= 258 for each loop to avoid checking for
      output space.
 */
module.exports = function inflate_fast(strm, start) {
  var state;
  var _in;                    /* local strm.input */
  var last;                   /* have enough input while in < last */
  var _out;                   /* local strm.output */
  var beg;                    /* inflate()'s initial strm.output */
  var end;                    /* while out < end, enough space available */
//#ifdef INFLATE_STRICT
  var dmax;                   /* maximum distance from zlib header */
//#endif
  var wsize;                  /* window size or zero if not using window */
  var whave;                  /* valid bytes in the window */
  var wnext;                  /* window write index */
  var window;                 /* allocated sliding window, if wsize != 0 */
  var hold;                   /* local strm.hold */
  var bits;                   /* local strm.bits */
  var lcode;                  /* local strm.lencode */
  var dcode;                  /* local strm.distcode */
  var lmask;                  /* mask for first level of length codes */
  var dmask;                  /* mask for first level of distance codes */
  var here;                   /* retrieved table entry */
  var op;                     /* code bits, operation, extra bits, or */
                              /*  window position, window bytes to copy */
  var len;                    /* match length, unused bytes */
  var dist;                   /* match distance */
  var from;                   /* where to copy match from */
  var from_source;


  var input, output; // JS specific, because we have no pointers

  /* copy state to local variables */
  state = strm.state;
  //here = state.here;
  _in = strm.next_in;
  input = strm.input;
  last = _in + (strm.avail_in - 5);
  _out = strm.next_out;
  output = strm.output;
  beg = _out - (start - strm.avail_out);
  end = _out + (strm.avail_out - 257);
//#ifdef INFLATE_STRICT
  dmax = state.dmax;
//#endif
  wsize = state.wsize;
  whave = state.whave;
  wnext = state.wnext;
  window = state.window;
  hold = state.hold;
  bits = state.bits;
  lcode = state.lencode;
  dcode = state.distcode;
  lmask = (1 << state.lenbits) - 1;
  dmask = (1 << state.distbits) - 1;


  /* decode literals and length/distances until end-of-block or not enough
     input data or output space */

  top:
  do {
    if (bits < 15) {
      hold += input[_in++] << bits;
      bits += 8;
      hold += input[_in++] << bits;
      bits += 8;
    }

    here = lcode[hold & lmask];

    dolen:
    for (;;) { // Goto emulation
      op = here >>> 24/*here.bits*/;
      hold >>>= op;
      bits -= op;
      op = (here >>> 16) & 0xff/*here.op*/;
      if (op === 0) {                          /* literal */
        //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
        //        "inflate:         literal '%c'\n" :
        //        "inflate:         literal 0x%02x\n", here.val));
        output[_out++] = here & 0xffff/*here.val*/;
      }
      else if (op & 16) {                     /* length base */
        len = here & 0xffff/*here.val*/;
        op &= 15;                           /* number of extra bits */
        if (op) {
          if (bits < op) {
            hold += input[_in++] << bits;
            bits += 8;
          }
          len += hold & ((1 << op) - 1);
          hold >>>= op;
          bits -= op;
        }
        //Tracevv((stderr, "inflate:         length %u\n", len));
        if (bits < 15) {
          hold += input[_in++] << bits;
          bits += 8;
          hold += input[_in++] << bits;
          bits += 8;
        }
        here = dcode[hold & dmask];

        dodist:
        for (;;) { // goto emulation
          op = here >>> 24/*here.bits*/;
          hold >>>= op;
          bits -= op;
          op = (here >>> 16) & 0xff/*here.op*/;

          if (op & 16) {                      /* distance base */
            dist = here & 0xffff/*here.val*/;
            op &= 15;                       /* number of extra bits */
            if (bits < op) {
              hold += input[_in++] << bits;
              bits += 8;
              if (bits < op) {
                hold += input[_in++] << bits;
                bits += 8;
              }
            }
            dist += hold & ((1 << op) - 1);
//#ifdef INFLATE_STRICT
            if (dist > dmax) {
              strm.msg = 'invalid distance too far back';
              state.mode = BAD;
              break top;
            }
//#endif
            hold >>>= op;
            bits -= op;
            //Tracevv((stderr, "inflate:         distance %u\n", dist));
            op = _out - beg;                /* max distance in output */
            if (dist > op) {                /* see if copy from window */
              op = dist - op;               /* distance back in window */
              if (op > whave) {
                if (state.sane) {
                  strm.msg = 'invalid distance too far back';
                  state.mode = BAD;
                  break top;
                }

// (!) This block is disabled in zlib defailts,
// don't enable it for binary compatibility
//#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
//                if (len <= op - whave) {
//                  do {
//                    output[_out++] = 0;
//                  } while (--len);
//                  continue top;
//                }
//                len -= op - whave;
//                do {
//                  output[_out++] = 0;
//                } while (--op > whave);
//                if (op === 0) {
//                  from = _out - dist;
//                  do {
//                    output[_out++] = output[from++];
//                  } while (--len);
//                  continue top;
//                }
//#endif
              }
              from = 0; // window index
              from_source = window;
              if (wnext === 0) {           /* very common case */
                from += wsize - op;
                if (op < len) {         /* some from window */
                  len -= op;
                  do {
                    output[_out++] = window[from++];
                  } while (--op);
                  from = _out - dist;  /* rest from output */
                  from_source = output;
                }
              }
              else if (wnext < op) {      /* wrap around window */
                from += wsize + wnext - op;
                op -= wnext;
                if (op < len) {         /* some from end of window */
                  len -= op;
                  do {
                    output[_out++] = window[from++];
                  } while (--op);
                  from = 0;
                  if (wnext < len) {  /* some from start of window */
                    op = wnext;
                    len -= op;
                    do {
                      output[_out++] = window[from++];
                    } while (--op);
                    from = _out - dist;      /* rest from output */
                    from_source = output;
                  }
                }
              }
              else {                      /* contiguous in window */
                from += wnext - op;
                if (op < len) {         /* some from window */
                  len -= op;
                  do {
                    output[_out++] = window[from++];
                  } while (--op);
                  from = _out - dist;  /* rest from output */
                  from_source = output;
                }
              }
              while (len > 2) {
                output[_out++] = from_source[from++];
                output[_out++] = from_source[from++];
                output[_out++] = from_source[from++];
                len -= 3;
              }
              if (len) {
                output[_out++] = from_source[from++];
                if (len > 1) {
                  output[_out++] = from_source[from++];
                }
              }
            }
            else {
              from = _out - dist;          /* copy direct from output */
              do {                        /* minimum length is three */
                output[_out++] = output[from++];
                output[_out++] = output[from++];
                output[_out++] = output[from++];
                len -= 3;
              } while (len > 2);
              if (len) {
                output[_out++] = output[from++];
                if (len > 1) {
                  output[_out++] = output[from++];
                }
              }
            }
          }
          else if ((op & 64) === 0) {          /* 2nd level distance code */
            here = dcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
            continue dodist;
          }
          else {
            strm.msg = 'invalid distance code';
            state.mode = BAD;
            break top;
          }

          break; // need to emulate goto via "continue"
        }
      }
      else if ((op & 64) === 0) {              /* 2nd level length code */
        here = lcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
        continue dolen;
      }
      else if (op & 32) {                     /* end-of-block */
        //Tracevv((stderr, "inflate:         end of block\n"));
        state.mode = TYPE;
        break top;
      }
      else {
        strm.msg = 'invalid literal/length code';
        state.mode = BAD;
        break top;
      }

      break; // need to emulate goto via "continue"
    }
  } while (_in < last && _out < end);

  /* return unused bytes (on entry, bits < 8, so in won't go too far back) */
  len = bits >> 3;
  _in -= len;
  bits -= len << 3;
  hold &= (1 << bits) - 1;

  /* update state and return */
  strm.next_in = _in;
  strm.next_out = _out;
  strm.avail_in = (_in < last ? 5 + (last - _in) : 5 - (_in - last));
  strm.avail_out = (_out < end ? 257 + (end - _out) : 257 - (_out - end));
  state.hold = hold;
  state.bits = bits;
  return;
};

},{}],"/home/zefanja/Projekte/common-sword/node_modules/jszip/node_modules/pako/lib/zlib/inflate.js":[function(require,module,exports){
'use strict';


var utils = require('../utils/common');
var adler32 = require('./adler32');
var crc32   = require('./crc32');
var inflate_fast = require('./inffast');
var inflate_table = require('./inftrees');

var CODES = 0;
var LENS = 1;
var DISTS = 2;

/* Public constants ==========================================================*/
/* ===========================================================================*/


/* Allowed flush values; see deflate() and inflate() below for details */
//var Z_NO_FLUSH      = 0;
//var Z_PARTIAL_FLUSH = 1;
//var Z_SYNC_FLUSH    = 2;
//var Z_FULL_FLUSH    = 3;
var Z_FINISH        = 4;
var Z_BLOCK         = 5;
var Z_TREES         = 6;


/* Return codes for the compression/decompression functions. Negative values
 * are errors, positive values are used for special but normal events.
 */
var Z_OK            = 0;
var Z_STREAM_END    = 1;
var Z_NEED_DICT     = 2;
//var Z_ERRNO         = -1;
var Z_STREAM_ERROR  = -2;
var Z_DATA_ERROR    = -3;
var Z_MEM_ERROR     = -4;
var Z_BUF_ERROR     = -5;
//var Z_VERSION_ERROR = -6;

/* The deflate compression method */
var Z_DEFLATED  = 8;


/* STATES ====================================================================*/
/* ===========================================================================*/


var    HEAD = 1;       /* i: waiting for magic header */
var    FLAGS = 2;      /* i: waiting for method and flags (gzip) */
var    TIME = 3;       /* i: waiting for modification time (gzip) */
var    OS = 4;         /* i: waiting for extra flags and operating system (gzip) */
var    EXLEN = 5;      /* i: waiting for extra length (gzip) */
var    EXTRA = 6;      /* i: waiting for extra bytes (gzip) */
var    NAME = 7;       /* i: waiting for end of file name (gzip) */
var    COMMENT = 8;    /* i: waiting for end of comment (gzip) */
var    HCRC = 9;       /* i: waiting for header crc (gzip) */
var    DICTID = 10;    /* i: waiting for dictionary check value */
var    DICT = 11;      /* waiting for inflateSetDictionary() call */
var        TYPE = 12;      /* i: waiting for type bits, including last-flag bit */
var        TYPEDO = 13;    /* i: same, but skip check to exit inflate on new block */
var        STORED = 14;    /* i: waiting for stored size (length and complement) */
var        COPY_ = 15;     /* i/o: same as COPY below, but only first time in */
var        COPY = 16;      /* i/o: waiting for input or output to copy stored block */
var        TABLE = 17;     /* i: waiting for dynamic block table lengths */
var        LENLENS = 18;   /* i: waiting for code length code lengths */
var        CODELENS = 19;  /* i: waiting for length/lit and distance code lengths */
var            LEN_ = 20;      /* i: same as LEN below, but only first time in */
var            LEN = 21;       /* i: waiting for length/lit/eob code */
var            LENEXT = 22;    /* i: waiting for length extra bits */
var            DIST = 23;      /* i: waiting for distance code */
var            DISTEXT = 24;   /* i: waiting for distance extra bits */
var            MATCH = 25;     /* o: waiting for output space to copy string */
var            LIT = 26;       /* o: waiting for output space to write literal */
var    CHECK = 27;     /* i: waiting for 32-bit check value */
var    LENGTH = 28;    /* i: waiting for 32-bit length (gzip) */
var    DONE = 29;      /* finished check, done -- remain here until reset */
var    BAD = 30;       /* got a data error -- remain here until reset */
var    MEM = 31;       /* got an inflate() memory error -- remain here until reset */
var    SYNC = 32;      /* looking for synchronization bytes to restart inflate() */

/* ===========================================================================*/



var ENOUGH_LENS = 852;
var ENOUGH_DISTS = 592;
//var ENOUGH =  (ENOUGH_LENS+ENOUGH_DISTS);

var MAX_WBITS = 15;
/* 32K LZ77 window */
var DEF_WBITS = MAX_WBITS;


function ZSWAP32(q) {
  return  (((q >>> 24) & 0xff) +
          ((q >>> 8) & 0xff00) +
          ((q & 0xff00) << 8) +
          ((q & 0xff) << 24));
}


function InflateState() {
  this.mode = 0;             /* current inflate mode */
  this.last = false;          /* true if processing last block */
  this.wrap = 0;              /* bit 0 true for zlib, bit 1 true for gzip */
  this.havedict = false;      /* true if dictionary provided */
  this.flags = 0;             /* gzip header method and flags (0 if zlib) */
  this.dmax = 0;              /* zlib header max distance (INFLATE_STRICT) */
  this.check = 0;             /* protected copy of check value */
  this.total = 0;             /* protected copy of output count */
  // TODO: may be {}
  this.head = null;           /* where to save gzip header information */

  /* sliding window */
  this.wbits = 0;             /* log base 2 of requested window size */
  this.wsize = 0;             /* window size or zero if not using window */
  this.whave = 0;             /* valid bytes in the window */
  this.wnext = 0;             /* window write index */
  this.window = null;         /* allocated sliding window, if needed */

  /* bit accumulator */
  this.hold = 0;              /* input bit accumulator */
  this.bits = 0;              /* number of bits in "in" */

  /* for string and stored block copying */
  this.length = 0;            /* literal or length of data to copy */
  this.offset = 0;            /* distance back to copy string from */

  /* for table and code decoding */
  this.extra = 0;             /* extra bits needed */

  /* fixed and dynamic code tables */
  this.lencode = null;          /* starting table for length/literal codes */
  this.distcode = null;         /* starting table for distance codes */
  this.lenbits = 0;           /* index bits for lencode */
  this.distbits = 0;          /* index bits for distcode */

  /* dynamic table building */
  this.ncode = 0;             /* number of code length code lengths */
  this.nlen = 0;              /* number of length code lengths */
  this.ndist = 0;             /* number of distance code lengths */
  this.have = 0;              /* number of code lengths in lens[] */
  this.next = null;              /* next available space in codes[] */

  this.lens = new utils.Buf16(320); /* temporary storage for code lengths */
  this.work = new utils.Buf16(288); /* work area for code table building */

  /*
   because we don't have pointers in js, we use lencode and distcode directly
   as buffers so we don't need codes
  */
  //this.codes = new utils.Buf32(ENOUGH);       /* space for code tables */
  this.lendyn = null;              /* dynamic table for length/literal codes (JS specific) */
  this.distdyn = null;             /* dynamic table for distance codes (JS specific) */
  this.sane = 0;                   /* if false, allow invalid distance too far */
  this.back = 0;                   /* bits back of last unprocessed length/lit */
  this.was = 0;                    /* initial length of match */
}

function inflateResetKeep(strm) {
  var state;

  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;
  strm.total_in = strm.total_out = state.total = 0;
  strm.msg = ''; /*Z_NULL*/
  if (state.wrap) {       /* to support ill-conceived Java test suite */
    strm.adler = state.wrap & 1;
  }
  state.mode = HEAD;
  state.last = 0;
  state.havedict = 0;
  state.dmax = 32768;
  state.head = null/*Z_NULL*/;
  state.hold = 0;
  state.bits = 0;
  //state.lencode = state.distcode = state.next = state.codes;
  state.lencode = state.lendyn = new utils.Buf32(ENOUGH_LENS);
  state.distcode = state.distdyn = new utils.Buf32(ENOUGH_DISTS);

  state.sane = 1;
  state.back = -1;
  //Tracev((stderr, "inflate: reset\n"));
  return Z_OK;
}

function inflateReset(strm) {
  var state;

  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;
  state.wsize = 0;
  state.whave = 0;
  state.wnext = 0;
  return inflateResetKeep(strm);

}

function inflateReset2(strm, windowBits) {
  var wrap;
  var state;

  /* get the state */
  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;

  /* extract wrap request from windowBits parameter */
  if (windowBits < 0) {
    wrap = 0;
    windowBits = -windowBits;
  }
  else {
    wrap = (windowBits >> 4) + 1;
    if (windowBits < 48) {
      windowBits &= 15;
    }
  }

  /* set number of window bits, free window if different */
  if (windowBits && (windowBits < 8 || windowBits > 15)) {
    return Z_STREAM_ERROR;
  }
  if (state.window !== null && state.wbits !== windowBits) {
    state.window = null;
  }

  /* update state and reset the rest of it */
  state.wrap = wrap;
  state.wbits = windowBits;
  return inflateReset(strm);
}

function inflateInit2(strm, windowBits) {
  var ret;
  var state;

  if (!strm) { return Z_STREAM_ERROR; }
  //strm.msg = Z_NULL;                 /* in case we return an error */

  state = new InflateState();

  //if (state === Z_NULL) return Z_MEM_ERROR;
  //Tracev((stderr, "inflate: allocated\n"));
  strm.state = state;
  state.window = null/*Z_NULL*/;
  ret = inflateReset2(strm, windowBits);
  if (ret !== Z_OK) {
    strm.state = null/*Z_NULL*/;
  }
  return ret;
}

function inflateInit(strm) {
  return inflateInit2(strm, DEF_WBITS);
}


/*
 Return state with length and distance decoding tables and index sizes set to
 fixed code decoding.  Normally this returns fixed tables from inffixed.h.
 If BUILDFIXED is defined, then instead this routine builds the tables the
 first time it's called, and returns those tables the first time and
 thereafter.  This reduces the size of the code by about 2K bytes, in
 exchange for a little execution time.  However, BUILDFIXED should not be
 used for threaded applications, since the rewriting of the tables and virgin
 may not be thread-safe.
 */
var virgin = true;

var lenfix, distfix; // We have no pointers in JS, so keep tables separate

function fixedtables(state) {
  /* build fixed huffman tables if first call (may not be thread safe) */
  if (virgin) {
    var sym;

    lenfix = new utils.Buf32(512);
    distfix = new utils.Buf32(32);

    /* literal/length table */
    sym = 0;
    while (sym < 144) { state.lens[sym++] = 8; }
    while (sym < 256) { state.lens[sym++] = 9; }
    while (sym < 280) { state.lens[sym++] = 7; }
    while (sym < 288) { state.lens[sym++] = 8; }

    inflate_table(LENS,  state.lens, 0, 288, lenfix,   0, state.work, {bits: 9});

    /* distance table */
    sym = 0;
    while (sym < 32) { state.lens[sym++] = 5; }

    inflate_table(DISTS, state.lens, 0, 32,   distfix, 0, state.work, {bits: 5});

    /* do this just once */
    virgin = false;
  }

  state.lencode = lenfix;
  state.lenbits = 9;
  state.distcode = distfix;
  state.distbits = 5;
}


/*
 Update the window with the last wsize (normally 32K) bytes written before
 returning.  If window does not exist yet, create it.  This is only called
 when a window is already in use, or when output has been written during this
 inflate call, but the end of the deflate stream has not been reached yet.
 It is also called to create a window for dictionary data when a dictionary
 is loaded.

 Providing output buffers larger than 32K to inflate() should provide a speed
 advantage, since only the last 32K of output is copied to the sliding window
 upon return from inflate(), and since all distances after the first 32K of
 output will fall in the output data, making match copies simpler and faster.
 The advantage may be dependent on the size of the processor's data caches.
 */
function updatewindow(strm, src, end, copy) {
  var dist;
  var state = strm.state;

  /* if it hasn't been done already, allocate space for the window */
  if (state.window === null) {
    state.wsize = 1 << state.wbits;
    state.wnext = 0;
    state.whave = 0;

    state.window = new utils.Buf8(state.wsize);
  }

  /* copy state->wsize or less output bytes into the circular window */
  if (copy >= state.wsize) {
    utils.arraySet(state.window,src, end - state.wsize, state.wsize, 0);
    state.wnext = 0;
    state.whave = state.wsize;
  }
  else {
    dist = state.wsize - state.wnext;
    if (dist > copy) {
      dist = copy;
    }
    //zmemcpy(state->window + state->wnext, end - copy, dist);
    utils.arraySet(state.window,src, end - copy, dist, state.wnext);
    copy -= dist;
    if (copy) {
      //zmemcpy(state->window, end - copy, copy);
      utils.arraySet(state.window,src, end - copy, copy, 0);
      state.wnext = copy;
      state.whave = state.wsize;
    }
    else {
      state.wnext += dist;
      if (state.wnext === state.wsize) { state.wnext = 0; }
      if (state.whave < state.wsize) { state.whave += dist; }
    }
  }
  return 0;
}

function inflate(strm, flush) {
  var state;
  var input, output;          // input/output buffers
  var next;                   /* next input INDEX */
  var put;                    /* next output INDEX */
  var have, left;             /* available input and output */
  var hold;                   /* bit buffer */
  var bits;                   /* bits in bit buffer */
  var _in, _out;              /* save starting available input and output */
  var copy;                   /* number of stored or match bytes to copy */
  var from;                   /* where to copy match bytes from */
  var from_source;
  var here = 0;               /* current decoding table entry */
  var here_bits, here_op, here_val; // paked "here" denormalized (JS specific)
  //var last;                   /* parent table entry */
  var last_bits, last_op, last_val; // paked "last" denormalized (JS specific)
  var len;                    /* length to copy for repeats, bits to drop */
  var ret;                    /* return code */
  var hbuf = new utils.Buf8(4);    /* buffer for gzip header crc calculation */
  var opts;

  var n; // temporary var for NEED_BITS

  var order = /* permutation of code lengths */
    [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];


  if (!strm || !strm.state || !strm.output ||
      (!strm.input && strm.avail_in !== 0)) {
    return Z_STREAM_ERROR;
  }

  state = strm.state;
  if (state.mode === TYPE) { state.mode = TYPEDO; }    /* skip check */


  //--- LOAD() ---
  put = strm.next_out;
  output = strm.output;
  left = strm.avail_out;
  next = strm.next_in;
  input = strm.input;
  have = strm.avail_in;
  hold = state.hold;
  bits = state.bits;
  //---

  _in = have;
  _out = left;
  ret = Z_OK;

  inf_leave: // goto emulation
  for (;;) {
    switch (state.mode) {
    case HEAD:
      if (state.wrap === 0) {
        state.mode = TYPEDO;
        break;
      }
      //=== NEEDBITS(16);
      while (bits < 16) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
      }
      //===//
      if ((state.wrap & 2) && hold === 0x8b1f) {  /* gzip header */
        state.check = 0/*crc32(0L, Z_NULL, 0)*/;
        //=== CRC2(state.check, hold);
        hbuf[0] = hold & 0xff;
        hbuf[1] = (hold >>> 8) & 0xff;
        state.check = crc32(state.check, hbuf, 2, 0);
        //===//

        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = FLAGS;
        break;
      }
      state.flags = 0;           /* expect zlib header */
      if (state.head) {
        state.head.done = false;
      }
      if (!(state.wrap & 1) ||   /* check if zlib header allowed */
        (((hold & 0xff)/*BITS(8)*/ << 8) + (hold >> 8)) % 31) {
        strm.msg = 'incorrect header check';
        state.mode = BAD;
        break;
      }
      if ((hold & 0x0f)/*BITS(4)*/ !== Z_DEFLATED) {
        strm.msg = 'unknown compression method';
        state.mode = BAD;
        break;
      }
      //--- DROPBITS(4) ---//
      hold >>>= 4;
      bits -= 4;
      //---//
      len = (hold & 0x0f)/*BITS(4)*/ + 8;
      if (state.wbits === 0) {
        state.wbits = len;
      }
      else if (len > state.wbits) {
        strm.msg = 'invalid window size';
        state.mode = BAD;
        break;
      }
      state.dmax = 1 << len;
      //Tracev((stderr, "inflate:   zlib header ok\n"));
      strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
      state.mode = hold & 0x200 ? DICTID : TYPE;
      //=== INITBITS();
      hold = 0;
      bits = 0;
      //===//
      break;
    case FLAGS:
      //=== NEEDBITS(16); */
      while (bits < 16) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
      }
      //===//
      state.flags = hold;
      if ((state.flags & 0xff) !== Z_DEFLATED) {
        strm.msg = 'unknown compression method';
        state.mode = BAD;
        break;
      }
      if (state.flags & 0xe000) {
        strm.msg = 'unknown header flags set';
        state.mode = BAD;
        break;
      }
      if (state.head) {
        state.head.text = ((hold >> 8) & 1);
      }
      if (state.flags & 0x0200) {
        //=== CRC2(state.check, hold);
        hbuf[0] = hold & 0xff;
        hbuf[1] = (hold >>> 8) & 0xff;
        state.check = crc32(state.check, hbuf, 2, 0);
        //===//
      }
      //=== INITBITS();
      hold = 0;
      bits = 0;
      //===//
      state.mode = TIME;
      /* falls through */
    case TIME:
      //=== NEEDBITS(32); */
      while (bits < 32) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
      }
      //===//
      if (state.head) {
        state.head.time = hold;
      }
      if (state.flags & 0x0200) {
        //=== CRC4(state.check, hold)
        hbuf[0] = hold & 0xff;
        hbuf[1] = (hold >>> 8) & 0xff;
        hbuf[2] = (hold >>> 16) & 0xff;
        hbuf[3] = (hold >>> 24) & 0xff;
        state.check = crc32(state.check, hbuf, 4, 0);
        //===
      }
      //=== INITBITS();
      hold = 0;
      bits = 0;
      //===//
      state.mode = OS;
      /* falls through */
    case OS:
      //=== NEEDBITS(16); */
      while (bits < 16) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
      }
      //===//
      if (state.head) {
        state.head.xflags = (hold & 0xff);
        state.head.os = (hold >> 8);
      }
      if (state.flags & 0x0200) {
        //=== CRC2(state.check, hold);
        hbuf[0] = hold & 0xff;
        hbuf[1] = (hold >>> 8) & 0xff;
        state.check = crc32(state.check, hbuf, 2, 0);
        //===//
      }
      //=== INITBITS();
      hold = 0;
      bits = 0;
      //===//
      state.mode = EXLEN;
      /* falls through */
    case EXLEN:
      if (state.flags & 0x0400) {
        //=== NEEDBITS(16); */
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.length = hold;
        if (state.head) {
          state.head.extra_len = hold;
        }
        if (state.flags & 0x0200) {
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          state.check = crc32(state.check, hbuf, 2, 0);
          //===//
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
      }
      else if (state.head) {
        state.head.extra = null/*Z_NULL*/;
      }
      state.mode = EXTRA;
      /* falls through */
    case EXTRA:
      if (state.flags & 0x0400) {
        copy = state.length;
        if (copy > have) { copy = have; }
        if (copy) {
          if (state.head) {
            len = state.head.extra_len - state.length;
            if (!state.head.extra) {
              // Use untyped array for more conveniend processing later
              state.head.extra = new Array(state.head.extra_len);
            }
            utils.arraySet(
              state.head.extra,
              input,
              next,
              // extra field is limited to 65536 bytes
              // - no need for additional size check
              copy,
              /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
              len
            );
            //zmemcpy(state.head.extra + len, next,
            //        len + copy > state.head.extra_max ?
            //        state.head.extra_max - len : copy);
          }
          if (state.flags & 0x0200) {
            state.check = crc32(state.check, input, copy, next);
          }
          have -= copy;
          next += copy;
          state.length -= copy;
        }
        if (state.length) { break inf_leave; }
      }
      state.length = 0;
      state.mode = NAME;
      /* falls through */
    case NAME:
      if (state.flags & 0x0800) {
        if (have === 0) { break inf_leave; }
        copy = 0;
        do {
          // TODO: 2 or 1 bytes?
          len = input[next + copy++];
          /* use constant limit because in js we should not preallocate memory */
          if (state.head && len &&
              (state.length < 65536 /*state.head.name_max*/)) {
            state.head.name += String.fromCharCode(len);
          }
        } while (len && copy < have);

        if (state.flags & 0x0200) {
          state.check = crc32(state.check, input, copy, next);
        }
        have -= copy;
        next += copy;
        if (len) { break inf_leave; }
      }
      else if (state.head) {
        state.head.name = null;
      }
      state.length = 0;
      state.mode = COMMENT;
      /* falls through */
    case COMMENT:
      if (state.flags & 0x1000) {
        if (have === 0) { break inf_leave; }
        copy = 0;
        do {
          len = input[next + copy++];
          /* use constant limit because in js we should not preallocate memory */
          if (state.head && len &&
              (state.length < 65536 /*state.head.comm_max*/)) {
            state.head.comment += String.fromCharCode(len);
          }
        } while (len && copy < have);
        if (state.flags & 0x0200) {
          state.check = crc32(state.check, input, copy, next);
        }
        have -= copy;
        next += copy;
        if (len) { break inf_leave; }
      }
      else if (state.head) {
        state.head.comment = null;
      }
      state.mode = HCRC;
      /* falls through */
    case HCRC:
      if (state.flags & 0x0200) {
        //=== NEEDBITS(16); */
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if (hold !== (state.check & 0xffff)) {
          strm.msg = 'header crc mismatch';
          state.mode = BAD;
          break;
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
      }
      if (state.head) {
        state.head.hcrc = ((state.flags >> 9) & 1);
        state.head.done = true;
      }
      strm.adler = state.check = 0 /*crc32(0L, Z_NULL, 0)*/;
      state.mode = TYPE;
      break;
    case DICTID:
      //=== NEEDBITS(32); */
      while (bits < 32) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
      }
      //===//
      strm.adler = state.check = ZSWAP32(hold);
      //=== INITBITS();
      hold = 0;
      bits = 0;
      //===//
      state.mode = DICT;
      /* falls through */
    case DICT:
      if (state.havedict === 0) {
        //--- RESTORE() ---
        strm.next_out = put;
        strm.avail_out = left;
        strm.next_in = next;
        strm.avail_in = have;
        state.hold = hold;
        state.bits = bits;
        //---
        return Z_NEED_DICT;
      }
      strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
      state.mode = TYPE;
      /* falls through */
    case TYPE:
      if (flush === Z_BLOCK || flush === Z_TREES) { break inf_leave; }
      /* falls through */
    case TYPEDO:
      if (state.last) {
        //--- BYTEBITS() ---//
        hold >>>= bits & 7;
        bits -= bits & 7;
        //---//
        state.mode = CHECK;
        break;
      }
      //=== NEEDBITS(3); */
      while (bits < 3) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
      }
      //===//
      state.last = (hold & 0x01)/*BITS(1)*/;
      //--- DROPBITS(1) ---//
      hold >>>= 1;
      bits -= 1;
      //---//

      switch ((hold & 0x03)/*BITS(2)*/) {
      case 0:                             /* stored block */
        //Tracev((stderr, "inflate:     stored block%s\n",
        //        state.last ? " (last)" : ""));
        state.mode = STORED;
        break;
      case 1:                             /* fixed block */
        fixedtables(state);
        //Tracev((stderr, "inflate:     fixed codes block%s\n",
        //        state.last ? " (last)" : ""));
        state.mode = LEN_;             /* decode codes */
        if (flush === Z_TREES) {
          //--- DROPBITS(2) ---//
          hold >>>= 2;
          bits -= 2;
          //---//
          break inf_leave;
        }
        break;
      case 2:                             /* dynamic block */
        //Tracev((stderr, "inflate:     dynamic codes block%s\n",
        //        state.last ? " (last)" : ""));
        state.mode = TABLE;
        break;
      case 3:
        strm.msg = 'invalid block type';
        state.mode = BAD;
      }
      //--- DROPBITS(2) ---//
      hold >>>= 2;
      bits -= 2;
      //---//
      break;
    case STORED:
      //--- BYTEBITS() ---// /* go to byte boundary */
      hold >>>= bits & 7;
      bits -= bits & 7;
      //---//
      //=== NEEDBITS(32); */
      while (bits < 32) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
      }
      //===//
      if ((hold & 0xffff) !== ((hold >>> 16) ^ 0xffff)) {
        strm.msg = 'invalid stored block lengths';
        state.mode = BAD;
        break;
      }
      state.length = hold & 0xffff;
      //Tracev((stderr, "inflate:       stored length %u\n",
      //        state.length));
      //=== INITBITS();
      hold = 0;
      bits = 0;
      //===//
      state.mode = COPY_;
      if (flush === Z_TREES) { break inf_leave; }
      /* falls through */
    case COPY_:
      state.mode = COPY;
      /* falls through */
    case COPY:
      copy = state.length;
      if (copy) {
        if (copy > have) { copy = have; }
        if (copy > left) { copy = left; }
        if (copy === 0) { break inf_leave; }
        //--- zmemcpy(put, next, copy); ---
        utils.arraySet(output, input, next, copy, put);
        //---//
        have -= copy;
        next += copy;
        left -= copy;
        put += copy;
        state.length -= copy;
        break;
      }
      //Tracev((stderr, "inflate:       stored end\n"));
      state.mode = TYPE;
      break;
    case TABLE:
      //=== NEEDBITS(14); */
      while (bits < 14) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
      }
      //===//
      state.nlen = (hold & 0x1f)/*BITS(5)*/ + 257;
      //--- DROPBITS(5) ---//
      hold >>>= 5;
      bits -= 5;
      //---//
      state.ndist = (hold & 0x1f)/*BITS(5)*/ + 1;
      //--- DROPBITS(5) ---//
      hold >>>= 5;
      bits -= 5;
      //---//
      state.ncode = (hold & 0x0f)/*BITS(4)*/ + 4;
      //--- DROPBITS(4) ---//
      hold >>>= 4;
      bits -= 4;
      //---//
//#ifndef PKZIP_BUG_WORKAROUND
      if (state.nlen > 286 || state.ndist > 30) {
        strm.msg = 'too many length or distance symbols';
        state.mode = BAD;
        break;
      }
//#endif
      //Tracev((stderr, "inflate:       table sizes ok\n"));
      state.have = 0;
      state.mode = LENLENS;
      /* falls through */
    case LENLENS:
      while (state.have < state.ncode) {
        //=== NEEDBITS(3);
        while (bits < 3) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.lens[order[state.have++]] = (hold & 0x07);//BITS(3);
        //--- DROPBITS(3) ---//
        hold >>>= 3;
        bits -= 3;
        //---//
      }
      while (state.have < 19) {
        state.lens[order[state.have++]] = 0;
      }
      // We have separate tables & no pointers. 2 commented lines below not needed.
      //state.next = state.codes;
      //state.lencode = state.next;
      // Switch to use dynamic table
      state.lencode = state.lendyn;
      state.lenbits = 7;

      opts = {bits: state.lenbits};
      ret = inflate_table(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
      state.lenbits = opts.bits;

      if (ret) {
        strm.msg = 'invalid code lengths set';
        state.mode = BAD;
        break;
      }
      //Tracev((stderr, "inflate:       code lengths ok\n"));
      state.have = 0;
      state.mode = CODELENS;
      /* falls through */
    case CODELENS:
      while (state.have < state.nlen + state.ndist) {
        for (;;) {
          here = state.lencode[hold & ((1 << state.lenbits) - 1)];/*BITS(state.lenbits)*/
          here_bits = here >>> 24;
          here_op = (here >>> 16) & 0xff;
          here_val = here & 0xffff;

          if ((here_bits) <= bits) { break; }
          //--- PULLBYTE() ---//
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
          //---//
        }
        if (here_val < 16) {
          //--- DROPBITS(here.bits) ---//
          hold >>>= here_bits;
          bits -= here_bits;
          //---//
          state.lens[state.have++] = here_val;
        }
        else {
          if (here_val === 16) {
            //=== NEEDBITS(here.bits + 2);
            n = here_bits + 2;
            while (bits < n) {
              if (have === 0) { break inf_leave; }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            //===//
            //--- DROPBITS(here.bits) ---//
            hold >>>= here_bits;
            bits -= here_bits;
            //---//
            if (state.have === 0) {
              strm.msg = 'invalid bit length repeat';
              state.mode = BAD;
              break;
            }
            len = state.lens[state.have - 1];
            copy = 3 + (hold & 0x03);//BITS(2);
            //--- DROPBITS(2) ---//
            hold >>>= 2;
            bits -= 2;
            //---//
          }
          else if (here_val === 17) {
            //=== NEEDBITS(here.bits + 3);
            n = here_bits + 3;
            while (bits < n) {
              if (have === 0) { break inf_leave; }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            //===//
            //--- DROPBITS(here.bits) ---//
            hold >>>= here_bits;
            bits -= here_bits;
            //---//
            len = 0;
            copy = 3 + (hold & 0x07);//BITS(3);
            //--- DROPBITS(3) ---//
            hold >>>= 3;
            bits -= 3;
            //---//
          }
          else {
            //=== NEEDBITS(here.bits + 7);
            n = here_bits + 7;
            while (bits < n) {
              if (have === 0) { break inf_leave; }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            //===//
            //--- DROPBITS(here.bits) ---//
            hold >>>= here_bits;
            bits -= here_bits;
            //---//
            len = 0;
            copy = 11 + (hold & 0x7f);//BITS(7);
            //--- DROPBITS(7) ---//
            hold >>>= 7;
            bits -= 7;
            //---//
          }
          if (state.have + copy > state.nlen + state.ndist) {
            strm.msg = 'invalid bit length repeat';
            state.mode = BAD;
            break;
          }
          while (copy--) {
            state.lens[state.have++] = len;
          }
        }
      }

      /* handle error breaks in while */
      if (state.mode === BAD) { break; }

      /* check for end-of-block code (better have one) */
      if (state.lens[256] === 0) {
        strm.msg = 'invalid code -- missing end-of-block';
        state.mode = BAD;
        break;
      }

      /* build code tables -- note: do not change the lenbits or distbits
         values here (9 and 6) without reading the comments in inftrees.h
         concerning the ENOUGH constants, which depend on those values */
      state.lenbits = 9;

      opts = {bits: state.lenbits};
      ret = inflate_table(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
      // We have separate tables & no pointers. 2 commented lines below not needed.
      // state.next_index = opts.table_index;
      state.lenbits = opts.bits;
      // state.lencode = state.next;

      if (ret) {
        strm.msg = 'invalid literal/lengths set';
        state.mode = BAD;
        break;
      }

      state.distbits = 6;
      //state.distcode.copy(state.codes);
      // Switch to use dynamic table
      state.distcode = state.distdyn;
      opts = {bits: state.distbits};
      ret = inflate_table(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
      // We have separate tables & no pointers. 2 commented lines below not needed.
      // state.next_index = opts.table_index;
      state.distbits = opts.bits;
      // state.distcode = state.next;

      if (ret) {
        strm.msg = 'invalid distances set';
        state.mode = BAD;
        break;
      }
      //Tracev((stderr, 'inflate:       codes ok\n'));
      state.mode = LEN_;
      if (flush === Z_TREES) { break inf_leave; }
      /* falls through */
    case LEN_:
      state.mode = LEN;
      /* falls through */
    case LEN:
      if (have >= 6 && left >= 258) {
        //--- RESTORE() ---
        strm.next_out = put;
        strm.avail_out = left;
        strm.next_in = next;
        strm.avail_in = have;
        state.hold = hold;
        state.bits = bits;
        //---
        inflate_fast(strm, _out);
        //--- LOAD() ---
        put = strm.next_out;
        output = strm.output;
        left = strm.avail_out;
        next = strm.next_in;
        input = strm.input;
        have = strm.avail_in;
        hold = state.hold;
        bits = state.bits;
        //---

        if (state.mode === TYPE) {
          state.back = -1;
        }
        break;
      }
      state.back = 0;
      for (;;) {
        here = state.lencode[hold & ((1 << state.lenbits) -1)];  /*BITS(state.lenbits)*/
        here_bits = here >>> 24;
        here_op = (here >>> 16) & 0xff;
        here_val = here & 0xffff;

        if (here_bits <= bits) { break; }
        //--- PULLBYTE() ---//
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
        //---//
      }
      if (here_op && (here_op & 0xf0) === 0) {
        last_bits = here_bits;
        last_op = here_op;
        last_val = here_val;
        for (;;) {
          here = state.lencode[last_val +
                  ((hold & ((1 << (last_bits + last_op)) -1))/*BITS(last.bits + last.op)*/ >> last_bits)];
          here_bits = here >>> 24;
          here_op = (here >>> 16) & 0xff;
          here_val = here & 0xffff;

          if ((last_bits + here_bits) <= bits) { break; }
          //--- PULLBYTE() ---//
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
          //---//
        }
        //--- DROPBITS(last.bits) ---//
        hold >>>= last_bits;
        bits -= last_bits;
        //---//
        state.back += last_bits;
      }
      //--- DROPBITS(here.bits) ---//
      hold >>>= here_bits;
      bits -= here_bits;
      //---//
      state.back += here_bits;
      state.length = here_val;
      if (here_op === 0) {
        //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
        //        "inflate:         literal '%c'\n" :
        //        "inflate:         literal 0x%02x\n", here.val));
        state.mode = LIT;
        break;
      }
      if (here_op & 32) {
        //Tracevv((stderr, "inflate:         end of block\n"));
        state.back = -1;
        state.mode = TYPE;
        break;
      }
      if (here_op & 64) {
        strm.msg = 'invalid literal/length code';
        state.mode = BAD;
        break;
      }
      state.extra = here_op & 15;
      state.mode = LENEXT;
      /* falls through */
    case LENEXT:
      if (state.extra) {
        //=== NEEDBITS(state.extra);
        n = state.extra;
        while (bits < n) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.length += hold & ((1 << state.extra) -1)/*BITS(state.extra)*/;
        //--- DROPBITS(state.extra) ---//
        hold >>>= state.extra;
        bits -= state.extra;
        //---//
        state.back += state.extra;
      }
      //Tracevv((stderr, "inflate:         length %u\n", state.length));
      state.was = state.length;
      state.mode = DIST;
      /* falls through */
    case DIST:
      for (;;) {
        here = state.distcode[hold & ((1 << state.distbits) -1)];/*BITS(state.distbits)*/
        here_bits = here >>> 24;
        here_op = (here >>> 16) & 0xff;
        here_val = here & 0xffff;

        if ((here_bits) <= bits) { break; }
        //--- PULLBYTE() ---//
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
        //---//
      }
      if ((here_op & 0xf0) === 0) {
        last_bits = here_bits;
        last_op = here_op;
        last_val = here_val;
        for (;;) {
          here = state.distcode[last_val +
                  ((hold & ((1 << (last_bits + last_op)) -1))/*BITS(last.bits + last.op)*/ >> last_bits)];
          here_bits = here >>> 24;
          here_op = (here >>> 16) & 0xff;
          here_val = here & 0xffff;

          if ((last_bits + here_bits) <= bits) { break; }
          //--- PULLBYTE() ---//
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
          //---//
        }
        //--- DROPBITS(last.bits) ---//
        hold >>>= last_bits;
        bits -= last_bits;
        //---//
        state.back += last_bits;
      }
      //--- DROPBITS(here.bits) ---//
      hold >>>= here_bits;
      bits -= here_bits;
      //---//
      state.back += here_bits;
      if (here_op & 64) {
        strm.msg = 'invalid distance code';
        state.mode = BAD;
        break;
      }
      state.offset = here_val;
      state.extra = (here_op) & 15;
      state.mode = DISTEXT;
      /* falls through */
    case DISTEXT:
      if (state.extra) {
        //=== NEEDBITS(state.extra);
        n = state.extra;
        while (bits < n) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.offset += hold & ((1 << state.extra) -1)/*BITS(state.extra)*/;
        //--- DROPBITS(state.extra) ---//
        hold >>>= state.extra;
        bits -= state.extra;
        //---//
        state.back += state.extra;
      }
//#ifdef INFLATE_STRICT
      if (state.offset > state.dmax) {
        strm.msg = 'invalid distance too far back';
        state.mode = BAD;
        break;
      }
//#endif
      //Tracevv((stderr, "inflate:         distance %u\n", state.offset));
      state.mode = MATCH;
      /* falls through */
    case MATCH:
      if (left === 0) { break inf_leave; }
      copy = _out - left;
      if (state.offset > copy) {         /* copy from window */
        copy = state.offset - copy;
        if (copy > state.whave) {
          if (state.sane) {
            strm.msg = 'invalid distance too far back';
            state.mode = BAD;
            break;
          }
// (!) This block is disabled in zlib defailts,
// don't enable it for binary compatibility
//#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
//          Trace((stderr, "inflate.c too far\n"));
//          copy -= state.whave;
//          if (copy > state.length) { copy = state.length; }
//          if (copy > left) { copy = left; }
//          left -= copy;
//          state.length -= copy;
//          do {
//            output[put++] = 0;
//          } while (--copy);
//          if (state.length === 0) { state.mode = LEN; }
//          break;
//#endif
        }
        if (copy > state.wnext) {
          copy -= state.wnext;
          from = state.wsize - copy;
        }
        else {
          from = state.wnext - copy;
        }
        if (copy > state.length) { copy = state.length; }
        from_source = state.window;
      }
      else {                              /* copy from output */
        from_source = output;
        from = put - state.offset;
        copy = state.length;
      }
      if (copy > left) { copy = left; }
      left -= copy;
      state.length -= copy;
      do {
        output[put++] = from_source[from++];
      } while (--copy);
      if (state.length === 0) { state.mode = LEN; }
      break;
    case LIT:
      if (left === 0) { break inf_leave; }
      output[put++] = state.length;
      left--;
      state.mode = LEN;
      break;
    case CHECK:
      if (state.wrap) {
        //=== NEEDBITS(32);
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          // Use '|' insdead of '+' to make sure that result is signed
          hold |= input[next++] << bits;
          bits += 8;
        }
        //===//
        _out -= left;
        strm.total_out += _out;
        state.total += _out;
        if (_out) {
          strm.adler = state.check =
              /*UPDATE(state.check, put - _out, _out);*/
              (state.flags ? crc32(state.check, output, _out, put - _out) : adler32(state.check, output, _out, put - _out));

        }
        _out = left;
        // NB: crc32 stored as signed 32-bit int, ZSWAP32 returns signed too
        if ((state.flags ? hold : ZSWAP32(hold)) !== state.check) {
          strm.msg = 'incorrect data check';
          state.mode = BAD;
          break;
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        //Tracev((stderr, "inflate:   check matches trailer\n"));
      }
      state.mode = LENGTH;
      /* falls through */
    case LENGTH:
      if (state.wrap && state.flags) {
        //=== NEEDBITS(32);
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if (hold !== (state.total & 0xffffffff)) {
          strm.msg = 'incorrect length check';
          state.mode = BAD;
          break;
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        //Tracev((stderr, "inflate:   length matches trailer\n"));
      }
      state.mode = DONE;
      /* falls through */
    case DONE:
      ret = Z_STREAM_END;
      break inf_leave;
    case BAD:
      ret = Z_DATA_ERROR;
      break inf_leave;
    case MEM:
      return Z_MEM_ERROR;
    case SYNC:
      /* falls through */
    default:
      return Z_STREAM_ERROR;
    }
  }

  // inf_leave <- here is real place for "goto inf_leave", emulated via "break inf_leave"

  /*
     Return from inflate(), updating the total counts and the check value.
     If there was no progress during the inflate() call, return a buffer
     error.  Call updatewindow() to create and/or update the window state.
     Note: a memory error from inflate() is non-recoverable.
   */

  //--- RESTORE() ---
  strm.next_out = put;
  strm.avail_out = left;
  strm.next_in = next;
  strm.avail_in = have;
  state.hold = hold;
  state.bits = bits;
  //---

  if (state.wsize || (_out !== strm.avail_out && state.mode < BAD &&
                      (state.mode < CHECK || flush !== Z_FINISH))) {
    if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) {
      state.mode = MEM;
      return Z_MEM_ERROR;
    }
  }
  _in -= strm.avail_in;
  _out -= strm.avail_out;
  strm.total_in += _in;
  strm.total_out += _out;
  state.total += _out;
  if (state.wrap && _out) {
    strm.adler = state.check = /*UPDATE(state.check, strm.next_out - _out, _out);*/
      (state.flags ? crc32(state.check, output, _out, strm.next_out - _out) : adler32(state.check, output, _out, strm.next_out - _out));
  }
  strm.data_type = state.bits + (state.last ? 64 : 0) +
                    (state.mode === TYPE ? 128 : 0) +
                    (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
  if (((_in === 0 && _out === 0) || flush === Z_FINISH) && ret === Z_OK) {
    ret = Z_BUF_ERROR;
  }
  return ret;
}

function inflateEnd(strm) {

  if (!strm || !strm.state /*|| strm->zfree == (free_func)0*/) {
    return Z_STREAM_ERROR;
  }

  var state = strm.state;
  if (state.window) {
    state.window = null;
  }
  strm.state = null;
  return Z_OK;
}

function inflateGetHeader(strm, head) {
  var state;

  /* check state */
  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;
  if ((state.wrap & 2) === 0) { return Z_STREAM_ERROR; }

  /* save header structure */
  state.head = head;
  head.done = false;
  return Z_OK;
}


exports.inflateReset = inflateReset;
exports.inflateReset2 = inflateReset2;
exports.inflateResetKeep = inflateResetKeep;
exports.inflateInit = inflateInit;
exports.inflateInit2 = inflateInit2;
exports.inflate = inflate;
exports.inflateEnd = inflateEnd;
exports.inflateGetHeader = inflateGetHeader;
exports.inflateInfo = 'pako inflate (from Nodeca project)';

/* Not implemented
exports.inflateCopy = inflateCopy;
exports.inflateGetDictionary = inflateGetDictionary;
exports.inflateMark = inflateMark;
exports.inflatePrime = inflatePrime;
exports.inflateSetDictionary = inflateSetDictionary;
exports.inflateSync = inflateSync;
exports.inflateSyncPoint = inflateSyncPoint;
exports.inflateUndermine = inflateUndermine;
*/
},{"../utils/common":"/home/zefanja/Projekte/common-sword/node_modules/jszip/node_modules/pako/lib/utils/common.js","./adler32":"/home/zefanja/Projekte/common-sword/node_modules/jszip/node_modules/pako/lib/zlib/adler32.js","./crc32":"/home/zefanja/Projekte/common-sword/node_modules/jszip/node_modules/pako/lib/zlib/crc32.js","./inffast":"/home/zefanja/Projekte/common-sword/node_modules/jszip/node_modules/pako/lib/zlib/inffast.js","./inftrees":"/home/zefanja/Projekte/common-sword/node_modules/jszip/node_modules/pako/lib/zlib/inftrees.js"}],"/home/zefanja/Projekte/common-sword/node_modules/jszip/node_modules/pako/lib/zlib/inftrees.js":[function(require,module,exports){
'use strict';


var utils = require('../utils/common');

var MAXBITS = 15;
var ENOUGH_LENS = 852;
var ENOUGH_DISTS = 592;
//var ENOUGH = (ENOUGH_LENS+ENOUGH_DISTS);

var CODES = 0;
var LENS = 1;
var DISTS = 2;

var lbase = [ /* Length codes 257..285 base */
  3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31,
  35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0
];

var lext = [ /* Length codes 257..285 extra */
  16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18,
  19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78
];

var dbase = [ /* Distance codes 0..29 base */
  1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193,
  257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145,
  8193, 12289, 16385, 24577, 0, 0
];

var dext = [ /* Distance codes 0..29 extra */
  16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22,
  23, 23, 24, 24, 25, 25, 26, 26, 27, 27,
  28, 28, 29, 29, 64, 64
];

module.exports = function inflate_table(type, lens, lens_index, codes, table, table_index, work, opts)
{
  var bits = opts.bits;
      //here = opts.here; /* table entry for duplication */

  var len = 0;               /* a code's length in bits */
  var sym = 0;               /* index of code symbols */
  var min = 0, max = 0;          /* minimum and maximum code lengths */
  var root = 0;              /* number of index bits for root table */
  var curr = 0;              /* number of index bits for current table */
  var drop = 0;              /* code bits to drop for sub-table */
  var left = 0;                   /* number of prefix codes available */
  var used = 0;              /* code entries in table used */
  var huff = 0;              /* Huffman code */
  var incr;              /* for incrementing code, index */
  var fill;              /* index for replicating entries */
  var low;               /* low bits for current root entry */
  var mask;              /* mask for low root bits */
  var next;             /* next available space in table */
  var base = null;     /* base value table to use */
  var base_index = 0;
//  var shoextra;    /* extra bits table to use */
  var end;                    /* use base and extra for symbol > end */
  var count = new utils.Buf16(MAXBITS+1); //[MAXBITS+1];    /* number of codes of each length */
  var offs = new utils.Buf16(MAXBITS+1); //[MAXBITS+1];     /* offsets in table for each length */
  var extra = null;
  var extra_index = 0;

  var here_bits, here_op, here_val;

  /*
   Process a set of code lengths to create a canonical Huffman code.  The
   code lengths are lens[0..codes-1].  Each length corresponds to the
   symbols 0..codes-1.  The Huffman code is generated by first sorting the
   symbols by length from short to long, and retaining the symbol order
   for codes with equal lengths.  Then the code starts with all zero bits
   for the first code of the shortest length, and the codes are integer
   increments for the same length, and zeros are appended as the length
   increases.  For the deflate format, these bits are stored backwards
   from their more natural integer increment ordering, and so when the
   decoding tables are built in the large loop below, the integer codes
   are incremented backwards.

   This routine assumes, but does not check, that all of the entries in
   lens[] are in the range 0..MAXBITS.  The caller must assure this.
   1..MAXBITS is interpreted as that code length.  zero means that that
   symbol does not occur in this code.

   The codes are sorted by computing a count of codes for each length,
   creating from that a table of starting indices for each length in the
   sorted table, and then entering the symbols in order in the sorted
   table.  The sorted table is work[], with that space being provided by
   the caller.

   The length counts are used for other purposes as well, i.e. finding
   the minimum and maximum length codes, determining if there are any
   codes at all, checking for a valid set of lengths, and looking ahead
   at length counts to determine sub-table sizes when building the
   decoding tables.
   */

  /* accumulate lengths for codes (assumes lens[] all in 0..MAXBITS) */
  for (len = 0; len <= MAXBITS; len++) {
    count[len] = 0;
  }
  for (sym = 0; sym < codes; sym++) {
    count[lens[lens_index + sym]]++;
  }

  /* bound code lengths, force root to be within code lengths */
  root = bits;
  for (max = MAXBITS; max >= 1; max--) {
    if (count[max] !== 0) { break; }
  }
  if (root > max) {
    root = max;
  }
  if (max === 0) {                     /* no symbols to code at all */
    //table.op[opts.table_index] = 64;  //here.op = (var char)64;    /* invalid code marker */
    //table.bits[opts.table_index] = 1;   //here.bits = (var char)1;
    //table.val[opts.table_index++] = 0;   //here.val = (var short)0;
    table[table_index++] = (1 << 24) | (64 << 16) | 0;


    //table.op[opts.table_index] = 64;
    //table.bits[opts.table_index] = 1;
    //table.val[opts.table_index++] = 0;
    table[table_index++] = (1 << 24) | (64 << 16) | 0;

    opts.bits = 1;
    return 0;     /* no symbols, but wait for decoding to report error */
  }
  for (min = 1; min < max; min++) {
    if (count[min] !== 0) { break; }
  }
  if (root < min) {
    root = min;
  }

  /* check for an over-subscribed or incomplete set of lengths */
  left = 1;
  for (len = 1; len <= MAXBITS; len++) {
    left <<= 1;
    left -= count[len];
    if (left < 0) {
      return -1;
    }        /* over-subscribed */
  }
  if (left > 0 && (type === CODES || max !== 1)) {
    return -1;                      /* incomplete set */
  }

  /* generate offsets into symbol table for each length for sorting */
  offs[1] = 0;
  for (len = 1; len < MAXBITS; len++) {
    offs[len + 1] = offs[len] + count[len];
  }

  /* sort symbols by length, by symbol order within each length */
  for (sym = 0; sym < codes; sym++) {
    if (lens[lens_index + sym] !== 0) {
      work[offs[lens[lens_index + sym]]++] = sym;
    }
  }

  /*
   Create and fill in decoding tables.  In this loop, the table being
   filled is at next and has curr index bits.  The code being used is huff
   with length len.  That code is converted to an index by dropping drop
   bits off of the bottom.  For codes where len is less than drop + curr,
   those top drop + curr - len bits are incremented through all values to
   fill the table with replicated entries.

   root is the number of index bits for the root table.  When len exceeds
   root, sub-tables are created pointed to by the root entry with an index
   of the low root bits of huff.  This is saved in low to check for when a
   new sub-table should be started.  drop is zero when the root table is
   being filled, and drop is root when sub-tables are being filled.

   When a new sub-table is needed, it is necessary to look ahead in the
   code lengths to determine what size sub-table is needed.  The length
   counts are used for this, and so count[] is decremented as codes are
   entered in the tables.

   used keeps track of how many table entries have been allocated from the
   provided *table space.  It is checked for LENS and DIST tables against
   the constants ENOUGH_LENS and ENOUGH_DISTS to guard against changes in
   the initial root table size constants.  See the comments in inftrees.h
   for more information.

   sym increments through all symbols, and the loop terminates when
   all codes of length max, i.e. all codes, have been processed.  This
   routine permits incomplete codes, so another loop after this one fills
   in the rest of the decoding tables with invalid code markers.
   */

  /* set up for code type */
  // poor man optimization - use if-else instead of switch,
  // to avoid deopts in old v8
  if (type === CODES) {
      base = extra = work;    /* dummy value--not used */
      end = 19;
  } else if (type === LENS) {
      base = lbase;
      base_index -= 257;
      extra = lext;
      extra_index -= 257;
      end = 256;
  } else {                    /* DISTS */
      base = dbase;
      extra = dext;
      end = -1;
  }

  /* initialize opts for loop */
  huff = 0;                   /* starting code */
  sym = 0;                    /* starting code symbol */
  len = min;                  /* starting code length */
  next = table_index;              /* current table to fill in */
  curr = root;                /* current table index bits */
  drop = 0;                   /* current bits to drop from code for index */
  low = -1;                   /* trigger new sub-table when len > root */
  used = 1 << root;          /* use root table entries */
  mask = used - 1;            /* mask for comparing low */

  /* check available table space */
  if ((type === LENS && used > ENOUGH_LENS) ||
    (type === DISTS && used > ENOUGH_DISTS)) {
    return 1;
  }

  var i=0;
  /* process all codes and make table entries */
  for (;;) {
    i++;
    /* create table entry */
    here_bits = len - drop;
    if (work[sym] < end) {
      here_op = 0;
      here_val = work[sym];
    }
    else if (work[sym] > end) {
      here_op = extra[extra_index + work[sym]];
      here_val = base[base_index + work[sym]];
    }
    else {
      here_op = 32 + 64;         /* end of block */
      here_val = 0;
    }

    /* replicate for those indices with low len bits equal to huff */
    incr = 1 << (len - drop);
    fill = 1 << curr;
    min = fill;                 /* save offset to next table */
    do {
      fill -= incr;
      table[next + (huff >> drop) + fill] = (here_bits << 24) | (here_op << 16) | here_val |0;
    } while (fill !== 0);

    /* backwards increment the len-bit code huff */
    incr = 1 << (len - 1);
    while (huff & incr) {
      incr >>= 1;
    }
    if (incr !== 0) {
      huff &= incr - 1;
      huff += incr;
    } else {
      huff = 0;
    }

    /* go to next symbol, update count, len */
    sym++;
    if (--count[len] === 0) {
      if (len === max) { break; }
      len = lens[lens_index + work[sym]];
    }

    /* create new sub-table if needed */
    if (len > root && (huff & mask) !== low) {
      /* if first time, transition to sub-tables */
      if (drop === 0) {
        drop = root;
      }

      /* increment past last table */
      next += min;            /* here min is 1 << curr */

      /* determine length of next table */
      curr = len - drop;
      left = 1 << curr;
      while (curr + drop < max) {
        left -= count[curr + drop];
        if (left <= 0) { break; }
        curr++;
        left <<= 1;
      }

      /* check for enough space */
      used += 1 << curr;
      if ((type === LENS && used > ENOUGH_LENS) ||
        (type === DISTS && used > ENOUGH_DISTS)) {
        return 1;
      }

      /* point entry in root table to sub-table */
      low = huff & mask;
      /*table.op[low] = curr;
      table.bits[low] = root;
      table.val[low] = next - opts.table_index;*/
      table[low] = (root << 24) | (curr << 16) | (next - table_index) |0;
    }
  }

  /* fill in remaining table entry if code is incomplete (guaranteed to have
   at most one remaining entry, since if the code is incomplete, the
   maximum code length that was allowed to get this far is one bit) */
  if (huff !== 0) {
    //table.op[next + huff] = 64;            /* invalid code marker */
    //table.bits[next + huff] = len - drop;
    //table.val[next + huff] = 0;
    table[next + huff] = ((len - drop) << 24) | (64 << 16) |0;
  }

  /* set return parameters */
  //opts.table_index += used;
  opts.bits = root;
  return 0;
};

},{"../utils/common":"/home/zefanja/Projekte/common-sword/node_modules/jszip/node_modules/pako/lib/utils/common.js"}],"/home/zefanja/Projekte/common-sword/node_modules/jszip/node_modules/pako/lib/zlib/messages.js":[function(require,module,exports){
'use strict';

module.exports = {
  '2':    'need dictionary',     /* Z_NEED_DICT       2  */
  '1':    'stream end',          /* Z_STREAM_END      1  */
  '0':    '',                    /* Z_OK              0  */
  '-1':   'file error',          /* Z_ERRNO         (-1) */
  '-2':   'stream error',        /* Z_STREAM_ERROR  (-2) */
  '-3':   'data error',          /* Z_DATA_ERROR    (-3) */
  '-4':   'insufficient memory', /* Z_MEM_ERROR     (-4) */
  '-5':   'buffer error',        /* Z_BUF_ERROR     (-5) */
  '-6':   'incompatible version' /* Z_VERSION_ERROR (-6) */
};
},{}],"/home/zefanja/Projekte/common-sword/node_modules/jszip/node_modules/pako/lib/zlib/trees.js":[function(require,module,exports){
'use strict';


var utils = require('../utils/common');

/* Public constants ==========================================================*/
/* ===========================================================================*/


//var Z_FILTERED          = 1;
//var Z_HUFFMAN_ONLY      = 2;
//var Z_RLE               = 3;
var Z_FIXED               = 4;
//var Z_DEFAULT_STRATEGY  = 0;

/* Possible values of the data_type field (though see inflate()) */
var Z_BINARY              = 0;
var Z_TEXT                = 1;
//var Z_ASCII             = 1; // = Z_TEXT
var Z_UNKNOWN             = 2;

/*============================================================================*/


function zero(buf) { var len = buf.length; while (--len >= 0) { buf[len] = 0; } }

// From zutil.h

var STORED_BLOCK = 0;
var STATIC_TREES = 1;
var DYN_TREES    = 2;
/* The three kinds of block type */

var MIN_MATCH    = 3;
var MAX_MATCH    = 258;
/* The minimum and maximum match lengths */

// From deflate.h
/* ===========================================================================
 * Internal compression state.
 */

var LENGTH_CODES  = 29;
/* number of length codes, not counting the special END_BLOCK code */

var LITERALS      = 256;
/* number of literal bytes 0..255 */

var L_CODES       = LITERALS + 1 + LENGTH_CODES;
/* number of Literal or Length codes, including the END_BLOCK code */

var D_CODES       = 30;
/* number of distance codes */

var BL_CODES      = 19;
/* number of codes used to transfer the bit lengths */

var HEAP_SIZE     = 2*L_CODES + 1;
/* maximum heap size */

var MAX_BITS      = 15;
/* All codes must not exceed MAX_BITS bits */

var Buf_size      = 16;
/* size of bit buffer in bi_buf */


/* ===========================================================================
 * Constants
 */

var MAX_BL_BITS = 7;
/* Bit length codes must not exceed MAX_BL_BITS bits */

var END_BLOCK   = 256;
/* end of block literal code */

var REP_3_6     = 16;
/* repeat previous bit length 3-6 times (2 bits of repeat count) */

var REPZ_3_10   = 17;
/* repeat a zero length 3-10 times  (3 bits of repeat count) */

var REPZ_11_138 = 18;
/* repeat a zero length 11-138 times  (7 bits of repeat count) */

var extra_lbits =   /* extra bits for each length code */
  [0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0];

var extra_dbits =   /* extra bits for each distance code */
  [0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13];

var extra_blbits =  /* extra bits for each bit length code */
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7];

var bl_order =
  [16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];
/* The lengths of the bit length codes are sent in order of decreasing
 * probability, to avoid transmitting the lengths for unused bit length codes.
 */

/* ===========================================================================
 * Local data. These are initialized only once.
 */

// We pre-fill arrays with 0 to avoid uninitialized gaps

var DIST_CODE_LEN = 512; /* see definition of array dist_code below */

// !!!! Use flat array insdead of structure, Freq = i*2, Len = i*2+1
var static_ltree  = new Array((L_CODES+2) * 2);
zero(static_ltree);
/* The static literal tree. Since the bit lengths are imposed, there is no
 * need for the L_CODES extra codes used during heap construction. However
 * The codes 286 and 287 are needed to build a canonical tree (see _tr_init
 * below).
 */

var static_dtree  = new Array(D_CODES * 2);
zero(static_dtree);
/* The static distance tree. (Actually a trivial tree since all codes use
 * 5 bits.)
 */

var _dist_code    = new Array(DIST_CODE_LEN);
zero(_dist_code);
/* Distance codes. The first 256 values correspond to the distances
 * 3 .. 258, the last 256 values correspond to the top 8 bits of
 * the 15 bit distances.
 */

var _length_code  = new Array(MAX_MATCH-MIN_MATCH+1);
zero(_length_code);
/* length code for each normalized match length (0 == MIN_MATCH) */

var base_length   = new Array(LENGTH_CODES);
zero(base_length);
/* First normalized length for each code (0 = MIN_MATCH) */

var base_dist     = new Array(D_CODES);
zero(base_dist);
/* First normalized distance for each code (0 = distance of 1) */


var StaticTreeDesc = function (static_tree, extra_bits, extra_base, elems, max_length) {

  this.static_tree  = static_tree;  /* static tree or NULL */
  this.extra_bits   = extra_bits;   /* extra bits for each code or NULL */
  this.extra_base   = extra_base;   /* base index for extra_bits */
  this.elems        = elems;        /* max number of elements in the tree */
  this.max_length   = max_length;   /* max bit length for the codes */

  // show if `static_tree` has data or dummy - needed for monomorphic objects
  this.has_stree    = static_tree && static_tree.length;
};


var static_l_desc;
var static_d_desc;
var static_bl_desc;


var TreeDesc = function(dyn_tree, stat_desc) {
  this.dyn_tree = dyn_tree;     /* the dynamic tree */
  this.max_code = 0;            /* largest code with non zero frequency */
  this.stat_desc = stat_desc;   /* the corresponding static tree */
};



function d_code(dist) {
  return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
}


/* ===========================================================================
 * Output a short LSB first on the stream.
 * IN assertion: there is enough room in pendingBuf.
 */
function put_short (s, w) {
//    put_byte(s, (uch)((w) & 0xff));
//    put_byte(s, (uch)((ush)(w) >> 8));
  s.pending_buf[s.pending++] = (w) & 0xff;
  s.pending_buf[s.pending++] = (w >>> 8) & 0xff;
}


/* ===========================================================================
 * Send a value on a given number of bits.
 * IN assertion: length <= 16 and value fits in length bits.
 */
function send_bits(s, value, length) {
  if (s.bi_valid > (Buf_size - length)) {
    s.bi_buf |= (value << s.bi_valid) & 0xffff;
    put_short(s, s.bi_buf);
    s.bi_buf = value >> (Buf_size - s.bi_valid);
    s.bi_valid += length - Buf_size;
  } else {
    s.bi_buf |= (value << s.bi_valid) & 0xffff;
    s.bi_valid += length;
  }
}


function send_code(s, c, tree) {
  send_bits(s, tree[c*2]/*.Code*/, tree[c*2 + 1]/*.Len*/);
}


/* ===========================================================================
 * Reverse the first len bits of a code, using straightforward code (a faster
 * method would use a table)
 * IN assertion: 1 <= len <= 15
 */
function bi_reverse(code, len) {
  var res = 0;
  do {
    res |= code & 1;
    code >>>= 1;
    res <<= 1;
  } while (--len > 0);
  return res >>> 1;
}


/* ===========================================================================
 * Flush the bit buffer, keeping at most 7 bits in it.
 */
function bi_flush(s) {
  if (s.bi_valid === 16) {
    put_short(s, s.bi_buf);
    s.bi_buf = 0;
    s.bi_valid = 0;

  } else if (s.bi_valid >= 8) {
    s.pending_buf[s.pending++] = s.bi_buf & 0xff;
    s.bi_buf >>= 8;
    s.bi_valid -= 8;
  }
}


/* ===========================================================================
 * Compute the optimal bit lengths for a tree and update the total bit length
 * for the current block.
 * IN assertion: the fields freq and dad are set, heap[heap_max] and
 *    above are the tree nodes sorted by increasing frequency.
 * OUT assertions: the field len is set to the optimal bit length, the
 *     array bl_count contains the frequencies for each bit length.
 *     The length opt_len is updated; static_len is also updated if stree is
 *     not null.
 */
function gen_bitlen(s, desc)
//    deflate_state *s;
//    tree_desc *desc;    /* the tree descriptor */
{
  var tree            = desc.dyn_tree;
  var max_code        = desc.max_code;
  var stree           = desc.stat_desc.static_tree;
  var has_stree       = desc.stat_desc.has_stree;
  var extra           = desc.stat_desc.extra_bits;
  var base            = desc.stat_desc.extra_base;
  var max_length      = desc.stat_desc.max_length;
  var h;              /* heap index */
  var n, m;           /* iterate over the tree elements */
  var bits;           /* bit length */
  var xbits;          /* extra bits */
  var f;              /* frequency */
  var overflow = 0;   /* number of elements with bit length too large */

  for (bits = 0; bits <= MAX_BITS; bits++) {
    s.bl_count[bits] = 0;
  }

  /* In a first pass, compute the optimal bit lengths (which may
   * overflow in the case of the bit length tree).
   */
  tree[s.heap[s.heap_max]*2 + 1]/*.Len*/ = 0; /* root of the heap */

  for (h = s.heap_max+1; h < HEAP_SIZE; h++) {
    n = s.heap[h];
    bits = tree[tree[n*2 +1]/*.Dad*/ * 2 + 1]/*.Len*/ + 1;
    if (bits > max_length) {
      bits = max_length;
      overflow++;
    }
    tree[n*2 + 1]/*.Len*/ = bits;
    /* We overwrite tree[n].Dad which is no longer needed */

    if (n > max_code) { continue; } /* not a leaf node */

    s.bl_count[bits]++;
    xbits = 0;
    if (n >= base) {
      xbits = extra[n-base];
    }
    f = tree[n * 2]/*.Freq*/;
    s.opt_len += f * (bits + xbits);
    if (has_stree) {
      s.static_len += f * (stree[n*2 + 1]/*.Len*/ + xbits);
    }
  }
  if (overflow === 0) { return; }

  // Trace((stderr,"\nbit length overflow\n"));
  /* This happens for example on obj2 and pic of the Calgary corpus */

  /* Find the first bit length which could increase: */
  do {
    bits = max_length-1;
    while (s.bl_count[bits] === 0) { bits--; }
    s.bl_count[bits]--;      /* move one leaf down the tree */
    s.bl_count[bits+1] += 2; /* move one overflow item as its brother */
    s.bl_count[max_length]--;
    /* The brother of the overflow item also moves one step up,
     * but this does not affect bl_count[max_length]
     */
    overflow -= 2;
  } while (overflow > 0);

  /* Now recompute all bit lengths, scanning in increasing frequency.
   * h is still equal to HEAP_SIZE. (It is simpler to reconstruct all
   * lengths instead of fixing only the wrong ones. This idea is taken
   * from 'ar' written by Haruhiko Okumura.)
   */
  for (bits = max_length; bits !== 0; bits--) {
    n = s.bl_count[bits];
    while (n !== 0) {
      m = s.heap[--h];
      if (m > max_code) { continue; }
      if (tree[m*2 + 1]/*.Len*/ !== bits) {
        // Trace((stderr,"code %d bits %d->%d\n", m, tree[m].Len, bits));
        s.opt_len += (bits - tree[m*2 + 1]/*.Len*/)*tree[m*2]/*.Freq*/;
        tree[m*2 + 1]/*.Len*/ = bits;
      }
      n--;
    }
  }
}


/* ===========================================================================
 * Generate the codes for a given tree and bit counts (which need not be
 * optimal).
 * IN assertion: the array bl_count contains the bit length statistics for
 * the given tree and the field len is set for all tree elements.
 * OUT assertion: the field code is set for all tree elements of non
 *     zero code length.
 */
function gen_codes(tree, max_code, bl_count)
//    ct_data *tree;             /* the tree to decorate */
//    int max_code;              /* largest code with non zero frequency */
//    ushf *bl_count;            /* number of codes at each bit length */
{
  var next_code = new Array(MAX_BITS+1); /* next code value for each bit length */
  var code = 0;              /* running code value */
  var bits;                  /* bit index */
  var n;                     /* code index */

  /* The distribution counts are first used to generate the code values
   * without bit reversal.
   */
  for (bits = 1; bits <= MAX_BITS; bits++) {
    next_code[bits] = code = (code + bl_count[bits-1]) << 1;
  }
  /* Check that the bit counts in bl_count are consistent. The last code
   * must be all ones.
   */
  //Assert (code + bl_count[MAX_BITS]-1 == (1<<MAX_BITS)-1,
  //        "inconsistent bit counts");
  //Tracev((stderr,"\ngen_codes: max_code %d ", max_code));

  for (n = 0;  n <= max_code; n++) {
    var len = tree[n*2 + 1]/*.Len*/;
    if (len === 0) { continue; }
    /* Now reverse the bits */
    tree[n*2]/*.Code*/ = bi_reverse(next_code[len]++, len);

    //Tracecv(tree != static_ltree, (stderr,"\nn %3d %c l %2d c %4x (%x) ",
    //     n, (isgraph(n) ? n : ' '), len, tree[n].Code, next_code[len]-1));
  }
}


/* ===========================================================================
 * Initialize the various 'constant' tables.
 */
function tr_static_init() {
  var n;        /* iterates over tree elements */
  var bits;     /* bit counter */
  var length;   /* length value */
  var code;     /* code value */
  var dist;     /* distance index */
  var bl_count = new Array(MAX_BITS+1);
  /* number of codes at each bit length for an optimal tree */

  // do check in _tr_init()
  //if (static_init_done) return;

  /* For some embedded targets, global variables are not initialized: */
/*#ifdef NO_INIT_GLOBAL_POINTERS
  static_l_desc.static_tree = static_ltree;
  static_l_desc.extra_bits = extra_lbits;
  static_d_desc.static_tree = static_dtree;
  static_d_desc.extra_bits = extra_dbits;
  static_bl_desc.extra_bits = extra_blbits;
#endif*/

  /* Initialize the mapping length (0..255) -> length code (0..28) */
  length = 0;
  for (code = 0; code < LENGTH_CODES-1; code++) {
    base_length[code] = length;
    for (n = 0; n < (1<<extra_lbits[code]); n++) {
      _length_code[length++] = code;
    }
  }
  //Assert (length == 256, "tr_static_init: length != 256");
  /* Note that the length 255 (match length 258) can be represented
   * in two different ways: code 284 + 5 bits or code 285, so we
   * overwrite length_code[255] to use the best encoding:
   */
  _length_code[length-1] = code;

  /* Initialize the mapping dist (0..32K) -> dist code (0..29) */
  dist = 0;
  for (code = 0 ; code < 16; code++) {
    base_dist[code] = dist;
    for (n = 0; n < (1<<extra_dbits[code]); n++) {
      _dist_code[dist++] = code;
    }
  }
  //Assert (dist == 256, "tr_static_init: dist != 256");
  dist >>= 7; /* from now on, all distances are divided by 128 */
  for ( ; code < D_CODES; code++) {
    base_dist[code] = dist << 7;
    for (n = 0; n < (1<<(extra_dbits[code]-7)); n++) {
      _dist_code[256 + dist++] = code;
    }
  }
  //Assert (dist == 256, "tr_static_init: 256+dist != 512");

  /* Construct the codes of the static literal tree */
  for (bits = 0; bits <= MAX_BITS; bits++) {
    bl_count[bits] = 0;
  }

  n = 0;
  while (n <= 143) {
    static_ltree[n*2 + 1]/*.Len*/ = 8;
    n++;
    bl_count[8]++;
  }
  while (n <= 255) {
    static_ltree[n*2 + 1]/*.Len*/ = 9;
    n++;
    bl_count[9]++;
  }
  while (n <= 279) {
    static_ltree[n*2 + 1]/*.Len*/ = 7;
    n++;
    bl_count[7]++;
  }
  while (n <= 287) {
    static_ltree[n*2 + 1]/*.Len*/ = 8;
    n++;
    bl_count[8]++;
  }
  /* Codes 286 and 287 do not exist, but we must include them in the
   * tree construction to get a canonical Huffman tree (longest code
   * all ones)
   */
  gen_codes(static_ltree, L_CODES+1, bl_count);

  /* The static distance tree is trivial: */
  for (n = 0; n < D_CODES; n++) {
    static_dtree[n*2 + 1]/*.Len*/ = 5;
    static_dtree[n*2]/*.Code*/ = bi_reverse(n, 5);
  }

  // Now data ready and we can init static trees
  static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS+1, L_CODES, MAX_BITS);
  static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0,          D_CODES, MAX_BITS);
  static_bl_desc =new StaticTreeDesc(new Array(0), extra_blbits, 0,         BL_CODES, MAX_BL_BITS);

  //static_init_done = true;
}


/* ===========================================================================
 * Initialize a new block.
 */
function init_block(s) {
  var n; /* iterates over tree elements */

  /* Initialize the trees. */
  for (n = 0; n < L_CODES;  n++) { s.dyn_ltree[n*2]/*.Freq*/ = 0; }
  for (n = 0; n < D_CODES;  n++) { s.dyn_dtree[n*2]/*.Freq*/ = 0; }
  for (n = 0; n < BL_CODES; n++) { s.bl_tree[n*2]/*.Freq*/ = 0; }

  s.dyn_ltree[END_BLOCK*2]/*.Freq*/ = 1;
  s.opt_len = s.static_len = 0;
  s.last_lit = s.matches = 0;
}


/* ===========================================================================
 * Flush the bit buffer and align the output on a byte boundary
 */
function bi_windup(s)
{
  if (s.bi_valid > 8) {
    put_short(s, s.bi_buf);
  } else if (s.bi_valid > 0) {
    //put_byte(s, (Byte)s->bi_buf);
    s.pending_buf[s.pending++] = s.bi_buf;
  }
  s.bi_buf = 0;
  s.bi_valid = 0;
}

/* ===========================================================================
 * Copy a stored block, storing first the length and its
 * one's complement if requested.
 */
function copy_block(s, buf, len, header)
//DeflateState *s;
//charf    *buf;    /* the input data */
//unsigned len;     /* its length */
//int      header;  /* true if block header must be written */
{
  bi_windup(s);        /* align on byte boundary */

  if (header) {
    put_short(s, len);
    put_short(s, ~len);
  }
//  while (len--) {
//    put_byte(s, *buf++);
//  }
  utils.arraySet(s.pending_buf, s.window, buf, len, s.pending);
  s.pending += len;
}

/* ===========================================================================
 * Compares to subtrees, using the tree depth as tie breaker when
 * the subtrees have equal frequency. This minimizes the worst case length.
 */
function smaller(tree, n, m, depth) {
  var _n2 = n*2;
  var _m2 = m*2;
  return (tree[_n2]/*.Freq*/ < tree[_m2]/*.Freq*/ ||
         (tree[_n2]/*.Freq*/ === tree[_m2]/*.Freq*/ && depth[n] <= depth[m]));
}

/* ===========================================================================
 * Restore the heap property by moving down the tree starting at node k,
 * exchanging a node with the smallest of its two sons if necessary, stopping
 * when the heap property is re-established (each father smaller than its
 * two sons).
 */
function pqdownheap(s, tree, k)
//    deflate_state *s;
//    ct_data *tree;  /* the tree to restore */
//    int k;               /* node to move down */
{
  var v = s.heap[k];
  var j = k << 1;  /* left son of k */
  while (j <= s.heap_len) {
    /* Set j to the smallest of the two sons: */
    if (j < s.heap_len &&
      smaller(tree, s.heap[j+1], s.heap[j], s.depth)) {
      j++;
    }
    /* Exit if v is smaller than both sons */
    if (smaller(tree, v, s.heap[j], s.depth)) { break; }

    /* Exchange v with the smallest son */
    s.heap[k] = s.heap[j];
    k = j;

    /* And continue down the tree, setting j to the left son of k */
    j <<= 1;
  }
  s.heap[k] = v;
}


// inlined manually
// var SMALLEST = 1;

/* ===========================================================================
 * Send the block data compressed using the given Huffman trees
 */
function compress_block(s, ltree, dtree)
//    deflate_state *s;
//    const ct_data *ltree; /* literal tree */
//    const ct_data *dtree; /* distance tree */
{
  var dist;           /* distance of matched string */
  var lc;             /* match length or unmatched char (if dist == 0) */
  var lx = 0;         /* running index in l_buf */
  var code;           /* the code to send */
  var extra;          /* number of extra bits to send */

  if (s.last_lit !== 0) {
    do {
      dist = (s.pending_buf[s.d_buf + lx*2] << 8) | (s.pending_buf[s.d_buf + lx*2 + 1]);
      lc = s.pending_buf[s.l_buf + lx];
      lx++;

      if (dist === 0) {
        send_code(s, lc, ltree); /* send a literal byte */
        //Tracecv(isgraph(lc), (stderr," '%c' ", lc));
      } else {
        /* Here, lc is the match length - MIN_MATCH */
        code = _length_code[lc];
        send_code(s, code+LITERALS+1, ltree); /* send the length code */
        extra = extra_lbits[code];
        if (extra !== 0) {
          lc -= base_length[code];
          send_bits(s, lc, extra);       /* send the extra length bits */
        }
        dist--; /* dist is now the match distance - 1 */
        code = d_code(dist);
        //Assert (code < D_CODES, "bad d_code");

        send_code(s, code, dtree);       /* send the distance code */
        extra = extra_dbits[code];
        if (extra !== 0) {
          dist -= base_dist[code];
          send_bits(s, dist, extra);   /* send the extra distance bits */
        }
      } /* literal or match pair ? */

      /* Check that the overlay between pending_buf and d_buf+l_buf is ok: */
      //Assert((uInt)(s->pending) < s->lit_bufsize + 2*lx,
      //       "pendingBuf overflow");

    } while (lx < s.last_lit);
  }

  send_code(s, END_BLOCK, ltree);
}


/* ===========================================================================
 * Construct one Huffman tree and assigns the code bit strings and lengths.
 * Update the total bit length for the current block.
 * IN assertion: the field freq is set for all tree elements.
 * OUT assertions: the fields len and code are set to the optimal bit length
 *     and corresponding code. The length opt_len is updated; static_len is
 *     also updated if stree is not null. The field max_code is set.
 */
function build_tree(s, desc)
//    deflate_state *s;
//    tree_desc *desc; /* the tree descriptor */
{
  var tree     = desc.dyn_tree;
  var stree    = desc.stat_desc.static_tree;
  var has_stree = desc.stat_desc.has_stree;
  var elems    = desc.stat_desc.elems;
  var n, m;          /* iterate over heap elements */
  var max_code = -1; /* largest code with non zero frequency */
  var node;          /* new node being created */

  /* Construct the initial heap, with least frequent element in
   * heap[SMALLEST]. The sons of heap[n] are heap[2*n] and heap[2*n+1].
   * heap[0] is not used.
   */
  s.heap_len = 0;
  s.heap_max = HEAP_SIZE;

  for (n = 0; n < elems; n++) {
    if (tree[n * 2]/*.Freq*/ !== 0) {
      s.heap[++s.heap_len] = max_code = n;
      s.depth[n] = 0;

    } else {
      tree[n*2 + 1]/*.Len*/ = 0;
    }
  }

  /* The pkzip format requires that at least one distance code exists,
   * and that at least one bit should be sent even if there is only one
   * possible code. So to avoid special checks later on we force at least
   * two codes of non zero frequency.
   */
  while (s.heap_len < 2) {
    node = s.heap[++s.heap_len] = (max_code < 2 ? ++max_code : 0);
    tree[node * 2]/*.Freq*/ = 1;
    s.depth[node] = 0;
    s.opt_len--;

    if (has_stree) {
      s.static_len -= stree[node*2 + 1]/*.Len*/;
    }
    /* node is 0 or 1 so it does not have extra bits */
  }
  desc.max_code = max_code;

  /* The elements heap[heap_len/2+1 .. heap_len] are leaves of the tree,
   * establish sub-heaps of increasing lengths:
   */
  for (n = (s.heap_len >> 1/*int /2*/); n >= 1; n--) { pqdownheap(s, tree, n); }

  /* Construct the Huffman tree by repeatedly combining the least two
   * frequent nodes.
   */
  node = elems;              /* next internal node of the tree */
  do {
    //pqremove(s, tree, n);  /* n = node of least frequency */
    /*** pqremove ***/
    n = s.heap[1/*SMALLEST*/];
    s.heap[1/*SMALLEST*/] = s.heap[s.heap_len--];
    pqdownheap(s, tree, 1/*SMALLEST*/);
    /***/

    m = s.heap[1/*SMALLEST*/]; /* m = node of next least frequency */

    s.heap[--s.heap_max] = n; /* keep the nodes sorted by frequency */
    s.heap[--s.heap_max] = m;

    /* Create a new node father of n and m */
    tree[node * 2]/*.Freq*/ = tree[n * 2]/*.Freq*/ + tree[m * 2]/*.Freq*/;
    s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
    tree[n*2 + 1]/*.Dad*/ = tree[m*2 + 1]/*.Dad*/ = node;

    /* and insert the new node in the heap */
    s.heap[1/*SMALLEST*/] = node++;
    pqdownheap(s, tree, 1/*SMALLEST*/);

  } while (s.heap_len >= 2);

  s.heap[--s.heap_max] = s.heap[1/*SMALLEST*/];

  /* At this point, the fields freq and dad are set. We can now
   * generate the bit lengths.
   */
  gen_bitlen(s, desc);

  /* The field len is now set, we can generate the bit codes */
  gen_codes(tree, max_code, s.bl_count);
}


/* ===========================================================================
 * Scan a literal or distance tree to determine the frequencies of the codes
 * in the bit length tree.
 */
function scan_tree(s, tree, max_code)
//    deflate_state *s;
//    ct_data *tree;   /* the tree to be scanned */
//    int max_code;    /* and its largest code of non zero frequency */
{
  var n;                     /* iterates over all tree elements */
  var prevlen = -1;          /* last emitted length */
  var curlen;                /* length of current code */

  var nextlen = tree[0*2 + 1]/*.Len*/; /* length of next code */

  var count = 0;             /* repeat count of the current code */
  var max_count = 7;         /* max repeat count */
  var min_count = 4;         /* min repeat count */

  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }
  tree[(max_code+1)*2 + 1]/*.Len*/ = 0xffff; /* guard */

  for (n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n+1)*2 + 1]/*.Len*/;

    if (++count < max_count && curlen === nextlen) {
      continue;

    } else if (count < min_count) {
      s.bl_tree[curlen * 2]/*.Freq*/ += count;

    } else if (curlen !== 0) {

      if (curlen !== prevlen) { s.bl_tree[curlen * 2]/*.Freq*/++; }
      s.bl_tree[REP_3_6*2]/*.Freq*/++;

    } else if (count <= 10) {
      s.bl_tree[REPZ_3_10*2]/*.Freq*/++;

    } else {
      s.bl_tree[REPZ_11_138*2]/*.Freq*/++;
    }

    count = 0;
    prevlen = curlen;

    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;

    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;

    } else {
      max_count = 7;
      min_count = 4;
    }
  }
}


/* ===========================================================================
 * Send a literal or distance tree in compressed form, using the codes in
 * bl_tree.
 */
function send_tree(s, tree, max_code)
//    deflate_state *s;
//    ct_data *tree; /* the tree to be scanned */
//    int max_code;       /* and its largest code of non zero frequency */
{
  var n;                     /* iterates over all tree elements */
  var prevlen = -1;          /* last emitted length */
  var curlen;                /* length of current code */

  var nextlen = tree[0*2 + 1]/*.Len*/; /* length of next code */

  var count = 0;             /* repeat count of the current code */
  var max_count = 7;         /* max repeat count */
  var min_count = 4;         /* min repeat count */

  /* tree[max_code+1].Len = -1; */  /* guard already set */
  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }

  for (n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n+1)*2 + 1]/*.Len*/;

    if (++count < max_count && curlen === nextlen) {
      continue;

    } else if (count < min_count) {
      do { send_code(s, curlen, s.bl_tree); } while (--count !== 0);

    } else if (curlen !== 0) {
      if (curlen !== prevlen) {
        send_code(s, curlen, s.bl_tree);
        count--;
      }
      //Assert(count >= 3 && count <= 6, " 3_6?");
      send_code(s, REP_3_6, s.bl_tree);
      send_bits(s, count-3, 2);

    } else if (count <= 10) {
      send_code(s, REPZ_3_10, s.bl_tree);
      send_bits(s, count-3, 3);

    } else {
      send_code(s, REPZ_11_138, s.bl_tree);
      send_bits(s, count-11, 7);
    }

    count = 0;
    prevlen = curlen;
    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;

    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;

    } else {
      max_count = 7;
      min_count = 4;
    }
  }
}


/* ===========================================================================
 * Construct the Huffman tree for the bit lengths and return the index in
 * bl_order of the last bit length code to send.
 */
function build_bl_tree(s) {
  var max_blindex;  /* index of last bit length code of non zero freq */

  /* Determine the bit length frequencies for literal and distance trees */
  scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
  scan_tree(s, s.dyn_dtree, s.d_desc.max_code);

  /* Build the bit length tree: */
  build_tree(s, s.bl_desc);
  /* opt_len now includes the length of the tree representations, except
   * the lengths of the bit lengths codes and the 5+5+4 bits for the counts.
   */

  /* Determine the number of bit length codes to send. The pkzip format
   * requires that at least 4 bit length codes be sent. (appnote.txt says
   * 3 but the actual value used is 4.)
   */
  for (max_blindex = BL_CODES-1; max_blindex >= 3; max_blindex--) {
    if (s.bl_tree[bl_order[max_blindex]*2 + 1]/*.Len*/ !== 0) {
      break;
    }
  }
  /* Update opt_len to include the bit length tree and counts */
  s.opt_len += 3*(max_blindex+1) + 5+5+4;
  //Tracev((stderr, "\ndyn trees: dyn %ld, stat %ld",
  //        s->opt_len, s->static_len));

  return max_blindex;
}


/* ===========================================================================
 * Send the header for a block using dynamic Huffman trees: the counts, the
 * lengths of the bit length codes, the literal tree and the distance tree.
 * IN assertion: lcodes >= 257, dcodes >= 1, blcodes >= 4.
 */
function send_all_trees(s, lcodes, dcodes, blcodes)
//    deflate_state *s;
//    int lcodes, dcodes, blcodes; /* number of codes for each tree */
{
  var rank;                    /* index in bl_order */

  //Assert (lcodes >= 257 && dcodes >= 1 && blcodes >= 4, "not enough codes");
  //Assert (lcodes <= L_CODES && dcodes <= D_CODES && blcodes <= BL_CODES,
  //        "too many codes");
  //Tracev((stderr, "\nbl counts: "));
  send_bits(s, lcodes-257, 5); /* not +255 as stated in appnote.txt */
  send_bits(s, dcodes-1,   5);
  send_bits(s, blcodes-4,  4); /* not -3 as stated in appnote.txt */
  for (rank = 0; rank < blcodes; rank++) {
    //Tracev((stderr, "\nbl code %2d ", bl_order[rank]));
    send_bits(s, s.bl_tree[bl_order[rank]*2 + 1]/*.Len*/, 3);
  }
  //Tracev((stderr, "\nbl tree: sent %ld", s->bits_sent));

  send_tree(s, s.dyn_ltree, lcodes-1); /* literal tree */
  //Tracev((stderr, "\nlit tree: sent %ld", s->bits_sent));

  send_tree(s, s.dyn_dtree, dcodes-1); /* distance tree */
  //Tracev((stderr, "\ndist tree: sent %ld", s->bits_sent));
}


/* ===========================================================================
 * Check if the data type is TEXT or BINARY, using the following algorithm:
 * - TEXT if the two conditions below are satisfied:
 *    a) There are no non-portable control characters belonging to the
 *       "black list" (0..6, 14..25, 28..31).
 *    b) There is at least one printable character belonging to the
 *       "white list" (9 {TAB}, 10 {LF}, 13 {CR}, 32..255).
 * - BINARY otherwise.
 * - The following partially-portable control characters form a
 *   "gray list" that is ignored in this detection algorithm:
 *   (7 {BEL}, 8 {BS}, 11 {VT}, 12 {FF}, 26 {SUB}, 27 {ESC}).
 * IN assertion: the fields Freq of dyn_ltree are set.
 */
function detect_data_type(s) {
  /* black_mask is the bit mask of black-listed bytes
   * set bits 0..6, 14..25, and 28..31
   * 0xf3ffc07f = binary 11110011111111111100000001111111
   */
  var black_mask = 0xf3ffc07f;
  var n;

  /* Check for non-textual ("black-listed") bytes. */
  for (n = 0; n <= 31; n++, black_mask >>>= 1) {
    if ((black_mask & 1) && (s.dyn_ltree[n*2]/*.Freq*/ !== 0)) {
      return Z_BINARY;
    }
  }

  /* Check for textual ("white-listed") bytes. */
  if (s.dyn_ltree[9 * 2]/*.Freq*/ !== 0 || s.dyn_ltree[10 * 2]/*.Freq*/ !== 0 ||
      s.dyn_ltree[13 * 2]/*.Freq*/ !== 0) {
    return Z_TEXT;
  }
  for (n = 32; n < LITERALS; n++) {
    if (s.dyn_ltree[n * 2]/*.Freq*/ !== 0) {
      return Z_TEXT;
    }
  }

  /* There are no "black-listed" or "white-listed" bytes:
   * this stream either is empty or has tolerated ("gray-listed") bytes only.
   */
  return Z_BINARY;
}


var static_init_done = false;

/* ===========================================================================
 * Initialize the tree data structures for a new zlib stream.
 */
function _tr_init(s)
{

  if (!static_init_done) {
    tr_static_init();
    static_init_done = true;
  }

  s.l_desc  = new TreeDesc(s.dyn_ltree, static_l_desc);
  s.d_desc  = new TreeDesc(s.dyn_dtree, static_d_desc);
  s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);

  s.bi_buf = 0;
  s.bi_valid = 0;

  /* Initialize the first block of the first file: */
  init_block(s);
}


/* ===========================================================================
 * Send a stored block
 */
function _tr_stored_block(s, buf, stored_len, last)
//DeflateState *s;
//charf *buf;       /* input block */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */
{
  send_bits(s, (STORED_BLOCK<<1)+(last ? 1 : 0), 3);    /* send block type */
  copy_block(s, buf, stored_len, true); /* with header */
}


/* ===========================================================================
 * Send one empty static block to give enough lookahead for inflate.
 * This takes 10 bits, of which 7 may remain in the bit buffer.
 */
function _tr_align(s) {
  send_bits(s, STATIC_TREES<<1, 3);
  send_code(s, END_BLOCK, static_ltree);
  bi_flush(s);
}


/* ===========================================================================
 * Determine the best encoding for the current block: dynamic trees, static
 * trees or store, and output the encoded block to the zip file.
 */
function _tr_flush_block(s, buf, stored_len, last)
//DeflateState *s;
//charf *buf;       /* input block, or NULL if too old */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */
{
  var opt_lenb, static_lenb;  /* opt_len and static_len in bytes */
  var max_blindex = 0;        /* index of last bit length code of non zero freq */

  /* Build the Huffman trees unless a stored block is forced */
  if (s.level > 0) {

    /* Check if the file is binary or text */
    if (s.strm.data_type === Z_UNKNOWN) {
      s.strm.data_type = detect_data_type(s);
    }

    /* Construct the literal and distance trees */
    build_tree(s, s.l_desc);
    // Tracev((stderr, "\nlit data: dyn %ld, stat %ld", s->opt_len,
    //        s->static_len));

    build_tree(s, s.d_desc);
    // Tracev((stderr, "\ndist data: dyn %ld, stat %ld", s->opt_len,
    //        s->static_len));
    /* At this point, opt_len and static_len are the total bit lengths of
     * the compressed block data, excluding the tree representations.
     */

    /* Build the bit length tree for the above two trees, and get the index
     * in bl_order of the last bit length code to send.
     */
    max_blindex = build_bl_tree(s);

    /* Determine the best encoding. Compute the block lengths in bytes. */
    opt_lenb = (s.opt_len+3+7) >>> 3;
    static_lenb = (s.static_len+3+7) >>> 3;

    // Tracev((stderr, "\nopt %lu(%lu) stat %lu(%lu) stored %lu lit %u ",
    //        opt_lenb, s->opt_len, static_lenb, s->static_len, stored_len,
    //        s->last_lit));

    if (static_lenb <= opt_lenb) { opt_lenb = static_lenb; }

  } else {
    // Assert(buf != (char*)0, "lost buf");
    opt_lenb = static_lenb = stored_len + 5; /* force a stored block */
  }

  if ((stored_len+4 <= opt_lenb) && (buf !== -1)) {
    /* 4: two words for the lengths */

    /* The test buf != NULL is only necessary if LIT_BUFSIZE > WSIZE.
     * Otherwise we can't have processed more than WSIZE input bytes since
     * the last block flush, because compression would have been
     * successful. If LIT_BUFSIZE <= WSIZE, it is never too late to
     * transform a block into a stored block.
     */
    _tr_stored_block(s, buf, stored_len, last);

  } else if (s.strategy === Z_FIXED || static_lenb === opt_lenb) {

    send_bits(s, (STATIC_TREES<<1) + (last ? 1 : 0), 3);
    compress_block(s, static_ltree, static_dtree);

  } else {
    send_bits(s, (DYN_TREES<<1) + (last ? 1 : 0), 3);
    send_all_trees(s, s.l_desc.max_code+1, s.d_desc.max_code+1, max_blindex+1);
    compress_block(s, s.dyn_ltree, s.dyn_dtree);
  }
  // Assert (s->compressed_len == s->bits_sent, "bad compressed size");
  /* The above check is made mod 2^32, for files larger than 512 MB
   * and uLong implemented on 32 bits.
   */
  init_block(s);

  if (last) {
    bi_windup(s);
  }
  // Tracev((stderr,"\ncomprlen %lu(%lu) ", s->compressed_len>>3,
  //       s->compressed_len-7*last));
}

/* ===========================================================================
 * Save the match info and tally the frequency counts. Return true if
 * the current block must be flushed.
 */
function _tr_tally(s, dist, lc)
//    deflate_state *s;
//    unsigned dist;  /* distance of matched string */
//    unsigned lc;    /* match length-MIN_MATCH or unmatched char (if dist==0) */
{
  //var out_length, in_length, dcode;

  s.pending_buf[s.d_buf + s.last_lit * 2]     = (dist >>> 8) & 0xff;
  s.pending_buf[s.d_buf + s.last_lit * 2 + 1] = dist & 0xff;

  s.pending_buf[s.l_buf + s.last_lit] = lc & 0xff;
  s.last_lit++;

  if (dist === 0) {
    /* lc is the unmatched char */
    s.dyn_ltree[lc*2]/*.Freq*/++;
  } else {
    s.matches++;
    /* Here, lc is the match length - MIN_MATCH */
    dist--;             /* dist = match distance - 1 */
    //Assert((ush)dist < (ush)MAX_DIST(s) &&
    //       (ush)lc <= (ush)(MAX_MATCH-MIN_MATCH) &&
    //       (ush)d_code(dist) < (ush)D_CODES,  "_tr_tally: bad match");

    s.dyn_ltree[(_length_code[lc]+LITERALS+1) * 2]/*.Freq*/++;
    s.dyn_dtree[d_code(dist) * 2]/*.Freq*/++;
  }

// (!) This block is disabled in zlib defailts,
// don't enable it for binary compatibility

//#ifdef TRUNCATE_BLOCK
//  /* Try to guess if it is profitable to stop the current block here */
//  if ((s.last_lit & 0x1fff) === 0 && s.level > 2) {
//    /* Compute an upper bound for the compressed length */
//    out_length = s.last_lit*8;
//    in_length = s.strstart - s.block_start;
//
//    for (dcode = 0; dcode < D_CODES; dcode++) {
//      out_length += s.dyn_dtree[dcode*2]/*.Freq*/ * (5 + extra_dbits[dcode]);
//    }
//    out_length >>>= 3;
//    //Tracev((stderr,"\nlast_lit %u, in %ld, out ~%ld(%ld%%) ",
//    //       s->last_lit, in_length, out_length,
//    //       100L - out_length*100L/in_length));
//    if (s.matches < (s.last_lit>>1)/*int /2*/ && out_length < (in_length>>1)/*int /2*/) {
//      return true;
//    }
//  }
//#endif

  return (s.last_lit === s.lit_bufsize-1);
  /* We avoid equality with lit_bufsize because of wraparound at 64K
   * on 16 bit machines and because stored blocks are restricted to
   * 64K-1 bytes.
   */
}

exports._tr_init  = _tr_init;
exports._tr_stored_block = _tr_stored_block;
exports._tr_flush_block  = _tr_flush_block;
exports._tr_tally = _tr_tally;
exports._tr_align = _tr_align;
},{"../utils/common":"/home/zefanja/Projekte/common-sword/node_modules/jszip/node_modules/pako/lib/utils/common.js"}],"/home/zefanja/Projekte/common-sword/node_modules/jszip/node_modules/pako/lib/zlib/zstream.js":[function(require,module,exports){
'use strict';


function ZStream() {
  /* next input byte */
  this.input = null; // JS specific, because we have no pointers
  this.next_in = 0;
  /* number of bytes available at input */
  this.avail_in = 0;
  /* total number of input bytes read so far */
  this.total_in = 0;
  /* next output byte should be put there */
  this.output = null; // JS specific, because we have no pointers
  this.next_out = 0;
  /* remaining free space at output */
  this.avail_out = 0;
  /* total number of bytes output so far */
  this.total_out = 0;
  /* last error message, NULL if no error */
  this.msg = ''/*Z_NULL*/;
  /* not visible by applications */
  this.state = null;
  /* best guess about the data type: binary or text */
  this.data_type = 2/*Z_UNKNOWN*/;
  /* adler32 value of the uncompressed data */
  this.adler = 0;
}

module.exports = ZStream;
},{}],"/home/zefanja/Projekte/common-sword/node_modules/pako/index.js":[function(require,module,exports){
module.exports=require("/home/zefanja/Projekte/common-sword/node_modules/jszip/node_modules/pako/index.js")
},{"/home/zefanja/Projekte/common-sword/node_modules/jszip/node_modules/pako/index.js":"/home/zefanja/Projekte/common-sword/node_modules/jszip/node_modules/pako/index.js"}],"/home/zefanja/Projekte/common-sword/node_modules/sax/lib/sax.js":[function(require,module,exports){
(function (Buffer){
// wrapper for non-node envs
;(function (sax) {

sax.parser = function (strict, opt) { return new SAXParser(strict, opt) }
sax.SAXParser = SAXParser
sax.SAXStream = SAXStream
sax.createStream = createStream

// When we pass the MAX_BUFFER_LENGTH position, start checking for buffer overruns.
// When we check, schedule the next check for MAX_BUFFER_LENGTH - (max(buffer lengths)),
// since that's the earliest that a buffer overrun could occur.  This way, checks are
// as rare as required, but as often as necessary to ensure never crossing this bound.
// Furthermore, buffers are only tested at most once per write(), so passing a very
// large string into write() might have undesirable effects, but this is manageable by
// the caller, so it is assumed to be safe.  Thus, a call to write() may, in the extreme
// edge case, result in creating at most one complete copy of the string passed in.
// Set to Infinity to have unlimited buffers.
sax.MAX_BUFFER_LENGTH = 64 * 1024

var buffers = [
  "comment", "sgmlDecl", "textNode", "tagName", "doctype",
  "procInstName", "procInstBody", "entity", "attribName",
  "attribValue", "cdata", "script"
]

sax.EVENTS = // for discoverability.
  [ "text"
  , "processinginstruction"
  , "sgmldeclaration"
  , "doctype"
  , "comment"
  , "attribute"
  , "opentag"
  , "closetag"
  , "opencdata"
  , "cdata"
  , "closecdata"
  , "error"
  , "end"
  , "ready"
  , "script"
  , "opennamespace"
  , "closenamespace"
  ]

function SAXParser (strict, opt) {
  if (!(this instanceof SAXParser)) return new SAXParser(strict, opt)

  var parser = this
  clearBuffers(parser)
  parser.q = parser.c = ""
  parser.bufferCheckPosition = sax.MAX_BUFFER_LENGTH
  parser.opt = opt || {}
  parser.opt.lowercase = parser.opt.lowercase || parser.opt.lowercasetags
  parser.looseCase = parser.opt.lowercase ? "toLowerCase" : "toUpperCase"
  parser.tags = []
  parser.closed = parser.closedRoot = parser.sawRoot = false
  parser.tag = parser.error = null
  parser.strict = !!strict
  parser.noscript = !!(strict || parser.opt.noscript)
  parser.state = S.BEGIN
  parser.ENTITIES = Object.create(sax.ENTITIES)
  parser.attribList = []

  // namespaces form a prototype chain.
  // it always points at the current tag,
  // which protos to its parent tag.
  if (parser.opt.xmlns) parser.ns = Object.create(rootNS)

  // mostly just for error reporting
  parser.trackPosition = parser.opt.position !== false
  if (parser.trackPosition) {
    parser.position = parser.line = parser.column = 0
  }
  emit(parser, "onready")
}

if (!Object.create) Object.create = function (o) {
  function f () { this.__proto__ = o }
  f.prototype = o
  return new f
}

if (!Object.getPrototypeOf) Object.getPrototypeOf = function (o) {
  return o.__proto__
}

if (!Object.keys) Object.keys = function (o) {
  var a = []
  for (var i in o) if (o.hasOwnProperty(i)) a.push(i)
  return a
}

function checkBufferLength (parser) {
  var maxAllowed = Math.max(sax.MAX_BUFFER_LENGTH, 10)
    , maxActual = 0
  for (var i = 0, l = buffers.length; i < l; i ++) {
    var len = parser[buffers[i]].length
    if (len > maxAllowed) {
      // Text/cdata nodes can get big, and since they're buffered,
      // we can get here under normal conditions.
      // Avoid issues by emitting the text node now,
      // so at least it won't get any bigger.
      switch (buffers[i]) {
        case "textNode":
          closeText(parser)
        break

        case "cdata":
          emitNode(parser, "oncdata", parser.cdata)
          parser.cdata = ""
        break

        case "script":
          emitNode(parser, "onscript", parser.script)
          parser.script = ""
        break

        default:
          error(parser, "Max buffer length exceeded: "+buffers[i])
      }
    }
    maxActual = Math.max(maxActual, len)
  }
  // schedule the next check for the earliest possible buffer overrun.
  parser.bufferCheckPosition = (sax.MAX_BUFFER_LENGTH - maxActual)
                             + parser.position
}

function clearBuffers (parser) {
  for (var i = 0, l = buffers.length; i < l; i ++) {
    parser[buffers[i]] = ""
  }
}

function flushBuffers (parser) {
  closeText(parser)
  if (parser.cdata !== "") {
    emitNode(parser, "oncdata", parser.cdata)
    parser.cdata = ""
  }
  if (parser.script !== "") {
    emitNode(parser, "onscript", parser.script)
    parser.script = ""
  }
}

SAXParser.prototype =
  { end: function () { end(this) }
  , write: write
  , resume: function () { this.error = null; return this }
  , close: function () { return this.write(null) }
  , flush: function () { flushBuffers(this) }
  }

try {
  var Stream = require("stream").Stream
} catch (ex) {
  var Stream = function () {}
}


var streamWraps = sax.EVENTS.filter(function (ev) {
  return ev !== "error" && ev !== "end"
})

function createStream (strict, opt) {
  return new SAXStream(strict, opt)
}

function SAXStream (strict, opt) {
  if (!(this instanceof SAXStream)) return new SAXStream(strict, opt)

  Stream.apply(this)

  this._parser = new SAXParser(strict, opt)
  this.writable = true
  this.readable = true


  var me = this

  this._parser.onend = function () {
    me.emit("end")
  }

  this._parser.onerror = function (er) {
    me.emit("error", er)

    // if didn't throw, then means error was handled.
    // go ahead and clear error, so we can write again.
    me._parser.error = null
  }

  this._decoder = null;

  streamWraps.forEach(function (ev) {
    Object.defineProperty(me, "on" + ev, {
      get: function () { return me._parser["on" + ev] },
      set: function (h) {
        if (!h) {
          me.removeAllListeners(ev)
          return me._parser["on"+ev] = h
        }
        me.on(ev, h)
      },
      enumerable: true,
      configurable: false
    })
  })
}

SAXStream.prototype = Object.create(Stream.prototype,
  { constructor: { value: SAXStream } })

SAXStream.prototype.write = function (data) {
  if (typeof Buffer === 'function' &&
      typeof Buffer.isBuffer === 'function' &&
      Buffer.isBuffer(data)) {
    if (!this._decoder) {
      var SD = require('string_decoder').StringDecoder
      this._decoder = new SD('utf8')
    }
    data = this._decoder.write(data);
  }

  this._parser.write(data.toString())
  this.emit("data", data)
  return true
}

SAXStream.prototype.end = function (chunk) {
  if (chunk && chunk.length) this.write(chunk)
  this._parser.end()
  return true
}

SAXStream.prototype.on = function (ev, handler) {
  var me = this
  if (!me._parser["on"+ev] && streamWraps.indexOf(ev) !== -1) {
    me._parser["on"+ev] = function () {
      var args = arguments.length === 1 ? [arguments[0]]
               : Array.apply(null, arguments)
      args.splice(0, 0, ev)
      me.emit.apply(me, args)
    }
  }

  return Stream.prototype.on.call(me, ev, handler)
}



// character classes and tokens
var whitespace = "\r\n\t "
  // this really needs to be replaced with character classes.
  // XML allows all manner of ridiculous numbers and digits.
  , number = "0124356789"
  , letter = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  // (Letter | "_" | ":")
  , quote = "'\""
  , entity = number+letter+"#"
  , attribEnd = whitespace + ">"
  , CDATA = "[CDATA["
  , DOCTYPE = "DOCTYPE"
  , XML_NAMESPACE = "http://www.w3.org/XML/1998/namespace"
  , XMLNS_NAMESPACE = "http://www.w3.org/2000/xmlns/"
  , rootNS = { xml: XML_NAMESPACE, xmlns: XMLNS_NAMESPACE }

// turn all the string character sets into character class objects.
whitespace = charClass(whitespace)
number = charClass(number)
letter = charClass(letter)

// http://www.w3.org/TR/REC-xml/#NT-NameStartChar
// This implementation works on strings, a single character at a time
// as such, it cannot ever support astral-plane characters (10000-EFFFF)
// without a significant breaking change to either this  parser, or the
// JavaScript language.  Implementation of an emoji-capable xml parser
// is left as an exercise for the reader.
var nameStart = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/

var nameBody = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040\.\d-]/

quote = charClass(quote)
entity = charClass(entity)
attribEnd = charClass(attribEnd)

function charClass (str) {
  return str.split("").reduce(function (s, c) {
    s[c] = true
    return s
  }, {})
}

function isRegExp (c) {
  return Object.prototype.toString.call(c) === '[object RegExp]'
}

function is (charclass, c) {
  return isRegExp(charclass) ? !!c.match(charclass) : charclass[c]
}

function not (charclass, c) {
  return !is(charclass, c)
}

var S = 0
sax.STATE =
{ BEGIN                     : S++
, TEXT                      : S++ // general stuff
, TEXT_ENTITY               : S++ // &amp and such.
, OPEN_WAKA                 : S++ // <
, SGML_DECL                 : S++ // <!BLARG
, SGML_DECL_QUOTED          : S++ // <!BLARG foo "bar
, DOCTYPE                   : S++ // <!DOCTYPE
, DOCTYPE_QUOTED            : S++ // <!DOCTYPE "//blah
, DOCTYPE_DTD               : S++ // <!DOCTYPE "//blah" [ ...
, DOCTYPE_DTD_QUOTED        : S++ // <!DOCTYPE "//blah" [ "foo
, COMMENT_STARTING          : S++ // <!-
, COMMENT                   : S++ // <!--
, COMMENT_ENDING            : S++ // <!-- blah -
, COMMENT_ENDED             : S++ // <!-- blah --
, CDATA                     : S++ // <![CDATA[ something
, CDATA_ENDING              : S++ // ]
, CDATA_ENDING_2            : S++ // ]]
, PROC_INST                 : S++ // <?hi
, PROC_INST_BODY            : S++ // <?hi there
, PROC_INST_ENDING          : S++ // <?hi "there" ?
, OPEN_TAG                  : S++ // <strong
, OPEN_TAG_SLASH            : S++ // <strong /
, ATTRIB                    : S++ // <a
, ATTRIB_NAME               : S++ // <a foo
, ATTRIB_NAME_SAW_WHITE     : S++ // <a foo _
, ATTRIB_VALUE              : S++ // <a foo=
, ATTRIB_VALUE_QUOTED       : S++ // <a foo="bar
, ATTRIB_VALUE_CLOSED       : S++ // <a foo="bar"
, ATTRIB_VALUE_UNQUOTED     : S++ // <a foo=bar
, ATTRIB_VALUE_ENTITY_Q     : S++ // <foo bar="&quot;"
, ATTRIB_VALUE_ENTITY_U     : S++ // <foo bar=&quot;
, CLOSE_TAG                 : S++ // </a
, CLOSE_TAG_SAW_WHITE       : S++ // </a   >
, SCRIPT                    : S++ // <script> ...
, SCRIPT_ENDING             : S++ // <script> ... <
}

sax.ENTITIES =
{ "amp" : "&"
, "gt" : ">"
, "lt" : "<"
, "quot" : "\""
, "apos" : "'"
, "AElig" : 198
, "Aacute" : 193
, "Acirc" : 194
, "Agrave" : 192
, "Aring" : 197
, "Atilde" : 195
, "Auml" : 196
, "Ccedil" : 199
, "ETH" : 208
, "Eacute" : 201
, "Ecirc" : 202
, "Egrave" : 200
, "Euml" : 203
, "Iacute" : 205
, "Icirc" : 206
, "Igrave" : 204
, "Iuml" : 207
, "Ntilde" : 209
, "Oacute" : 211
, "Ocirc" : 212
, "Ograve" : 210
, "Oslash" : 216
, "Otilde" : 213
, "Ouml" : 214
, "THORN" : 222
, "Uacute" : 218
, "Ucirc" : 219
, "Ugrave" : 217
, "Uuml" : 220
, "Yacute" : 221
, "aacute" : 225
, "acirc" : 226
, "aelig" : 230
, "agrave" : 224
, "aring" : 229
, "atilde" : 227
, "auml" : 228
, "ccedil" : 231
, "eacute" : 233
, "ecirc" : 234
, "egrave" : 232
, "eth" : 240
, "euml" : 235
, "iacute" : 237
, "icirc" : 238
, "igrave" : 236
, "iuml" : 239
, "ntilde" : 241
, "oacute" : 243
, "ocirc" : 244
, "ograve" : 242
, "oslash" : 248
, "otilde" : 245
, "ouml" : 246
, "szlig" : 223
, "thorn" : 254
, "uacute" : 250
, "ucirc" : 251
, "ugrave" : 249
, "uuml" : 252
, "yacute" : 253
, "yuml" : 255
, "copy" : 169
, "reg" : 174
, "nbsp" : 160
, "iexcl" : 161
, "cent" : 162
, "pound" : 163
, "curren" : 164
, "yen" : 165
, "brvbar" : 166
, "sect" : 167
, "uml" : 168
, "ordf" : 170
, "laquo" : 171
, "not" : 172
, "shy" : 173
, "macr" : 175
, "deg" : 176
, "plusmn" : 177
, "sup1" : 185
, "sup2" : 178
, "sup3" : 179
, "acute" : 180
, "micro" : 181
, "para" : 182
, "middot" : 183
, "cedil" : 184
, "ordm" : 186
, "raquo" : 187
, "frac14" : 188
, "frac12" : 189
, "frac34" : 190
, "iquest" : 191
, "times" : 215
, "divide" : 247
, "OElig" : 338
, "oelig" : 339
, "Scaron" : 352
, "scaron" : 353
, "Yuml" : 376
, "fnof" : 402
, "circ" : 710
, "tilde" : 732
, "Alpha" : 913
, "Beta" : 914
, "Gamma" : 915
, "Delta" : 916
, "Epsilon" : 917
, "Zeta" : 918
, "Eta" : 919
, "Theta" : 920
, "Iota" : 921
, "Kappa" : 922
, "Lambda" : 923
, "Mu" : 924
, "Nu" : 925
, "Xi" : 926
, "Omicron" : 927
, "Pi" : 928
, "Rho" : 929
, "Sigma" : 931
, "Tau" : 932
, "Upsilon" : 933
, "Phi" : 934
, "Chi" : 935
, "Psi" : 936
, "Omega" : 937
, "alpha" : 945
, "beta" : 946
, "gamma" : 947
, "delta" : 948
, "epsilon" : 949
, "zeta" : 950
, "eta" : 951
, "theta" : 952
, "iota" : 953
, "kappa" : 954
, "lambda" : 955
, "mu" : 956
, "nu" : 957
, "xi" : 958
, "omicron" : 959
, "pi" : 960
, "rho" : 961
, "sigmaf" : 962
, "sigma" : 963
, "tau" : 964
, "upsilon" : 965
, "phi" : 966
, "chi" : 967
, "psi" : 968
, "omega" : 969
, "thetasym" : 977
, "upsih" : 978
, "piv" : 982
, "ensp" : 8194
, "emsp" : 8195
, "thinsp" : 8201
, "zwnj" : 8204
, "zwj" : 8205
, "lrm" : 8206
, "rlm" : 8207
, "ndash" : 8211
, "mdash" : 8212
, "lsquo" : 8216
, "rsquo" : 8217
, "sbquo" : 8218
, "ldquo" : 8220
, "rdquo" : 8221
, "bdquo" : 8222
, "dagger" : 8224
, "Dagger" : 8225
, "bull" : 8226
, "hellip" : 8230
, "permil" : 8240
, "prime" : 8242
, "Prime" : 8243
, "lsaquo" : 8249
, "rsaquo" : 8250
, "oline" : 8254
, "frasl" : 8260
, "euro" : 8364
, "image" : 8465
, "weierp" : 8472
, "real" : 8476
, "trade" : 8482
, "alefsym" : 8501
, "larr" : 8592
, "uarr" : 8593
, "rarr" : 8594
, "darr" : 8595
, "harr" : 8596
, "crarr" : 8629
, "lArr" : 8656
, "uArr" : 8657
, "rArr" : 8658
, "dArr" : 8659
, "hArr" : 8660
, "forall" : 8704
, "part" : 8706
, "exist" : 8707
, "empty" : 8709
, "nabla" : 8711
, "isin" : 8712
, "notin" : 8713
, "ni" : 8715
, "prod" : 8719
, "sum" : 8721
, "minus" : 8722
, "lowast" : 8727
, "radic" : 8730
, "prop" : 8733
, "infin" : 8734
, "ang" : 8736
, "and" : 8743
, "or" : 8744
, "cap" : 8745
, "cup" : 8746
, "int" : 8747
, "there4" : 8756
, "sim" : 8764
, "cong" : 8773
, "asymp" : 8776
, "ne" : 8800
, "equiv" : 8801
, "le" : 8804
, "ge" : 8805
, "sub" : 8834
, "sup" : 8835
, "nsub" : 8836
, "sube" : 8838
, "supe" : 8839
, "oplus" : 8853
, "otimes" : 8855
, "perp" : 8869
, "sdot" : 8901
, "lceil" : 8968
, "rceil" : 8969
, "lfloor" : 8970
, "rfloor" : 8971
, "lang" : 9001
, "rang" : 9002
, "loz" : 9674
, "spades" : 9824
, "clubs" : 9827
, "hearts" : 9829
, "diams" : 9830
}

Object.keys(sax.ENTITIES).forEach(function (key) {
    var e = sax.ENTITIES[key]
    var s = typeof e === 'number' ? String.fromCharCode(e) : e
    sax.ENTITIES[key] = s
})

for (var S in sax.STATE) sax.STATE[sax.STATE[S]] = S

// shorthand
S = sax.STATE

function emit (parser, event, data) {
  parser[event] && parser[event](data)
}

function emitNode (parser, nodeType, data) {
  if (parser.textNode) closeText(parser)
  emit(parser, nodeType, data)
}

function closeText (parser) {
  parser.textNode = textopts(parser.opt, parser.textNode)
  if (parser.textNode) emit(parser, "ontext", parser.textNode)
  parser.textNode = ""
}

function textopts (opt, text) {
  if (opt.trim) text = text.trim()
  if (opt.normalize) text = text.replace(/\s+/g, " ")
  return text
}

function error (parser, er) {
  closeText(parser)
  if (parser.trackPosition) {
    er += "\nLine: "+parser.line+
          "\nColumn: "+parser.column+
          "\nChar: "+parser.c
  }
  er = new Error(er)
  parser.error = er
  emit(parser, "onerror", er)
  return parser
}

function end (parser) {
  if (!parser.closedRoot) strictFail(parser, "Unclosed root tag")
  if ((parser.state !== S.BEGIN) && (parser.state !== S.TEXT)) error(parser, "Unexpected end")
  closeText(parser)
  parser.c = ""
  parser.closed = true
  emit(parser, "onend")
  SAXParser.call(parser, parser.strict, parser.opt)
  return parser
}

function strictFail (parser, message) {
  if (typeof parser !== 'object' || !(parser instanceof SAXParser))
    throw new Error('bad call to strictFail');
  if (parser.strict) error(parser, message)
}

function newTag (parser) {
  if (!parser.strict) parser.tagName = parser.tagName[parser.looseCase]()
  var parent = parser.tags[parser.tags.length - 1] || parser
    , tag = parser.tag = { name : parser.tagName, attributes : {} }

  // will be overridden if tag contails an xmlns="foo" or xmlns:foo="bar"
  if (parser.opt.xmlns) tag.ns = parent.ns
  parser.attribList.length = 0
}

function qname (name, attribute) {
  var i = name.indexOf(":")
    , qualName = i < 0 ? [ "", name ] : name.split(":")
    , prefix = qualName[0]
    , local = qualName[1]

  // <x "xmlns"="http://foo">
  if (attribute && name === "xmlns") {
    prefix = "xmlns"
    local = ""
  }

  return { prefix: prefix, local: local }
}

function attrib (parser) {
  if (!parser.strict) parser.attribName = parser.attribName[parser.looseCase]()

  if (parser.attribList.indexOf(parser.attribName) !== -1 ||
      parser.tag.attributes.hasOwnProperty(parser.attribName)) {
    return parser.attribName = parser.attribValue = ""
  }

  if (parser.opt.xmlns) {
    var qn = qname(parser.attribName, true)
      , prefix = qn.prefix
      , local = qn.local

    if (prefix === "xmlns") {
      // namespace binding attribute; push the binding into scope
      if (local === "xml" && parser.attribValue !== XML_NAMESPACE) {
        strictFail( parser
                  , "xml: prefix must be bound to " + XML_NAMESPACE + "\n"
                  + "Actual: " + parser.attribValue )
      } else if (local === "xmlns" && parser.attribValue !== XMLNS_NAMESPACE) {
        strictFail( parser
                  , "xmlns: prefix must be bound to " + XMLNS_NAMESPACE + "\n"
                  + "Actual: " + parser.attribValue )
      } else {
        var tag = parser.tag
          , parent = parser.tags[parser.tags.length - 1] || parser
        if (tag.ns === parent.ns) {
          tag.ns = Object.create(parent.ns)
        }
        tag.ns[local] = parser.attribValue
      }
    }

    // defer onattribute events until all attributes have been seen
    // so any new bindings can take effect; preserve attribute order
    // so deferred events can be emitted in document order
    parser.attribList.push([parser.attribName, parser.attribValue])
  } else {
    // in non-xmlns mode, we can emit the event right away
    parser.tag.attributes[parser.attribName] = parser.attribValue
    emitNode( parser
            , "onattribute"
            , { name: parser.attribName
              , value: parser.attribValue } )
  }

  parser.attribName = parser.attribValue = ""
}

function openTag (parser, selfClosing) {
  if (parser.opt.xmlns) {
    // emit namespace binding events
    var tag = parser.tag

    // add namespace info to tag
    var qn = qname(parser.tagName)
    tag.prefix = qn.prefix
    tag.local = qn.local
    tag.uri = tag.ns[qn.prefix] || ""

    if (tag.prefix && !tag.uri) {
      strictFail(parser, "Unbound namespace prefix: "
                       + JSON.stringify(parser.tagName))
      tag.uri = qn.prefix
    }

    var parent = parser.tags[parser.tags.length - 1] || parser
    if (tag.ns && parent.ns !== tag.ns) {
      Object.keys(tag.ns).forEach(function (p) {
        emitNode( parser
                , "onopennamespace"
                , { prefix: p , uri: tag.ns[p] } )
      })
    }

    // handle deferred onattribute events
    // Note: do not apply default ns to attributes:
    //   http://www.w3.org/TR/REC-xml-names/#defaulting
    for (var i = 0, l = parser.attribList.length; i < l; i ++) {
      var nv = parser.attribList[i]
      var name = nv[0]
        , value = nv[1]
        , qualName = qname(name, true)
        , prefix = qualName.prefix
        , local = qualName.local
        , uri = prefix == "" ? "" : (tag.ns[prefix] || "")
        , a = { name: name
              , value: value
              , prefix: prefix
              , local: local
              , uri: uri
              }

      // if there's any attributes with an undefined namespace,
      // then fail on them now.
      if (prefix && prefix != "xmlns" && !uri) {
        strictFail(parser, "Unbound namespace prefix: "
                         + JSON.stringify(prefix))
        a.uri = prefix
      }
      parser.tag.attributes[name] = a
      emitNode(parser, "onattribute", a)
    }
    parser.attribList.length = 0
  }

  parser.tag.isSelfClosing = !!selfClosing

  // process the tag
  parser.sawRoot = true
  parser.tags.push(parser.tag)
  emitNode(parser, "onopentag", parser.tag)
  if (!selfClosing) {
    // special case for <script> in non-strict mode.
    if (!parser.noscript && parser.tagName.toLowerCase() === "script") {
      parser.state = S.SCRIPT
    } else {
      parser.state = S.TEXT
    }
    parser.tag = null
    parser.tagName = ""
  }
  parser.attribName = parser.attribValue = ""
  parser.attribList.length = 0
}

function closeTag (parser) {
  if (!parser.tagName) {
    strictFail(parser, "Weird empty close tag.")
    parser.textNode += "</>"
    parser.state = S.TEXT
    return
  }

  if (parser.script) {
    if (parser.tagName !== "script") {
      parser.script += "</" + parser.tagName + ">"
      parser.tagName = ""
      parser.state = S.SCRIPT
      return
    }
    emitNode(parser, "onscript", parser.script)
    parser.script = ""
  }

  // first make sure that the closing tag actually exists.
  // <a><b></c></b></a> will close everything, otherwise.
  var t = parser.tags.length
  var tagName = parser.tagName
  if (!parser.strict) tagName = tagName[parser.looseCase]()
  var closeTo = tagName
  while (t --) {
    var close = parser.tags[t]
    if (close.name !== closeTo) {
      // fail the first time in strict mode
      strictFail(parser, "Unexpected close tag")
    } else break
  }

  // didn't find it.  we already failed for strict, so just abort.
  if (t < 0) {
    strictFail(parser, "Unmatched closing tag: "+parser.tagName)
    parser.textNode += "</" + parser.tagName + ">"
    parser.state = S.TEXT
    return
  }
  parser.tagName = tagName
  var s = parser.tags.length
  while (s --> t) {
    var tag = parser.tag = parser.tags.pop()
    parser.tagName = parser.tag.name
    emitNode(parser, "onclosetag", parser.tagName)

    var x = {}
    for (var i in tag.ns) x[i] = tag.ns[i]

    var parent = parser.tags[parser.tags.length - 1] || parser
    if (parser.opt.xmlns && tag.ns !== parent.ns) {
      // remove namespace bindings introduced by tag
      Object.keys(tag.ns).forEach(function (p) {
        var n = tag.ns[p]
        emitNode(parser, "onclosenamespace", { prefix: p, uri: n })
      })
    }
  }
  if (t === 0) parser.closedRoot = true
  parser.tagName = parser.attribValue = parser.attribName = ""
  parser.attribList.length = 0
  parser.state = S.TEXT
}

function parseEntity (parser) {
  var entity = parser.entity
    , entityLC = entity.toLowerCase()
    , num
    , numStr = ""
  if (parser.ENTITIES[entity])
    return parser.ENTITIES[entity]
  if (parser.ENTITIES[entityLC])
    return parser.ENTITIES[entityLC]
  entity = entityLC
  if (entity.charAt(0) === "#") {
    if (entity.charAt(1) === "x") {
      entity = entity.slice(2)
      num = parseInt(entity, 16)
      numStr = num.toString(16)
    } else {
      entity = entity.slice(1)
      num = parseInt(entity, 10)
      numStr = num.toString(10)
    }
  }
  entity = entity.replace(/^0+/, "")
  if (numStr.toLowerCase() !== entity) {
    strictFail(parser, "Invalid character entity")
    return "&"+parser.entity + ";"
  }

  return String.fromCodePoint(num)
}

function write (chunk) {
  var parser = this
  if (this.error) throw this.error
  if (parser.closed) return error(parser,
    "Cannot write after close. Assign an onready handler.")
  if (chunk === null) return end(parser)
  var i = 0, c = ""
  while (parser.c = c = chunk.charAt(i++)) {
    if (parser.trackPosition) {
      parser.position ++
      if (c === "\n") {
        parser.line ++
        parser.column = 0
      } else parser.column ++
    }
    switch (parser.state) {

      case S.BEGIN:
        if (c === "<") {
          parser.state = S.OPEN_WAKA
          parser.startTagPosition = parser.position
        } else if (not(whitespace,c)) {
          // have to process this as a text node.
          // weird, but happens.
          strictFail(parser, "Non-whitespace before first tag.")
          parser.textNode = c
          parser.state = S.TEXT
        }
      continue

      case S.TEXT:
        if (parser.sawRoot && !parser.closedRoot) {
          var starti = i-1
          while (c && c!=="<" && c!=="&") {
            c = chunk.charAt(i++)
            if (c && parser.trackPosition) {
              parser.position ++
              if (c === "\n") {
                parser.line ++
                parser.column = 0
              } else parser.column ++
            }
          }
          parser.textNode += chunk.substring(starti, i-1)
        }
        if (c === "<") {
          parser.state = S.OPEN_WAKA
          parser.startTagPosition = parser.position
        } else {
          if (not(whitespace, c) && (!parser.sawRoot || parser.closedRoot))
            strictFail(parser, "Text data outside of root node.")
          if (c === "&") parser.state = S.TEXT_ENTITY
          else parser.textNode += c
        }
      continue

      case S.SCRIPT:
        // only non-strict
        if (c === "<") {
          parser.state = S.SCRIPT_ENDING
        } else parser.script += c
      continue

      case S.SCRIPT_ENDING:
        if (c === "/") {
          parser.state = S.CLOSE_TAG
        } else {
          parser.script += "<" + c
          parser.state = S.SCRIPT
        }
      continue

      case S.OPEN_WAKA:
        // either a /, ?, !, or text is coming next.
        if (c === "!") {
          parser.state = S.SGML_DECL
          parser.sgmlDecl = ""
        } else if (is(whitespace, c)) {
          // wait for it...
        } else if (is(nameStart,c)) {
          parser.state = S.OPEN_TAG
          parser.tagName = c
        } else if (c === "/") {
          parser.state = S.CLOSE_TAG
          parser.tagName = ""
        } else if (c === "?") {
          parser.state = S.PROC_INST
          parser.procInstName = parser.procInstBody = ""
        } else {
          strictFail(parser, "Unencoded <")
          // if there was some whitespace, then add that in.
          if (parser.startTagPosition + 1 < parser.position) {
            var pad = parser.position - parser.startTagPosition
            c = new Array(pad).join(" ") + c
          }
          parser.textNode += "<" + c
          parser.state = S.TEXT
        }
      continue

      case S.SGML_DECL:
        if ((parser.sgmlDecl+c).toUpperCase() === CDATA) {
          emitNode(parser, "onopencdata")
          parser.state = S.CDATA
          parser.sgmlDecl = ""
          parser.cdata = ""
        } else if (parser.sgmlDecl+c === "--") {
          parser.state = S.COMMENT
          parser.comment = ""
          parser.sgmlDecl = ""
        } else if ((parser.sgmlDecl+c).toUpperCase() === DOCTYPE) {
          parser.state = S.DOCTYPE
          if (parser.doctype || parser.sawRoot) strictFail(parser,
            "Inappropriately located doctype declaration")
          parser.doctype = ""
          parser.sgmlDecl = ""
        } else if (c === ">") {
          emitNode(parser, "onsgmldeclaration", parser.sgmlDecl)
          parser.sgmlDecl = ""
          parser.state = S.TEXT
        } else if (is(quote, c)) {
          parser.state = S.SGML_DECL_QUOTED
          parser.sgmlDecl += c
        } else parser.sgmlDecl += c
      continue

      case S.SGML_DECL_QUOTED:
        if (c === parser.q) {
          parser.state = S.SGML_DECL
          parser.q = ""
        }
        parser.sgmlDecl += c
      continue

      case S.DOCTYPE:
        if (c === ">") {
          parser.state = S.TEXT
          emitNode(parser, "ondoctype", parser.doctype)
          parser.doctype = true // just remember that we saw it.
        } else {
          parser.doctype += c
          if (c === "[") parser.state = S.DOCTYPE_DTD
          else if (is(quote, c)) {
            parser.state = S.DOCTYPE_QUOTED
            parser.q = c
          }
        }
      continue

      case S.DOCTYPE_QUOTED:
        parser.doctype += c
        if (c === parser.q) {
          parser.q = ""
          parser.state = S.DOCTYPE
        }
      continue

      case S.DOCTYPE_DTD:
        parser.doctype += c
        if (c === "]") parser.state = S.DOCTYPE
        else if (is(quote,c)) {
          parser.state = S.DOCTYPE_DTD_QUOTED
          parser.q = c
        }
      continue

      case S.DOCTYPE_DTD_QUOTED:
        parser.doctype += c
        if (c === parser.q) {
          parser.state = S.DOCTYPE_DTD
          parser.q = ""
        }
      continue

      case S.COMMENT:
        if (c === "-") parser.state = S.COMMENT_ENDING
        else parser.comment += c
      continue

      case S.COMMENT_ENDING:
        if (c === "-") {
          parser.state = S.COMMENT_ENDED
          parser.comment = textopts(parser.opt, parser.comment)
          if (parser.comment) emitNode(parser, "oncomment", parser.comment)
          parser.comment = ""
        } else {
          parser.comment += "-" + c
          parser.state = S.COMMENT
        }
      continue

      case S.COMMENT_ENDED:
        if (c !== ">") {
          strictFail(parser, "Malformed comment")
          // allow <!-- blah -- bloo --> in non-strict mode,
          // which is a comment of " blah -- bloo "
          parser.comment += "--" + c
          parser.state = S.COMMENT
        } else parser.state = S.TEXT
      continue

      case S.CDATA:
        if (c === "]") parser.state = S.CDATA_ENDING
        else parser.cdata += c
      continue

      case S.CDATA_ENDING:
        if (c === "]") parser.state = S.CDATA_ENDING_2
        else {
          parser.cdata += "]" + c
          parser.state = S.CDATA
        }
      continue

      case S.CDATA_ENDING_2:
        if (c === ">") {
          if (parser.cdata) emitNode(parser, "oncdata", parser.cdata)
          emitNode(parser, "onclosecdata")
          parser.cdata = ""
          parser.state = S.TEXT
        } else if (c === "]") {
          parser.cdata += "]"
        } else {
          parser.cdata += "]]" + c
          parser.state = S.CDATA
        }
      continue

      case S.PROC_INST:
        if (c === "?") parser.state = S.PROC_INST_ENDING
        else if (is(whitespace, c)) parser.state = S.PROC_INST_BODY
        else parser.procInstName += c
      continue

      case S.PROC_INST_BODY:
        if (!parser.procInstBody && is(whitespace, c)) continue
        else if (c === "?") parser.state = S.PROC_INST_ENDING
        else parser.procInstBody += c
      continue

      case S.PROC_INST_ENDING:
        if (c === ">") {
          emitNode(parser, "onprocessinginstruction", {
            name : parser.procInstName,
            body : parser.procInstBody
          })
          parser.procInstName = parser.procInstBody = ""
          parser.state = S.TEXT
        } else {
          parser.procInstBody += "?" + c
          parser.state = S.PROC_INST_BODY
        }
      continue

      case S.OPEN_TAG:
        if (is(nameBody, c)) parser.tagName += c
        else {
          newTag(parser)
          if (c === ">") openTag(parser)
          else if (c === "/") parser.state = S.OPEN_TAG_SLASH
          else {
            if (not(whitespace, c)) strictFail(
              parser, "Invalid character in tag name")
            parser.state = S.ATTRIB
          }
        }
      continue

      case S.OPEN_TAG_SLASH:
        if (c === ">") {
          openTag(parser, true)
          closeTag(parser)
        } else {
          strictFail(parser, "Forward-slash in opening tag not followed by >")
          parser.state = S.ATTRIB
        }
      continue

      case S.ATTRIB:
        // haven't read the attribute name yet.
        if (is(whitespace, c)) continue
        else if (c === ">") openTag(parser)
        else if (c === "/") parser.state = S.OPEN_TAG_SLASH
        else if (is(nameStart, c)) {
          parser.attribName = c
          parser.attribValue = ""
          parser.state = S.ATTRIB_NAME
        } else strictFail(parser, "Invalid attribute name")
      continue

      case S.ATTRIB_NAME:
        if (c === "=") parser.state = S.ATTRIB_VALUE
        else if (c === ">") {
          strictFail(parser, "Attribute without value")
          parser.attribValue = parser.attribName
          attrib(parser)
          openTag(parser)
        }
        else if (is(whitespace, c)) parser.state = S.ATTRIB_NAME_SAW_WHITE
        else if (is(nameBody, c)) parser.attribName += c
        else strictFail(parser, "Invalid attribute name")
      continue

      case S.ATTRIB_NAME_SAW_WHITE:
        if (c === "=") parser.state = S.ATTRIB_VALUE
        else if (is(whitespace, c)) continue
        else {
          strictFail(parser, "Attribute without value")
          parser.tag.attributes[parser.attribName] = ""
          parser.attribValue = ""
          emitNode(parser, "onattribute",
                   { name : parser.attribName, value : "" })
          parser.attribName = ""
          if (c === ">") openTag(parser)
          else if (is(nameStart, c)) {
            parser.attribName = c
            parser.state = S.ATTRIB_NAME
          } else {
            strictFail(parser, "Invalid attribute name")
            parser.state = S.ATTRIB
          }
        }
      continue

      case S.ATTRIB_VALUE:
        if (is(whitespace, c)) continue
        else if (is(quote, c)) {
          parser.q = c
          parser.state = S.ATTRIB_VALUE_QUOTED
        } else {
          strictFail(parser, "Unquoted attribute value")
          parser.state = S.ATTRIB_VALUE_UNQUOTED
          parser.attribValue = c
        }
      continue

      case S.ATTRIB_VALUE_QUOTED:
        if (c !== parser.q) {
          if (c === "&") parser.state = S.ATTRIB_VALUE_ENTITY_Q
          else parser.attribValue += c
          continue
        }
        attrib(parser)
        parser.q = ""
        parser.state = S.ATTRIB_VALUE_CLOSED
      continue

      case S.ATTRIB_VALUE_CLOSED:
        if (is(whitespace, c)) {
          parser.state = S.ATTRIB
        } else if (c === ">") openTag(parser)
        else if (c === "/") parser.state = S.OPEN_TAG_SLASH
        else if (is(nameStart, c)) {
          strictFail(parser, "No whitespace between attributes")
          parser.attribName = c
          parser.attribValue = ""
          parser.state = S.ATTRIB_NAME
        } else strictFail(parser, "Invalid attribute name")
      continue

      case S.ATTRIB_VALUE_UNQUOTED:
        if (not(attribEnd,c)) {
          if (c === "&") parser.state = S.ATTRIB_VALUE_ENTITY_U
          else parser.attribValue += c
          continue
        }
        attrib(parser)
        if (c === ">") openTag(parser)
        else parser.state = S.ATTRIB
      continue

      case S.CLOSE_TAG:
        if (!parser.tagName) {
          if (is(whitespace, c)) continue
          else if (not(nameStart, c)) {
            if (parser.script) {
              parser.script += "</" + c
              parser.state = S.SCRIPT
            } else {
              strictFail(parser, "Invalid tagname in closing tag.")
            }
          } else parser.tagName = c
        }
        else if (c === ">") closeTag(parser)
        else if (is(nameBody, c)) parser.tagName += c
        else if (parser.script) {
          parser.script += "</" + parser.tagName
          parser.tagName = ""
          parser.state = S.SCRIPT
        } else {
          if (not(whitespace, c)) strictFail(parser,
            "Invalid tagname in closing tag")
          parser.state = S.CLOSE_TAG_SAW_WHITE
        }
      continue

      case S.CLOSE_TAG_SAW_WHITE:
        if (is(whitespace, c)) continue
        if (c === ">") closeTag(parser)
        else strictFail(parser, "Invalid characters in closing tag")
      continue

      case S.TEXT_ENTITY:
      case S.ATTRIB_VALUE_ENTITY_Q:
      case S.ATTRIB_VALUE_ENTITY_U:
        switch(parser.state) {
          case S.TEXT_ENTITY:
            var returnState = S.TEXT, buffer = "textNode"
          break

          case S.ATTRIB_VALUE_ENTITY_Q:
            var returnState = S.ATTRIB_VALUE_QUOTED, buffer = "attribValue"
          break

          case S.ATTRIB_VALUE_ENTITY_U:
            var returnState = S.ATTRIB_VALUE_UNQUOTED, buffer = "attribValue"
          break
        }
        if (c === ";") {
          parser[buffer] += parseEntity(parser)
          parser.entity = ""
          parser.state = returnState
        }
        else if (is(entity, c)) parser.entity += c
        else {
          strictFail(parser, "Invalid character entity")
          parser[buffer] += "&" + parser.entity + c
          parser.entity = ""
          parser.state = returnState
        }
      continue

      default:
        throw new Error(parser, "Unknown state: " + parser.state)
    }
  } // while
  // cdata blocks can get very big under normal conditions. emit and move on.
  // if (parser.state === S.CDATA && parser.cdata) {
  //   emitNode(parser, "oncdata", parser.cdata)
  //   parser.cdata = ""
  // }
  if (parser.position >= parser.bufferCheckPosition) checkBufferLength(parser)
  return parser
}

/*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
if (!String.fromCodePoint) {
        (function() {
                var stringFromCharCode = String.fromCharCode;
                var floor = Math.floor;
                var fromCodePoint = function() {
                        var MAX_SIZE = 0x4000;
                        var codeUnits = [];
                        var highSurrogate;
                        var lowSurrogate;
                        var index = -1;
                        var length = arguments.length;
                        if (!length) {
                                return '';
                        }
                        var result = '';
                        while (++index < length) {
                                var codePoint = Number(arguments[index]);
                                if (
                                        !isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
                                        codePoint < 0 || // not a valid Unicode code point
                                        codePoint > 0x10FFFF || // not a valid Unicode code point
                                        floor(codePoint) != codePoint // not an integer
                                ) {
                                        throw RangeError('Invalid code point: ' + codePoint);
                                }
                                if (codePoint <= 0xFFFF) { // BMP code point
                                        codeUnits.push(codePoint);
                                } else { // Astral code point; split in surrogate halves
                                        // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
                                        codePoint -= 0x10000;
                                        highSurrogate = (codePoint >> 10) + 0xD800;
                                        lowSurrogate = (codePoint % 0x400) + 0xDC00;
                                        codeUnits.push(highSurrogate, lowSurrogate);
                                }
                                if (index + 1 == length || codeUnits.length > MAX_SIZE) {
                                        result += stringFromCharCode.apply(null, codeUnits);
                                        codeUnits.length = 0;
                                }
                        }
                        return result;
                };
                if (Object.defineProperty) {
                        Object.defineProperty(String, 'fromCodePoint', {
                                'value': fromCodePoint,
                                'configurable': true,
                                'writable': true
                        });
                } else {
                        String.fromCodePoint = fromCodePoint;
                }
        }());
}

})(typeof exports === "undefined" ? sax = {} : exports);

}).call(this,require("buffer").Buffer)
},{"buffer":"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/buffer/index.js","stream":"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/stream-browserify/index.js","string_decoder":"/home/zefanja/Projekte/common-sword/node_modules/browserify/node_modules/string_decoder/index.js"}],"/home/zefanja/Projekte/common-sword/scripts/dataMgr.js":[function(require,module,exports){
'use strict';

var JSZip = require("jszip");
var async = require("async");
var IDB = require("./idbPluginWrapper");
var tools = require("./tools");

//get some data by id
function get(inId, inCallback) {
    IDB.getDB(function (inError, db) {
        if(!inError)
            db.get(inId,
                function (inResponse) {
                    inCallback(null, inResponse);
                },
                function (inError) {inCallback(inError);}
            );
        else inCallback(inError);
    });
}

//Read a module's config file and save it as an Object
function saveConfig(inConfBlob, inCallback) {
    var confReader = new FileReader();
    confReader.readAsText(inConfBlob);
    confReader.onload = function(e) {
        var configData = tools.readConf(e.target.result);

        //Save config data to the database and continue to build the index
        IDB.getDB(function (inError, db) {
            if(!inError)
                db.put(configData,
                    function (inId) {
                        inCallback(null, {id: inId, modKey: configData.moduleKey, v11n: configData.Versification});
                    },
                    function (inError) {inCallback(inError);}
                );
            else {
                console.log(inError);
                //inCallback(inError);
            }
        });
    };
}

//Save the binary module files like *.bzz
function saveModule(inFiles, inDoc, inCallback) {
    console.log("saveModule", inFiles, inDoc);
    var z = inFiles.length,
        args = {},
        path = null,
        driver = null;

    args.docId = inDoc.id;

    async.eachSeries(inFiles, function (file, ittCallback) {
        var path = file.name.split("/"),
            driver = path[path.length-3];
        IDB.getDB(function (inError, db) {
            if(!inError)
                db.put({fileName: path[path.length-1], modKey: inDoc.modKey, driver: driver, blob: file.blob},
                    function (inId) {
                        args[path[path.length-1].split(".")[0]] = inId;
                        ittCallback(null);
                    },
                    function (inError) {ittCallback(inError);}
                );
            else inCallback(inError);
        });
    }, function (inError) {
        if(!inError) updateBinaryIds(args, inCallback);
        else inCallback(inError);
    });
}

function updateBinaryIds(inIds, inCallback) {
    //console.log("updateBinaryIds", inIds, inCallback);
    IDB.getDB(function (inError, db) {
        if(!inError)
            db.get(inIds.docId,
                function (inModule) {
                    inModule.nt = inIds.nt;
                    inModule.ot = inIds.ot;
                    db.put(inModule, function(inResponse) {
                            inCallback(null);
                        },
                        function (inError) {inCallback(inError);}
                    );
                },
                function (inError) {inCallback(inError);}
            );
        else inCallback(inError);
    });
}

function getBlob(inId, inCallback) {
    IDB.getDB(function (inError, db) {
        if(!inError)
            db.get(inId,
                function (inBlob) {inCallback(null, inBlob.blob);},
                function (inError) {inCallback(inError);}
            );
        else inCallback(inError);
    });
}

function saveBCVPos(inOT, inNT, inDoc, inCallback) {
    IDB.getDB(function (inError, db) {
        if(!inError)
            db.put({modKey: inDoc.modKey, ot: inOT, nt: inNT},
                function (inPosResId) {
                    db.get(inDoc.id,
                        function (inModule) {
                            inModule["bcvPosID"] = inPosResId;
                            db.put(inModule,
                                function(inId) {
                                    inCallback(null);
                                },
                                function (inError) {inCallback(inError);}
                            );
                        },
                        function (inError) {inCallback(inError);}
                    );
                },
                function (inError) {inCallback(inError);}
            );
        else inCallback(inError);
    });
}

function getModules(inCallback) {
    IDB.getDB(function (inError, db) {
        if(!inError)
            db.query(function (inResults) {
                inCallback(null, inResults);
            },
            {
                onError: function (inError) {inCallback(inError);},
                index: "modules"
            });
        else inCallback(inError);
    });
}

function remove(inId, inCallback) {
    IDB.getDB(function (inError, db) {
        if(!inError)
            db.remove(inId,
                inCallback(null),
                function (inError) { inCallback(inError);}
            );
        else inCallback(inError);
    });
}

function removeModule(inModuleKey, inCallback) {
    IDB.getDB(function (inError, db) {
        if(!inError) {
            getModules(function (inError, inModules) {
                if(!inError) {
                    var found = false;
                    inModules.forEach(function(mod) {
                        if(mod.moduleKey === inModuleKey) {
                            found = true;
                            var a = (mod.blobIds) ? tools.convertObject(mod.blobIds) : [mod.bcvPosID, mod.nt, mod.ot, mod.id];
                            //Remove undefined values
                            a = a.filter(function(e){return e;});
                            db.removeBatch(a,
                                function() {
                                    if(inCallback) inCallback(null);
                                },
                                function(inError) {
                                    if (inCallback) inCallback(inError);
                                }
                            );
                        }
                    });
                    if(!found)
                        inCallback({message: "Couldn't find the module."});
                } else if(inCallback) inCallback(inError);

            });
        } else if(inCallback) inCallback(inError);
    });
}

function clearDatabase() {
    IDB.getDB(function (inError, db) {
        if(!inError)
            db.clear(
                function () {
                    //console.log("cleared database");
                },
                function (inError) { console.log(inError);}
            );
        else inCallback(inError);
    });
}

function getIDBWrapper () {
    return IDB.getIDBWrapper();
}

function errorHandler(inError, inCallback) {
    console.log(inError, inCallback);
}

var dataMgr = {
	clearDatabase: clearDatabase,
    saveConfig: saveConfig,
    saveModule: saveModule,
    saveBCVPos: saveBCVPos,
    getBlob: getBlob,
    get: get,
    remove: remove,
    removeModule: removeModule,
    getModules: getModules,
    getIDBWrapper: getIDBWrapper
};

module.exports = dataMgr;
},{"./idbPluginWrapper":"/home/zefanja/Projekte/common-sword/scripts/idbPluginWrapper.js","./tools":"/home/zefanja/Projekte/common-sword/scripts/tools.js","async":"/home/zefanja/Projekte/common-sword/node_modules/async/lib/async.js","jszip":"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/index.js"}],"/home/zefanja/Projekte/common-sword/scripts/filterMgr.js":[function(require,module,exports){
"use strict";
var osis = require("./filters/osis");
var plain = require("./filters/plain");

function processText(inRaw, inSource, inDirection, inOptions) {
	//console.log(inRaw, inSource, inDirection, inOptions);
    if(inSource && inSource.toLowerCase() === "osis")
        return osis.processText(inRaw, inDirection, inOptions);
    else
        return plain.processText(inRaw, inDirection, inOptions);
}

var filterMgr = {
    processText: processText
};

module.exports = filterMgr;

},{"./filters/osis":"/home/zefanja/Projekte/common-sword/scripts/filters/osis.js","./filters/plain":"/home/zefanja/Projekte/common-sword/scripts/filters/plain.js"}],"/home/zefanja/Projekte/common-sword/scripts/filters/osis.js":[function(require,module,exports){
var bcv = new bcv_parser();
var sax = require("sax");
var parser = sax.parser(true); //strict = true

//* SWFilter Options
var swFilterOptions = {
    headings: false,
    footnotes: false,
    crossReferences: false,
    strongsNumbers: false,
    wordsOfChristInRed: false,
    oneVersePerLine: false,
    array: false
};

var lastTag = "",
    currentNode = null,
    currentNote = null,
    currentRef = null,
    quote = null,
    verseData = null,
    noteText = "",
    outText = "",
    renderedText = "",
    verseArray = [],
    verseNumber = "",
    osisRef = "",
    footnotesData = {},
    isSelfClosing = false,
    isTitle = false,
    noteCount = 0;

function processText(inRaw, inDirection, inOptions) {
    if (!inOptions || inOptions === {}) {
        inOptions = swFilterOptions;
    } else {
        inOptions.headings = (inOptions.headings) ? inOptions.headings : swFilterOptions.headings;
        inOptions.footnotes = (inOptions.footnotes) ? inOptions.footnotes : swFilterOptions.footnotes;
        inOptions.crossReferences = (inOptions.crossReferences) ? inOptions.crossReferences : swFilterOptions.crossReferences;
        inOptions.strongsNumbers = (inOptions.strongsNumbers) ? inOptions.strongsNumbers : swFilterOptions.strongsNumbers;
        inOptions.wordsOfChristInRed = (inOptions.wordsOfChristInRed) ? inOptions.wordsOfChristInRed : swFilterOptions.wordsOfChristInRed;
        inOptions.oneVersePerLine = (inOptions.oneVersePerLine) ? inOptions.oneVersePerLine : swFilterOptions.oneVersePerLine;
        inOptions.array = (inOptions.array) ? inOptions.array : swFilterOptions.array;
    }

    lastTag = "";
    currentNode = null;
    currentNote = null;
    currentRef = null;
    quote = null;
    title = null;
    titleText = "";
    verseData = null;
    noteText = "";
    outText = "";
    renderedText = "";
    verseArray = [];
    verseNumber = "";
    osisRef = "";
    footnotesData = {};
    isTitle = false;
    noteCount = 0;

    //Handle Parsing errors
    parser.onerror = function (e) {
        parser.resume();
    };

    //Text node
    parser.ontext = function (t) {
        //console.log("TEXT:", t, currentNode);
        if (currentNote) {
            outText += processFootnotes(t, inOptions);
        } else if (quote) {
            if (quote.attributes.who === "Jesus" && inOptions.wordsOfChristInRed && t) {
                outText += "<span style='color: red'><span class='sword-woc'>" + t + " </span></span>";
            } else
                outText += t;
        } else if (currentNode) {
            switch (currentNode.name) {
                case "title":
                    if(inOptions.headings) {
                        titleText += t;
                    }
                break;
                case "divineName":
                    if(title && inOptions.headings) {
                        titleText += "<span class='sword-divine-name'>" + t + "</span>";
                    }
                break;
                case "hi":
                    outText += tagHi(currentNode, t);
                break;
                default:
                    outText += t;
                break;
            }
        } else {
            outText += t;
        }


    };

    //Handle opening tags
    parser.onopentag = function (node) {
        //console.log(node);
        currentNode = node;
        lastTag = node.name;
        switch (node.name) {
            case "xml":
                verseData = {osisRef: node.attributes.osisRef, verseNum: node.attributes.verseNum};
                if (parseInt(verseData.verseNum, 10) === 0) {
                    if (inDirection === "RtoL")
                        outText += "<span dir='rtl'><div class='sword-intro'>";
                    else
                        outText += "<span class='sword-intro'>";
                } else {
                    if (inDirection === "RtoL")
                        outText += "<span dir='rtl'><a href=\"?type=verseNum&osisRef=" + verseData.osisRef + "\" class='verse-number'> " + verseData.verseNum + " </a></span><span dir='rtl'>";
                    else
                        outText += "<a href=\"?type=verseNum&osisRef=" + verseData.osisRef + "\" class='verse-number'> " + verseData.verseNum + " </a>";
                }
            break;
            case "note":
                if (node.attributes.type === "crossReference" && inOptions.crossReferences)
                    outText += "<span class='sword-cross-reference'>[";
                else if (inOptions.footnotes && node.attributes.type !== "crossReference") {
                    osisRef = node.attributes.osisRef || node.attributes.annotateRef || verseData.osisRef;
                    if (!node.attributes.n) noteCount++;
                    var n = node.attributes.n || noteCount;
                    outText += "<a class='sword-footnote' href=\"?type=footnote&osisRef=" + osisRef + "&n=" + n+ "\"><sup>" + "*n" + n + "</sup></a>";
                }

                currentNote = node;
            break;
            case "reference":
                currentRef = node;
            break;
            case "q":
                if(!node.isSelfClosing && node.attributes.who === "Jesus")
                    quote = node;
            break;
            case "title":
                title = node;
                if (title.attributes.type === "section")
                    titleText += "<h3>";
                else
                    titleText += "<h1>";
            break;
            case "div":
                if(node.isSelfClosing && node.attributes.type === "paragraph" && node.attributes.sID)
                    outText += "<p>";
                if(node.isSelfClosing && node.attributes.type === "paragraph" && node.attributes.eID)
                    outText += "</p>";
            break;
            case "l":
                if(node.isSelfClosing && node.attributes.type === "x-br")
                    outText += "<br>";
            break;
        }
    };

    parser.onclosetag = function (tagName) {
        //console.log("CLOSE:", tagName);
        switch (tagName) {
            case "title":
                if (title.attributes.type === "section")
                    outText = titleText + "</h3>" + outText;
                else
                    outText = titleText + "</h1>" + outText;
                currentNode = null;
                title = null;
                titleText = "";
            break;
            case "note":
                if (currentNote.attributes.type === "crossReference" && inOptions.crossReferences)
                    outText += "]</span> ";
                noteText = "";
                currentNote = null;
            break;
            case "reference":
                currentRef = null;
            break;
            case "q":
                if (!currentNode && inOptions.wordsOfChristInRed) {
                    //outText += "</span>";
                    quote = null;
                }
            break;
            case "xml":
                if(parseInt(verseData.verseNum, 10) === 0)
                    outText += "</div>";
                if(inDirection === "RtoL")
                    outText += "</span>";
            break;
        }
        lastTag = "";
        currentNode = null;
    };

    //Handling Attributes
    parser.onattribute = function (attr) {
        //console.log(attr);
    };

    //End of parsing
    parser.onend = function () {
        //console.log("Finished parsing XML!");
    };

    var tmp = "";
    for (var i=0; i<inRaw.length; i++) {
        //console.log(inRaw[i].text);
        tmp = "<xml osisRef='" + inRaw[i].osisRef + "' verseNum = '" + inRaw[i].verse + "'>" + inRaw[i].text + "</xml>";
        parser.write(tmp);
        parser.close();
        if (!inOptions.array)
            renderedText += (inOptions.oneVersePerLine) ? "<div class='verse' id = '" + inRaw[i].osisRef + "'>" + outText + "</div>" : "<span class='verse' id = '" + inRaw[i].osisRef + "'>" + outText + "</span>";
        else
            verseArray.push({text: (inOptions.oneVersePerLine) ? "<div class='verse' id = '" + inRaw[i].osisRef + "'>" + outText + "</div>" : "<span class='verse' id = '" + inRaw[i].osisRef + "'>" + outText + "</span>", osisRef: inRaw[i].osisRef});
        outText = "";
    }

    if(inDirection === "RtoL")
        renderedText = "<div style='text-align: right;'>" + renderedText + "</div>";
    if(!inOptions.array)
        return {text: renderedText, footnotes: footnotesData};
    else
        return {verses: verseArray, footnotes: footnotesData, rtol: (inDirection === "RtoL") ? true : false};
}

/* FUNCTIONS TO PROCESS SPECIFIC OSIS TAGS */

function processFootnotes(t, inOptions) {
    var out = "";
    if (currentNote.attributes.type === "crossReference" && inOptions.crossReferences) {
        if (lastTag !== "reference")
            out += processCrossReference(t);
        else {
            var crossRef = (currentRef) ? currentRef.attributes.osisRef : currentNote.attributes.osisRef;
            out += "<a href=\"?type=crossReference&osisRef=" + crossRef + "&n=" + currentNote.attributes.n + "\">" + t + "</a>";
        }
    } else if (inOptions.footnotes && currentNote.attributes.type !== "crossReference") {
        if (lastTag === "hi") {
            t = tagHi(currentNode, t);
        }
        osisRef = currentNote.attributes.osisRef || currentNote.attributes.annotateRef || verseData.osisRef;
        var n = currentNote.attributes.n || noteCount;
        if (!footnotesData.hasOwnProperty(osisRef))
            footnotesData[osisRef] = [{note: t, n: n}];
        else {
            if (footnotesData[osisRef][footnotesData[osisRef].length-1].n === n)
                footnotesData[osisRef][footnotesData[osisRef].length-1]["note"] += t;
            else
                footnotesData[osisRef].push({note: t, n: n});
        }
    }
    return out;
}

function processCrossReference(inText) {
    var out = "",
        osisRef = bcv.parse(inText).osis();
    if (osisRef !== "" && currentRef) {
        var n = currentRef.attributes.n || currentNote.attributes.n;
        out += "<a href=\"?type=crossReference&osisRef=" + osisRef + "&n=" + n + "\">" + inText + "</a>";
    } else
        out += inText;
    return out;
}

function tagHi (node, t) {
    switch (node.attributes.type) {
        case "italic":
            t = "<i>"+t+"</i>";
        break;
        case "bold":
            t = "<b>"+t+"</b>";
        break;
        case "line-through":
            t = "<s>"+t+"</s>";
        break;
        case "underline":
            t = "<u>"+t+"</u>";
        break;
        case "sub":
            t = "<sub>"+t+"</sub>";
        break;
        case "super":
            t = "<sup>"+t+"</sup>";
        break;
    }

    return t;
}

var osis = {
    processText: processText
};

//Return osis filter methods
module.exports = osis;
},{"sax":"/home/zefanja/Projekte/common-sword/node_modules/sax/lib/sax.js"}],"/home/zefanja/Projekte/common-sword/scripts/filters/plain.js":[function(require,module,exports){
//* SWFilter Options
var swFilterOptions = {
    oneVersePerLine: false,
    array: false
};

function processText(inRaw, inDirection, inOptions) {
    var renderedText = "",
        verseArray = [];

    if (!inOptions || inOptions === {}) {
        inOptions = swFilterOptions;
    } else {
        inOptions.oneVersePerLine = (inOptions.oneVersePerLine) ? inOptions.oneVersePerLine : swFilterOptions.oneVersePerLine;
        inOptions.array = (inOptions.array) ? inOptions.array : swFilterOptions.array;
    }

    for (var i=0; i<inRaw.length; i++) {
        outText = (inDirection !== "RtoL") ? "<a href=\"?type=verseNum&osisRef=" + inRaw[i].osisRef + "\" class='verse-number'> " + inRaw[i].verse + " </a>" : "<span dir='rtl'><a href=\"?type=verseNum&osisRef=" + inRaw[i].osisRef + "\" class='verse-number'> " + inRaw[i].verse + " </a></span>";
        outText += (inDirection !== "RtoL") ? inRaw[i].text : "<span dir='rtl'>" + inRaw[i].text + "</span>";
        if (!inOptions.array)
            renderedText += (inOptions.oneVersePerLine) ? "<div class='verse' id = '" + inRaw[i].osisRef + "'>" + outText + "</div>" : "<span class='verse' id = '" + inRaw[i].osisRef + "'>" + outText + "</span>";
        else
            verseArray.push({text: (inOptions.oneVersePerLine) ? "<div class='verse' id = '" + inRaw[i].osisRef + "'>" + outText + "</div>" : "<span class='verse' id = '" + inRaw[i].osisRef + "'>" + outText + "</span>", osisRef: inRaw[i].osisRef});
        outText = "";
    }

    if(inDirection === "RtoL")
        renderedText = "<div style='text-align: right;'>" + renderedText + "</div>";

    if(!inOptions.array)
        return {text: renderedText};
    else
        return {verses: verseArray, rtol: (inDirection === "RtoL") ? true : false};
}

var plain = {
    processText: processText
};

module.exports = plain;
},{}],"/home/zefanja/Projekte/common-sword/scripts/idbPluginWrapper.js":[function(require,module,exports){
var IDB = require("idb-wrapper");

var isInitialized = false,
    db = null;

function getDB (inCallback) {
    if (isInitialized) {
        inCallback(null, db);
    } else {
        db = new IDB({
            storeName: "swordjs",
            dbVersion: 4,
            autoIncrement: true,
            indexes: [
                {name: "modules", keyPath: "moduleKey", unique: true}
            ],
            onStoreReady: function() {
                isInitialized = true;
                if(inCallback) inCallback(null, db);
            },
            onError: function(inError) {
                isInitialized = false;
                if(inCallback) inCallback(inError);
            },
        });
    }
}

function getIDBWrapper () {
    return IDB;
}

var idbPluginWrapper = {
    getDB: getDB,
    getIDBWrapper: getIDBWrapper
};

module.exports = idbPluginWrapper;
},{"idb-wrapper":"/home/zefanja/Projekte/common-sword/node_modules/idb-wrapper/idbstore.js"}],"/home/zefanja/Projekte/common-sword/scripts/installMgr.js":[function(require,module,exports){
'use strict';

var JSZip = require("jszip");
var dataMgr = require("./dataMgr");
var versificationMgr = require("./versificationMgr");
var async = require("async");
var tools = require("./tools");

//console.log(VersificationMgr.getBooksInNT());

var start = 0,
    buf = null,
    isEnd = false;

//Get a list of all available repos/sources from CrossWire's masterRepoList.conf
function getRepositories(inCallback) {
    download("http://crosswire.org/ftpmirror/pub/sword/masterRepoList.conf", "text", function (inError, inResponse) {
        if (inResponse === "" && !inError) {
            inCallback("Couldn't download master repo list!");
        } else if (!inError) {
            var repos = [],
                split = null,
                type = "",
                repoName = "";
            inResponse.split(/[\r\n]+/g).forEach(function (repo) {
                split = repo.split("|");
                if(split.length > 1 && split[0].search("CrossWire") !== -1) {
                    repoName = split[0].split("=")[2];
                    switch (repoName) {
                        case "CrossWire":
                            type = "main";
                        break;
                        case "CrossWire Beta":
                            type = "beta";
                        break;
                        case "CrossWire av11n":
                            type = "av";
                        break;
                        case "CrossWire Attic":
                            type = "attic";
                        break;
                        case "CrossWire Wycliffe":
                            type = "wycliffe";
                        break;
                        case "CrossWire av11n Attic":
                            type = "avattic";
                        break;
                    }
                    repos.push({
                        name: repoName,
                        type: type,
                        url: "http://crosswire.org/ftpmirror" + split[2].replace("raw", "packages") + "/rawzip/",
                        confUrl: "http://crosswire.org/ftpmirror" + split[2] + "/mods.d"
                    });
                }
            });
            //console.log("REPOS", repos);
            inCallback(inError, repos);
        } else {
            inCallback(inError);
        }
    });
}

//dirty hack to get a list of modules that is available in a repository.
//FIXME: unpack mods.d.tar.gz in Javascript (untar is the problem) or ask CrossWire to compress it as zip/gzip
function getModules(inRepo, inCallback) {
    download(inRepo.confUrl, "document", function (inError, inResponse) {
        if (!inError) {
            var tasks = [],
                url = "",
                a = inResponse.getElementsByTagName("a");
            for(var i=0;i<a.length;i++) {
                if (a[i].href.search(".conf") !== -1) {
                    url = a[i].baseURI + "/" + a[i].textContent;
                    tasks.push((function (url) {
                        return function (cb) {
                            download(url, "text", function (inError, inConf) {
                                var configData = tools.readConf(inConf);
                                if (configData.ModDrv === "zText") {
                                    //configData["url"] = inRepo.url + configData.moduleKey + ".zip";
                                    configData["url"] = "http://www.crosswire.org/sword/servlet/SwordMod.Verify?modName=" + configData.moduleKey + "&" + inRepo.type + "=true&pkgType=raw";
                                    cb(inError, configData);
                                } else {
                                    cb(inError);
                                }
                            });
                        };
                    })(url));
                }
            }
            async.parallel(tasks, function (inError, inModules) {
                inCallback(inError, tools.cleanArray(inModules).sort(tools.dynamicSortMultiple("Lang", "moduleKey")));
            });
        } else {
            inCallback(inError);
        }

    });
}

function download(url, reponseType, inCallback, inProgressCallback) {
    var xhr = new XMLHttpRequest({mozSystem: true, mozAnon: true});
    xhr.open('GET', url, true);
    //xhr.setRequestHeader("Accept-Encoding", "gzip, deflate");
    xhr.responseType = reponseType; //"blob";
    xhr.onreadystatechange = function (evt) {
        //console.log(xhr.readyState, evt, xhr.status);
        if (xhr.readyState == 4) {
            if(xhr.status === 200)
                inCallback(null, xhr.response);
            else
                inCallback({message: "Couldn't download module.", error: xhr.status});
        }
    };
    xhr.onprogress = inProgressCallback;
    xhr.onerror = function (inError) {
        inCallback(inError);
    };
    xhr.send(null);
}

//Install a module. inUrl can be an url or a file blob (zipped module file)
function installModule (inUrl, inCallback, inProgressCallback) {
    if(typeof inUrl === "string") {
        download(inUrl, "document", function (inError, inResponse) {
            if(!inError) {
                var newUrl = inResponse.getElementsByTagName("a")[0].href;
                download(newUrl, "blob", function (inError, inBlob) {
                    if(!inError) _installModule(inBlob, inCallback);
                    else inCallback(inError);
                },
                inProgressCallback);
            } else inCallback(inError);
        });
    } else {
        _installModule(inUrl, inCallback);
    }
}

function _installModule(inBlob, inCallback) {
    var blob = null;
    var zipReader = new FileReader();
    zipReader.onload = function(evt) {
        var zip = new JSZip(evt.target.result);
        for (var name in zip.files) {
            if(name.search(".conf") !== -1) {
                //console.log(zip.files[name]);
                dataMgr.saveConfig(new Blob([zip.files[name].asArrayBuffer()]),
                    function (inError, inDoc) {
                        if(!inError) buildIndex(zip, inDoc.v11n, inDoc, inCallback);
                        else inCallback(inError);
                    }
                );
            }
        }
    };

    zipReader.onerror = function (inError) {
        inCallback(inError);
    };
    zipReader.readAsArrayBuffer(inBlob);
}

//Remove a module
function removeModule(inModuleKey, inCallback) {
    if(typeof inModuleKey === "string")
        dataMgr.removeModule(inModuleKey, inCallback);
    else
        inCallback({message: "inModuleKey must be a string!"});
}

//Build the index with all entry points for a book or chapter
function buildIndex(inZip, inV11n, inDoc, inCallback) {
    var files = {};
    files["bin"] = [];

    for (var name in inZip.files) {
        if(name.search("nt.bzs") !== -1)
            files["ntB"] = name;
        else if(name.search("nt.bzv") !== -1)
            files["ntCV"] = name;
        else if(name.search("ot.bzs") !== -1)
            files["otB"] = name;
        else if(name.search("ot.bzv") !== -1)
            files["otCV"] = name;
        else if (name.search(".conf") === -1)
            files.bin.push({blob: new Blob([inZip.files[name].asUint8Array()]), name: name});
    }

    async.series([
        function (cb) {
            dataMgr.saveModule(files.bin, inDoc, function (inError, inResponse) {
                if(!inError) cb(null);
                else cb(inError);
            });
        },
        function (cb) {
            var bookPosOT = null,
                chapterVersePosOT = null,
                bookPosNT = null,
                chapterVersePosNT = null;

            if (files.otB) {
                bookPosOT = getBookPositions(inZip.files[files.otB].asUint8Array());
                chapterVersePosOT = getChapterVersePositions(inZip.files[files.otCV].asUint8Array(), bookPosOT, "ot", inV11n);
            }
            if (files.ntB) {
                bookPosNT = getBookPositions(inZip.files[files.ntB].asUint8Array());
                chapterVersePosNT = getChapterVersePositions(inZip.files[files.ntCV].asUint8Array(), bookPosNT, "nt", inV11n);
            }
            console.log(chapterVersePosOT, chapterVersePosNT);

            dataMgr.saveBCVPos(chapterVersePosOT, chapterVersePosNT, inDoc, function (inError, inResponse) {
                if(!inError) cb(null);
                else cb(inError);
            });
        }
        ], function (inError, inResult) {
            if(!inError) inCallback(null, inDoc.id);
            else {
                //If we got an error while saving the blob files, delete the config entry in the database
                dataMgr.remove(inDoc.id, function (inError) {
                    //console.log(inError);
                });
                inCallback(inError);
            }

        }
    );
}

//Get the positions of each book
function getBookPositions(inBuf, inCallback) {
    var startPos = 0,
        length = 0,
        unused = 0,
        res = null,
        end = false,
        bookPositions = [];
    start = 0;

    while(!end) {
        res = getIntFromStream(inBuf);
        startPos = res[0];
        end = res[1];
        if (!end) {
            res = getIntFromStream(inBuf);
            length = res[0];
            end = res[1];
            if (!end) {
                res = getIntFromStream(inBuf);
                unused = res[0];
                end = res[1];
                if (end)
                    break;
                bookPositions.push({startPos: startPos, length: length, unused: unused});
            }
        }
    }
    return bookPositions;
}

//dump some bytes in the chapter and verse index file
function dumpBytes(inBuf) {
    start = 0;

    for (var i=0;i<4;i++) {
        getShortIntFromStream(inBuf);
        getInt48FromStream(inBuf);
        getShortIntFromStream(inBuf);
    }
}
// ### This code is based on the zTextReader class from cross-connect (https://code.google.com/p/cross-connect), Copyright (C) 2011 Thomas Dilts ###

//Get the position of each chapter and verse
function getChapterVersePositions(inBuf, inBookPositions, inTestament, inV11n) {
    dumpBytes(inBuf);
    var booksStart = (inTestament === "ot") ? 0 : versificationMgr.getBooksInOT(inV11n);
    var booksEnd = (inTestament === "ot") ? versificationMgr.getBooksInOT(inV11n) : versificationMgr.getBooksInOT(inV11n)+versificationMgr.getBooksInNT(inV11n);
    var chapterZ = 0,
        verseZ = 0,
        chapterStartPos = 0,
        lastNonZeroStartPos = 0,
        length = 0,
        chapterLength = 0,
        bookStartPos = 0,
        booknum = 0,
        verseMax = 0,
        bookData = null,
        startPos = 0,
        chapt = {},
        chapters = {};

    for (var b = booksStart; b<booksEnd; b++) {
        bookData = versificationMgr.getBook(b, inV11n);
        chapters[bookData.abbrev] = [];
        //console.log(bookData);
        for (var c = 0; c<bookData.maxChapter; c++) {
            chapterStartPos = 0;
            lastNonZeroStartPos = 0;
            chapt = {};
            chapt["verses"] = [];
            length = 0;
            verseMax = versificationMgr.getVersesInChapter(b,c+1, inV11n);
            for (var v = 0; v<verseMax; v++) {
                booknum = getShortIntFromStream(inBuf)[0];
                startPos = getInt48FromStream(inBuf)[0];

                if (startPos !== 0)
                    lastNonZeroStartPos = startPos;

                length = getShortIntFromStream(inBuf)[0];
                //console.log("startPos, length", startPos, length);
                if (v === 0) {
                    chapterStartPos = startPos;
                    bookStartPos = 0;
                    if (booknum < inBookPositions.length) {
                        //console.log("inBookPositions.startPos", inBookPositions[booknum].startPos, booknum, inBookPositions.length);
                        bookStartPos = inBookPositions[booknum].startPos;
                    }
                    chapt["startPos"] = chapterStartPos;
                    chapt["booknum"] = b;
                    //chapt["bookRelativeChapterNum"] = c;
                    chapt["bookStartPos"] = bookStartPos;
                }
                if (booknum === 0 && startPos === 0 && length === 0) {
                    if (chapt !== {}) {
                        chapt["verses"].push({startPos: 0, length: 0});
                    }
                } else {
                    if (chapt !== {}) {
                        chapt["verses"].push({startPos: startPos - chapterStartPos, length: length});
                    }
                }
            } //end verse
            if (chapt != {}) {
                //console.log("LENGTH:", lastNonZeroStartPos, chapterStartPos, length, chapt, chapters);
                chapterLength = lastNonZeroStartPos - chapterStartPos + length;
                if (!isNaN(chapterLength) && chapterLength !== 0) {
                    chapt["length"] = chapterLength;
                    chapters[bookData.abbrev].push(chapt);
                } else {
                    delete chapters[bookData.abbrev];
                }

            }
            // dump a post for the chapter break
            getShortIntFromStream(inBuf);
            getInt48FromStream(inBuf);
            getShortIntFromStream(inBuf);
        } //end chapters
        // dump a post for the book break
        getShortIntFromStream(inBuf);
        getInt48FromStream(inBuf);
        getShortIntFromStream(inBuf);
    } //end books
    return chapters;
}

function getIntFromStream(inBuf, inCallback) {
    buf = inBuf.subarray(start, start+4);
    isEnd = false;
    start = start+4;
    if (buf.length !== 4)
        isEnd = true;
    if (inCallback)
        inCallback(buf[3] * 0x100000 + buf[2] * 0x10000 + buf[1] * 0x100 + buf[0], isEnd);
    return [buf[3] * 0x100000 + buf[2] * 0x10000 + buf[1] * 0x100 + buf[0], isEnd];
}

function getShortIntFromStream(inBuf, inCallback) {
    buf = inBuf.subarray(start, start+2);
    isEnd = false;
    start = start+2;
    if (buf.length !== 2)
        isEnd = true;
    if (inCallback)
        inCallback(buf[1] * 0x100 + buf[0], isEnd);
    return [buf[1] * 0x100 + buf[0], isEnd];
}

function getInt48FromStream(inBuf, inCallback) {
    buf = inBuf.subarray(start, start+6);
    isEnd = false;
    start = start+6;
    if (buf.length !== 6)
        isEnd = true;
    if (inCallback)
        inCallback(buf[1] * 0x100000000000 + buf[0] * 0x100000000 + buf[5] * 0x1000000 + buf[4] * 0x10000 + buf[3] * 0x100 + buf[2], isEnd);
    return [buf[1] * 0x100000000000 + buf[0] * 0x100000000 + buf[5] * 0x1000000 + buf[4] * 0x10000 + buf[3] * 0x100 + buf[2], isEnd];
}

var InstallMgr = {
    getRepositories: getRepositories,
    getModules: getModules,
    installModule: installModule,
    removeModule: removeModule
};

module.exports = InstallMgr;
},{"./dataMgr":"/home/zefanja/Projekte/common-sword/scripts/dataMgr.js","./tools":"/home/zefanja/Projekte/common-sword/scripts/tools.js","./versificationMgr":"/home/zefanja/Projekte/common-sword/scripts/versificationMgr.js","async":"/home/zefanja/Projekte/common-sword/node_modules/async/lib/async.js","jszip":"/home/zefanja/Projekte/common-sword/node_modules/jszip/lib/index.js"}],"/home/zefanja/Projekte/common-sword/scripts/module.js":[function(require,module,exports){
'use strict';

var dataMgr = require("./dataMgr");
var verseKey = require("./verseKey");
var zText = require("./zText");
var filterMgr = require("./filterMgr");
var versificationMgr = require("./versificationMgr");


var otBin = null,
    ntBin = null;

//Constructor
function Module(inModName, inId, inConfig) {
    if (!(this instanceof Module)) {
        throw new TypeError("Module constructor cannot be called as a function.");
    }

    this.modKey = inModName;
    this.language = inConfig.language;
    this.id = inId;
    this.config = inConfig;
}

Module.create = function (inModName, inId, inConfig) {
    return new Module(inModName, inId, inConfig);
};

//get a module's config
function getConfig(inId, inCallback) {
    /*dataMgr.getDocument(inId, function (inError, inConfig) {
        if (!inError)
            inCallback(inConfig);
    });*/
}

//get the module binary files
function getBinaryBlob(inId, inCallback) {
    dataMgr.getBlob(inId, inCallback);
}

//Module Instance
Module.prototype = {
    constructor: Module,
    self: this,

    renderText: function (inVKey, inOptions, inCallback) {
        var bcvPos = null,
            blobId = null,
            self = this;
        if (typeof inOptions === "function")
            inCallback = inOptions;
        var vList = verseKey.parseVerseList(inVKey, this.config.Versification);
        //console.log(vList);
        if(vList.length !== 0 && vList[0].osisRef !== "") {
            dataMgr.get(self.config.bcvPosID, function(inError, inBcv) {
                //console.log(inBcv);
                if(!inError) {
                    if (inBcv.nt && inBcv.nt.hasOwnProperty(vList[0].book)) {
                        bcvPos = inBcv.nt[vList[0].book];
                        blobId = self.config.nt;
                    } else if (inBcv.ot && inBcv.ot.hasOwnProperty(vList[0].book)) {
                        bcvPos = inBcv.ot[vList[0].book];
                        blobId = self.config.ot;
                    }
                    //console.log(blobId);

                    if(bcvPos === null) {
                        inCallback({message: "The requested chapter is not available in this module."});
                    } else {
                        getBinaryBlob(blobId, function (inError, inBlob) {
                            if (!inError) {
                                zText.getRawEntry(inBlob, bcvPos, vList, self.config.Encoding, inOptions.intro ? inOptions.intro : false, function (inError, inRaw) {
                                    //console.log(inError, inRaw);
                                    if (!inError) {
                                        var result = filterMgr.processText(inRaw, self.config.SourceType, self.config.Direction, inOptions);
                                        inCallback(null, result);
                                    } else
                                        inCallback(inError);
                                });
                            } else {
                                inCallback(inError);
                            }

                        });
                    }
                } else {
                    inCallback(inError);
                }

            });
        } else {
            inCallback({message: "Wrong passage. The requested chapter is not available in this module."});
        }
    },

    getAllBooks: function (inCallback) {
        versificationMgr.getAllBooks(this.config.bcvPosID, this.config.Versification, function (inError, inResult) {
            inCallback(inError, inResult);
        });
    },

    //inOsis can be Matt.3
    getVersesInChapter: function (inOsis) {
        return versificationMgr.getVersesInChapter(versificationMgr.getBookNum(inOsis.split(".")[0], this.config.Versification), inOsis.split(".")[1], this.config.Versification);
    }
};

module.exports = Module;
},{"./dataMgr":"/home/zefanja/Projekte/common-sword/scripts/dataMgr.js","./filterMgr":"/home/zefanja/Projekte/common-sword/scripts/filterMgr.js","./verseKey":"/home/zefanja/Projekte/common-sword/scripts/verseKey.js","./versificationMgr":"/home/zefanja/Projekte/common-sword/scripts/versificationMgr.js","./zText":"/home/zefanja/Projekte/common-sword/scripts/zText.js"}],"/home/zefanja/Projekte/common-sword/scripts/moduleMgr.js":[function(require,module,exports){
'use strict';

var dataMgr = require("./dataMgr");
var Module = require("./module");


function getModules(inCallback) {
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
                    description: mod.Description,
                    language: mod.Lang,
                    ot: mod.ot,
                    nt: mod.nt,
                    moduleKey: mod.moduleKey
                }));
            });
            inCallback(null, modules);
        } else
            inCallback(inError);
    });
}

function getModule(inId, inCallback) {
    dataMgr.get(inId, function (inError, inMod) {
        if(!inError) inCallback(null, new Module(inMod.moduleKey, inId, inMod));
        else inCallback(null);
    });
}

var moduleMgr = {
    getModule: getModule,
    getModules: getModules
};

module.exports = moduleMgr;
},{"./dataMgr":"/home/zefanja/Projekte/common-sword/scripts/dataMgr.js","./module":"/home/zefanja/Projekte/common-sword/scripts/module.js"}],"/home/zefanja/Projekte/common-sword/scripts/sword.js":[function(require,module,exports){
'use strict';

require("bcv");
var installMgr = require("./installMgr");
var dataMgr = require("./dataMgr");
var moduleMgr = require("./moduleMgr");
var versificationMgr = require("./versificationMgr");
var verseKey = require("./verseKey");

//var sword = window.sword || {};

var sword = {
	installMgr: installMgr,
	dataMgr: dataMgr,
	moduleMgr: moduleMgr,
	verseKey: verseKey,
	versificationMgr: versificationMgr
};

window.sword = sword;

module.exports = sword;
},{"./dataMgr":"/home/zefanja/Projekte/common-sword/scripts/dataMgr.js","./installMgr":"/home/zefanja/Projekte/common-sword/scripts/installMgr.js","./moduleMgr":"/home/zefanja/Projekte/common-sword/scripts/moduleMgr.js","./verseKey":"/home/zefanja/Projekte/common-sword/scripts/verseKey.js","./versificationMgr":"/home/zefanja/Projekte/common-sword/scripts/versificationMgr.js","bcv":"/home/zefanja/Projekte/common-sword/libs/bcv/js/en_bcv_parser.min.js"}],"/home/zefanja/Projekte/common-sword/scripts/tools.js":[function(require,module,exports){
'use strict';

//Read a modules conf file a return it as Object
function readConf(inConfString) {
    var lines = inConfString.split(/[\r\n]+/g),
        configData = {},
        splittedLine = null;

    configData["GlobalOptionFilter"] = [];
    configData["Feature"] = [];

    lines.forEach(function(line, index) {
        splittedLine = line.split(/=(.+)/);
        if (splittedLine[0] !== "")
            if (splittedLine[0].search(/\[.*\]/) !== -1)
                configData["moduleKey"] = splittedLine[0].replace("[", "").replace("]", "");
            else
                if (splittedLine[0] === "GlobalOptionFilter")
                    configData[splittedLine[0]].push(splittedLine[1]);
                else if (splittedLine[0] === "Feature")
                    configData[splittedLine[0]].push(splittedLine[1]);
                else if (splittedLine[0] === "Versification")
                    configData[splittedLine[0]] = splittedLine[1].toLowerCase();
                else
                    configData[splittedLine[0]] = splittedLine[1];
    });

    return configData;
}

function dynamicSort(property) {
    return function (obj1,obj2) {
        return obj1[property] > obj2[property] ? 1
            : obj1[property] < obj2[property] ? -1 : 0;
    };
}

function dynamicSortMultiple() {
    /*
     * save the arguments object as it will be overwritten
     * note that arguments object is an array-like object
     * consisting of the names of the properties to sort by
     */
    var props = arguments;
    return function (obj1, obj2) {
        var i = 0, result = 0, numberOfProperties = props.length;
        /* try getting a different result from 0 (equal)
         * as long as we have extra properties to compare
         */
        while(result === 0 && i < numberOfProperties) {
            result = dynamicSort(props[i])(obj1, obj2);
            i++;
        }
        return result;
    };
}

function cleanArray(actual){
    var newArray = [];
    for(var i = 0; i<actual.length; i++){
        if (actual[i]){
            newArray.push(actual[i]);
        }
    }
    return newArray;
}

function convertArray(inArray) {
    var obj = {};
    inArray.forEach(function (item) {
        if(item)
            obj[item.book] = item.id;
    });
    return obj;
}

function convertObject(inObject) {
    var a = [];
    for (var key in inObject) {
        a.push(inObject[key]);
    }
    return a;
}


var tools = {
	readConf: readConf,
    dynamicSort: dynamicSort,
    dynamicSortMultiple: dynamicSortMultiple,
    cleanArray: cleanArray,
    convertArray: convertArray,
    convertObject: convertObject
};

module.exports = tools;
},{}],"/home/zefanja/Projekte/common-sword/scripts/verseKey.js":[function(require,module,exports){
'use strict';
var versificationMgr = require("./versificationMgr");
var bcv = new bcv_parser();

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

var verseKey = {
    parse: parseVkey,
    parseVerseList: parseVerseList,
    next: next,
    previous: previous
};

module.exports = verseKey;
},{"./versificationMgr":"/home/zefanja/Projekte/common-sword/scripts/versificationMgr.js"}],"/home/zefanja/Projekte/common-sword/scripts/versificationMgr.js":[function(require,module,exports){
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
},{"../data/german.json":"/home/zefanja/Projekte/common-sword/data/german.json","../data/kjv.json":"/home/zefanja/Projekte/common-sword/data/kjv.json","../data/vulg.json":"/home/zefanja/Projekte/common-sword/data/vulg.json","./dataMgr":"/home/zefanja/Projekte/common-sword/scripts/dataMgr.js"}],"/home/zefanja/Projekte/common-sword/scripts/zText.js":[function(require,module,exports){
'use strict';

var async = require("async");
var pako = require("pako");

var zlibReader = new FileReader(),
    textReader = new FileReader();


function getRawEntry(inBlob, inPos, inVList, inEcoding, inIntro, inCallback) {
    //console.log("inPos, inVList, inEcoding, inIntro", inPos, inVList, inEcoding, inIntro)
    if (!inPos[inVList[0].chapter-1]) {
        inCallback({message: "Wrong passage. The requested chapter is not available in this module."});
    } else {
        var bookStartPos = inPos[inVList[0].chapter-1].bookStartPos,
            startPos = inPos[inVList[0].chapter-1].startPos,
            length = inPos[inVList[0].chapter-1].length,
            chapterStartPos = bookStartPos + startPos,
            chapterEndPos = chapterStartPos + length,
            blob = inBlob.slice(bookStartPos, chapterEndPos);

        zlibReader.readAsArrayBuffer(blob);
        zlibReader.onload = function (evt) {
            var inflator = new pako.Inflate();
            var view = new Uint8Array(evt.target.result);

            inflator.push(view, true);
            if (inflator.err) {
                inCallback(inflator.err);
                throw new Error(inflator.err);
            }

            //console.log(inflator.result);
            var infBlob = new Blob([inflator.result]);

            //Read raw text entry
            var rawText = [],
                verseStart = 0,
                verseEnd = 0,
                z = 0,
                gotIntro = false;
            async.whilst(
                function () {return z < inVList.length;},
                function (cb) {
                    if(inIntro && !gotIntro) {
                        verseStart = (inVList[z].chapter === 1) ? 0 : inPos[inVList[z].chapter-2].startPos + inPos[inVList[z].chapter-2].length;
                        verseEnd = startPos;
                    } else {
                        verseStart = startPos + inPos[inVList[z].chapter-1].verses[inVList[z].verse-1].startPos;
                        verseEnd = verseStart + inPos[inVList[z].chapter-1].verses[inVList[z].verse-1].length;
                    }
                    if (!inEcoding)
                        textReader.readAsText(infBlob.slice(verseStart, verseEnd), "CP1252");
                    else
                        textReader.readAsText(infBlob.slice(verseStart, verseEnd), inEcoding);
                    textReader.onload = function(e) {
                        if(inIntro && !gotIntro) {
                            if (e.target.result !== "")
                                rawText.push({text: e.target.result, osisRef: inVList[z].book + "." + inVList[z].chapter + ".0", verse: 0});
                            gotIntro = true;
                        } else {
                            rawText.push({text: e.target.result, osisRef: inVList[z].osisRef, verse: inVList[z].verse});
                            z++;
                        }
                        cb();
                    };
                },
                function (inError) {
                    //console.log(rawText);
                    inCallback(inError, rawText);
                }
            );

        };
    }

}

var zText = {
    getRawEntry: getRawEntry
};

module.exports = zText;
},{"async":"/home/zefanja/Projekte/common-sword/node_modules/async/lib/async.js","pako":"/home/zefanja/Projekte/common-sword/node_modules/pako/index.js"}]},{},["./scripts/main.js"]);
