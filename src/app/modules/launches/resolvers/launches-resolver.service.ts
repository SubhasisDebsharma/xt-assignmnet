import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { LaunchesService } from '../services/launches.service';
import { IEventDetailsModel } from './../models/event-detail.model';

@Injectable({
  providedIn: 'root'
})
export class LaunchesResolverService implements Resolve<any> {

  constructor(private launchesService: LaunchesService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<IEventDetailsModel[]> {
    return this.launchesService.fetchLaunches({limit: 100, ...route.queryParams}, {loader: true});
  }
}
