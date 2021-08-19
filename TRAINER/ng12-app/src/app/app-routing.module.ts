import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { D04ComponentComponent } from './demos-mdl/d04-component/d04-component.component';
import { D05LifecycleComponent } from './demos-mdl/d05-lifecycle/d05-lifecycle.component';
import { OverviewDemosComponent } from './demos-mdl/overview-demos/overview-demos.component';
import { OverviewTodosComponent } from './todos-mdl/overview-todos/overview-todos.component';

const routes: Routes = [
  { path: 'todos', component: OverviewTodosComponent },
  { path: 'demos', component: OverviewDemosComponent, children: [
    { path: 'component', component: D04ComponentComponent},
    { path: 'lifecycle', component: D05LifecycleComponent, data: {prop1: 'test',
  prop2: 'test2'}},
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
