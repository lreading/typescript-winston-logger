# Typescript Winston Logger
Typescript Winston Logger is an abstraction for the [Winston Logger](https://github.com/winstonjs/winston) that has some configuration applied.
Notable configuration:
- Colors by default
- Audit logging (separate file transport)
- File and console logging
- Labels so you can log per service/file

## Is this the right logging lib for you?
Probably not. This is very opinionated and is only intended to speed up bootstrapping my own development.  It's [licensed](LICENSE) under MIT, so feel free to use it or fork it to create your own implementation/configuration.

## Configuration
There is default configuration applied.  If changing from the default configuration, do so before anything else calls the logger.

```typescript
import { getLoggerConfig, LoggerLevels } from '@lreading/typescript-winston-logger';

const config = getLoggerConfig();
config.level = LoggerLevels.debug;
config.silent = true; // Useful for unit testing
config.maxfileSize = 2000;
```

## Usage
```typescript
// Configuration is optional, defaults are applied
import { getLogger } from '@lreading/typescript-winston-logger';

const logger = getLogger();

logger.info('This is info level logging');
logger.info({ foo: 'bar'});
logger.audit('Something important happened, audit logging is important!');
```