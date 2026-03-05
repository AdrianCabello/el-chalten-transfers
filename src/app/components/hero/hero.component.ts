import {
  Component,
  inject,
  signal,
  computed,
  effect,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { I18nService } from '../../core/services/i18n.service';
import { getWhatsAppUrl } from '../../shared/constants/contact';

const SLIDER_IMAGES = [
  '/images/slider1.jpg',
  '/images/slider2.jpg',
  '/images/slider3.jpg',
  '/images/slider4.jpg',
  '/images/slider5.jpg',
  '/images/slider6.jpg',
  '/images/slider7.jpg',
];

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  private readonly i18n = inject(I18nService);
  private readonly platformId = inject(PLATFORM_ID);

  readonly t = this.i18n.t;
  readonly currentIndex = signal(0);

  readonly slides = computed(() => {
    const trans = this.t();
    return trans.heroSlides.map((slide, i) => ({
      image: SLIDER_IMAGES[i],
      h1: slide.h1,
      p: slide.p,
    }));
  });

  get whatsAppUrl(): string {
    return getWhatsAppUrl(this.i18n.t().whatsappDefaultMessage);
  }

  constructor() {
    effect(() => {
      if (!isPlatformBrowser(this.platformId)) return;
      const slides = this.slides();
      if (slides.length === 0) return;
      const interval = setInterval(() => {
        this.currentIndex.update((i) => (i + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }, { allowSignalWrites: true });
  }
}
