import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TripListComponent } from './trip-list/trip-list.component';
import { TripCardComponent } from './trip-card/trip-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TripListComponent,
    TripCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
