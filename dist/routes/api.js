"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MailerController_1 = __importDefault(require("../controllers/MailerController"));
const express_1 = __importDefault(require("express"));
const route = (0, express_1.default)();
route.post("/sent-email", new MailerController_1.default().sendEmail);
exports.default = route;
