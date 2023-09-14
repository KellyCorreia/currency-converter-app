"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConverterTransaction = void 0;
const typeorm_1 = require("typeorm");
const transaction_class_1 = require("../app/transaction.class");
let ConverterTransaction = exports.ConverterTransaction = class ConverterTransaction {
    constructor(userId, currencyFrom, amountFrom, currencyTo, conversionIndex, dateCreated) {
        this.userId = userId;
        this.currencyFrom = currencyFrom;
        this.amountFrom = amountFrom;
        this.currencyTo = currencyTo;
        this.conversionIndex = conversionIndex;
        this.dateCreated = dateCreated;
    }
    toTransactionModel() {
        return new transaction_class_1.TransactionClass(this.id, this.userId, this.currencyFrom, this.amountFrom, this.currencyTo, this.amountFrom * this.conversionIndex, this.conversionIndex, this.dateCreated);
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ConverterTransaction.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ConverterTransaction.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ConverterTransaction.prototype, "currencyFrom", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ConverterTransaction.prototype, "amountFrom", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ConverterTransaction.prototype, "currencyTo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ConverterTransaction.prototype, "conversionIndex", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], ConverterTransaction.prototype, "dateCreated", void 0);
exports.ConverterTransaction = ConverterTransaction = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object])
], ConverterTransaction);
//# sourceMappingURL=converter-transaction.entity.js.map