
export class ConverterResponseClass {
  transactionId: number;
  userId: number;
  currencyFrom: string;
  amountFrom: number;
  currencyTo: string;
  amountTo: number;
  index: number;
  transactionDate: Date;

  constructor(id, userId, currencyFrom, amountFrom, currencyTo, amountTo, index, date) {
    this.transactionId = id;
    this.userId = userId;
    this.currencyFrom = currencyFrom;
    this.amountFrom = amountFrom;
    this.currencyTo = currencyTo;
    this.amountTo = amountTo;
    this.index = index;
    this.transactionDate = date;
  }
}
