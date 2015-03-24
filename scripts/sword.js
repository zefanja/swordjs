'use strict';

var installMgr = require("./installMgr");
var dataMgr = require("./dataMgr");
var moduleMgr = require("./moduleMgr");
var versificationMgr = require("./versificationMgr");
var verseKey = require("./verseKey");

var sword = {
	installMgr: installMgr,
	dataMgr: dataMgr,
	moduleMgr: moduleMgr,
	verseKey: verseKey,
	versificationMgr: versificationMgr
};

module.exports = sword;