import { Component, OnInit } from '@angular/core';
import { IYearFilter } from '../../models/year.filter.model';
import { FilterService } from '../../services/filter.service';
// import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  availableFilterYears: IYearFilter[];
  constructor(private filterService: FilterService) { }

  ngOnInit(): void {
    this.availableFilterYears = this.filterService.getAvailableFilterYears();
  }

}
