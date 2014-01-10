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
            outText = (inDirection !== "RtoL") ? "<a href=\"?type=verseNum&osisRef=" + inRaw[i].osis + "\" class='verse-number'> " + inRaw[i].verse + " </a>" : "<span dir='rtl'><a href=\"?type=verseNum&osisRef=" + inRaw[i].osis + "\" class='verse-number'> " + inRaw[i].verse + " </a></span>";
            outText += (inDirection !== "RtoL") ? inRaw[i].text : "<span dir='rtl'>" + inRaw[i].text + "</span>";
            renderedText += (inOptions.oneVersePerLine) ? "<div class='verse' id = '" + inRaw[i].osis + "'>" + outText + "</div>" : "<span class='verse' id = '" + inRaw[i].osis + "'>" + outText + "</span>";
            outText = "";
        }

        if(inDirection === "RtoL")
            renderedText = "<div style='text-align: right;'>" + renderedText + "</div>";
        return {text: renderedText};
    };


    return plain;
});