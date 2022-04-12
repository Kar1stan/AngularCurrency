import { TestBed } from '@angular/core/testing';

import { ConventorService } from './conventor.service';

describe('ConventorService', () => {
  let service: ConventorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConventorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
