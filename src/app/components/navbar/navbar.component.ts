import { Component, inject } from '@angular/core';
import { I18nService, type Lang } from '../../core/services/i18n.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  private readonly i18n = inject(I18nService);
  readonly t = this.i18n.t;
  readonly lang = this.i18n.lang;
  menuOpen = false;

  setLang(l: Lang): void {
    this.i18n.setLang(l);
  }
}
