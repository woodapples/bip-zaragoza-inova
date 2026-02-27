import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-time-widget',
  imports: [CommonModule],
  templateUrl: './time-widget.component.html',
  styleUrl: './time-widget.component.scss',
})
export class TimeWidgetComponent implements OnInit, OnDestroy {
  currentTime = '';
  doorTime = '10:21';
  minutesLeft = 18;
  progressPercent = 65;
  private timer: any;

  ngOnInit() {
    this.updateTime();
    this.timer = setInterval(() => {
      this.updateTime();
      if (this.minutesLeft > 0) {
        this.progressPercent = Math.min(100, this.progressPercent + 0.1);
      }
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  updateTime() {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  }
}
