import { Ville } from './ville.model'
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
