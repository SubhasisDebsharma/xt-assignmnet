import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { EventDetailsModel, IEventDetailsModel } from '../../models/event-detail.model';
@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  details: EventDetailsModel;
  _rowDetails: IEventDetailsModel;
  @Input()
  public set rowDetails(d: IEventDetailsModel) {
    this._rowDetails = d;
    this.details = new EventDetailsModel(d);
  }
  public get rowDetails(): IEventDetailsModel {
    return this._rowDetails;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
