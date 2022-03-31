import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currConv',
})
export class CurrConvPipe implements PipeTransform {
  transform(value: number, ...args: [string, string]): any {
    const [from, to] = args;
    if (from == to) {
      return value;
    }
    interface Exchange {
      id: string;
      value: number;
    }
    const exchangeRates: Exchange[] = [
      { id: 'USD', value: 1.126735 },

      { id: 'GBP', value: 0.876893 },

      { id: 'INR', value: 79.677056 },
    ];
    const fromValue: any = exchangeRates.find(
      (exchange) => exchange.id == from
    )!.value;
    const toValue: any = exchangeRates.find(
      (exchange) => exchange.id == to
    )!.value;
    //formula for exchange rates
    value = (value * toValue) / fromValue;

    return value;
  }
}
