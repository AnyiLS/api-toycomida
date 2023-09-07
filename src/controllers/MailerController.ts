import {Request, Response} from "express";
import Controller from "./Controller";
import nodemailer from "nodemailer";
import {SentMessageInfo} from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

class MailerController extends Controller {
    private Mail :nodemailer.Transporter<SMTPTransport.SentMessageInfo> | any;
    constructor() {
        super();

        this.initMailer = this.initMailer.bind(this);
        this.sendEmail = this.sendEmail.bind(this);
    }

    initMailer(user: string, pass: string) {
        this.Mail = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: user,
                pass: pass
            }
        });
    }

    async sendEmail(req: Request, res: Response) {
        const request = req.body;

        this.initMailer(request.smtp_username, request.smtp_password)

        await this.Mail.sendMail({
            from: request.from,
            to: request.to,
            subject: request.subject,
            html: request.body
        }, (error: Error | null, info: SentMessageInfo) => {
            if(error) {
                res.status(500).json(this.formattedResponse(false, {type: "error", content: "Error al enviar el correo electronico."}, error))
            } else {
                res.status(200).json(this.formattedResponse(true, {type: "success", content: "Done."}, info))
            }
        });
    }
}

export default MailerController;