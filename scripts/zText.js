/*### BEGIN LICENSE
# Copyright (C) 2013 Stephan Tetzel <info@zefanjas.de>
#
# This program is free software: you can redistribute it and/or modify it
# under the terms of the GNU General Public License version 3, as published
# by the Free Software Foundation.
#
# This program is distributed in the hope that it will be useful, but
# WITHOUT ANY WARRANTY; without even the implied warranties of
# MERCHANTABILITY, SATISFACTORY QUALITY, or FITNESS FOR A PARTICULAR
# PURPOSE.  See the GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License along
# with this program.  If not, see <http://www.gnu.org/licenses/>.
### END LICENSE*/

define(["inflateStream"], function (Zlib) {
    var zText = {},
        inflator = new Zlib.InflateStream(),
        zlibReader = new FileReader(),
        textReader = new FileReader();


    zText.getRawEntry = function (inBlob, inPos, inVKey, inCallback) {
        //console.log(inPos, inVKey);
        var bookStartPos = inPos[inVKey.chapter-1].bookStartPos,
            startPos = inPos[inVKey.chapter-1].startPos,
            length = inPos[inVKey.chapter-1].length,
            chapterStartPos = bookStartPos + startPos,
            chapterEndPos = chapterStartPos + length,
            blob = inBlob.slice(bookStartPos, chapterEndPos);

        if(!isNaN(inVKey.verse)) {
            startPos = startPos + inPos[inVKey.chapter-1].verses[inVKey.verse-1].startPos;
            length = inPos[inVKey.chapter-1].verses[inVKey.verse-1].length;
        }

        zlibReader.readAsArrayBuffer(blob);
        zlibReader.onload = function (evt) {
            var view = new Uint8Array(evt.target.result);
            var infBlob = new Blob([inflator.decompress(view)]);
            //Read raw text entry
            textReader.readAsText(infBlob.slice(startPos, startPos+length));
            textReader.onload = function(e) {
                inCallback(null, e.target.result);
            };
        };
    };

    return zText;
});