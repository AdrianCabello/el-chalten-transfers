import { Component, inject } from '@angular/core';
import { I18nService } from '../../core/services/i18n.service';
interface Destination {
  name: string;
  highlight?: boolean;
}

@Component({
  selector: 'app-destinations',
  standalone: true,
  templateUrl: './destinations.component.html',
  styleUrl: './destinations.component.scss',
})
export class DestinationsComponent {
  readonly t = inject(I18nService).t;

  readonly destinationsColumn1: Destination[] = [
    { name: 'Aeropuerto / Ciudad de El Calafate', highlight: true },
    { name: 'El Chaltén', highlight: true },
    { name: 'Est. Bonanza / Eco Domes / H. El Pilar' },
    { name: 'P. Río Eléctrico / H. Explora' },
    { name: 'Rva. Los Huemules / Lago del Desierto' },
    { name: 'Ref. Valle del Crestón' },
  ];

  readonly destinationsColumn2: Destination[] = [
    { name: 'Est. La Quinta / Chaltén Camp' },
    { name: 'Bahía Tunel / La Leona' },
    { name: 'M. Glaciarium / El Galpon del Glaciar' },
    { name: 'H. Eolo / Puerto Punta Bandera' },
    { name: 'Glaciar Perito Moreno' },
  ];
}
