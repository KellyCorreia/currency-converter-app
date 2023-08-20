import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CurrencyConverterService } from './currency-converter/currency-converter.service';
import { CurrencyConverterController } from './currency-converter/currency-converter.controller';
import { DatabaseModule } from './currency-converter/database/database.module';
import { DataService } from './currency-converter/data/data.service';
import { ConverterTransactionService } from './currency-converter/database/converter-transaction.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConverterTransaction } from './currency-converter/database/converter-transaction.entity';

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
  ],
})
export class AppModule {}
