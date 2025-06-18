import { Routes } from '@angular/router';
import { TripListComponent } from './trip-list/trip-list.component';
import { TripEditComponent } from './trip-edit/trip-edit.component';

export const routes: Routes = [
  { path: '', component: TripListComponent },
  { path: 'add-trip', component: TripEditComponent },
  { path: 'edit-trip/:id', component: TripEditComponent },
  { path: '**', redirectTo: '' }
];