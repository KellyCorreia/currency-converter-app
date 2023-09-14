import { Controller, Get, Query, Headers, Param } from '@nestjs/common';
import { CurrencyConverterService } from './currency-converter.service';
import {TransactionClass} from "./transaction.class";
import {Configuration} from "../config/configuration";

@Controller('currency-converter')
export class CurrencyConverterController {
  constructor(
    private readonly currencyConverterService: CurrencyConverterService,
    private readonly config: Configuration
  ) {}

  @Get('convert')
  async convertCurrencyTransaction(
    @Headers('userId') userId: string,
    @Query('fromCurrency') fromCurrency: string,
    @Query('toCurrency') toCurrency: string,
    @Query('amount') amount: number,
  ): Promise<TransactionClass> {
    return this.currencyConverterService.convertCurrency(
      this.config,
      userId,
      fromCurrency,
      toCurrency,
      amount,
    );
  }

  @Get(':user')
  async getConverterTransactionById(
    @Param('user') user: string,
  ): Promise<TransactionClass[]> {
    return this.currencyConverterService.getTransactionsByUserId(user)
  }

  @Get()
  async getAllConverterTransactions(): Promise<TransactionClass[]> {
    return this.currencyConverterService.getAllTransactions()
  }
}
