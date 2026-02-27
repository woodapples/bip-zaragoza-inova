import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimeWidgetComponent } from '../time-widget/time-widget.component';

@Component({
  selector: 'app-map-view',
  imports: [CommonModule, FormsModule, TimeWidgetComponent],
  templateUrl: './map-view.component.html',
  styleUrl: './map-view.component.scss',
})
export class MapViewComponent {
  destination = '';
  arrivalTime = '';
  showRoute = false;
  crowdView: 'now' | 'later' = 'now';
  routeInfo = {
    duration: '18 min',
    distance: '4.2 km',
    leaveAt: '10:21',
    arriveAt: '10:39',
    crowdLevel: 'Low',
    safety: 4.2,
  };

  routeStops = [
    { name: 'Your Location', time: '10:21', type: 'start' },
    { name: 'C. Prudencio Jardiel', time: '10:25', type: 'waypoint' },
    { name: 'P° Echegaray y Caballero', time: '10:30', type: 'waypoint' },
    { name: 'Catedral-Basílica del Pilar', time: '10:35', type: 'waypoint' },
    { name: 'Pl. de Ntra. Sra. del Pilar', time: '10:39', type: 'end' },
  ];

  calculateRoute() {
    if (this.destination) {
      this.showRoute = true;
    }
  }

  getPassengerDots(): { x: number; y: number; color: string }[] {
    const count = this.crowdView === 'now' ? 18 : 8;
    const dots = [];
    for (let i = 0; i < count; i++) {
      const section = Math.floor(i / 5);
      dots.push({
        x: 10 + section * 24 + (i % 5) * 4,
        y: 14 + Math.floor((i % 5) / 2) * 6,
        color: count > 15 ? '#ffa726' : '#66bb6a',
      });
    }
    return dots;
  }
}
