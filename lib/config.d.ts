import { Schema } from 'koishi';
export interface Config {
    enableQuote: boolean;
    promptTimeout: number;
    upsymmetry: string;
    downsymmetry: string;
    leftsymmetry: string;
    rightsymmetry: string;
    defaultsymmetry: string;
}
export declare const Config: Schema<Config>;
