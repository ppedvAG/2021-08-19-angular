import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app-routing.module';
import { DemosModule} from '../demos-mdl/demos.module';
import { TodosModule } from '../todos-mdl/todos.module';
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
    FormsModule,
    DemosModule,
    TodosModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
