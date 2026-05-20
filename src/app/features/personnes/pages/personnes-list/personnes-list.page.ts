import { Component, computed, inject, Signal } from '@angular/core';
import { PersonnesCrud } from '../../services/personnes.crud';
import { Button } from 'primeng/button';
import { DialogModule, Dialog } from 'primeng/dialog';
import { PersonnesFormPage } from '../personnes-form/personnes-form.page';
import { HttpResourceRef } from '@angular/common/http';
import { Personne } from '../../../../shared/model/personnes.model';
import { TableModule } from 'primeng/table';
import { CurrencyPipe, DatePipe, JsonPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personnes-list',
  imports: [Button, Dialog, PersonnesFormPage, TableModule, JsonPipe, CurrencyPipe, DatePipe],
  templateUrl: './personnes-list.page.html',
  styleUrl: './personnes-list.page.scss',
})
export class PersonnesListPage {
  readonly #personnesCrud: PersonnesCrud = inject(PersonnesCrud);
  readonly #router: Router = inject(Router);
  personnesListRes = this.#personnesCrud.listPersonnesRes;
  personnesList: Signal<Personne[]> = computed(() => this.personnesListRes.value());

  isDialogVisiblie = false;

  addPersonne(): void {
    this.isDialogVisiblie = true;
  }

  selectPersonne(personne: Personne): void {
    this.#router.navigate(['/personnes/detail/', personne.id]);
  }
}
