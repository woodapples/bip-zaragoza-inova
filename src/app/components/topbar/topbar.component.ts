import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topbar',
  imports: [CommonModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss',
})
export class TopbarComponent implements OnInit, OnDestroy {
  currentTime = '';
  currentTemp = '12°';
  weatherIcon = '☀️';
  private timer: any;

  ngOnInit() {
    this.updateTime();
    this.timer = setInterval(() => this.updateTime(), 1000);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  updateTime() {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
    });
  }
}
