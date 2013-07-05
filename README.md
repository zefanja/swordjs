sword.js
=======

```sword.js``` is a pure Javascript library to read the bible modules from [Crosswire](http://crosswire.org/sword). It currently supports only compressed (zText) bible modules.

Build
-----

To build ```sword.js``` you have to install ```r.js``` [Read more](http://requirejs.org/docs/optimization.html#download).

```r.js -o scripts/build.js```

You will find a ```sword.min.js``` file in the root dir.

Usage
-----

```sword.js``` is an AMD module, so you can load with a module loader like [require.js](http://requirejs.org/). See ```index.html``` for more details.

API
---

```sword.js``` is currently in a pre-alpha version, so the API will likely change in the future. Take a look in the Javascript files in the ```scripts``` dir (e.g. ```moduleMgr.js```, ```versificationMgr.js```, ```installMgr.js```).

Licence
-------

```sword.js``` is licenced under the GNU GPLv3.