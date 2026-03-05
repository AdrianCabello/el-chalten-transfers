import {
  Component,
  inject,
  ViewChild,
  ElementRef,
  AfterViewInit,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import type { Map as LMap, Marker as LMarker } from 'leaflet';
import { I18nService } from '../../core/services/i18n.service';

interface Destination {
  name: string;
  highlight?: boolean;
  lat?: number;
  lng?: number;
}

@Component({
  selector: 'app-destinations',
  standalone: true,
  templateUrl: './destinations.component.html',
  styleUrl: './destinations.component.scss',
})
export class DestinationsComponent implements AfterViewInit {
  readonly t = inject(I18nService).t;
  private readonly platformId = inject(PLATFORM_ID);

  @ViewChild('mapContainer') mapContainer!: ElementRef<HTMLDivElement>;

  private leafletMap: LMap | null = null;
  private markersByKey = new Map<string, LMarker>();

  readonly destinationsColumn1: Destination[] = [
    {
      name: 'Aeropuerto / Ciudad de El Calafate',
      highlight: true,
      lat: -50.338,
      lng: -72.265,
    },
    { name: 'El Chaltén', highlight: true, lat: -49.332, lng: -72.885 },
    {
      name: 'Est. Bonanza / Eco Domes / H. El Pilar',
      lat: -49.35,
      lng: -72.88,
    },
    { name: 'P. Río Eléctrico / H. Explora', lat: -49.25, lng: -72.95 },
    {
      name: 'Rva. Los Huemules / Lago del Desierto',
      lat: -49.05,
      lng: -72.85,
    },
    { name: 'Ref. Valle del Crestón', lat: -49.32, lng: -72.9 },
  ];

  readonly destinationsColumn2: Destination[] = [
    { name: 'Est. La Quinta / Chaltén Camp', lat: -49.33, lng: -72.89 },
    { name: 'Bahía Tunel / La Leona', lat: -50.33, lng: -72.26 },
    {
      name: 'M. Glaciarium / El Galpon del Glaciar',
      lat: -50.34,
      lng: -72.27,
    },
    { name: 'H. Eolo / Puerto Punta Bandera', lat: -50.34, lng: -72.09 },
    { name: 'Glaciar Perito Moreno', lat: -50.48, lng: -73.05 },
  ];

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initMap();
    }
  }

  private initMap(): void {
    if (!this.mapContainer?.nativeElement) return;

    import('leaflet').then((L) => {
      // Fix default marker icons (broken in bundlers)
      const iconRetinaUrl = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png';
      const iconUrl = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png';
      const shadowUrl = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png';
      L.Marker.prototype.options.icon = L.icon({
        iconRetinaUrl,
        iconUrl,
        shadowUrl,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
      });

      const map = L.map(this.mapContainer.nativeElement).setView(
        [-49.9, -72.5],
        8
      );
      this.leafletMap = map;

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      const allDestinations = [
        ...this.destinationsColumn1,
        ...this.destinationsColumn2,
      ];

      for (const dest of allDestinations) {
        if (dest.lat != null && dest.lng != null) {
          const marker = L.marker([dest.lat, dest.lng])
            .addTo(map)
            .bindPopup(dest.name);
          this.markersByKey.set(dest.name, marker);
        }
      }
    });
  }

  onDestinationHover(dest: Destination | null): void {
    if (!this.leafletMap) return;
    if (!dest || dest.lat == null || dest.lng == null) {
      this.leafletMap.closePopup();
      return;
    }
    const marker = this.markersByKey.get(dest.name);
    if (marker) {
      marker.openPopup();
      this.leafletMap.panTo([dest.lat, dest.lng], { animate: true, duration: 0.3 });
    }
  }
}
