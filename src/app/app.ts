import { Component, inject, OnInit } from '@angular/core';
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
  }
}
