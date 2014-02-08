define(["sax", "bcv"], function (sax, bcv) {
    var osis = {},
        parser = sax.parser(true); //strict = true

    //* SWFilter Options
    var swFilterOptions = {
        headings: false,
        footnotes: false,
        crossReferences: false,
        strongsNumbers: false,
        wordsOfChristInRed: false,
        oneVersePerLine: false,
    };

    var lastTag = "",
        currentNode = null,
        currentNote = null,
        currentRef = null,
        quote = null,
        verseData = null,
        noteText = "",
        outText = "",
        renderedText = "",
        verseNumber = "",
        osisRef = "",
        footnotesData = {},
        isSelfClosing = false,
        isTitle = false,
        noteCount = 0;

    osis.processText = function (inRaw, inDirection, inOptions) {
        if (!inOptions || inOptions === {}) {
            inOptions = swFilterOptions;
        } else {
            inOptions.headings = (inOptions.headings) ? inOptions.headings : swFilterOptions.headings;
            inOptions.footnotes = (inOptions.footnotes) ? inOptions.footnotes : swFilterOptions.footnotes;
            inOptions.crossReferences = (inOptions.crossReferences) ? inOptions.crossReferences : swFilterOptions.crossReferences;
            inOptions.strongsNumbers = (inOptions.strongsNumbers) ? inOptions.strongsNumbers : swFilterOptions.strongsNumbers;
            inOptions.wordsOfChristInRed = (inOptions.wordsOfChristInRed) ? inOptions.wordsOfChristInRed : swFilterOptions.wordsOfChristInRed;
            inOptions.oneVersePerLine = (inOptions.oneVersePerLine) ? inOptions.oneVersePerLine : swFilterOptions.oneVersePerLine;
        }

        lastTag = "";
        currentNode = null;
        currentNote = null;
        currentRef = null;
        quote = null;
        verseData = null;
        noteText = "";
        outText = "";
        renderedText = "";
        verseNumber = "";
        osisRef = "";
        footnotesData = {};
        isTitle = false;
        noteCount = 0;

        //Handle Parsing errors
        parser.onerror = function (e) {
            parser.resume();
        };

        //Text node
        parser.ontext = function (t) {
            //console.log("TEXT:", t, currentNode);
            if (currentNote) {
                outText += processFootnotes(t, inOptions);
            } else if (quote) {
                if (quote.attributes.who === "Jesus" && inOptions.wordsOfChristInRed) {
                    outText += "<span style='color: red'><span class='sword-woc'>" + t + " </span></span>";
                } else
                    outText += t;
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
                    case "hi":
                        outText += tagHi(currentNode, t);
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
                    if (parseInt(verseData.verseNum, 10) === 0) {
                        if (inDirection === "RtoL")
                            outText += "<span dir='rtl'><div class='sword-intro'>";
                        else
                            outText += "<span class='sword-intro'>";
                    } else {
                        if (inDirection === "RtoL")
                            outText += "<span dir='rtl'><a href=\"?type=verseNum&osisRef=" + verseData.osisRef + "\" class='verse-number'> " + verseData.verseNum + " </a></span><span dir='rtl'>";
                        else
                            outText += "<a href=\"?type=verseNum&osisRef=" + verseData.osisRef + "\" class='verse-number'> " + verseData.verseNum + " </a>";
                    }
                break;
                case "note":
                    if (node.attributes.type === "crossReference" && inOptions.crossReferences)
                        outText += "<span class='sword-cross-reference'>[";
                    else if (inOptions.footnotes && node.attributes.type !== "crossReference") {
                        osisRef = node.attributes.osisRef || node.attributes.annotateRef || verseData.osisRef;
                        if (!node.attributes.n) noteCount++;
                        var n = node.attributes.n || noteCount;
                        outText += "<a class='sword-footnote' href=\"?type=footnote&osisRef=" + osisRef + "&n=" + n+ "\"><sup>" + "*n" + n + "</sup></a>";
                    }

                    currentNote = node;
                break;
                case "reference":
                    currentRef = node;
                break;
                case "q":
                    if(!node.isSelfClosing)
                        quote = node;
                break;
                case "div":
                    if(node.isSelfClosing && node.attributes.type === "paragraph" && node.attributes.sID)
                        outText += "<p>";
                    if(node.isSelfClosing && node.attributes.type === "paragraph" && node.attributes.eID)
                        outText += "</p>";
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
                    if (currentNote.attributes.type === "crossReference" && inOptions.crossReferences)
                        outText += "]</span> ";
                    noteText = "";
                    currentNote = null;
                break;
                case "reference":
                    currentRef = null;
                break;
                case "q":
                    /*if (!quote.isSelfClosing && inOptions.wordsOfChristInRed) {
                        outText += "</span>";
                    }*/
                break;
                case "xml":
                    if(parseInt(verseData.verseNum, 10) === 0)
                        outText += "</div>";
                    if(inDirection === "RtoL")
                        outText += "</span>";
                break;
            }
            lastTag = "";
            currentNode = null;
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
            console.log(inRaw[i].text);
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

    /* FUNCTIONS TO PROCESS SPECIFIC OSIS TAGS */

    function processFootnotes(t, inOptions) {
        var out = "";
        if (currentNote.attributes.type === "crossReference" && inOptions.crossReferences) {
            if (lastTag !== "reference")
                out += processCrossReference(t);
            else {
                out += "<a href=\"?type=crossReference&osisRef=" + currentRef.attributes.osisRef + "&n=" + currentNote.attributes.n + "\">" + t + "</a>";
            }
        } else if (inOptions.footnotes && currentNote.attributes.type !== "crossReference") {
            if (lastTag === "hi") {
                t = tagHi(currentNode, t);
            }
            osisRef = currentNote.attributes.osisRef || currentNote.attributes.annotateRef || verseData.osisRef;
            var n = currentNote.attributes.n || noteCount;
            if (!footnotesData.hasOwnProperty(osisRef))
                footnotesData[osisRef] = [{note: t, n: n}];
            else {
                if (footnotesData[osisRef][footnotesData[osisRef].length-1].n === n)
                    footnotesData[osisRef][footnotesData[osisRef].length-1]["note"] += t;
                else
                    footnotesData[osisRef].push({note: t, n: n});
            }
        }
        return out;
    }

    function processCrossReference(inText) {
        var out = "",
            osisRef = bcv.parse(inText).osis();
        if (osisRef !== "")
            out += "<a href=\"?type=crossReference&osisRef=" + osisRef + "&n=" + currentRef.attributes.n + "\">" + inText + "</a>";
        else
            out += inText;
        return out;
    }

    function tagHi (node, t) {
        switch (node.attributes.type) {
            case "italic":
                t = "<i>"+t+"</i>";
            break;
            case "bold":
                t = "<b>"+t+"</b>";
            break;
            case "line-through":
                t = "<s>"+t+"</s>";
            break;
            case "underline":
                t = "<u>"+t+"</u>";
            break;
            case "sub":
                t = "<sub>"+t+"</sub>";
            break;
            case "super":
                t = "<sup>"+t+"</sup>";
            break;
        }

        return t;
    }

    //Return osis filter methods
    return osis;
});