import { HttpService } from '@nestjs/axios';
import { ExternalConverterResponseClass } from "./external-converter-response.class";
export declare class ExternalConverterClient {
    private readonly httpService;
    constructor(httpService: HttpService);
    convertCurrency(fromCurrency: string, toCurrency: string, amount: number): Promise<ExternalConverterResponseClass>;
}
