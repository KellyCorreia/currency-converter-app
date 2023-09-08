import { CurrencyConverterService } from './currency-converter.service';
import { ConverterResponseClass } from "./converter-response.class";
import { DataService } from './data/data.service';
import { ConverterTransactionService } from './database/converter-transaction.service';
import { ConverterTransaction } from './database/converter-transaction.entity';
export declare class CurrencyConverterController {
    private readonly currencyConverterService;
    private readonly dataService;
    private readonly transactionService;
    constructor(currencyConverterService: CurrencyConverterService, dataService: DataService, transactionService: ConverterTransactionService);
    convertCurrencyTransaction(userId: string, fromCurrency: string, toCurrency: string, amount: number): Promise<ConverterResponseClass>;
    createConverterTransaction(userId: string, fromCurrency: string, toCurrency: string, amount: number): Promise<ConverterTransaction>;
    getConverterTransactionById(id: number): Promise<ConverterTransaction>;
    getAllConverterTransactions(): Promise<ConverterTransaction[]>;
}
