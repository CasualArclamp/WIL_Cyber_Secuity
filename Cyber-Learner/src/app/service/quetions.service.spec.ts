import { TestBed } from '@angular/core/testing';

import { QuetionsService } from './quetions.service';

describe('QuetionsService', () => {
  let service: QuetionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuetionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
