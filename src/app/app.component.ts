import { Component } from '@angular/core';
import { QuoteCalculatorService } from './quote-calculator.service';
import { Pet } from './pet'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private quoteCalculator:QuoteCalculatorService){}

  title = 'pet-ins';
  pet:Pet = new Pet();
  quoteCost:number;


   getQuote() {
     console.log("Name=" + this.pet.name);
     this.quoteCost = this.quoteCalculator.calculateQuote(this.pet);
     console.log()

   }



}
