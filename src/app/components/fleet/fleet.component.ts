import { Component, inject } from '@angular/core';
import { I18nService } from '../../core/services/i18n.service';

export interface Vehicle {
  nameKey: keyof import('../../core/services/i18n.service').Translations;
  descKey: keyof import('../../core/services/i18n.service').Translations;
  capacity: string;
  image: string;
}

@Component({
  selector: 'app-fleet',
  standalone: true,
  templateUrl: './fleet.component.html',
  styleUrl: './fleet.component.scss',
})
export class FleetComponent {
  private readonly i18n = inject(I18nService);
  readonly t = this.i18n.t;

  readonly vehicles: Vehicle[] = [
    {
      nameKey: 'fleetHilux',
      descKey: 'fleetHiluxDesc',
      capacity: '4 pax',
      image: '/images/slider6.jpg',
    },
    {
      nameKey: 'fleetSprinter',
      descKey: 'fleetSprinterDesc',
      capacity: '15 pax',
      image: '/images/slider5.jpg',
    },
    {
      nameKey: 'fleetSuv',
      descKey: 'fleetSuvDesc',
      capacity: '4 pax',
      image: '/images/slider4.jpg',
    },
  ];
}
