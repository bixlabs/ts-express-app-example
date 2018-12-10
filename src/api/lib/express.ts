import {NextFunction, Request, RequestHandler, Response} from "express";

export type PromisedRequestHandler = (req: Request, res: Response, next: NextFunction) => Promise<any>;

/**
 * Exposes async code as RequestHandler
 * @param func
 */
export function wrapper(func: PromisedRequestHandler): RequestHandler {
    return (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(func(req, res, next))
            .then(() => next())
            .catch((err) => next(err));
    };
}
