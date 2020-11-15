import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from 'src/app/core/common/consts/api-endpoint.const';
import { CustomHttpServiceOption } from 'src/app/core/services/http/http.service';
import { IEventDetailsModel } from '../models/event-detail.model';
import { HttpService } from './../../../core/services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class LaunchesService {

  constructor(
    private httpService: HttpService
  ) { }

  public fetchLaunches(params: Params, customOptions?: CustomHttpServiceOption): Observable<IEventDetailsModel[]> {
    const url = this.httpService.constructUrl(API_ENDPOINTS.Launches);
    return this.httpService.get(url, {
      params
    }, customOptions);
  }
}
