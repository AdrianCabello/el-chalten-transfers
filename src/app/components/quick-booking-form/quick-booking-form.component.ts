import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { I18nService } from '../../core/services/i18n.service';
import { getWhatsAppUrl } from '../../shared/constants/contact';

@Component({
  selector: 'app-quick-booking-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './quick-booking-form.component.html',
  styleUrl: './quick-booking-form.component.scss',
})
export class QuickBookingFormComponent {
  private readonly i18n = inject(I18nService);
  readonly t = this.i18n.t;

  from = '';
  to = '';
  date = '';
  time = '';
  passengers = '';
  luggage = '';

  checkAvailability(): void {
    const msg = [
      'Hello, I would like to check availability for a transfer.',
      this.from && `From: ${this.from}`,
      this.to && `To: ${this.to}`,
      this.date && `Date: ${this.date}`,
      this.time && `Time: ${this.time}`,
      this.passengers && `Passengers: ${this.passengers}`,
      this.luggage && `Luggage: ${this.luggage}`,
    ]
      .filter(Boolean)
      .join('\n');
    window.open(getWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');
  }
}
