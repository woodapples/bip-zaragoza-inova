import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  imports: [CommonModule],
  templateUrl: './splash.component.html',
  styleUrl: './splash.component.scss',
})
export class SplashComponent implements OnInit {
  loadingProgress = 0;
  loadingText = 'Initializing systems...';
  private loadingSteps = [
    'Initializing systems...',
    'Connecting to transit network...',
    'Loading density data...',
    'Syncing persona profiles...',
    'Preparing AR interface...',
    'Ready.',
  ];

  ngOnInit() {
    this.animateLoading();
  }

  constructor(private router: Router) {}

  animateLoading() {
    const interval = setInterval(() => {
      this.loadingProgress += 2;
      const stepIndex = Math.floor(
        (this.loadingProgress / 100) * (this.loadingSteps.length - 1),
      );
      this.loadingText =
        this.loadingSteps[Math.min(stepIndex, this.loadingSteps.length - 1)];

      if (this.loadingProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 500);
      }
    }, 50);
  }
}
