import { Component, inject, input, InputSignal, signal, WritableSignal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Button } from 'primeng/button';
import { InputText } from 'primeng/inputtext';
import { DatePicker } from 'primeng/datepicker';
import { Personne, PersonneForm } from '../../../../shared/model/personnes.model';
import { RadioButton } from 'primeng/radiobutton';
import { dateBefore } from '../../../../shared/utils/validators.utilis';
import { ReactiveFormsModule } from '@angular/forms';
import { form, FormField } from '@angular/forms/signals';
import { Ville } from '../../../../shared/model/ville.model';
import { DataStore } from '../../../../shared/services/data.store';
import { AutoComplete } from 'primeng/autocomplete';

@Component({
  selector: 'app-personnes-form',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    Button,
    InputText,
    DatePicker,
    RadioButton,
    FormField,
    AutoComplete,
  ],
  templateUrl: './personnes-form.page.html',
  styleUrl: './personnes-form.page.scss',
})
export class PersonnesFormPage {
  newPersonne: Personne = {
    nom: '',
    prenom: '',
    dateNaissance: null,
    sexe: null,
  };

  newPersonneSignal: Personne = {
    nom: '',
    prenom: '',
    dateNaissance: null,
    sexe: null,
  };
  personneSignal: WritableSignal<Personne> = signal(this.newPersonneSignal);
  personneSignalForm = form(this.personneSignal);

  readonly #store = inject(DataStore);

  allVilles: Ville[] = this.#store.ville();
  villeSugg: Ville[] = [];

  personneForm: InputSignal<FormGroup> = input();

  submitForm(): void {
    console.log('submitForm', this.newPersonne);
  }

  onCompeteVille(query: string) {
    this.villeSugg = this.allVilles.filter((ville: Ville) =>
      ville.nom.toLowerCase().startsWith(query.toLowerCase()),
    );
  }
  submitSignalForm(): void {
    this.personneSignalForm;
    if (this.personneSignalForm().valid) {
      console.log('submitSignalForm', this.personneSignalForm().value());
    } else {
      console.warn('Form is invalid, cannot submit', this.personneSignalForm());
    }
  }

  submitReactiveForm(): void {
    this.personneForm().markAllAsTouched();
    if (this.personneForm().valid) {
      console.log('submitReactiveForm', this.personneForm().value);
    } else {
      console.warn('Form is invalid, cannot submit');
    }
  }
}
