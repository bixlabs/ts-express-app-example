import morgan from "morgan";
import {createLogger, format, transports} from "winston";
import {appLogFilename, isProduction} from "./config";

const loggerTransports: any = [
    new transports.Console({
        format: format.combine(
            format.colorize(),
            format.splat(),
            format.simple(),
        ),
        level: isProduction ? "error" : "info",
    }),
];

if (isProduction) {
    loggerTransports.push(new transports.File({
        handleExceptions: true,
        filename: appLogFilename,
        format: format.combine(
            format.timestamp({
                format: "YYYY-MM-DD HH:mm:ss",
            }),
            format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`),
        ),
        level: "debug",
    }));
}

const logger = createLogger({transports: loggerTransports});
const expressFormat = isProduction ? "combined" : "dev";
const stream = {
    write(message: string) {
        logger.info(message);
    },
};

export const expressLogger = morgan(expressFormat, {stream});

export default logger;
