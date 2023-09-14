import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CurrencyConverterService } from './app/currency-converter.service';
import { CurrencyConverterController } from './app/currency-converter.controller';
import { DatabaseModule } from './database/database.module';
import { DataService } from './data/data.service';
import { ConverterTransactionService } from './database/converter-transaction.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConverterTransaction } from './database/converter-transaction.entity';
import {ExternalConverterClient} from "./external-converter/external-converter.client";
import {Configuration} from "./config/configuration";

@Module({
  imports: [
    HttpModule,
    DatabaseModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'app-database.db',
      entities: [ConverterTransaction],
      synchronize: true, // Auto-create tables based on entities (only for development, disable in production)
    }),
    TypeOrmModule.forFeature([ConverterTransaction]),
  ],
  controllers: [CurrencyConverterController],
  providers: [
    Configuration,
    CurrencyConverterService,
    DataService,
    ConverterTransactionService,
    ExternalConverterClient,
  ],
})
export class AppModule {}
