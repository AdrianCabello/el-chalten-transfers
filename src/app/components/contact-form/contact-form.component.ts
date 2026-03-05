import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { I18nService } from '../../core/services/i18n.service';
import { CONTACT_EMAIL } from '../../shared/constants/contact';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, InputTextModule, TextareaModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  readonly t = inject(I18nService).t;

  name = '';
  email = '';
  message = '';

  get mailtoUrl(): string {
    const subject = encodeURIComponent('El Chaltén Transfers - Consulta');
    const lines: string[] = [];
    if (this.name.trim()) lines.push(`${this.t().contactName}: ${this.name.trim()}`);
    if (this.email.trim()) lines.push(`${this.t().contactEmail}: ${this.email.trim()}`);
    if (this.message.trim()) lines.push('', this.message.trim());
    const body = encodeURIComponent(lines.join('\n') || this.t().contactMessagePlaceholder);
    return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  openMailto(event: Event): void {
    // Dejar que el link abra el cliente de correo
  }
}
