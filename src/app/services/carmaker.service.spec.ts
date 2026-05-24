import { TestBed } from '@angular/core/testing';

import { CarmakerService } from './carmaker.service';

describe('CarmakerService', () => {
  let service: CarmakerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarmakerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
