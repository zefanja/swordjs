'use strict';

var sword = require("./sword");
console.log("Hallo sword.js", sword);

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