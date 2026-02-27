import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserService, Persona } from '../../services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit, OnDestroy {
  persona: Persona | null = null;
  greeting = '';
  dateStr = '';
  currentTime = '';
  co2Saved = 12.4;
  tripsThisWeek = 14;
  crowdScore = 67;

  densityBars = [
    { hour: '6', value: 20 },
    { hour: '7', value: 55 },
    { hour: '8', value: 85 },
    { hour: '9', value: 72 },
    { hour: '10', value: 45 },
    { hour: '11', value: 35 },
    { hour: '12', value: 50 },
    { hour: '13', value: 65 },
    { hour: '14', value: 60 },
    { hour: '15', value: 40 },
    { hour: '16', value: 55 },
    { hour: '17', value: 80 },
    { hour: '18', value: 90 },
    { hour: '19', value: 70 },
    { hour: '20', value: 40 },
  ];

  savedRoutes = [
    { name: 'Home → School', line: 'Bus 29', time: '18 min', icon: '🚌' },
    {
      name: 'Home → Plaza del Pilar',
      line: 'Tram L1',
      time: '12 min',
      icon: '🚊',
    },
    {
      name: 'Home → Parque Grande',
      line: 'BiZi + Walk',
      time: '25 min',
      icon: '🚲',
    },
  ];

  quickModes = [
    { icon: '🚌', label: 'Bus', active: true },
    { icon: '🚊', label: 'Tram', active: true },
    { icon: '🚲', label: 'BiZi', active: false },
    { icon: '🛴', label: 'Scooter', active: false },
    { icon: '🚗', label: 'Carpool', active: false },
    { icon: '🚶', label: 'Walk', active: true },
  ];

  newsItems = [
    { title: 'Tram L1 delays expected', time: '10 min ago', type: 'alert' },
    { title: 'New BiZi station at Delicias', time: '1h ago', type: 'info' },
    { title: 'Air quality improved today', time: '2h ago', type: 'good' },
  ];

  private sub!: Subscription;
  private clockInterval: any;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.sub = this.userService.persona$.subscribe((p) => {
      this.persona = p;
      if (p?.id === 'sara') {
        this.savedRoutes = [
          {
            name: 'Home → Tech Hub',
            line: 'Tram L1',
            time: '15 min',
            icon: '🚊',
          },
          {
            name: 'Daycare → Office',
            line: 'Bus 38',
            time: '22 min',
            icon: '🚌',
          },
          { name: 'Office → Gym', line: 'Walk', time: '10 min', icon: '🚶' },
        ];
        this.co2Saved = 28.7;
        this.tripsThisWeek = 22;
      }
    });
    this.updateTime();
    this.clockInterval = setInterval(() => this.updateTime(), 1000);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    clearInterval(this.clockInterval);
  }

  private updateTime() {
    const now = new Date();
    const hour = now.getHours();
    if (hour < 12) this.greeting = 'Good Morning';
    else if (hour < 18) this.greeting = 'Good Afternoon';
    else this.greeting = 'Good Evening';

    this.dateStr = now.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });
    this.currentTime = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });

    // Highlight current hour bar
    const currentHour = now.getHours();
    this.densityBars.forEach((b) => {
      (b as any)['current'] = parseInt(b.hour) === currentHour;
    });
  }

  getDensityColor(value: number): string {
    if (value > 75) return '#ff3d57';
    if (value > 50) return '#ffab00';
    return '#00e676';
  }

  getCrowdLabel(): string {
    if (this.crowdScore > 75) return 'HIGH';
    if (this.crowdScore > 50) return 'MODERATE';
    return 'LOW';
  }
}
