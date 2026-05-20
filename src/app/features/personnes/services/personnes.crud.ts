import { HttpClient, httpResource, HttpResourceRef } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Personne } from '../../../shared/model/personnes.model';

@Injectable({
  providedIn: 'root',
})
export class PersonnesCrud {
  readonly #http: HttpClient = inject(HttpClient);

  baseUrl: string = 'http://localhost:8081';

  listPersonnesRes: HttpResourceRef<Personne[]> = httpResource(
    () => `${this.baseUrl}/api/personnes/all`,
  );

  getPersonnesById(id: string): Observable<Personne> {
    const personneMocked: Personne = {
      id: 'id',
      nom: 'Mocked nom',
      prenom: 'Mocked prenom',
    };
    const url = `${this.baseUrl}/api/personnes/${id}`;
    return this.#http.get<Personne>(url);
  }
}
