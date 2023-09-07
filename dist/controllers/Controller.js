"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Controller {
    formattedResponse(status, message, data) {
        switch (message.type) {
            case "success":
                message.code = 200;
                break;
            default:
                message.code = 500;
        }
        return { transaction: { status }, message, data };
    }
}
exports.default = Controller;
