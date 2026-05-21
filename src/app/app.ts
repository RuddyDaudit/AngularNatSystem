import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from 'primeng/button';
import { HeaderLayout } from './core/layout/header/header.layout';
import { SubNavLayout } from './core/layout/sub-nav/sub-nav.layout';
import { ContainerLayout } from './core/layout/container/container.layout';
import { GlobalSpinnerLayout } from './core/layout/global-spinner/global-spinner.layout';
import { FooterLayout } from './core/layout/footer/footer/footer.layout';
import { CivilitePipe } from './shared/pipes/civilite.pipe';
import { readonly } from '@angular/forms/signals';
import { VilleCrud } from './shared/services/ville.crud';
import { DataStore } from './shared/services/data.store';
import { filter, take } from 'rxjs';
import { Ville } from './shared/model/ville.model';

@Component({
  selector: 'app-root',
  imports: [
    HeaderLayout,
    SubNavLayout,
    ContainerLayout,
    GlobalSpinnerLayout,
    FooterLayout,
    CivilitePipe,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly #villeCrud = inject(VilleCrud);
  readonly #storeCrud = inject(DataStore);
  selectedMode: 'light' | 'dark' = undefined;
  villesStockees = this.#storeCrud.ville;

  ngOnInit() {
    this.#villeCrud
      .getVilleList()
      .pipe(
        filter((villeRes: Ville[]) => villeRes?.length > 0),
        take(1),
      )
      .subscribe({
        next: (villeRes) => this.#storeCrud.ville.set(villeRes),
        complete: () => console.log('Villes loaded'),
      });
  }
}
