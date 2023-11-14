import pino from "pino";

export const logger = pino({
    level: "debug",
});

export const logErr = (msg: string) => {
    return (err: Error) => {
        logger.error(err, msg);
    };
};
