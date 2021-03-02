import { TestBed } from '@angular/core/testing';

import { IntService } from './int.service';

describe('IntService', () => {
  let service: IntService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
