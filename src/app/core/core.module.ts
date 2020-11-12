import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToasterComponent } from './components/toaster/toaster.component';
import { LoaderComponent } from './components/loader/loader.component';



@NgModule({
  declarations: [
    ToasterComponent,
    LoaderComponent
  ],
  exports: [
    ToasterComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
