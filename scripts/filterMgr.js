define(["filters/osis", "filters/plain"], function (osis, plain) {
    function processText(inRaw, inSource, inOptions) {
        if(inSource.toLowerCase() === "osis")
            return osis.processText(inRaw, inOptions);
        else
            return plain.processText(inRaw, inOptions);
    }

    return {
        processText: processText
    };
});