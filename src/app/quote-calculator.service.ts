import { Injectable } from '@angular/core';
import { Pet } from './pet';

@Injectable({
  providedIn: 'root'
})
export class QuoteCalculatorService {

  constructor() { }


  calculateQuote(pet:Pet):number{
    let cost = 10;
    let petType = pet.type.toUpperCase();
    if(petType === "GOAT"){
      return 7;
    }

    return cost;
  }
}
