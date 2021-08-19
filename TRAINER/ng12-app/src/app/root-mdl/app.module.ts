import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app-routing.module';
import { DemosModule} from '../demos/demos.module';
import { TodosModule } from '../todos/todos.module';
import { AppComponent } from './appcomponent/app.component';
import { RootComponent } from './root/root.component';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemosModule,
    TodosModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
