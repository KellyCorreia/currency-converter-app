export declare class ExternalConverterResponseClass {
    success: boolean;
    query: QueryClass;
    info: InfoClass;
    result: number;
    constructor(success: any, query: any, info: any, result: any);
}
export declare class QueryClass {
    from: string;
    to: string;
    amount: number;
    constructor(from: any, to: any, amount: any);
}
export declare class InfoClass {
    timestamp: number;
    quote: number;
    constructor(timestamp: any, quote: any);
}
