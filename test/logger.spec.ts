import { getLogger, getLoggerConfig, TSLogger } from '..';

describe('logger', () => {
    beforeAll(() => {
        getLoggerConfig().silent = true;
    });

    describe('logging level methods', () => {
        let logger: TSLogger;
        beforeEach(() => {
            logger = getLogger('test.log');
        });

        it('should have a silly method', () => {
            expect(typeof logger.silly).toBe('function');
        });

        it('should have a debug method', () => {
            expect(typeof logger.debug).toBe('function');
        });

        it('should have a info method', () => {
            expect(typeof logger.info).toBe('function');
        });

        it('should have a warn method', () => {
            expect(typeof logger.warn).toBe('function');
        });

        it('should have a error method', () => {
            expect(typeof logger.error).toBe('function');
        });

        it('should have a fatal method', () => {
            expect(typeof logger.fatal).toBe('function');
        });

        it('should have an audit method', () => {
            expect(typeof logger.audit).toBe('function');
        });
    });
});
