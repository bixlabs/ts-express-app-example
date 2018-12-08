import bodyParser from "body-parser";
import express from "express";
import handlebars from "express-handlebars";
import {expressLogger} from "./logger";

const app = express();
app.engine("handlebars", handlebars({defaultLayout: "main"}));
app.set("view engine", "handlebars");
app.use(expressLogger);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

export default app;
