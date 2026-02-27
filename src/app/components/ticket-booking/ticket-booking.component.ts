import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ticket-booking',
  imports: [CommonModule, FormsModule],
  templateUrl: './ticket-booking.component.html',
  styleUrl: './ticket-booking.component.scss',
})
export class TicketBookingComponent {
  activeView: 'book' | 'active' | 'history' = 'book';
  selectedTicketType = '';
  bookingDate = '';
  bookingTime = '';
  showConfirmation = false;
  showARPreview = false;
  arTicket: any = null;

  ticketTypes = [
    {
      id: 'single',
      name: 'Single Ride',
      price: '1.35€',
      icon: '🎫',
      desc: 'One-way trip on any line',
      duration: '75 min',
    },
    {
      id: 'return',
      name: 'Return Trip',
      price: '2.40€',
      icon: '🔄',
      desc: 'Round trip same day',
      duration: 'Same day',
    },
    {
      id: 'day',
      name: 'Day Pass',
      price: '5.20€',
      icon: '📅',
      desc: 'Unlimited rides for 24h',
      duration: '24 hours',
    },
    {
      id: 'week',
      name: 'Weekly Pass',
      price: '14.50€',
      icon: '📆',
      desc: '7 days unlimited transit',
      duration: '7 days',
    },
    {
      id: 'student',
      name: 'Student Pass',
      price: '9.90€/mo',
      icon: '🎓',
      desc: 'Monthly student discount',
      duration: '30 days',
    },
    {
      id: 'hyperloop',
      name: 'Hyperloop Express',
      price: '12.00€',
      icon: '🚄',
      desc: 'Future high-speed transit',
      duration: '15 min',
    },
  ];

  activeTickets = [
    {
      id: 'TKT-2024-001',
      type: 'Day Pass',
      line: 'All Lines',
      departure: 'Zaragoza Central',
      arrival: 'All Stops',
      departureTime: '08:00',
      arrivalTime: '—',
      date: '2024-02-15',
      expiresAt: '2024-02-16 08:00',
      status: 'active',
      qrCode: 'INOV-DAY-28F4A9',
    },
    {
      id: 'TKT-2024-002',
      type: 'Single Ride',
      line: 'Tram L1',
      departure: 'Plaza del Pilar',
      arrival: 'Delicias',
      departureTime: '09:15',
      arrivalTime: '09:32',
      date: '2024-02-15',
      expiresAt: '2024-02-15 10:30',
      status: 'active',
      qrCode: 'INOV-SGL-7C3B12',
    },
  ];

  historyTickets = [
    {
      id: 'TKT-2024-098',
      type: 'Single Ride',
      line: 'Bus 29',
      departure: 'Gran Vía',
      arrival: 'Parque Grande',
      departureTime: '17:00',
      arrivalTime: '17:22',
      date: '2024-02-14',
      status: 'used',
      qrCode: 'INOV-SGL-A1E234',
    },
    {
      id: 'TKT-2024-097',
      type: 'Return Trip',
      line: 'Tram L1',
      departure: 'Delicias',
      arrival: 'Plaza España',
      departureTime: '08:30',
      arrivalTime: '08:48',
      date: '2024-02-13',
      status: 'expired',
      qrCode: 'INOV-RTN-5D8F01',
    },
  ];

  selectTicketType(id: string) {
    this.selectedTicketType = id;
  }

  bookTicket() {
    if (!this.selectedTicketType) return;
    const type = this.ticketTypes.find((t) => t.id === this.selectedTicketType);
    if (!type) return;

    const date = this.bookingDate || new Date().toISOString().split('T')[0];
    const time =
      this.bookingTime ||
      new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      });

    const newTicket = {
      id: 'TKT-' + Date.now().toString(36).toUpperCase(),
      type: type.name,
      line: type.id === 'day' || type.id === 'week' ? 'All Lines' : 'Tram L1',
      departure: 'Zaragoza Central',
      arrival:
        type.id === 'day' || type.id === 'week' ? 'All Stops' : 'Delicias',
      departureTime: time,
      arrivalTime: '—',
      date: date,
      expiresAt: date + ' 23:59',
      status: 'active',
      qrCode:
        'INOV-' +
        type.id.toUpperCase().slice(0, 3) +
        '-' +
        Math.random().toString(36).slice(2, 8).toUpperCase(),
    };

    this.activeTickets.unshift(newTicket);
    this.showConfirmation = true;
    this.selectedTicketType = '';
    this.bookingDate = '';
    this.bookingTime = '';

    setTimeout(() => {
      this.showConfirmation = false;
      this.activeView = 'active';
    }, 2000);
  }

  openARPreview(ticket: any) {
    this.arTicket = ticket;
    this.showARPreview = true;
  }

  closeARPreview() {
    this.showARPreview = false;
    this.arTicket = null;
  }

  getMinDate(): string {
    return new Date().toISOString().split('T')[0];
  }

  getSelectedTypeName(): string {
    const type = this.ticketTypes.find((t) => t.id === this.selectedTicketType);
    return type ? type.name : '';
  }
}
