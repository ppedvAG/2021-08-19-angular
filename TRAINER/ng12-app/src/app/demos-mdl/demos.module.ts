import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewDemosComponent } from './overview-demos/overview-demos.component';
import { D04ComponentComponent } from './d04-component/d04-component.component';
import { D05LifecycleComponent } from './d05-lifecycle/d05-lifecycle.component';
import { AppRoutingModule } from '../app-routing.module';
import { D07StructDirComponent } from './d07-struct-dir/d07-struct-dir.component';
import { D08AttrDirComponent } from './d08-attr-dir/d08-attr-dir.component';
import { D09EventsComponent } from './d09-events/d09-events.component';
import { D11OutputsComponent, D11OutputsComponentChild } from './d11-outputs/d11-outputs.component';
import { D13PipesComponent } from './d13-pipes/d13-pipes.component';
import { D13MyPipePipe } from './d13-pipes/d13-my-pipe.pipe';

@NgModule({
  declarations: [
    OverviewDemosComponent,
    D04ComponentComponent,
    D05LifecycleComponent,
    D07StructDirComponent,
    D08AttrDirComponent,
    D09EventsComponent,
    D11OutputsComponent,
    D11OutputsComponentChild,
    D13PipesComponent,
    D13MyPipePipe
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    OverviewDemosComponent
  ]
})
export class DemosModule { }
