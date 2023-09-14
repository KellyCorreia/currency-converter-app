import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConverterTransaction } from './converter-transaction.entity';

@Injectable()
export class ConverterTransactionService {
  constructor(
    @InjectRepository(ConverterTransaction)
    private ConverterTransactionRepository: Repository<ConverterTransaction>,
  ) {}

  async createTransaction(
    userId: string,
    currencyFrom: string,
    amountFrom: number,
    currencyTo: string,
    conversionIndex: number,
  ): Promise<ConverterTransaction> {
    const timestamp = new Date();
    const converterTransaction = new ConverterTransaction(
      userId,
      currencyFrom,
      amountFrom,
      currencyTo,
      conversionIndex,
      timestamp,
    );
    const transaction =
      this.ConverterTransactionRepository.create(converterTransaction);
    return this.ConverterTransactionRepository.save(transaction);
  }

  async findAllTransactions(): Promise<ConverterTransaction[]> {
    return this.ConverterTransactionRepository.find();
  }

  async getTransactionById(id: number): Promise<ConverterTransaction> {
    return this.ConverterTransactionRepository.findOneBy({id})
  }

  async getTransactionByUserId(userId: string): Promise<ConverterTransaction[]> {
    const result = this.ConverterTransactionRepository.findBy({userId})
    console.log(result)
    return result
  }
}
