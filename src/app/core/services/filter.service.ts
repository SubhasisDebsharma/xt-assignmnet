import { Injectable } from '@angular/core';
import { IYearFilter } from '../models/year.filter.model';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  public getAvailableFilterYears(): IYearFilter[] {
    return [
      {year: 2006},
      {year: 2007},
      {year: 2008},
      {year: 2009},
      {year: 2010},
      {year: 2011},
      {year: 2012},
      {year: 2013},
      {year: 2014},
      {year: 2016},
      {year: 2017},
      {year: 2018},
      {year: 2019},
      {year: 2020},
    ];
  }
}
