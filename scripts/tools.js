define([], function () {
    //Read a modules conf file a return it as Object
    function readConf(inConfString) {
        var lines = inConfString.split(/[\r\n]+/g),
            configData = {};

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
                    else
                        configData[splittedLine[0]] = splittedLine[1];
        });

        return configData;
    }

    return {
        readConf: readConf
    };
});