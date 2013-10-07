sword.js
=======

```sword.js``` is a pure Javascript library to read the bible modules from [Crosswire](http://crosswire.org/sword). It currently supports only compressed (zText) bible modules. [BibleZ NG](https://github.com/zefanja/biblez-ng) is based on this library.

Build
-----

To build ```sword.js``` you have to install ```node.js``` and ```r.js``` [Read more](http://requirejs.org/docs/optimization.html#download).

```r.js -o scripts/build.js```

You will find a ```sword.min.js``` file in the root dir.

Usage
-----

Include ```sword.min.js``` in your index.html. There is a global ```sword``` variable you can use to access the API.

API
---

```sword.js``` is currently in a pre-alpha version, so the API will likely change in the future.

Most API calls take a callback as the last argument. The callback will return ```null``` or an ```error``` as first argument. The second, third, ... argument is the reponse from the API.

### installMgr ###

#### installMgr.getRepositories(inCallback) ####
Get a list of all available repositories and takes a callback funtion as argument. The callback will return an array of the repositories as second argument (first will be ```null``` or an ```error```). Currently only the following CrossWire repos are supported:
* main
* beta
* av11n
* attic
* Wycliffe
* av11n attic

#### installMgr.getModules(inRepo, inCallback) ####
Get a list of all modules in a repository. ```inRepo``` is an object containing the repository url and the repository type. The callback will return an array with all modules.

#### installMgr.installModule(inUrl, inCallback, inProgressCallback) ####
This will install a module from ```inUrl```. You can also pass a file blob from a zipped module file for offline installation as first argument. The callback will return ```null``` or an ```error``` as the first argument. The second callback is optional. It will report the progress of the module download.

### moduleMgr ###

####moduleMgr.getModules(inCallback) ####
This will return a list of all installed modules.

### Module ###
Each module has the following properties and API:

#### config ####
This property contains the all the module information that is normally found in a modules *.conf file.

#### renderText(inPassage, inOptions, inCallback) ####
```inPassage``` is a passage in a bible like ```Gen 1``` or ```Romans 3```. ```inOptions``` is an Object and optional. It can contain the following porperties (default values):

```javascript
{
    oneVersePerLine: false,
    footnotes: false,
}
```

The callback will return the text as HTML as second argument.

#### getAllBooks() ####
Returns a list of all books in a module.

###verseKey###

#### verseKey.parse(inPassage, inV11n) ####
Takes a passage (e.g. Matt 1:1) as argument an returns an object like this:

```javascript
{
    osis: "Matt.1.1",
    book: "Matt",
    bookNum: 39,
    chapter: 1
    verse: 1 //this can also be NaN if you pass a passage the has no verse in it like "Matt 1".
}
```

#### verseKey.next(inPassage, inV11n) ####
Returns the next chapter that follows ```inPassage```. If you pass "Matt 1" you will get an verseKey object for "Matt 2".

#### verseKey.previous(inPassage, inV11n) ####
Returns the previous chapter that comes before ```inPassage```. If you pass "Mark 1" you will get an verseKey object for "Matt 28".

Licence
-------

```sword.js``` is licenced under the GNU GPLv3.