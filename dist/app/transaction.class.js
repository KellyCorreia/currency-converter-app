"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionClass = void 0;
class TransactionClass {
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
exports.TransactionClass = TransactionClass;
//# sourceMappingURL=transaction.class.js.map