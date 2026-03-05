import { Component, inject } from '@angular/core';
import { I18nService } from '../../core/services/i18n.service';
import { getWhatsAppUrl } from '../../shared/constants/contact';

@Component({
  selector: 'app-whatsapp-floating',
  standalone: true,
  templateUrl: './whatsapp-floating.component.html',
  styleUrl: './whatsapp-floating.component.scss',
})
export class WhatsappFloatingComponent {
  private readonly i18n = inject(I18nService);
  readonly t = this.i18n.t;

  get whatsAppUrl(): string {
    return getWhatsAppUrl(this.i18n.t().whatsappDefaultMessage);
  }
}
