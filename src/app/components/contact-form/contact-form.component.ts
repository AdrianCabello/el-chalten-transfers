import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { I18nService } from '../../core/services/i18n.service';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xjvnqkwe';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  readonly t = inject(I18nService).t;

  readonly isSubmitting = signal(false);
  readonly statusMessage = signal<'success' | 'error' | null>(null);

  name = '';
  email = '';
  message = '';

  async onSubmit(event: Event): Promise<void> {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    formData.set('_subject', 'El Chaltén Transfers - Consulta');

    this.isSubmitting.set(true);
    this.statusMessage.set(null);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        this.statusMessage.set('success');
        this.name = '';
        this.email = '';
        this.message = '';
      } else {
        this.statusMessage.set('error');
      }
    } catch {
      this.statusMessage.set('error');
    } finally {
      this.isSubmitting.set(false);
    }
  }
}
