import bodyParser from "body-parser";
import express from "express";
import {expressLogger} from "./logger";

const app = express();

app.use(expressLogger);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

export default app;
