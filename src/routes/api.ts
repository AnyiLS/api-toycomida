import MailerController from "../controllers/MailerController";
import express from "express";

const route = express();

route.post("/sent-email", new MailerController().sendEmail);

export default route;