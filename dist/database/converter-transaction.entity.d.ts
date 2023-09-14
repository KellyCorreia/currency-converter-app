import { TransactionClass } from "../app/transaction.class";
export declare class ConverterTransaction {
    id: number;
    userId: string;
    currencyFrom: string;
    amountFrom: number;
    currencyTo: string;
    conversionIndex: number;
    dateCreated: Date;
    constructor(userId: any, currencyFrom: any, amountFrom: any, currencyTo: any, conversionIndex: any, dateCreated: any);
    toTransactionModel(): TransactionClass;
}
