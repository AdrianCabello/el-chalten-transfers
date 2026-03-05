import { Component, inject } from '@angular/core';
import { I18nService } from '../../core/services/i18n.service';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  templateUrl: './why-choose-us.component.html',
  styleUrl: './why-choose-us.component.scss',
})
export class WhyChooseUsComponent {
  readonly t = inject(I18nService).t;
}
