import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currConv',
})
export class CurrConvPipe implements PipeTransform {
  transform(value: number, ...args: [string, string]): any {
    let [from, to] = args;
    if (from == to) {
      return value;
    }
    if (from == '0.876893') {
      from = 'GBP';
    } else if (from == '1.126735') {
      from = 'USD';
    } else {
      from = 'INR';
    }
    if (to == '0.876893') {
      to = 'GBP';
    } else if (to == '1.126735') {
      to = 'USD';
    } else {
      to = 'INR';
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
    let result: number = (value * toValue) / fromValue;
    result = parseInt(result.toFixed(0));
    return result.toFixed(2);
  }
}
