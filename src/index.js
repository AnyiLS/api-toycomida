"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var api_1 = require("./routes/api");
var bodyParser = require("body-parser");
var app = (0, express_1.default)();
app.use(bodyParser.json());
app.use("/api", api_1.default);
app.listen(3000);
