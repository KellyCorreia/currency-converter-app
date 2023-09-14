import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import {TransactionClass} from "../app/transaction.class";

@Entity()
export class ConverterTransaction {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  userId: string;
  @Column()
  currencyFrom: string;
  @Column()
  amountFrom: number;
  @Column()
  currencyTo: string;
  @Column()
  conversionIndex: number;
  @Column()
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
  }

  toTransactionModel(): TransactionClass {
    return new TransactionClass(this.id, this.userId, this.currencyFrom, this.amountFrom, this.currencyTo,
      this.amountFrom*this.conversionIndex, this.conversionIndex, this.dateCreated)
  }
}
