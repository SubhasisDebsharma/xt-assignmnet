import { TestBed } from '@angular/core/testing';

import { LaunchesResolverService } from './launches-resolver.service';

describe('LaunchesResolverService', () => {
  let service: LaunchesResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaunchesResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
