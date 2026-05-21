import { Component, computed, inject, input, InputSignal, Signal } from '@angular/core';
import { PersonnesCrud } from '../../services/personnes.crud';
import { Button } from 'primeng/button';
import { DialogModule, Dialog } from 'primeng/dialog';
import { PersonnesFormPage } from '../personnes-form/personnes-form.page';
import { HttpResourceRef } from '@angular/common/http';
import { Personne, PersonneForm } from '../../../../shared/model/personnes.model';
import { TableModule } from 'primeng/table';
import { CurrencyPipe, DatePipe, JsonPipe } from '@angular/common';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { dateBefore } from '../../../../shared/utils/validators.utilis';

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
  personneForm: FormGroup = new FormGroup<PersonneForm>({
    nom: new FormControl(undefined, [Validators.required]),
    prenom: new FormControl(undefined),
    dateNaissance: new FormControl(undefined, [Validators.required, dateBefore]),
    sexe: new FormControl(undefined),
    metier: new FormControl(undefined),
    salaire: new FormControl(undefined),
  });

  addPersonne(): void {
    this.isDialogVisiblie = true;
  }

  savePersonne(): void {
    this.personneForm.markAllAsTouched();
    if (this.personneForm.valid) {
      this.#personnesCrud.addNewPersonne(this.personneForm.value);
    } else {
      console.warn('Form invalid');
    }
    console.log(this.personneForm.value());
  }

  selectPersonne(personne: Personne): void {
    this.#router.navigate(['/personnes/detail/', personne.id]);
  }
}
