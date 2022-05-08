import winston from 'winston';

export enum Levels {
    audit = 0,
    fatal = 1,
    error = 2,
    warn = 3,
    info = 4,
    debug = 5,
    silly = 6
}

export const WinstonLoggerLevels: winston.config.AbstractConfigSetLevels = {
	audit: Levels.audit,
	fatal: Levels.fatal,
	error: Levels.error,
	warn: Levels.warn,
	info: Levels.info,
	debug: Levels.debug,
	silly: Levels.silly
};
