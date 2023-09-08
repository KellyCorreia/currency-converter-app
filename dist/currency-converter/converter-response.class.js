"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConverterResponseClass = void 0;
class ConverterResponseClass {
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
exports.ConverterResponseClass = ConverterResponseClass;
//# sourceMappingURL=converter-response.class.js.map