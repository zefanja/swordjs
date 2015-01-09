'use strict';

var installMgr = require("./installMgr");
var dataMgr = require("./dataMgr");
var moduleMgr = require("./moduleMgr");

var sword = {
	installMgr: installMgr,
	dataMgr: dataMgr
};

module.exports = sword;