'use strict';

var dataMgr = require("./dataMgr");
var Module = require("./module");


function getModules(inCallback) {
    var modules = [];
    dataMgr.getModules(function (inError, inModules) {
        if(!inError) {
            inModules.forEach(function (mod) {
                modules.push(new Module(mod.moduleKey, mod.id, {
                    id: mod.id,
                    Versification: mod.Versification,
                    Encoding: mod.Encoding,
                    Direction: mod.Direction,
                    SourceType: mod.SourceType,
                    bcvPosID: mod.bcvPosID,
                    description: mod.Description,
                    language: mod.Lang,
                    ot: mod.ot,
                    nt: mod.nt,
                    moduleKey: mod.moduleKey,
                    modDrv: mod.ModDrv,
                    conf: mod
                }));
            });
            inCallback(null, modules);
        } else
            inCallback(inError);
    });
}

function getModule(inId, inCallback) {
    dataMgr.get(inId, function (inError, inMod) {
        if(!inError) inCallback(null, new Module(inMod.moduleKey, inId, inMod));
        else inCallback(null);
    });
}

var moduleMgr = {
    getModule: getModule,
    getModules: getModules
};

module.exports = moduleMgr;