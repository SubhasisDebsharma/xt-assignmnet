import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { asapScheduler, of, scheduled } from 'rxjs';
import { environment } from './../../../../environments/environment';
import { HttpService } from './http.service';

describe('HttpService', () => {
  let service: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('construct url should work ->  with no url', () => {
    const url = service.constructUrl({
      api: '{version}/launches'
    });
    const host = environment.apiHost;
    const expectedUrl = host + '/' + environment.apiversion + '/launches';
    expect(url).toEqual(expectedUrl);
  });

  it('construct url should work ->  with url', () => {
    const url = service.constructUrl({
      api: '{version}/launches',
      url: 'url1'
    });
    const expectedUrl = 'url1';
    expect(url).toEqual(expectedUrl);
  });

  it('get method should work', async () => {
    const httpClient = TestBed.inject(HttpClient);
    const d = [1, 2, 3];
    spyOn(httpClient, 'request').and.returnValue(scheduled([d], asapScheduler));
    const res = await service.get('', {}, {loader: true}).toPromise();
    expect(res).toEqual(d);
  });

  it('get method should work > no loader: branch', async () => {
    const httpClient = TestBed.inject(HttpClient);
    const d = [1, 2, 3];
    spyOn(httpClient, 'request').and.returnValue(scheduled([d], asapScheduler));
    const res = await service.get('', {}).toPromise();
    expect(res).toEqual(d);
  });
});
