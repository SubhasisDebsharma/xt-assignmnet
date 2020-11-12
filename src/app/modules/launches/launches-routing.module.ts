import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchesComponent } from './components/launches/launches.component';
import { LaunchesResolverService } from './resolvers/launches-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: LaunchesComponent,
    resolve: {
      launches: LaunchesResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaunchesRoutingModule { }
