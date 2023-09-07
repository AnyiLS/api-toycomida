import express, {Application, Request, Response} from "express";
import route from "./routes/api";
import * as bodyParser from "body-parser";

const app: Application = express();

app.use(bodyParser.json());
app.use("/api", route);

app.listen(3000);