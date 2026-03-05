import { Component, inject } from '@angular/core';
import { I18nService } from '../../core/services/i18n.service';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

type FaqKey = 'faqQ1' | 'faqQ2' | 'faqQ3' | 'faqQ4' | 'faqA1' | 'faqA2' | 'faqA3' | 'faqA4';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent {
  private readonly i18n = inject(I18nService);
  readonly t = this.i18n.t;

  expanded: number | null = null;

  readonly faqItems: { q: FaqKey; a: FaqKey }[] = [
    { q: 'faqQ1', a: 'faqA1' },
    { q: 'faqQ2', a: 'faqA2' },
    { q: 'faqQ3', a: 'faqA3' },
    { q: 'faqQ4', a: 'faqA4' },
  ];

  toggle(i: number): void {
    this.expanded = this.expanded === i ? null : i;
  }
}
