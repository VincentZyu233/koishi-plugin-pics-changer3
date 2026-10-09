import { Context } from 'koishi';
import type { Config } from './config';
export { Config } from './config';
export declare const name = "pics-changer3";
export declare const inject: {
    required: string[];
};
export declare function apply(ctx: Context, config: Config): void;
