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
exports.CurrencyConverterController = void 0;
const common_1 = require("@nestjs/common");
const currency_converter_service_1 = require("./currency-converter.service");
const configuration_1 = require("../config/configuration");
let CurrencyConverterController = exports.CurrencyConverterController = class CurrencyConverterController {
    constructor(currencyConverterService, config) {
        this.currencyConverterService = currencyConverterService;
        this.config = config;
    }
    async convertCurrencyTransaction(userId, fromCurrency, toCurrency, amount) {
        return this.currencyConverterService.convertCurrency(this.config, userId, fromCurrency, toCurrency, amount);
    }
    async getConverterTransactionById(user) {
        return this.currencyConverterService.getTransactionsByUserId(user);
    }
    async getAllConverterTransactions() {
        return this.currencyConverterService.getAllTransactions();
    }
};
__decorate([
    (0, common_1.Get)('convert'),
    __param(0, (0, common_1.Headers)('userId')),
    __param(1, (0, common_1.Query)('fromCurrency')),
    __param(2, (0, common_1.Query)('toCurrency')),
    __param(3, (0, common_1.Query)('amount')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Number]),
    __metadata("design:returntype", Promise)
], CurrencyConverterController.prototype, "convertCurrencyTransaction", null);
__decorate([
    (0, common_1.Get)(':user'),
    __param(0, (0, common_1.Param)('user')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
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
        configuration_1.Configuration])
], CurrencyConverterController);
//# sourceMappingURL=currency-converter.controller.js.map