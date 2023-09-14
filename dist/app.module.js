"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const currency_converter_service_1 = require("./app/currency-converter.service");
const currency_converter_controller_1 = require("./app/currency-converter.controller");
const database_module_1 = require("./database/database.module");
const data_service_1 = require("./data/data.service");
const converter_transaction_service_1 = require("./database/converter-transaction.service");
const typeorm_1 = require("@nestjs/typeorm");
const converter_transaction_entity_1 = require("./database/converter-transaction.entity");
const external_converter_client_1 = require("./external-converter/external-converter.client");
const configuration_1 = require("./config/configuration");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            axios_1.HttpModule,
            database_module_1.DatabaseModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'sqlite',
                database: 'app-database.db',
                entities: [converter_transaction_entity_1.ConverterTransaction],
                synchronize: true,
            }),
            typeorm_1.TypeOrmModule.forFeature([converter_transaction_entity_1.ConverterTransaction]),
        ],
        controllers: [currency_converter_controller_1.CurrencyConverterController],
        providers: [
            configuration_1.Configuration,
            currency_converter_service_1.CurrencyConverterService,
            data_service_1.DataService,
            converter_transaction_service_1.ConverterTransactionService,
            external_converter_client_1.ExternalConverterClient,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map