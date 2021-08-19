import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './appcomponent/app.component';
import { RootComponent } from './root/root.component';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
