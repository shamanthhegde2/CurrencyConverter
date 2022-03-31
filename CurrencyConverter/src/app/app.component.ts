import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  show: boolean = false;
  fromCurr: string = '';
  toCurr: string = '';
  amount: number = 1.0;
  title = 'CurrencyConverter';
  result: string = 'sample';
  showResult() {
    if (this.fromCurr != '' && this.toCurr != '') {
      this.show = true;
    } else {
      this.show = false;
    }
  }
}
