import { DataService } from "../data/data.service";
import { ConverterTransactionService } from "../database/converter-transaction.service";
import { ExternalConverterClient } from "../external-converter/external-converter.client";
import { TransactionClass } from "./transaction.class";
import { Configuration } from "../config/configuration";
export declare class CurrencyConverterService {
    private readonly converterClient;
    private readonly dataService;
    private readonly transactionService;
    constructor(converterClient: ExternalConverterClient, dataService: DataService, transactionService: ConverterTransactionService);
    convertCurrency(config: Configuration, userId: string, fromCurrency: string, toCurrency: string, amount: number): Promise<TransactionClass>;
    getAllTransactions(): Promise<TransactionClass[]>;
    getTransactionsByUserId(userId: string): Promise<TransactionClass[]>;
}
