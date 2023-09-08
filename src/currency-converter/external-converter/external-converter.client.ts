import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import {ExternalConverterResponseClass} from "./external-converter-response.class";

const CONVERTER_API_URL = 'https://api.apilayer.com/currency_data/convert';
const CONVERTER_API_KEY = '8WOCtKQOQC63c2UD01gvdQBXZb1oZBmV';

@Injectable()
export class ExternalConverterClient {
  constructor(private readonly httpService: HttpService) {}

  async convertCurrency(
    fromCurrency: string,
    toCurrency: string,
    amount: number,
  ): Promise<ExternalConverterResponseClass> {
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
    const responseData: ExternalConverterResponseClass = response.data;
    console.log(responseData);
    return responseData;
  }
}