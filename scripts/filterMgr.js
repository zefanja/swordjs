define(["filters/osis"], function (osis) {
    function processText(inRaw, inSource, inOptions) {
        console.log(inRaw, inSource, inOptions);
        if(inSource.toLowerCase() === "osis")
            return osis.processText(inRaw, inOptions);
    }

    return {
        processText: processText
    };
});