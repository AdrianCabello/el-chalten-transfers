import {
  Directive,
  ElementRef,
  inject,
  Input,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true,
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);
  private observer: IntersectionObserver | null = null;

  /** Delay en segundos para la animación (stagger) */
  @Input() appScrollReveal: number | '' = 0;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const delay = this.appScrollReveal === '' ? 0 : Number(this.appScrollReveal) || 0;
    const el = this.el.nativeElement;
    el.style.setProperty('--scroll-reveal-delay', `${delay}s`);

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-reveal-in');
            this.observer?.unobserve(entry.target);
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );
    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
