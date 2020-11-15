import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { LaunchesResolverService } from './launches-resolver.service';

describe('LaunchesResolverService', () => {
  let service: LaunchesResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(LaunchesResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
