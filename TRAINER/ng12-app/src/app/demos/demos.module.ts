import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewDemosComponent } from './overview-demos/overview-demos.component';
import { D04ComponentComponent } from './d04-component/d04-component.component';

@NgModule({
  declarations: [
    OverviewDemosComponent,
    D04ComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OverviewDemosComponent
  ]
})
export class DemosModule { }
