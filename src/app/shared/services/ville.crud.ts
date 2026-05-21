import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, Observable, map } from 'rxjs';
import { Ville } from '../model/ville.model';

@Injectable({
  providedIn: 'root',
})
export class VilleCrud {
  readonly #http: HttpClient = inject(HttpClient);
  baseUrl: string = 'http://localhost:8081';

  getVilleList(): Observable<Ville[]> {
    return this.#http.get<{ content: Ville[] }>(`${this.baseUrl}/api/villes`).pipe(
      filter((res: { content: Ville[] }) => !!res.content),
      map((res: { content: Ville[] }) => res.content),
    );
  }
}
