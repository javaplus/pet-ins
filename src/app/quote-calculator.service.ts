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
    let petName = pet.name.toUpperCase();

    if(petType === "CAT" && petName === "GARFIELD"){
      cost = 8;
    }
    else if(petType === "BIRD" && petName === "TWEETY"){
      cost = 12;
    }
    else if(petType === "COYOTE" && petName === "WILEY"){
      cost = 20;
    }
    return cost;
  }
}
