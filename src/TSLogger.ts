import { Logger, LeveledLogMethod } from 'winston';

export interface TSLogger extends Logger {
    audit: LeveledLogMethod;
}
