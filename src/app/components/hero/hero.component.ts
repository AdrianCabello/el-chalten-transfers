import { Component, inject } from '@angular/core';
import { I18nService } from '../../core/services/i18n.service';
import { getWhatsAppUrl } from '../../shared/constants/contact';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  private readonly i18n = inject(I18nService);
  readonly t = this.i18n.t;

  get whatsAppUrl(): string {
    return getWhatsAppUrl(this.i18n.t().whatsappDefaultMessage);
  }
}
