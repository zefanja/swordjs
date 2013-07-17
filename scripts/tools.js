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

    return {
        readConf: readConf,
        dynamicSort: dynamicSort,
        dynamicSortMultiple: dynamicSortMultiple,
        cleanArray: cleanArray
    };
});