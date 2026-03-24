import { Component, inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private readonly document = inject(DOCUMENT);
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);

  ngOnInit(): void {
    this.title.setTitle('Private Transfers in El Chaltén | UP Transfers Patagonia');
    this.meta.updateTag({
      name: 'description',
      content:
        'Private transfers between El Calafate, El Chaltén and Patagonia destinations. Safe, comfortable and reliable transportation with experienced local drivers.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'transfer el chalten, private transfer patagonia, el calafate to el chalten transfer, transfer aeropuerto el calafate, patagonia private driver',
    });
    this.meta.updateTag({ property: 'og:image', content: '/Icons/android-chrome-512x512.png' });
    this.meta.updateTag({ property: 'og:image:width', content: '512' });
    this.meta.updateTag({ property: 'og:image:height', content: '512' });

    if (!this.document.getElementById('organization-json-ld')) {
      const script = this.document.createElement('script');
      script.id = 'organization-json-ld';
      script.type = 'application/ld+json';
      script.text = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'UP Transfers Patagonia',
        url: 'https://elchaltentransfers.com',
        logo: 'https://elchaltentransfers.com/logo.png',
      });
      this.document.head.appendChild(script);
    }
  }
}
