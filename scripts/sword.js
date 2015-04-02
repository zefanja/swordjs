'use strict';

var installMgr = require("./installMgr");
var dataMgr = require("./dataMgr");
var moduleMgr = require("./moduleMgr");
var versificationMgr = require("./versificationMgr");
var verseKey = require("./verseKey");

//var sword = window.sword || {};

var sword = {
	installMgr: installMgr,
	dataMgr: dataMgr,
	moduleMgr: moduleMgr,
	verseKey: verseKey,
	versificationMgr: versificationMgr
};

//BAD, but will be replaced in future, when BibleZ NG got a new frontend
// window.sword = sword;

module.exports = sword;