import { TestBed } from '@angular/core/testing';

import { QuoteCalculatorService } from './quote-calculator.service';

describe('QuoteCalculatorService', () => {
  let service: QuoteCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuoteCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('calculateQuote', () => {

    it('should return 11', () => {
      expect(service.calculateQuote(null)).toEqual(11);
    });

  });


});
