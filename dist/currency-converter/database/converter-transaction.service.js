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
exports.ConverterTransactionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const converter_transaction_entity_1 = require("./converter-transaction.entity");
let ConverterTransactionService = exports.ConverterTransactionService = class ConverterTransactionService {
    constructor(ConverterTransactionRepository) {
        this.ConverterTransactionRepository = ConverterTransactionRepository;
    }
    async createTransaction(userId, currencyFrom, amountFrom, currencyTo, conversionIndex) {
        const timestamp = new Date();
        const converterTransaction = new converter_transaction_entity_1.ConverterTransaction(userId, currencyFrom, amountFrom, currencyTo, conversionIndex, timestamp);
        const transaction = this.ConverterTransactionRepository.create(converterTransaction);
        return this.ConverterTransactionRepository.save(transaction);
    }
    async findAllTransactions() {
        return this.ConverterTransactionRepository.find();
    }
    async getTransactionById(id) {
        return this.ConverterTransactionRepository.findOneById(id);
    }
};
exports.ConverterTransactionService = ConverterTransactionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(converter_transaction_entity_1.ConverterTransaction)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ConverterTransactionService);
//# sourceMappingURL=converter-transaction.service.js.map