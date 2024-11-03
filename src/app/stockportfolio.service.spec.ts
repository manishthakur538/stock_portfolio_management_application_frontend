import { TestBed } from '@angular/core/testing';

import { StockportfolioService } from './stockportfolio.service';

describe('StockportfolioService', () => {
  let service: StockportfolioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockportfolioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
