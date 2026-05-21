import { Injectable, signal, WritableSignal } from '@angular/core';
import { Ville } from '../model/ville.model';

@Injectable({
  providedIn: 'root',
})
export class DataStore {
  ville: WritableSignal<Ville[]> = signal([]);
}
