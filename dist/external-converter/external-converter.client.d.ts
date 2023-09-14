import { HttpService } from '@nestjs/axios';
import { ExternalConverterResponseClass } from "./external-converter-response.class";
import { Configuration } from "../config/configuration";
export declare class ExternalConverterClient {
    private readonly httpService;
    constructor(httpService: HttpService);
    convertCurrency(config: Configuration, fromCurrency: string, toCurrency: string, amount: number): Promise<ExternalConverterResponseClass>;
}
