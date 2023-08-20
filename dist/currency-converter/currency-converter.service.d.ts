import { HttpService } from '@nestjs/axios';
export declare class CurrencyConverterService {
    private readonly httpService;
    constructor(httpService: HttpService);
    convertCurrency(fromCurrency: string, toCurrency: string, amount: number): Promise<ConverterResponseClass>;
}
export declare class ConverterResponseClass {
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
