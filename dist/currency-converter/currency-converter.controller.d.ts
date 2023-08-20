import { ConverterResponseClass, CurrencyConverterService } from './currency-converter.service';
import { DataService } from './data/data.service';
import { ConverterTransactionService } from './database/converter-transaction.service';
import { ConverterTransaction } from './database/converter-transaction.entity';
export declare class CurrencyConverterController {
    private readonly currencyConverterService;
    private readonly dataService;
    private readonly transactionService;
    constructor(currencyConverterService: CurrencyConverterService, dataService: DataService, transactionService: ConverterTransactionService);
    convertCurrency(fromCurrency: string, toCurrency: string, amount: number): Promise<ConverterResponseClass>;
    convertCurrencyTransaction(userId: string, fromCurrency: string, toCurrency: string, amount: number): Promise<ConverterResult>;
    createConverterTransaction(userId: string, fromCurrency: string, toCurrency: string, amount: number): Promise<ConverterTransaction>;
    getConverterTransactionById(id: number): Promise<ConverterTransaction>;
    getAllConverterTransactions(): Promise<ConverterTransaction[]>;
}
export declare class ConverterResult {
    userId: string;
    currencyFrom: string;
    amountFrom: number;
    currencyTo: string;
    amountTo: number;
    conversionIndex: number;
    dateCreated: Date;
    constructor(userId: any, currencyFrom: any, amountFrom: any, currencyTo: any, conversionIndex: any, dateCreated: any);
}
