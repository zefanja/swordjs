define([], function () {
    var config = {};
    config.version = "0.3";
    config.workerPath = "lib/sword";
    config.setWorkerPath = function (inPath) {
        config.workerPath = inPath;
    };

    return config;
});