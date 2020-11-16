import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchesModule } from './modules/launches/launches.module';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => LaunchesModule,
    pathMatch: 'full'
  },
  {
    path: 'launches',
    loadChildren: () => LaunchesModule
  },
  {
    path: '**',
    redirectTo: '/launches?limit=100',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    onSameUrlNavigation: 'reload',
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
