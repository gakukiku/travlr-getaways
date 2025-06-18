import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Trip, TripDataService } from '../trip-data.service';
import { TripCardComponent } from '../trip-card/trip-card.component';

@Component({
  selector: 'app-trip-list',
  standalone: true,
  imports: [CommonModule, TripCardComponent],
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit {
  trips: Trip[] = [];

  constructor(
    private tripService: TripDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadTrips();
  }

  loadTrips(): void {
    this.tripService.getTrips().subscribe((data) => {
      this.trips = data;
    });
  }

  onEditTrip(trip: Trip): void {
    if (trip._id) {
      this.router.navigate(['/edit-trip', trip._id]);
    }
  }

  onDeleteTrip(tripId: string): void {
    if (confirm('Are you sure you want to delete this trip?')) {
      this.tripService.deleteTrip(tripId).subscribe({
        next: () => {
          console.log('Trip deleted successfully');
          this.loadTrips(); // リストを再読み込み
        },
        error: (error) => {
          console.error('Error deleting trip:', error);
          alert('Error deleting trip');
        }
      });
    }
  }

  onAddTrip(): void {
    this.router.navigate(['/add-trip']);
  }
}

/*
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Trip, TripDataService } from '../trip-data.service';
import { TripCardComponent } from '../trip-card/trip-card.component';

@Component({
  selector: 'app-trip-list',
  standalone: true,
  imports: [CommonModule, TripCardComponent],
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit {
  trips: Trip[] = [];

  constructor(private tripService: TripDataService) {}

  ngOnInit(): void {
    this.loadTrips();
  }

  loadTrips(): void {
    this.tripService.getTrips().subscribe((data) => {
      this.trips = data;
    });
  }

  onEditTrip(trip: Trip): void {
    console.log('Edit trip:', trip);
    // 後で編集画面に遷移する処理を追加
  }

  onDeleteTrip(tripId: string): void {
    if (confirm('Are you sure you want to delete this trip?')) {
      this.tripService.deleteTrip(tripId).subscribe(() => {
        this.loadTrips(); // リストを再読み込み
      });
    }
  }

  onAddTrip(): void {
    console.log('Add new trip');
    // 後で新規追加画面に遷移する処理を追加
  }
}
*/

/*
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Trip, TripDataService } from '../trip-data.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-trip-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit {
  trips: Trip[] = [];

  constructor(private tripService: TripDataService) {}

  ngOnInit(): void {
    this.tripService.getTrips().subscribe((data) => {
      this.trips = data;
    });
  }
}
*/