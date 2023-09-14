import { CurrencyConverterService } from './currency-converter.service';
import { TransactionClass } from "./transaction.class";
export declare class CurrencyConverterController {
    private readonly currencyConverterService;
    constructor(currencyConverterService: CurrencyConverterService);
    convertCurrencyTransaction(userId: string, fromCurrency: string, toCurrency: string, amount: number): Promise<TransactionClass>;
    getConverterTransactionById(user: string): Promise<TransactionClass[]>;
    getAllConverterTransactions(): Promise<TransactionClass[]>;
}
