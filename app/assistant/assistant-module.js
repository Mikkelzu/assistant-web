"use strict";
exports.__esModule = true;
var assistant_helpers_1 = require("./assistant-helpers");
var AssistantModule = /** @class */ (function () {
    function AssistantModule() {
        this._assassitantHelpers = new assistant_helpers_1["default"]();
        if (!this._assassitantHelpers.checkForPermissions()) {
            // show that no permissions are available, request permissions;
        }
    }
    AssistantModule.prototype.askForPermissions = function () {
        // create logic to see if user has said yes or no to perms.
        // if return true, then user given perms (from input) if false then no.
        if (null) {
            return false;
        }
        return true;
    };
    return AssistantModule;
}());
exports["default"] = AssistantModule;
