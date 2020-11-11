import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './components/filter/filter.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [FilterComponent],
  exports: [
    FilterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule { }
