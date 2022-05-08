import winston from 'winston';

import { Config, Format, getLoggerConfig, Levels } from '.';

export class Transport {
	private static readonly config: Config = getLoggerConfig();

	static app(): winston.transport {
		const filename = 'app.log';
		return new winston.transports.File({
			filename,
			level: Levels[this.config.level],
			format: Format.file(filename),
			silent: this.config.silent,
			maxsize: this.config.maxFileSize
		});
	}

	static audit(): winston.transport {
		const filename = 'audit.log';
		return new winston.transports.File({
			filename,
			level: Levels[Levels.audit],
			format: Format.file(filename),
			silent: this.config.silent,
			maxsize: this.config.maxFileSize
		});
	}

	static console(filename: string): winston.transport {
		return new winston.transports.Console({
			level: Levels[this.config.level],
			silent: this.config.silent,
			format: winston.format.combine(
				winston.format.colorize(),
				winston.format.timestamp(),
				winston.format.label({ label: filename }),
				Format.default()
			)
		});
	}
}
