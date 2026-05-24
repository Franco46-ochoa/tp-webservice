import { TestBed } from '@angular/core/testing';

import { ApiLibreService } from './api-libre.service';

describe('ApiLibreService', () => {
  let service: ApiLibreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiLibreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
