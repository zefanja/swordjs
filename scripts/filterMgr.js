define(["filters/osis", "filters/plain"], function (osis, plain) {
    function processText(inRaw, inSource, inDirection, inOptions) {
        if(inSource && inSource.toLowerCase() === "osis")
            return osis.processText(inRaw, inDirection, inOptions);
        else
            return plain.processText(inRaw, inDirection, inOptions);
    }

    return {
        processText: processText
    };
});