import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { Ville } from '../model/ville.model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataStore {
  ville: WritableSignal<Ville[]> = signal([]);

  #ville$: BehaviorSubject<Ville[]> = new BehaviorSubject<Ville[]>([]);

  getVille$(): Observable<Ville[]> {
    return this.#ville$.asObservable();
  }

  setVille$(ville: Ville[]) {
    this.#ville$.next(ville);
  }
}
