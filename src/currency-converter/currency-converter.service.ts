import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

const CONVERTER_API_URL = 'https://api.apilayer.com/currency_data/convert';
const CONVERTER_API_KEY = '8WOCtKQOQC63c2UD01gvdQBXZb1oZBmV';

@Injectable()
export class CurrencyConverterService {
  constructor(private readonly httpService: HttpService) {}

  async convertCurrency(
    fromCurrency: string,
    toCurrency: string,
    amount: number,
  ): Promise<ConverterResponseClass> {
    const url = CONVERTER_API_URL;
    const headers = { apikey: CONVERTER_API_KEY };
    const params = {
      from: fromCurrency,
      to: toCurrency,
      amount: amount,
      base: 'EUR',
    };
    const response = await firstValueFrom(
      this.httpService.get(url, { headers, params }),
    );
    const responseData: ConverterResponseClass = response.data;
    console.log(responseData);
    return responseData;
  }
}

export class ConverterResponseClass {
  success: boolean;
  query: QueryClass;
  info: InfoClass;
  result: number;
  constructor(success, query, info, result) {
    success = success;
    query = query;
    info = info;
    result = result;
  }
}

export class QueryClass {
  from: string;
  to: string;
  amount: number;
  constructor(from, to, amount) {
    this.from = from;
    this.to = to;
    this.amount = amount;
  }
}
export class InfoClass {
  timestamp: number;
  quote: number;
  constructor(timestamp, quote) {
    this.timestamp = timestamp;
    this.quote = quote;
  }
}
