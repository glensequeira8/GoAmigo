import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule,Http } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { PlanTripComponent } from './plan-trip/plan-trip.component';
import { routes } from './app.router';
import {ReadJSON} from './services/readJSON';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    PlanTripComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,    
    FormsModule,
    routes
  ],
  providers: [ReadJSON],
  bootstrap: [AppComponent]
})
export class AppModule { }
