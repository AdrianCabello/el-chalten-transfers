import { Component, inject } from '@angular/core';
import { I18nService } from '../../core/services/i18n.service';
import { getWhatsAppUrl } from '../../shared/constants/contact';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  readonly t = inject(I18nService).t;

  get consultUrl(): string {
    return getWhatsAppUrl(this.t().whatsappDefaultMessage);
  }
}
