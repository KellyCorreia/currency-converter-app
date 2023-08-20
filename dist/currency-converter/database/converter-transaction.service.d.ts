import { Repository } from 'typeorm';
import { ConverterTransaction } from './converter-transaction.entity';
export declare class ConverterTransactionService {
    private ConverterTransactionRepository;
    constructor(ConverterTransactionRepository: Repository<ConverterTransaction>);
    createTransaction(userId: string, currencyFrom: string, amountFrom: number, currencyTo: string, conversionIndex: number): Promise<ConverterTransaction>;
    findAllTransactions(): Promise<ConverterTransaction[]>;
    getTransactionById(id: number): Promise<ConverterTransaction>;
}
