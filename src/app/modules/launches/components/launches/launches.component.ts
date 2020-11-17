import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { IEventDetailsModel } from '../../models/event-detail.model';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.scss']
})
export class LaunchesComponent implements OnInit, OnDestroy {
  events: IEventDetailsModel[];
  private routeDataSubscription: Subscription;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeDataSubscription = this.route.data.subscribe(data => {
      this.events = data.launches;
    });
  }

  ngOnDestroy() {
    this.routeDataSubscription.unsubscribe();
  }

}
