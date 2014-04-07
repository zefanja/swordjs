define([], function () {
    //* SWFilter Options
    var plain = {},
        swFilterOptions = {
            oneVersePerLine: false,
            array: false
        };

    plain.processText = function (inRaw, inDirection, inOptions) {
        var renderedText = "",
            verseArray = [];

        if (!inOptions || inOptions === {}) {
            inOptions = swFilterOptions;
        } else {
            inOptions.oneVersePerLine = (inOptions.oneVersePerLine) ? inOptions.oneVersePerLine : swFilterOptions.oneVersePerLine;
            inOptions.array = (inOptions.array) ? inOptions.array : swFilterOptions.array;
        }

        for (var i=0; i<inRaw.length; i++) {
            outText = (inDirection !== "RtoL") ? "<a href=\"?type=verseNum&osisRef=" + inRaw[i].osis + "\" class='verse-number'> " + inRaw[i].verse + " </a>" : "<span dir='rtl'><a href=\"?type=verseNum&osisRef=" + inRaw[i].osis + "\" class='verse-number'> " + inRaw[i].verse + " </a></span>";
            outText += (inDirection !== "RtoL") ? inRaw[i].text : "<span dir='rtl'>" + inRaw[i].text + "</span>";
            if (!inOptions.array)
                renderedText += (inOptions.oneVersePerLine) ? "<div class='verse' id = '" + inRaw[i].osis + "'>" + outText + "</div>" : "<span class='verse' id = '" + inRaw[i].osis + "'>" + outText + "</span>";
            else
                verseArray.push({text: (inOptions.oneVersePerLine) ? "<div class='verse' id = '" + inRaw[i].osis + "'>" + outText + "</div>" : "<span class='verse' id = '" + inRaw[i].osis + "'>" + outText + "</span>", osisRef: inRaw[i].osis});
            outText = "";
        }

        if(inDirection === "RtoL")
            renderedText = "<div style='text-align: right;'>" + renderedText + "</div>";

        if(!inOptions.array)
            return {text: renderedText};
        else
            return {verses: verseArray};


    };


    return plain;
});