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
    const toValue: any = exchangeRates.find(
      (exchange) => exchange.id == to
    )?.value;
    console.log(toValue);
    switch (from) {
      case 'USD': {
        if (to == 'GBP') {
          value = value / toValue;
        } else {
          value = value * toValue;
        }
        break;
      }
      case 'GBP': {
        value = value * toValue;
        break;
      }
      case 'INR': {
        value = value / toValue;
        break;
      }
    }

    return value;
  }
}
