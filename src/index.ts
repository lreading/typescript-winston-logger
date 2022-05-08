export * from './Colors';
export * from './Config';
export * from './Format';
export * from './Levels';
export * from './Transport';
export * from './TSLogger';

import { addColors, createLogger, format } from 'winston';

import { Colors, getLoggerConfig, Levels, Transport, TSLogger, WinstonLoggerLevels } from './';

const config = getLoggerConfig();
addColors(Colors);

export const getLogger = (filename: string): TSLogger => createLogger({
	format: format.errors({ stack: true }),
	level: Levels[config.level],
	levels: WinstonLoggerLevels,
	transports: [
		Transport.audit(),
		Transport.app(),
		Transport.console(filename)
	]
}) as TSLogger;
