import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot } from '@angular/router';
import { asapScheduler, scheduled } from 'rxjs';
import { LaunchesService } from '../services/launches.service';
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

  it(`should resolve` , async () => {
    const launchesService = TestBed.inject(LaunchesService);
    const data = [{
      mission_name: 'mission1',
      flight_number: 1,
      mission_id: ['101'],
      launch_year: '2016',
      launch_success: true,
      rocket: {
          first_stage: {
              cores: []
          }
      },
      links: {
          mission_patch: 'url',
          mission_patch_small: 'url'
      }
    }];
    spyOn(launchesService, 'fetchLaunches').and.returnValue(scheduled([data], asapScheduler));
    const res = await service.resolve(new ActivatedRouteSnapshot()).toPromise();
    expect(res).toEqual(data);
  });

});
