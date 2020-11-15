import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { asapScheduler, scheduled } from 'rxjs';
import { HttpService } from 'src/app/core/services/http/http.service';

import { LaunchesService } from './launches.service';

describe('LaunchesService', () => {
  let service: LaunchesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(LaunchesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('fetchLaunches should be work', async () => {
    const httpService = TestBed.inject(HttpService);
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
    spyOn(httpService, 'get').and.returnValue(scheduled([data], asapScheduler));
    const res = await service.fetchLaunches({}).toPromise();
    expect(res).toEqual(data);
  });
});
