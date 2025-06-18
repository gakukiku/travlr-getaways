import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TripListComponent } from './trip-list/trip-list.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TripListComponent, HttpClientModule], // HttpClientModuleを追加
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'travlr-client';
}