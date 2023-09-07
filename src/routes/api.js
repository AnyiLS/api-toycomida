"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MailerController_1 = require("../controllers/MailerController");
var express_1 = require("express");
var route = (0, express_1.default)();
route.post("/sent-email", new MailerController_1.default().sendEmail);
exports.default = route;
