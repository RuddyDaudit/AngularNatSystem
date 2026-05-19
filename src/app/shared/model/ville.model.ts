import { Pays } from './pays.model';
export interface Ville { 
    id: string;
    nom: string;
    codePostal: string;
    codeInsee: string;
    gentile: string;
    population: number;
    surface: number;
    pays: Pays;
    departement: string;
    longitude: number;
    latitude:number
}