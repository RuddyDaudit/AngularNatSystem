import { HttpClient, HttpErrorResponse, httpResource, HttpResourceRef } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, delay, Observable, of, throwError } from 'rxjs';
import { Personne } from '../../../shared/model/personnes.model';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class PersonnesCrud {
  readonly #http: HttpClient = inject(HttpClient);
  readonly #toast: MessageService = inject(MessageService);
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
  postPersonne(personne: Personne): Observable<Personne> {
    const url = `${this.baseUrl}/api/personnes`;
    return this.#http.post<Personne>(url, personne);
  }

  addNewPersonne(personne: Personne): Observable<Personne> {
    console.log('addNewPersonne', personne);
    const url = `${this.baseUrl}/api/personnes`;
    return this.#http.post<Personne>(url, personne).pipe(
      delay(2000),
      catchError((error: HttpErrorResponse) => {
        this.#toast.add({
          severity: 'error',
          summary: `Erreur lors de l'ajout`,
          detail: error.message,
          life: 3000,
        });
        throw error;
      }),
    );
  }

  updatePersonne(personne: Personne): Observable<Personne> {
    const url = `${this.baseUrl}/api/personnes/${personne.id}`;
    return this.#http.put<Personne>(url, personne);
  }

  deletePersonne(id: string): Observable<void> {
    const url = `${this.baseUrl}/api/personnes/${id}`;
    return this.#http.delete<void>(url);
  }
}
