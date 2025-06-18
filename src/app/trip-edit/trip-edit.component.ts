import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Trip, TripDataService } from '../trip-data.service';

@Component({
  selector: 'app-trip-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './trip-edit.component.html',
  styleUrls: ['./trip-edit.component.css']
})
export class TripEditComponent implements OnInit {
  trip: Trip = {
    title: '',
    location: '',
    price: ''
  };
  
  isEditMode = false;
  tripId: string | null = null;

  constructor(
    private tripService: TripDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.tripId = this.route.snapshot.paramMap.get('id');
    if (this.tripId) {
      this.isEditMode = true;
      this.loadTrip(this.tripId);
    }
  }

  loadTrip(id: string): void {
    this.tripService.getTripById(id).subscribe({
      next: (trip) => {
        this.trip = trip;
      },
      error: (error) => {
        console.error('Error loading trip:', error);
        alert('Error loading trip data');
      }
    });
  }

  onSubmit(): void {
    if (this.isEditMode && this.tripId) {
      this.updateTrip();
    } else {
      this.addTrip();
    }
  }

  updateTrip(): void {
    if (this.tripId) {
      this.tripService.updateTrip(this.tripId, this.trip).subscribe({
        next: (updatedTrip) => {
          console.log('Trip updated:', updatedTrip);
          alert('Trip updated successfully!');
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.error('Error updating trip:', error);
          alert('Error updating trip');
        }
      });
    }
  }

  addTrip(): void {
    this.tripService.addTrip(this.trip).subscribe({
      next: (newTrip) => {
        console.log('Trip added:', newTrip);
        alert('Trip added successfully!');
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('Error adding trip:', error);
        alert('Error adding trip');
      }
    });
  }

  onCancel(): void {
    this.router.navigate(['/']);
  }
}