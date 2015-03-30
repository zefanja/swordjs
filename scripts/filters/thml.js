//* SWFilter Options
var swFilterOptions = {
    oneVersePerLine: false,
    array: false
};

function processText(inRaw, inDirection, inOptions) {
    var renderedText = "",
        outText = "",
        verseArray = [];

    if (!inOptions || inOptions === {}) {
        inOptions = swFilterOptions;
    } else {
        inOptions.oneVersePerLine = (inOptions.oneVersePerLine) ? inOptions.oneVersePerLine : swFilterOptions.oneVersePerLine;
        inOptions.array = (inOptions.array) ? inOptions.array : swFilterOptions.array;
    }

    for (var i=0; i<inRaw.length; i++) {
        //outText = (inDirection !== "RtoL") ? "<a href=\"?type=verseNum&osisRef=" + inRaw[i].osisRef + "\" class='verse-number'> " + inRaw[i].verse + " </a>" : "<span dir='rtl'><a href=\"?type=verseNum&osisRef=" + inRaw[i].osisRef + "\" class='verse-number'> " + inRaw[i].verse + " </a></span>";
        inRaw[i].text = inRaw[i].text.replace(/\n\n/g, "<br /><br />");
        outText += (inDirection !== "RtoL") ? inRaw[i].text : "<span dir='rtl'>" + inRaw[i].text + "</span>";
        if (!inOptions.array)
            renderedText += (inOptions.oneVersePerLine) ? "<div class='verse' id = '" + inRaw[i].osisRef + "'>" + outText + "</div>" : "<span class='verse' id = '" + inRaw[i].osisRef + "'>" + outText + "</span>";
        else
            verseArray.push({text: (inOptions.oneVersePerLine) ? "<div class='verse' id = '" + inRaw[i].osisRef + "'>" + outText + "</div>" : "<span class='verse' id = '" + inRaw[i].osisRef + "'>" + outText + "</span>", osisRef: inRaw[i].osisRef});
        outText = "";
    }

    if(inDirection === "RtoL")
        renderedText = "<div style='text-align: right;'>" + renderedText + "</div>";

    if(!inOptions.array)
        return {text: renderedText};
    else
        return {verses: verseArray, rtol: (inDirection === "RtoL") ? true : false};
}

var thml = {
    processText: processText
};

module.exports = thml;