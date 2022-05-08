import { getLoggerConfig, Levels } from '..';

describe('config', () => {
	const defaults = {
		level: Levels.debug,
		silent: false,
		maxFileSize: 222
	};

	afterEach(() => {
		const config = getLoggerConfig();
		config.level = defaults.level;
		config.silent = defaults.silent;
		config.maxFileSize = defaults.maxFileSize;
	});

	describe('silent', () => {
		beforeEach(() => {
			getLoggerConfig().silent = true;
		});

		it('should be silent', () => {
			expect(getLoggerConfig().silent).toBe(true);
		});
	});

	describe('logLevel', () => {
		beforeEach(() => {
			getLoggerConfig().level = Levels.fatal;
		});

		it('should be silent', () => {
			expect(getLoggerConfig().level).toBe(Levels.fatal);
		});
	});

	describe('maxFileSize', () => {
		beforeEach(() => {
			getLoggerConfig().maxFileSize = 999;
		});

		it('should be silent', () => {
			expect(getLoggerConfig().maxFileSize).toBe(999);
		});
	});
});
