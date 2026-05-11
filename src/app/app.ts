import { Component, inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import {
  ADDRESS,
  ADDRESS_CITY,
  CONTACT_EMAIL,
  CONTACT_NAME,
  CONTACT_PHONE,
  INSTAGRAM_URL,
} from './shared/constants/contact';

const SITE_URL = 'https://elchaltentransfers.com';
const SITE_NAME = 'UP Transfers Patagonia';
const PAGE_TITLE = 'Transfers en El Chaltén y Aeropuerto El Calafate | UP Transfers Patagonia';
const PAGE_DESCRIPTION =
  'Transfers privados en El Chaltén, traslados desde Aeropuerto El Calafate a El Chaltén, taxi y shuttle privado aeropuerto con choferes locales en Patagonia.';
const PAGE_KEYWORDS = [
  'transfers en el chalten',
  'calafate a el chalten',
  'aeropuerto el calafate',
  'aeropuerto el chalten',
  'taxi aeropuerto el calafate',
  'taxi aeropuerto el chalten',
  'shuttle private aeropuerto',
  'transfer aeropuerto el calafate el chalten',
  'traslado privado el calafate el chalten',
  'private transfer el calafate to el chalten',
].join(', ');

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);
  private readonly document = inject(DOCUMENT);

  ngOnInit(): void {
    this.title.setTitle(PAGE_TITLE);
    this.document.documentElement.lang = 'es-AR';
    this.updateMetaTags();
    this.updateLink('canonical', SITE_URL);
    this.updateAlternateLinks();
    this.updateStructuredData();
  }

  private updateMetaTags(): void {
    this.meta.updateTag({ name: 'description', content: PAGE_DESCRIPTION });
    this.meta.updateTag({ name: 'keywords', content: PAGE_KEYWORDS });
    this.meta.updateTag({ name: 'robots', content: 'index, follow, max-image-preview:large' });
    this.meta.updateTag({ name: 'author', content: SITE_NAME });
    this.meta.updateTag({ name: 'geo.region', content: 'AR-Z' });
    this.meta.updateTag({ name: 'geo.placename', content: 'El Chaltén, Santa Cruz, Argentina' });

    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:locale', content: 'es_AR' });
    this.meta.updateTag({ property: 'og:locale:alternate', content: 'en_US' });
    this.meta.updateTag({ property: 'og:site_name', content: SITE_NAME });
    this.meta.updateTag({ property: 'og:title', content: PAGE_TITLE });
    this.meta.updateTag({ property: 'og:description', content: PAGE_DESCRIPTION });
    this.meta.updateTag({ property: 'og:url', content: SITE_URL });
    this.meta.updateTag({
      property: 'og:image',
      content: `${SITE_URL}/Icons/android-chrome-512x512.png`,
    });
    this.meta.updateTag({ property: 'og:image:width', content: '512' });
    this.meta.updateTag({ property: 'og:image:height', content: '512' });
    this.meta.updateTag({ property: 'og:image:alt', content: SITE_NAME });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: PAGE_TITLE });
    this.meta.updateTag({ name: 'twitter:description', content: PAGE_DESCRIPTION });
    this.meta.updateTag({
      name: 'twitter:image',
      content: `${SITE_URL}/Icons/android-chrome-512x512.png`,
    });
  }

  private updateAlternateLinks(): void {
    this.updateLink('alternate', SITE_URL, 'es-AR');
    this.updateLink('alternate', SITE_URL, 'en');
    this.updateLink('alternate', SITE_URL, 'x-default');
  }

  private updateLink(rel: string, href: string, hreflang?: string): void {
    const selector = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]`;
    let link = this.document.head.querySelector<HTMLLinkElement>(selector);

    if (!link) {
      link = this.document.createElement('link');
      link.rel = rel;
      if (hreflang) link.hreflang = hreflang;
      this.document.head.appendChild(link);
    }

    link.href = href;
  }

  private updateStructuredData(): void {
    const graph = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': `${SITE_URL}/#organization`,
          name: SITE_NAME,
          url: SITE_URL,
          logo: `${SITE_URL}/logo.png`,
        },
        {
          '@type': 'LocalBusiness',
          '@id': `${SITE_URL}/#business`,
          name: SITE_NAME,
          alternateName: 'El Chaltén Transfers',
          url: SITE_URL,
          image: `${SITE_URL}/logo.png`,
          logo: `${SITE_URL}/logo.png`,
          description: PAGE_DESCRIPTION,
          telephone: CONTACT_PHONE,
          email: CONTACT_EMAIL,
          founder: CONTACT_NAME,
          address: {
            '@type': 'PostalAddress',
            streetAddress: ADDRESS,
            addressLocality: 'El Chaltén',
            addressRegion: 'Santa Cruz',
            addressCountry: 'AR',
          },
          areaServed: [
            'El Chaltén',
            'El Calafate',
            'Aeropuerto El Calafate',
            'Glaciar Perito Moreno',
            'Lago del Desierto',
            ADDRESS_CITY,
          ],
          priceRange: '$$',
          sameAs: [INSTAGRAM_URL],
          makesOffer: [
            {
              '@type': 'Offer',
              name: 'Transfer Aeropuerto El Calafate a El Chaltén',
              itemOffered: {
                '@type': 'Service',
                name: 'Traslado privado desde Aeropuerto El Calafate a El Chaltén',
                serviceType: 'Private airport transfer',
              },
            },
            {
              '@type': 'Offer',
              name: 'Taxi aeropuerto El Calafate',
              itemOffered: {
                '@type': 'Service',
                name: 'Taxi y shuttle privado aeropuerto El Calafate',
                serviceType: 'Airport taxi',
              },
            },
          ],
        },
        {
          '@type': 'WebSite',
          '@id': `${SITE_URL}/#website`,
          url: SITE_URL,
          name: SITE_NAME,
          inLanguage: ['es-AR', 'en'],
          publisher: { '@id': `${SITE_URL}/#business` },
        },
      ],
    };

    let script = this.document.getElementById('app-structured-data');
    if (!script) {
      script = this.document.createElement('script');
      script.id = 'app-structured-data';
      script.setAttribute('type', 'application/ld+json');
      this.document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(graph);
  }
}
