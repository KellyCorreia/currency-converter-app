import { Controller, Get, Query, Headers, Param } from '@nestjs/common';
import {
  ConverterResponseClass,
  CurrencyConverterService,
} from './currency-converter.service';
import { DataService } from './data/data.service';
import { ConverterTransactionService } from './database/converter-transaction.service';
import { ConverterTransaction } from './database/converter-transaction.entity';
import {Column, PrimaryGeneratedColumn} from "typeorm";

@Controller('currency-converter')
export class CurrencyConverterController {
  constructor(
    private readonly currencyConverterService: CurrencyConverterService,
    private readonly dataService: DataService,
    private readonly transactionService: ConverterTransactionService,
  ) {}

  @Get('convert')
  async convertCurrency(
    @Query('fromCurrency') fromCurrency: string,
    @Query('toCurrency') toCurrency: string,
    @Query('amount') amount: number,
  ): Promise<ConverterResponseClass> {
    return this.currencyConverterService.convertCurrency(
      fromCurrency,
      toCurrency,
      amount,
    );
  }

  @Get('convert_and_save')
  async convertCurrencyTransaction(
    @Headers('userId') userId: string,
    @Query('from') fromCurrency: string,
    @Query('to') toCurrency: string,
    @Query('amount') amount: number,
  ): Promise<ConverterResult> {
    const conversionPromise = this.currencyConverterService.convertCurrency(
      fromCurrency,
      toCurrency,
      amount,
    );
    const conversionResult: ConverterResponseClass = await conversionPromise;
    const storageResultPromise = this.transactionService.createTransaction(
      userId,
      conversionResult.query.from,
      conversionResult.query.amount,
      conversionResult.query.to,
      conversionResult.info.quote,
    );
    const storageResult: ConverterTransaction = await storageResultPromise;
    const converterResult = new ConverterResult(
      storageResult.userId,
      storageResult.currencyFrom,
      storageResult.amountFrom,
      storageResult.currencyTo,
      storageResult.conversionIndex,
      storageResult.dateCreated,
    );
    return converterResult;
  }

  @Get('save')
  async createConverterTransaction(
    @Headers('userId') userId: string,
    @Query('fromCurrency') fromCurrency: string,
    @Query('toCurrency') toCurrency: string,
    @Query('amount') amount: number,
  ): Promise<ConverterTransaction> {
    return this.transactionService.createTransaction(
      userId,
      fromCurrency,
      amount,
      toCurrency,
      3.65,
    );
  }

  @Get(':id')
  async getConverterTransactionById(
    @Param('id') id: number,
  ): Promise<ConverterTransaction> {
    return this.transactionService.getTransactionById(id);
  }

  @Get()
  async getAllConverterTransactions(): Promise<ConverterTransaction[]> {
    return this.transactionService.findAllTransactions();
  }
}

export class ConverterResult {
  userId: string;
  currencyFrom: string;
  amountFrom: number;
  currencyTo: string;
  amountTo: number;
  conversionIndex: number;
  dateCreated: Date;
  constructor(
    userId,
    currencyFrom,
    amountFrom,
    currencyTo,
    conversionIndex,
    dateCreated,
  ) {
    this.userId = userId;
    this.currencyFrom = currencyFrom;
    this.amountFrom = amountFrom;
    this.currencyTo = currencyTo;
    this.conversionIndex = conversionIndex;
    this.dateCreated = dateCreated;
    this.amountTo = amountFrom * conversionIndex;
  }
}
