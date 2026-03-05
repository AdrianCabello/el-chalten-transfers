import { Component, inject } from '@angular/core';
import { I18nService } from '../../core/services/i18n.service';

@Component({
  selector: 'app-reviews',
  standalone: true,
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss',
})
export class ReviewsComponent {
  readonly t = inject(I18nService).t;

  readonly reviews = [
    {
      stars: 5,
      text: 'Excellent transfer from El Calafate to El Chaltén. Very punctual and comfortable.',
      author: 'Michael',
      country: 'USA',
    },
    {
      stars: 5,
      text: 'Great driver and perfect service for hikers.',
      author: 'Anna',
      country: 'Germany',
    },
    {
      stars: 5,
      text: 'Professional and reliable. Highly recommend for Patagonia trips.',
      author: 'Carlos',
      country: 'Spain',
    },
  ];
}
