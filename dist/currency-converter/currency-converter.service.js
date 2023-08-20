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
exports.InfoClass = exports.QueryClass = exports.ConverterResponseClass = exports.CurrencyConverterService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
const CONVERTER_API_URL = 'https://api.apilayer.com/currency_data/convert';
const CONVERTER_API_KEY = '8WOCtKQOQC63c2UD01gvdQBXZb1oZBmV';
let CurrencyConverterService = exports.CurrencyConverterService = class CurrencyConverterService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async convertCurrency(fromCurrency, toCurrency, amount) {
        const url = CONVERTER_API_URL;
        const headers = { apikey: CONVERTER_API_KEY };
        const params = {
            from: fromCurrency,
            to: toCurrency,
            amount: amount,
            base: 'EUR',
        };
        const response = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url, { headers, params }));
        const responseData = response.data;
        console.log(responseData);
        return responseData;
    }
};
exports.CurrencyConverterService = CurrencyConverterService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], CurrencyConverterService);
class ConverterResponseClass {
    constructor(success, query, info, result) {
        success = success;
        query = query;
        info = info;
        result = result;
    }
}
exports.ConverterResponseClass = ConverterResponseClass;
class QueryClass {
    constructor(from, to, amount) {
        this.from = from;
        this.to = to;
        this.amount = amount;
    }
}
exports.QueryClass = QueryClass;
class InfoClass {
    constructor(timestamp, quote) {
        this.timestamp = timestamp;
        this.quote = quote;
    }
}
exports.InfoClass = InfoClass;
//# sourceMappingURL=currency-converter.service.js.map