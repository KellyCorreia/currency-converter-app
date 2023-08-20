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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConverterResult = exports.CurrencyConverterController = void 0;
const common_1 = require("@nestjs/common");
const currency_converter_service_1 = require("./currency-converter.service");
const data_service_1 = require("./data/data.service");
const converter_transaction_service_1 = require("./database/converter-transaction.service");
let CurrencyConverterController = exports.CurrencyConverterController = class CurrencyConverterController {
    constructor(currencyConverterService, dataService, transactionService) {
        this.currencyConverterService = currencyConverterService;
        this.dataService = dataService;
        this.transactionService = transactionService;
    }
    async convertCurrency(fromCurrency, toCurrency, amount) {
        return this.currencyConverterService.convertCurrency(fromCurrency, toCurrency, amount);
    }
    async convertCurrencyTransaction(userId, fromCurrency, toCurrency, amount) {
        const conversionPromise = this.currencyConverterService.convertCurrency(fromCurrency, toCurrency, amount);
        const conversionResult = await conversionPromise;
        const storageResultPromise = this.transactionService.createTransaction(userId, conversionResult.query.from, conversionResult.query.amount, conversionResult.query.to, conversionResult.info.quote);
        const storageResult = await storageResultPromise;
        const converterResult = new ConverterResult(storageResult.userId, storageResult.currencyFrom, storageResult.amountFrom, storageResult.currencyTo, storageResult.conversionIndex, storageResult.dateCreated);
        return converterResult;
    }
    async createConverterTransaction(userId, fromCurrency, toCurrency, amount) {
        return this.transactionService.createTransaction(userId, fromCurrency, amount, toCurrency, 3.65);
    }
    async getConverterTransactionById(id) {
        return this.transactionService.getTransactionById(id);
    }
    async getAllConverterTransactions() {
        return this.transactionService.findAllTransactions();
    }
};
__decorate([
    (0, common_1.Get)('convert'),
    __param(0, (0, common_1.Query)('fromCurrency')),
    __param(1, (0, common_1.Query)('toCurrency')),
    __param(2, (0, common_1.Query)('amount')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number]),
    __metadata("design:returntype", Promise)
], CurrencyConverterController.prototype, "convertCurrency", null);
__decorate([
    (0, common_1.Get)('convert_and_save'),
    __param(0, (0, common_1.Headers)('userId')),
    __param(1, (0, common_1.Query)('from')),
    __param(2, (0, common_1.Query)('to')),
    __param(3, (0, common_1.Query)('amount')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Number]),
    __metadata("design:returntype", Promise)
], CurrencyConverterController.prototype, "convertCurrencyTransaction", null);
__decorate([
    (0, common_1.Get)('save'),
    __param(0, (0, common_1.Headers)('userId')),
    __param(1, (0, common_1.Query)('fromCurrency')),
    __param(2, (0, common_1.Query)('toCurrency')),
    __param(3, (0, common_1.Query)('amount')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Number]),
    __metadata("design:returntype", Promise)
], CurrencyConverterController.prototype, "createConverterTransaction", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CurrencyConverterController.prototype, "getConverterTransactionById", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CurrencyConverterController.prototype, "getAllConverterTransactions", null);
exports.CurrencyConverterController = CurrencyConverterController = __decorate([
    (0, common_1.Controller)('currency-converter'),
    __metadata("design:paramtypes", [currency_converter_service_1.CurrencyConverterService,
        data_service_1.DataService,
        converter_transaction_service_1.ConverterTransactionService])
], CurrencyConverterController);
class ConverterResult {
    constructor(userId, currencyFrom, amountFrom, currencyTo, conversionIndex, dateCreated) {
        this.userId = userId;
        this.currencyFrom = currencyFrom;
        this.amountFrom = amountFrom;
        this.currencyTo = currencyTo;
        this.conversionIndex = conversionIndex;
        this.dateCreated = dateCreated;
        this.amountTo = amountFrom * conversionIndex;
    }
}
exports.ConverterResult = ConverterResult;
//# sourceMappingURL=currency-converter.controller.js.map