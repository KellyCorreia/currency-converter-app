import { Injectable } from '@nestjs/common';
import {DataService} from "./data/data.service";
import {ConverterTransactionService} from "./database/converter-transaction.service";
import {ExternalConverterClient} from "./external-converter/external-converter.client";
import {ConverterResponseClass} from "./converter-response.class";
import {ExternalConverterResponseClass} from "./external-converter/external-converter-response.class";
import {ConverterTransaction} from "./database/converter-transaction.entity";

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
  ): Promise<ConverterResponseClass> {

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
    const result = new ConverterResponseClass (
      storageResult.id,
      storageResult.userId,
      storageResult.currencyFrom,
      storageResult.amountFrom,
      storageResult.currencyTo,
      storageResult.amountFrom * storageResult.conversionIndex,
      storageResult.conversionIndex,
      storageResult.dateCreated,
    )
    return result;
  }
}
