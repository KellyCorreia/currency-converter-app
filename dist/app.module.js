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
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const currency_converter_service_1 = require("./currency-converter/currency-converter.service");
const currency_converter_controller_1 = require("./currency-converter/currency-converter.controller");
const database_module_1 = require("./currency-converter/database/database.module");
const data_service_1 = require("./currency-converter/data/data.service");
const converter_transaction_service_1 = require("./currency-converter/database/converter-transaction.service");
const typeorm_1 = require("@nestjs/typeorm");
const converter_transaction_entity_1 = require("./currency-converter/database/converter-transaction.entity");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            axios_1.HttpModule,
            database_module_1.DatabaseModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'sqlite',
                database: 'currency-converter-database.db',
                entities: [converter_transaction_entity_1.ConverterTransaction],
                synchronize: true,
            }),
            typeorm_1.TypeOrmModule.forFeature([converter_transaction_entity_1.ConverterTransaction]),
        ],
        controllers: [app_controller_1.AppController, currency_converter_controller_1.CurrencyConverterController],
        providers: [
            app_service_1.AppService,
            currency_converter_service_1.CurrencyConverterService,
            data_service_1.DataService,
            converter_transaction_service_1.ConverterTransactionService,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map