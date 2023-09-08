import { DataService } from "./data/data.service";
import { ConverterTransactionService } from "./database/converter-transaction.service";
import { ExternalConverterClient } from "./external-converter/external-converter.client";
import { ConverterResponseClass } from "./converter-response.class";
export declare class CurrencyConverterService {
    private readonly converterClient;
    private readonly dataService;
    private readonly transactionService;
    constructor(converterClient: ExternalConverterClient, dataService: DataService, transactionService: ConverterTransactionService);
    convertCurrency(userId: string, fromCurrency: string, toCurrency: string, amount: number): Promise<ConverterResponseClass>;
}
