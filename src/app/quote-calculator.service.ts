import { Injectable } from '@angular/core';
import { Pet } from './pet';

@Injectable({
  providedIn: 'root'
})
export class QuoteCalculatorService {

  constructor() { }


  calculateQuote(pet:Pet):number{
    return 11;
  }
}
