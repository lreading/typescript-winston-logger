import winston from 'winston';

export const Colors: winston.config.AbstractConfigSetColors = {
	fatal: 'bold underline red',
	error: 'red',
	warn: 'yellow',
	audit: 'bold cyan',
	info: 'blue',
	debug: 'green',
	silly: 'magenta'
};
