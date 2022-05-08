import { Levels } from '.';

export class Config {
	private _level: Levels;
	public get level(): Levels {
		return this._level;
	}
	public set level(value: Levels) {
		this._level = value;
	}

	private _maxFileSize: number;
	public get maxFileSize(): number {
		return this._maxFileSize;
	}
	public set maxFileSize(value: number) {
		this._maxFileSize = value;
	}

	private _silent: boolean;
	public get silent(): boolean {
		return this._silent;
	}
	public set silent(value: boolean) {
		this._silent = value;
	}

	constructor() {
		this.level = Levels.info;
		this.maxFileSize = 5 * 1000 * 1000;
		this.silent = false;
	}
}

let _config: Config = null;

export const getLoggerConfig = () => {
	if (_config === null) {
		_config = new Config();
	}
	return _config;
};
