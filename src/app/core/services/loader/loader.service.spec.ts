import { TestBed } from '@angular/core/testing';

import { LoaderService } from './loader.service';

describe('LoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoaderService = TestBed.inject(LoaderService);
    expect(service).toBeTruthy();
  });

  it('stop  loader when no loader', () => {
    const service: LoaderService = TestBed.inject(LoaderService);
    service.stopLoader();
    expect(service.loading).toBeFalse();
  });

  it('stop  loader hard', () => {
    const service: LoaderService = TestBed.inject(LoaderService);
    service.startLoader();
    expect(service.loading).toBeTrue();
    service.stopLoaderHard();
    expect(service.loading).toBeFalse();
  });
});
