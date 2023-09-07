"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Controller = /** @class */ (function () {
    function Controller() {
    }
    Controller.prototype.formattedResponse = function (status, message, data) {
        switch (message.type) {
            case "success":
                message.code = 200;
                break;
            default:
                message.code = 500;
        }
        return { transaction: { status: status }, message: message, data: data };
    };
    return Controller;
}());
exports.default = Controller;
