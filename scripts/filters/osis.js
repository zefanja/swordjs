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

    var lastTag = "",
        currentNode = null,
        currentNote = null,
        currentRef = null,
        verseData = null,
        noteText = "",
        outText = "",
        renderedText = "",
        verseNumber = "",
        footnotesData = {},
        isTitle = false;

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

        lastTag = "";
        currentNode = null;
        currentNote = null;
        currentRef = null;
        verseData = null;
        noteText = "";
        outText = "";
        renderedText = "";
        verseNumber = "";
        footnotesData = {};
        isTitle = false;

        //Handle Parsing errors
        parser.onerror = function (e) {
            parser.resume();
        };

        //Text node
        parser.ontext = function (t) {
            //console.log("TEXT:", t, currentNode);
            if (currentNote) {
                outText += processFootnotes(t, inOptions);
            } else if (currentNode) {
                switch (currentNode.name) {
                    case "title":
                        if(inOptions.headings) {
                            if (currentNode.attributes.type === "section")
                                outText = "<h3>" + t + "</h3>" + outText;
                            else
                                outText = "<h1>" + t + "</h1>" + outText;
                        }
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
                    if (node.attributes.type === "crossReference" && inOptions.footnotes)
                        outText += "<span class='sword-cross-reference'>[";
                    else if (inOptions.footnotes)
                        outText += "<a class='sword-footnote' href=\"?type=footnote&osisRef=" + node.attributes.osisRef + "&n=" + node.attributes.n + "\"><sup>" + "*n" + node.attributes.n + "</sup></a>";
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
                        outText += "]</span> ";
                    noteText = "";
                    currentNote = null;
                    //currentNode = null;
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

    function processFootnotes(t, inOptions) {
        var out = "";
        if(inOptions.footnotes) {
            if (currentNote.attributes.type === "crossReference") {
                if (lastTag !== "reference")
                    out += processCrossReference(t);
                else {
                    out += "<a href=\"?type=crossReference&osisRef=" + currentRef.attributes.osisRef + "&n=" + currentNote.attributes.n + "\">" + t + "</a>";
                }
            } else {
                if(lastTag === "note") {
                    if (!footnotesData.hasOwnProperty(currentNote.attributes.osisRef))
                        footnotesData[currentNote.attributes.osisRef] = [{note: t, n: currentNote.attributes.n}];
                    else
                        footnotesData[currentNote.attributes.osisRef].push({note: t, n: currentNote.attributes.n});
                } else {
                    if (!footnotesData.hasOwnProperty(currentNote.attributes.osisRef))
                        footnotesData[currentNote.attributes.osisRef] = [{note: t, n: currentNote.attributes.n}];
                    else
                        if (footnotesData[currentNote.attributes.osisRef][footnotesData[currentNote.attributes.osisRef].length-1].n === currentNote.attributes.n)
                            footnotesData[currentNote.attributes.osisRef][footnotesData[currentNote.attributes.osisRef].length-1]["note"] += t;
                        else
                            footnotesData[currentNote.attributes.osisRef].push({note: t, n: currentNote.attributes.n});
                }

            }
        }
        return out;
    }

    function processCrossReference(inText) {
        var out = "";
        if (bcv.parse(inText).osis() !== "")
            out += "<a href=\"?type=crossReference&osisRef=" + bcv.parse(inText).osis() + "&n=" + currentNote.attributes.n + "\">" + inText + "</a>";
        else
            out += inText;
        return out;
    }

    //Return osis filter methods
    return osis;
});