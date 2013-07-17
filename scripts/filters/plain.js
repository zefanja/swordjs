define([], function () {
    //* SWFilter Options
    var plain = {},
        swFilterOptions = {
            oneVersePerLine: false
        };

    plain.processText = function (inRaw, inOptions) {
        var renderedText = "";
        if (!inOptions || inOptions === {}) {
            inOptions = swFilterOptions;
        } else {
            inOptions.oneVersePerLine = (inOptions.oneVersePerLine) ? inOptions.oneVersePerLine : swFilterOptions.oneVersePerLine;
        }

        for (var i=0; i<inRaw.length; i++) {
            outText = "<span class='verse-number' osisRef='" + inRaw[i].osis + "'> " + inRaw[i].verse + " </span>";
            outText += inRaw[i].text;
            renderedText += (inOptions.oneVersePerLine) ? "<div class='verse'>" + outText + "</div>" : "<span class='verse'>" + outText + "</span>";
            outText = "";
        }

        return renderedText;
    };


    return plain;
});