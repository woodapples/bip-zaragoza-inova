import { Routes } from '@angular/router';
import { MapViewComponent } from './components/map-view/map-view.component';
import { ChronoDensityComponent } from './components/chrono-density/chrono-density.component';
import { SafetyRatingComponent } from './components/safety-rating/safety-rating.component';
import { TicketBookingComponent } from './components/ticket-booking/ticket-booking.component';

export const routes: Routes = [
  { path: '', redirectTo: 'map', pathMatch: 'full' },
  { path: 'map', component: MapViewComponent },
  { path: 'chrono', component: ChronoDensityComponent },
  { path: 'persona', redirectTo: 'chrono', pathMatch: 'full' },
  { path: 'safety', component: SafetyRatingComponent },
  { path: 'tickets', component: TicketBookingComponent },
];
