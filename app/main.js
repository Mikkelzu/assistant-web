"use strict";
exports.__esModule = true;
var config_1 = require("./config/config");
var Main = /** @class */ (function () {
    function Main() {
        this._config = new config_1["default"]();
        this.bootstrap();
    }
    Main.prototype.bootstrap = function () {
        // do bootstrap like cfg loading etc
        this._config.loadCfg();
    };
    return Main;
}());
