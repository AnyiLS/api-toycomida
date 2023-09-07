"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Controller_1 = __importDefault(require("./Controller"));
const nodemailer_1 = __importDefault(require("nodemailer"));
class MailerController extends Controller_1.default {
    constructor() {
        super();
        this.initMailer = this.initMailer.bind(this);
        this.sendEmail = this.sendEmail.bind(this);
    }
    initMailer(user, pass) {
        this.Mail = nodemailer_1.default.createTransport({
            service: "gmail",
            auth: {
                user: user,
                pass: pass
            }
        });
    }
    sendEmail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const request = req.body;
            this.initMailer(request.smtp_username, request.smtp_password);
            yield this.Mail.sendMail({
                from: request.smtp_username,
                to: request.to,
                subject: request.subject,
                html: request.body
            }, (error, info) => {
                if (error) {
                    res.status(500).json(this.formattedResponse(false, { type: "error", content: "Error al enviar el correo electronico." }, error));
                }
                else {
                    res.status(200).json(this.formattedResponse(true, { type: "success", content: "Done." }, info));
                }
            });
        });
    }
}
exports.default = MailerController;
