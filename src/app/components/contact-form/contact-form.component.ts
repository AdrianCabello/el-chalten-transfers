import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { I18nService } from '../../core/services/i18n.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  readonly t = inject(I18nService).t;
  name = '';
  email = '';
  message = '';
}
