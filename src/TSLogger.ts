import { Logger, LeveledLogMethod } from 'winston';

export interface TSLogger extends Logger {
    fatal: LeveledLogMethod;
    audit: LeveledLogMethod;
}
