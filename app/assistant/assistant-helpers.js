"use strict";
exports.__esModule = true;
var AssistantHelpers = /** @class */ (function () {
    function AssistantHelpers() {
    }
    AssistantHelpers.prototype.checkForPermissions = function () {
        // check for microphone access permissions.
        return this._hasPermissions;
    };
    return AssistantHelpers;
}());
exports["default"] = AssistantHelpers;
