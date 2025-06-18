import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Trip } from '../trip-data.service';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css']
})
export class TripCardComponent {
  @Input() trip!: Trip;
  @Output() editTrip = new EventEmitter<Trip>();
  @Output() deleteTrip = new EventEmitter<string>();

  onEdit(): void {
    this.editTrip.emit(this.trip);
  }

  onDelete(): void {
    if (this.trip._id) {
      this.deleteTrip.emit(this.trip._id);
    }
  }
}

/*
import { Component } from '@angular/core';

@Component({
  selector: 'app-trip-card',
  imports: [],
  templateUrl: './trip-card.component.html',
  styleUrl: './trip-card.component.css'
})
export class TripCardComponent {
}
*/