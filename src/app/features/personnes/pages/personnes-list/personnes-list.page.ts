import {
  Component,
  computed,
  inject,
  input,
  InputSignal,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';
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
import { filter, take } from 'rxjs';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';
import { GlobalSpinnerLayout } from '../../../../core/layout/global-spinner/global-spinner.layout';

@Component({
  selector: 'app-personnes-list',
  imports: [
    Button,
    Dialog,
    PersonnesFormPage,
    TableModule,
    JsonPipe,
    CurrencyPipe,
    DatePipe,
    Toast,
    GlobalSpinnerLayout,
  ],
  templateUrl: './personnes-list.page.html',
  styleUrl: './personnes-list.page.scss',
  providers: [MessageService],
})
export class PersonnesListPage {
  readonly #personnesCrud: PersonnesCrud = inject(PersonnesCrud);
  readonly #router: Router = inject(Router);
  readonly #toast: MessageService = inject(MessageService);
  personnesListRes = this.#personnesCrud.listPersonnesRes;
  personnesList: Signal<Personne[]> = computed(() => this.personnesListRes.value());
  isLoading: WritableSignal<boolean> = signal<boolean>(false);
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
    this.isLoading.set(true);
    this.personneForm.markAllAsTouched();
    if (this.personneForm.valid) {
      this.#personnesCrud
        .addNewPersonne(this.personneForm.value)
        .pipe(
          filter((newP: Personne) => !!newP?.id),
          take(1),
        )
        .subscribe({
          next: (newP) =>
            this.#toast.add({
              severity: 'success',
              summary: 'Personne added successfully',
              detail: `La personne ${newP.nom} ${newP.prenom} a été ajouté avec succès`,
              life: 3000,
            }),
          error: () => {
            this.isLoading.set(false);
          },
          complete: () => {
            this.personnesListRes.reload();
            this.personneForm.reset();
            this.isDialogVisiblie = false;
            this.isLoading.set(false);
          },
        });
    } else {
      console.error('Form invalid, cannot save personne', this.personneForm);
    }
    console.log(this.personneForm.value());
  }

  selectPersonne(personne: Personne): void {
    this.#router.navigate(['/personnes/detail/', personne.id]);
  }
}
