import winston from 'winston';

export class Format {
	private static tryToString (message: any): string {
		try {
			return message.toString();
		} catch (ignore) {
			return '[Object object]';
		}
	}
    
	private static tryStringifyObject (message: any): string {
		if (typeof message === 'string') return message;
    
		try {
			return JSON.stringify(message);
		} catch (ignore) {
			return Format.tryToString(message);
		}
	}


	static default(): winston.Logform.Format {
		return winston.format.printf((info: winston.Logform.TransformableInfo): string => {
			const { label, level, stack, timestamp } = info;
			let { code, message } = info;
			code = code ? `${code} ` : '';
			message = stack  || Format.tryStringifyObject(message);
        
			return `${timestamp} [${label}] ${level}: ${code}${message}`;
		});
	}

	static file (filename: string): winston.Logform.Format {
		return winston.format.combine(
			winston.format.timestamp(),
			winston.format.label({ label: filename }),
			Format.default()
		);
	}
}
