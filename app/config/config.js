"use strict";
exports.__esModule = true;
var Config = /** @class */ (function () {
    function Config() {
        // if no cfg, then create one
        if (!this.checkForCfg()) {
            this.createCfgFile();
        }
    }
    Config.prototype.createCfgFile = function () {
        // create cfg file in ./config/config.json - creates a default config
    };
    Config.prototype.loadCfg = function () {
        // load cfg file in ./config/config.json
    };
    Config.prototype.checkForCfg = function () {
        // if cfg file exists then return out of method
        if (null) {
            return true;
        }
        return false;
    };
    return Config;
}());
exports["default"] = Config;
