define(["filters/osis"], function (osis) {
    function processText(inRaw, inSource, inOptions) {
        if(inSource.toLowerCase() === "osis")
            return osis.processText(inRaw, inOptions);
        else
            return inRaw;
    }

    return {
        processText: processText
    };
});