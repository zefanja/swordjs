define(["has", "module"], function (has, module) {
    var cb = {};
    var path = "";
    if(has("biblez")) {
        path = module.config().scriptsPath + "/swordWorker.js";
    } else {
        path = "scripts/swordWorker.js";
    }
    var worker = new Worker(path);
    if(has("biblez")) {
        worker.postMessage({"cmd": "init", "path": module.config().scriptsPath});
    } else {
        worker.postMessage({"cmd": "init"});
    }
    worker.addEventListener('message', function(e) {
        var cmd = e.data.cmd,
            result = e.data.result;
        if(cmd) {
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