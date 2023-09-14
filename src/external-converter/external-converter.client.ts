import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import {ExternalConverterResponseClass} from "./external-converter-response.class";
import {Configuration} from "../config/configuration";

@Injectable()
export class ExternalConverterClient {
  constructor(private readonly httpService: HttpService) {}

  async convertCurrency(
    config: Configuration,
    fromCurrency: string,
    toCurrency: string,
    amount: number,
  ): Promise<ExternalConverterResponseClass> {
    const key = config.apikey
    const url = config.apiURL
    const headers = { apikey: key };
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