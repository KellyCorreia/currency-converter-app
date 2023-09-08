import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './sample-files/app.controller';
import { AppService } from './sample-files/app.service';
import { CurrencyConverterService } from './currency-converter/currency-converter.service';
import { CurrencyConverterController } from './currency-converter/currency-converter.controller';
import { DatabaseModule } from './currency-converter/database/database.module';
import { DataService } from './currency-converter/data/data.service';
import { ConverterTransactionService } from './currency-converter/database/converter-transaction.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConverterTransaction } from './currency-converter/database/converter-transaction.entity';
import {ExternalConverterClient} from "./currency-converter/external-converter/external-converter.client";

@Module({
  imports: [
    HttpModule,
    DatabaseModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'currency-converter-database.db',
      entities: [ConverterTransaction],
      synchronize: true, // Auto-create tables based on entities (only for development, disable in production)
    }),
    TypeOrmModule.forFeature([ConverterTransaction]),
  ],
  controllers: [AppController, CurrencyConverterController],
  providers: [
    AppService,
    CurrencyConverterService,
    DataService,
    ConverterTransactionService,
    ExternalConverterClient,
  ],
})
export class AppModule {}
