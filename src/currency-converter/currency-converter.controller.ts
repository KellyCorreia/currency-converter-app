import { Controller, Get, Query, Headers, Param } from '@nestjs/common';
import { CurrencyConverterService } from './currency-converter.service';
import { ConverterResponseClass } from "./converter-response.class";
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

/*  @Get('convert')
  async convertCurrency(
    @Query('fromCurrency') fromCurrency: string,
    @Query('toCurrency') toCurrency: string,
    @Query('amount') amount: number,
  ): Promise<ConverterResponseClass> {
    return this.currencyConverterService.convertCurrency(
      "userId",
      fromCurrency,
      toCurrency,
      amount,
    );
  }*/

  @Get('convert')
  async convertCurrencyTransaction(
    @Headers('userId') userId: string,
    @Query('fromCurrency') fromCurrency: string,
    @Query('toCurrency') toCurrency: string,
    @Query('amount') amount: number,
  ): Promise<ConverterResponseClass> {
    return this.currencyConverterService.convertCurrency(
      userId,
      fromCurrency,
      toCurrency,
      amount,
    );
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
