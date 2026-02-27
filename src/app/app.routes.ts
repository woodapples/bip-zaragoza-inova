import { Routes } from '@angular/router';
import { SplashComponent } from './components/splash/splash.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { ChronoDensityComponent } from './components/chrono-density/chrono-density.component';
import { SafetyRatingComponent } from './components/safety-rating/safety-rating.component';
import { TicketBookingComponent } from './components/ticket-booking/ticket-booking.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';

export const routes: Routes = [
  { path: '', component: SplashComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'map', component: MapViewComponent },
  { path: 'chrono', component: ChronoDensityComponent },
  { path: 'persona', redirectTo: 'chrono', pathMatch: 'full' },
  { path: 'safety', component: SafetyRatingComponent },
  { path: 'tickets', component: TicketBookingComponent },
  { path: 'settings', component: UserSettingsComponent },
];
