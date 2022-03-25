import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  show: boolean = false;
  fromCurr: string = 'USD';
  toCurr: string = 'GBP';
  amount: number = 0.0;
  title = 'CurrencyConverter';
  result: string = 'sample';
}
