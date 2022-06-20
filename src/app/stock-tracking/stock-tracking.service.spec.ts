import { TestBed } from '@angular/core/testing';

import { StockTrackingService } from './stock-tracking.service';

describe('StockTrackingService', () => {
  let service: StockTrackingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockTrackingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
