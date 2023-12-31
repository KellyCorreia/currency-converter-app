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
exports.ExternalConverterClient = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
let ExternalConverterClient = exports.ExternalConverterClient = class ExternalConverterClient {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async convertCurrency(config, fromCurrency, toCurrency, amount) {
        const key = config.apikey;
        const url = config.apiURL;
        console.log(key);
        console.log(url);
        const headers = { apikey: key };
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
exports.ExternalConverterClient = ExternalConverterClient = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], ExternalConverterClient);
//# sourceMappingURL=external-converter.client.js.map