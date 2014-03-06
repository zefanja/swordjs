define(["has", "config"], function (has, config) {
    var cb = {};
    var path = "";
    if (has("build") && config.hasOwnProperty("workerPath")) {
        path = config.workerPath + "/swordWorker.min.js";
    } else {
        path = "swordWorker.min.js";
    }
    var worker = new Worker(path);

    worker.addEventListener('message', function(e) {
        var cmd = e.data.cmd,
            result = e.data.result;
        if(cmd && cb[cmd]) {
            cb[cmd](null, result);
            delete cb[cmd];
        } else {
            console.log(e.data);
        }

        return true;
    }, false);

    worker.addEventListener('error', function(e) {
        console.log('ERROR: ', e);
        return true;
    }, false);

    function getRawEntry(inBlob, bcvPos, vList, inEncoding, inIntro, inCallback) {
        cb["getRawEntry"] = inCallback;
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