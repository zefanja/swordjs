define([], function () {
    var cb = {};
    var worker = new Worker("scripts/workerScript.js");
    //worker.postMessage("");
    worker.addEventListener('message', function(e) {
        var cmd = e.data.cmd,
            result = e.data.result;

        switch (cmd) {
            case "processText":
                cb[cmd](null, result);
            break;
        }
    }, false);

    worker.addEventListener('error', function(e) {
        console.log('ERROR: ', e);
    }, false);

    function getRawEntry(inBlob, bcvPos, vList, inEncoding, inIntro) {
        worker.postMessage({"cmd": "getRawEntry", "blob": inBlob, "bcvPos": bcvPos, "vList": vList, "encoding": inEncoding, "intro": inIntro});
    }

    function processText(inRaw, inSource, inDirection, inOptions, inCallback) {
        cb["processText"] = inCallback;
        worker.postMessage({"cmd": "processText", "raw": inRaw, "source": inSource, "direction": inDirection, "options": inOptions});
    }

    return {
        getRawEntry: getRawEntry,
        processText: processText
    };
});