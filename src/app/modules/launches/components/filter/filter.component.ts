import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IYearFilter } from '../../models/year.filter.model';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  availableFilterYears: IYearFilter[];
  availableFilterLandLaunch = [
    {
      name: 'True',
      value: true
    },
    {
      name: 'False',
      value: false
    }
  ];
  constructor(private filterService: FilterService, private router: Router) { }

  ngOnInit(): void {
    this.availableFilterYears = this.filterService.getAvailableFilterYears();
  }

  removeQuery(routerLink: any [], queryParam: {[key: string]: string}) {
    const removedQueryParam = Object.assign({}, ...Object.keys(queryParam).map(el => ({[el]: null})));
    this.router.navigate(routerLink, {
      queryParams: removedQueryParam,
      queryParamsHandling: 'merge'
    });
  }

}
