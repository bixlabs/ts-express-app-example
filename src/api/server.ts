import errorHandler from "errorhandler";
import app from "./app";
import {env, isProduction, port} from "./config";
import logger from "./logger";

if (isProduction) {
    app.use(errorHandler());
}

app.listen(port, () => {
    logger.info(`Server listening at http://localhost:%d in %s mode`, port, env);
});
