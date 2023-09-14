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
exports.CurrencyConverterService = void 0;
const common_1 = require("@nestjs/common");
const data_service_1 = require("../data/data.service");
const converter_transaction_service_1 = require("../database/converter-transaction.service");
const external_converter_client_1 = require("../external-converter/external-converter.client");
let CurrencyConverterService = exports.CurrencyConverterService = class CurrencyConverterService {
    constructor(converterClient, dataService, transactionService) {
        this.converterClient = converterClient;
        this.dataService = dataService;
        this.transactionService = transactionService;
    }
    async convertCurrency(config, userId, fromCurrency, toCurrency, amount) {
        const conversionPromise = this.converterClient.convertCurrency(config, fromCurrency, toCurrency, amount);
        const conversionResult = await conversionPromise;
        const storageResultPromise = this.transactionService.createTransaction(userId, conversionResult.query.from, conversionResult.query.amount, conversionResult.query.to, conversionResult.info.quote);
        const storageResult = await storageResultPromise;
        return storageResult.toTransactionModel();
    }
    async getAllTransactions() {
        const resultPromise = this.transactionService.findAllTransactions();
        const dbTransactions = await resultPromise;
        return dbTransactions.map(item => {
            return item.toTransactionModel();
        });
    }
    async getTransactionsByUserId(userId) {
        const resultPromise = this.transactionService.getTransactionByUserId(userId);
        const dbTransactions = await resultPromise;
        return dbTransactions.map(item => {
            return item.toTransactionModel();
        });
    }
};
exports.CurrencyConverterService = CurrencyConverterService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [external_converter_client_1.ExternalConverterClient,
        data_service_1.DataService,
        converter_transaction_service_1.ConverterTransactionService])
], CurrencyConverterService);
//# sourceMappingURL=currency-converter.service.js.map