import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaunchesRoutingModule } from './launches-routing.module';
import { FilterComponent } from './components/filter/filter.component';
import { LaunchesComponent } from './components/launches/launches.component';
import { RouterModule } from '@angular/router';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [LaunchesComponent, FilterComponent, EventDetailsComponent],
  imports: [
    CommonModule,
    LaunchesRoutingModule,
    RouterModule,
    CoreModule
  ]
})
export class LaunchesModule { }
