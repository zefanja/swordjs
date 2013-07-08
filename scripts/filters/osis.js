define(["sax", "bcv"], function (sax, bcv) {
    var osis = {},
        parser = sax.parser(true); //strict = true

    //* SWFilter Options
    var swFilterOptions = {
        headings: false,
        footnotes: false,
        strongsNumbers: false,
        wordsOfChristInRed: false
    };

    osis.processText = function (inRaw, inOptions) {
        if (!inOptions || inOptions === {}) {
            inOptions = swFilterOptions;
        } else {
            inOptions.headings = (inOptions.headings) ? inOptions.headings : swFilterOptions.headings;
            inOptions.footnotes = (inOptions.footnotes) ? inOptions.footnotes : swFilterOptions.footnotes;
            inOptions.strongsNumbers = (inOptions.strongsNumbers) ? inOptions.strongsNumbers : swFilterOptions.strongsNumbers;
            inOptions.wordsOfChristInRed = (inOptions.wordsOfChristInRed) ? inOptions.wordsOfChristInRed : swFilterOptions.wordsOfChristInRed;
        }
        var lastTag = "",
            currentNode = null,
            currentNote = null,
            currentRef = null,
            noteText = "",
            outText = "";
        inRaw = "<xml>"+inRaw+"</xml>";

        //console.log(inRaw);

        //Handle Parsing errors
        parser.onerror = function (e) {
            console.log("ERROR parsing XML", e);
        };

        //Text node
        parser.ontext = function (t) {
            //console.log("TEXT:", t);
            if (inOptions.footnotes && currentNote) {
                if (currentNote && currentNote.attributes.type === "crossReference") {
                    console.log(t);
                    if (lastTag !== "reference")
                        outText += processCrossReference(t, currentNote);
                    else {
                        console.log(currentRef, t, lastTag);
                        outText += "<a href=\"?type=crossReference&osisRef=" + currentRef.attributes.osisRef + "&n=" + currentNote.attributes.n + "\">" + t + "</a>";
                    }
                }
            } else if (!currentNote)
                outText += t;
        };

        //Handle opening tags
        parser.onopentag = function (node) {
            //console.log(node);
            currentNode = node;
            lastTag = node.name;
            switch (node.name) {
                case "title":
                    if (node.attributes.type === "section")
                        outText += "<h3>";
                    else
                        outText += "<h1>";
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
                    if (currentNode.attributes.type === "section")
                        outText += "</h3>";
                    else
                        outText += "</h1>";
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
            }
            lastTag = "";
        };

        //Handling Attributes
        parser.onattribute = function (attr) {
            //console.log(attr);
        };

        //End of parsing
        parser.onend = function () {
            console.log("Finished parsing XML!");
        };

        parser.write(inRaw);

        return outText;
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