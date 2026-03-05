import { Component, inject } from '@angular/core';
import { I18nService } from '../../core/services/i18n.service';
import {
  CONTACT_NAME,
  CONTACT_PHONE,
  CONTACT_PHONE_LINK,
  CONTACT_EMAIL,
  ADDRESS,
  ADDRESS_CITY,
  INSTAGRAM_URL,
} from '../../shared/constants/contact';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly t = inject(I18nService).t;
  readonly contactName = CONTACT_NAME;
  readonly phone = CONTACT_PHONE;
  readonly phoneLink = CONTACT_PHONE_LINK;
  readonly email = CONTACT_EMAIL;
  readonly address = ADDRESS;
  readonly addressCity = ADDRESS_CITY;
  readonly instagramUrl = INSTAGRAM_URL;
}
