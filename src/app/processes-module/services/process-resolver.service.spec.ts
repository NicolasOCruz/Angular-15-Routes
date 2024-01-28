import { TestBed } from '@angular/core/testing';

import { ProcessResolverService } from './process-resolver.service';

describe('ProcessResolverService', () => {
  let service: ProcessResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcessResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
