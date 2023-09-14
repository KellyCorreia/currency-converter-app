import { CurrencyConverterService } from './currency-converter.service';
import { TransactionClass } from "./transaction.class";
import { Configuration } from "../config/configuration";
export declare class CurrencyConverterController {
    private readonly currencyConverterService;
    private readonly config;
    constructor(currencyConverterService: CurrencyConverterService, config: Configuration);
    convertCurrencyTransaction(userId: string, fromCurrency: string, toCurrency: string, amount: number): Promise<TransactionClass>;
    getConverterTransactionById(user: string): Promise<TransactionClass[]>;
    getAllConverterTransactions(): Promise<TransactionClass[]>;
}
