define([], function () {
    //* SWFilter Options
    var plain = {},
        swFilterOptions = {
            oneVersePerLine: false
        };

    plain.processText = function (inRaw, inDirection, inOptions) {
        var renderedText = "";
        if (!inOptions || inOptions === {}) {
            inOptions = swFilterOptions;
        } else {
            inOptions.oneVersePerLine = (inOptions.oneVersePerLine) ? inOptions.oneVersePerLine : swFilterOptions.oneVersePerLine;
        }

        for (var i=0; i<inRaw.length; i++) {
            outText = (inDirection !== "RtoL") ? "<span class='verse-number' osisRef='" + inRaw[i].osis + "'> " + inRaw[i].verse + " </span>" : "<span dir='rtl' class='verse-number' osisRef='" + inRaw[i].osis + "'> " + inRaw[i].verse + " </span>";
            outText += (inDirection !== "RtoL") ? inRaw[i].text : "<span dir='rtl'>" + inRaw[i].text + "</span>";
            renderedText += (inOptions.oneVersePerLine) ? "<div class='verse'>" + outText + "</div>" : "<span class='verse'>" + outText + "</span>";
            outText = "";
        }

        if(inDirection === "RtoL")
            renderedText = "<div style='text-align: right;'>" + renderedText + "</div>";
        return renderedText;
    };


    return plain;
});