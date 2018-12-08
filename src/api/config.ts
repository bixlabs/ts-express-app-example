import {join} from "path";

export const port = process.env.PORT || 3000;
export const env = process.env.NODE_ENV || "development";
export const isProduction = process.env.NODE_ENV === "production";
export const appLogFilename = process.env.LOG_PATH || join(__dirname, "..", "..", "logs", "app.log");
