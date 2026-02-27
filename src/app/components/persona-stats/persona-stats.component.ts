import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-persona-stats',
  imports: [CommonModule, FormsModule],
  templateUrl: './persona-stats.component.html',
  styleUrl: './persona-stats.component.scss',
})
export class PersonaStatsComponent {
  searchQuery = '';
  selectedPersona: any = null;

  personas = [
    {
      id: 1,
      name: 'Karolina',
      avatar: 'K',
      type: 'Daily Commuter',
      avgTrips: 12,
      preferredLine: 'Line 1',
      safetyScore: 4.5,
      peakUsage: '08:00 - 09:00',
      favoriteStops: ['Plaza del Pilar', 'Delicias'],
      travelPattern: 'weekday-morning',
      co2Saved: 45,
      totalTrips: 248,
      monthlyStats: [
        { month: 'Sep', trips: 22 },
        { month: 'Oct', trips: 26 },
        { month: 'Nov', trips: 24 },
        { month: 'Dec', trips: 18 },
        { month: 'Jan', trips: 28 },
        { month: 'Feb', trips: 20 },
      ],
    },
    {
      id: 2,
      name: 'Miguel',
      avatar: 'M',
      type: 'Weekend Explorer',
      avgTrips: 6,
      preferredLine: 'Line 2',
      safetyScore: 4.1,
      peakUsage: '11:00 - 14:00',
      favoriteStops: ['Gran Vía', 'El Portillo'],
      travelPattern: 'weekend-midday',
      co2Saved: 22,
      totalTrips: 134,
      monthlyStats: [
        { month: 'Sep', trips: 8 },
        { month: 'Oct', trips: 10 },
        { month: 'Nov', trips: 6 },
        { month: 'Dec', trips: 12 },
        { month: 'Jan', trips: 8 },
        { month: 'Feb', trips: 5 },
      ],
    },
    {
      id: 3,
      name: 'Sofia',
      avatar: 'S',
      type: 'Student',
      avgTrips: 10,
      preferredLine: 'Line 3',
      safetyScore: 3.8,
      peakUsage: '07:30 - 08:30',
      favoriteStops: ['Paseo Independencia', 'Plaza España'],
      travelPattern: 'weekday-morning',
      co2Saved: 38,
      totalTrips: 189,
      monthlyStats: [
        { month: 'Sep', trips: 20 },
        { month: 'Oct', trips: 24 },
        { month: 'Nov', trips: 22 },
        { month: 'Dec', trips: 10 },
        { month: 'Jan', trips: 26 },
        { month: 'Feb', trips: 18 },
      ],
    },
    {
      id: 4,
      name: 'Carlos',
      avatar: 'C',
      type: 'Night Shift Worker',
      avgTrips: 8,
      preferredLine: 'Line C1',
      safetyScore: 3.5,
      peakUsage: '22:00 - 23:00',
      favoriteStops: ['Delicias', 'El Portillo'],
      travelPattern: 'night',
      co2Saved: 30,
      totalTrips: 156,
      monthlyStats: [
        { month: 'Sep', trips: 16 },
        { month: 'Oct', trips: 18 },
        { month: 'Nov', trips: 14 },
        { month: 'Dec', trips: 12 },
        { month: 'Jan', trips: 16 },
        { month: 'Feb', trips: 14 },
      ],
    },
  ];

  globalStats = {
    totalUsers: 12450,
    avgDailyTrips: 34200,
    avgSatisfaction: 4.2,
    co2SavedTotal: 128,
  };

  get filteredPersonas() {
    if (!this.searchQuery) return this.personas;
    const q = this.searchQuery.toLowerCase();
    return this.personas.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.type.toLowerCase().includes(q) ||
        p.preferredLine.toLowerCase().includes(q),
    );
  }

  selectPersona(persona: any) {
    this.selectedPersona = persona;
  }

  getMaxTrips(persona: any): number {
    return Math.max(...persona.monthlyStats.map((s: any) => s.trips));
  }

  getStars(score: number): string[] {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(score)) stars.push('full');
      else if (i === Math.ceil(score) && score % 1 !== 0) stars.push('half');
      else stars.push('empty');
    }
    return stars;
  }

  clearSelection() {
    this.selectedPersona = null;
  }
}
