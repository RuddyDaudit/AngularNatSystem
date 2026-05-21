import { Ville } from './ville.model';
import { FormControl, FormGroup } from '@angular/forms';
export interface Personne {
  id?: string;
  nom?: string;
  prenom?: string;
  sexe?: string;
  ville?: Ville;
  metier?: string;
  salaire?: number;
  dateNaissance?: Date;
  pere?: Personne;
}

export interface PersonneForm {
  id?: FormControl<string>;
  nom?: FormControl<string>;
  prenom?: FormControl<string>;
  sexe?: FormControl<string>;
  metier?: FormControl<string>;
  salaire?: FormControl<number>;
  dateNaissance?: FormControl<Date>;
  ville?: FormControl<string>;
}
