import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewDemosComponent } from './overview-demos/overview-demos.component';
import { D04ComponentComponent } from './d04-component/d04-component.component';
import { D05LifecycleComponent } from './d05-lifecycle/d05-lifecycle.component';

@NgModule({
  declarations: [
    OverviewDemosComponent,
    D04ComponentComponent,
    D05LifecycleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OverviewDemosComponent
  ]
})
export class DemosModule { }
