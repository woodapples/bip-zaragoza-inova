import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-safety-rating',
  imports: [CommonModule],
  templateUrl: './safety-rating.component.html',
  styleUrl: './safety-rating.component.scss',
})
export class SafetyRatingComponent {
  overallRating = 4.2;
  totalReviews = 3847;

  categories = [
    { name: 'Driver Behavior', rating: 4.5, icon: '🚗' },
    { name: 'Vehicle Condition', rating: 4.0, icon: '🔧' },
    { name: 'Stop Safety', rating: 3.8, icon: '🏗️' },
    { name: 'Night Travel', rating: 3.5, icon: '🌙' },
    { name: 'Accessibility', rating: 4.3, icon: '♿' },
    { name: 'Cleanliness', rating: 4.1, icon: '✨' },
  ];

  recentReviews = [
    {
      user: 'Karolina',
      rating: 5,
      comment: 'Very safe journey, felt comfortable the entire time.',
      time: '2h ago',
      line: 'Line 1',
    },
    {
      user: 'Miguel',
      rating: 4,
      comment: 'Good, but a bit crowded during peak hours. Still felt safe.',
      time: '5h ago',
      line: 'Line 2',
    },
    {
      user: 'Sofia',
      rating: 3,
      comment: 'Night travel could use better lighting at stops.',
      time: '1d ago',
      line: 'Line 3',
    },
    {
      user: 'Carlos',
      rating: 5,
      comment: 'The new buses have excellent safety features.',
      time: '2d ago',
      line: 'Line C1',
    },
  ];

  userRating = 0;
  hoverRating = 0;

  setHover(rating: number) {
    this.hoverRating = rating;
  }

  clearHover() {
    this.hoverRating = 0;
  }

  setRating(rating: number) {
    this.userRating = rating;
  }

  getStarArray(): number[] {
    return [1, 2, 3, 4, 5];
  }

  getFilledWidth(rating: number): number {
    return (rating / 5) * 100;
  }
}
