import { Component, inject, signal, effect } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { I18nService, type Lang } from '../../core/services/i18n.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  private readonly i18n = inject(I18nService);
  private readonly doc = inject(DOCUMENT);
  readonly t = this.i18n.t;
  readonly lang = this.i18n.lang;
  readonly menuOpen = signal(false);

  constructor() {
    effect(() => {
      const open = this.menuOpen();
      this.doc.body.classList.toggle('nav-menu-open', open);
    });
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  setLang(l: Lang): void {
    this.i18n.setLang(l);
  }
}
