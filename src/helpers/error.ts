import { logger } from "../logger";

export const logErr = (msg: string) => {
    return (err: Error) => {
        logger.error(err, msg);
    };
};

export const logErrNull = (msg: string) => {
    return (err: Error) => {
        logger.error(err, msg);
        return null;
    };
};
