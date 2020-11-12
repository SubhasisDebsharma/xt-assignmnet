import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEventDetailsModel } from '../../models/event-detail.model';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.scss']
})
export class LaunchesComponent implements OnInit {
  events: IEventDetailsModel[];
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      console.log(data.launches);
      this.events = data.launches;
    });
    // console.log(this.route.snapshot.data);
    // this.events = this.route.snapshot.data.launches ;
  }

}
