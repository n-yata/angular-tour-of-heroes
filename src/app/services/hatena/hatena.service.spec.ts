import { TestBed } from '@angular/core/testing';

import { HatenaService } from './hatena.service';

describe('HatenaService', () => {
  let service: HatenaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HatenaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
