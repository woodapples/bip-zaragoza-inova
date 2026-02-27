import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chrono-density',
  imports: [CommonModule, FormsModule],
  templateUrl: './chrono-density.component.html',
  styleUrl: './chrono-density.component.scss',
})
export class ChronoDensityComponent {
  activeTab: 'density' | 'personas' = 'density';
  selectedLine = 'Line 1';
  selectedTimeRange = 'morning';
  searchQuery = '';
  selectedPersona: any = null;

  lines = [
    { name: 'Line 1', color: '#00e5ff' },
    { name: 'Line 2', color: '#2979ff' },
    { name: 'Line 3', color: '#66bb6a' },
    { name: 'Line C1', color: '#ffa726' },
  ];

  timeRanges = [
    { id: 'morning', label: '06:00 - 10:00', peak: true },
    { id: 'midday', label: '10:00 - 14:00', peak: false },
    { id: 'afternoon', label: '14:00 - 18:00', peak: true },
    { id: 'evening', label: '18:00 - 22:00', peak: false },
  ];

  hourlyData = [
    { hour: '06:00', density: 30, level: 'low' },
    { hour: '07:00', density: 65, level: 'medium' },
    { hour: '08:00', density: 92, level: 'high' },
    { hour: '08:30', density: 98, level: 'critical' },
    { hour: '09:00', density: 85, level: 'high' },
    { hour: '09:30', density: 60, level: 'medium' },
    { hour: '10:00', density: 35, level: 'low' },
  ];

  stops = [
    { name: 'Plaza España', density: 45, passengers: 23, capacity: 50 },
    { name: 'Paseo Independencia', density: 72, passengers: 36, capacity: 50 },
    { name: 'Plaza del Pilar', density: 88, passengers: 44, capacity: 50 },
    { name: 'El Portillo', density: 35, passengers: 18, capacity: 50 },
    { name: 'Delicias', density: 55, passengers: 28, capacity: 50 },
    { name: 'Gran Vía', density: 68, passengers: 34, capacity: 50 },
  ];

  recommendations = [
    {
      time: '06:00 - 07:00',
      message: 'Best time to travel — very low density',
      type: 'success',
    },
    {
      time: '09:30 - 10:00',
      message: 'Density dropping — comfortable travel',
      type: 'info',
    },
    {
      time: '08:00 - 09:00',
      message: 'Peak hour — expect overcrowding',
      type: 'danger',
    },
  ];

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

  switchTab(tab: 'density' | 'personas') {
    this.activeTab = tab;
  }
  selectLine(name: string) {
    this.selectedLine = name;
  }
  selectTimeRange(id: string) {
    this.selectedTimeRange = id;
  }
  selectPersona(persona: any) {
    this.selectedPersona = persona;
  }
  clearSelection() {
    this.selectedPersona = null;
  }

  getDensityColor(density: number): string {
    if (density >= 90) return '#ff4757';
    if (density >= 70) return '#ffa726';
    if (density >= 50) return '#00e5ff';
    return '#66bb6a';
  }

  getDensityLabel(density: number): string {
    if (density >= 90) return 'Critical';
    if (density >= 70) return 'High';
    if (density >= 50) return 'Medium';
    return 'Low';
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
}
