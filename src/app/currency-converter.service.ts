import { Injectable } from '@nestjs/common';
import {DataService} from "../data/data.service";
import {ConverterTransactionService} from "../database/converter-transaction.service";
import {ExternalConverterClient} from "../external-converter/external-converter.client";
import {ExternalConverterResponseClass} from "../external-converter/external-converter-response.class";
import {ConverterTransaction} from "../database/converter-transaction.entity";
import {TransactionClass} from "./transaction.class";

@Injectable()
export class CurrencyConverterService {
  constructor(
    private readonly converterClient: ExternalConverterClient,
    private readonly dataService: DataService,
    private readonly transactionService: ConverterTransactionService,
) {}

  async convertCurrency(
    userId: string,
    fromCurrency: string,
    toCurrency: string,
    amount: number,
  ): Promise<TransactionClass> {

    const conversionPromise = this.converterClient.convertCurrency(fromCurrency, toCurrency, amount);
    const conversionResult: ExternalConverterResponseClass = await conversionPromise;

    const storageResultPromise = this.transactionService.createTransaction(
      userId,
      conversionResult.query.from,
      conversionResult.query.amount,
      conversionResult.query.to,
      conversionResult.info.quote,
    );
    const storageResult: ConverterTransaction = await storageResultPromise;
    return storageResult.toTransactionModel();
  }

  async getAllTransactions(): Promise<TransactionClass[]> {
    const resultPromise = this.transactionService.findAllTransactions()
    const dbTransactions: ConverterTransaction[] = await resultPromise;
    const transactions = dbTransactions.map(item => {
      return item.toTransactionModel()
    })
    return transactions
  }

  async getTransactionsByUserId(userId: string): Promise<TransactionClass[]> {
    const resultPromise = this.transactionService.getTransactionByUserId(userId)
    const dbTransactions: ConverterTransaction[] = await resultPromise;
    const transactions = dbTransactions.map(item => {
      return item.toTransactionModel()
    })
    return transactions
  }
}
