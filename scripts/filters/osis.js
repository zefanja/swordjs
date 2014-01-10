define(["sax", "bcv"], function (sax, bcv) {
    var osis = {},
        parser = sax.parser(true); //strict = true

    //* SWFilter Options
    var swFilterOptions = {
        headings: false,
        footnotes: false,
        strongsNumbers: false,
        wordsOfChristInRed: false,
        oneVersePerLine: false,
    };

    osis.processText = function (inRaw, inDirection, inOptions) {
        if (!inOptions || inOptions === {}) {
            inOptions = swFilterOptions;
        } else {
            inOptions.headings = (inOptions.headings) ? inOptions.headings : swFilterOptions.headings;
            inOptions.footnotes = (inOptions.footnotes) ? inOptions.footnotes : swFilterOptions.footnotes;
            inOptions.strongsNumbers = (inOptions.strongsNumbers) ? inOptions.strongsNumbers : swFilterOptions.strongsNumbers;
            inOptions.wordsOfChristInRed = (inOptions.wordsOfChristInRed) ? inOptions.wordsOfChristInRed : swFilterOptions.wordsOfChristInRed;
            inOptions.oneVersePerLine = (inOptions.oneVersePerLine) ? inOptions.oneVersePerLine : swFilterOptions.oneVersePerLine;
        }
        var lastTag = "",
            currentNode = null,
            currentNote = null,
            currentRef = null,
            verseData = null,
            noteText = "",
            outText = "",
            renderedText = "",
            verseNumber = "",
            footnotesData = [],
            isTitle = false;


        //console.log(inRaw);

        //Handle Parsing errors
        parser.onerror = function (e) {
            //console.log("ERROR parsing XML", e, lastTag, currentNode);
            parser.resume();
        };

        //Text node
        parser.ontext = function (t) {
            //console.log("TEXT:", t, currentNode.name);
            if (currentNote && inOptions.footnotes) {
                if (currentNote.attributes.type === "crossReference") {
                    if (lastTag !== "reference")
                        outText += processCrossReference(t, currentNote);
                    else {
                        outText += "<a href=\"?type=crossReference&osisRef=" + currentRef.attributes.osisRef + "&n=" + currentNote.attributes.n + "\">" + t + "</a>";
                    }
                } else {
                    if(lastTag === "note") {
                        outText += "<a href=\"?type=footnote&osisRef=" + currentNote.attributes.osisRef + "&n=" + currentNote.attributes.n + "\"><sup>" + "*n" + currentNote.attributes.n + "</sup></a>";
                        footnotesData.push({note: t, osisRef: currentNote.attributes.osisRef, n: currentNote.attributes.n});
                    } else {
                        footnotesData[footnotesData.length-1]["note"] += t;
                    }

                }
            } else if (currentNode) {
                switch (currentNode.name) {
                    case "title":
                        if (currentNode.attributes.type === "section")
                            outText = "<h3>" + t + "</h3>" + outText;
                        else
                            outText = "<h1>" + t + "</h1>" + outText;
                    break;
                    case "note":

                    break;
                    default:
                        outText += t;
                    break;
                }
            } else {
                outText += t;
            }


        };

        //Handle opening tags
        parser.onopentag = function (node) {
            //console.log(node);
            currentNode = node;
            lastTag = node.name;
            switch (node.name) {
                case "xml":
                    verseData = {osisRef: node.attributes.osisRef, verseNum: node.attributes.verseNum};
                    if (inDirection === "RtoL")
                        //outText += "<span dir='rtl' class='verse-number'> " + verseData.verseNum + " </span><span dir='rtl'>";
                        outText += "<span dir='rtl'><a href=\"?type=verseNum&osisRef=" + verseData.osisRef + "\" class='verse-number'> " + verseData.verseNum + " </a><span dir='rtl'>";
                    else
                        //outText += "<span class='verse-number'> " + verseData.verseNum + " </span>";
                        outText += "<a href=\"?type=verseNum&osisRef=" + verseData.osisRef + "\" class='verse-number'> " + verseData.verseNum + " </a>";
                break;
                case "note":
                    //console.log(node, isNote, lastTag);
                    if (node.attributes.type === "crossReference" && inOptions.footnotes)
                        outText += "[";
                    currentNote = node;
                break;
                case "reference":
                    currentRef = node;
                break;
            }
        };

        parser.onclosetag = function (tagName) {
            //console.log("CLOSE:", tagName);
            switch (tagName) {
                case "title":
                    currentNode = null;
                break;
                case "note":
                    if (currentNote.attributes.type === "crossReference" && inOptions.footnotes)
                        outText += "] ";
                    noteText = "";
                    currentNote = null;
                break;
                case "reference":
                    currentRef = null;
                break;
                case "xml":
                    if(inDirection === "RtoL")
                        outText += "</span>";
                break;
            }
            lastTag = "";
        };

        //Handling Attributes
        parser.onattribute = function (attr) {
            //console.log(attr);
        };

        //End of parsing
        parser.onend = function () {
            //console.log("Finished parsing XML!");
        };

        var tmp = "";
        for (var i=0; i<inRaw.length; i++) {
            //console.log(inRaw[i].text);
            tmp = "<xml osisRef='" + inRaw[i].osis + "' verseNum = '" + inRaw[i].verse + "'>" + inRaw[i].text + "</xml>";
            parser.write(tmp);
            parser.close();
            renderedText += (inOptions.oneVersePerLine) ? "<div class='verse' id = '" + inRaw[i].osis + "'>" + outText + "</div>" : "<span class='verse' id = '" + inRaw[i].osis + "'>" + outText + "</span>";
            outText = "";
        }

        if(inDirection === "RtoL")
            renderedText = "<div style='text-align: right;'>" + renderedText + "</div>";
        return {text: renderedText, footnotes: footnotesData};
    };

    function processCrossReference(inText, inNode) {
        var outText = "";
        if (bcv.parse(inText).osis() !== "")
            outText = "<a href=\"?type=crossReference&osisRef=" + bcv.parse(inText).osis() + "&n=" + inNode.attributes.n + "\">" + inText + "</a>";
        else
            outText = inText;
        return outText;
    }
    return osis;
});