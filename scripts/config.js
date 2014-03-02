define([], function () {
    var config = {};
    config.version = "0.2";
    config.scriptsPath = "lib/sword/scripts";
    config.setScriptsPath = function (inPath) {
        config.scriptsPath = inPath;
    };

    return config;
});