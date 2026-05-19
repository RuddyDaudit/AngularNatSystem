import { Routes, Route, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { PersonnesDetailPage } from './pages/personnes-detail/personnes-detail.page';
import { Observable } from 'rxjs';
import { PersonnesCrud } from './services/personnes.crud';
import { Personne } from '../../shared/model/personnes.model';
import { inject } from '@angular/core';
export const personnesRoutes: Route[] = [
    {
        path: 'detail/:persId',
        resolve: () => { 
            personne: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Personne> => {
                const personnesCrud: PersonnesCrud = inject(PersonnesCrud);
                const persId = route.paramMap.get('persId'); 
                return personnesCrud.getPersonnesById(persId);
            }
        },
        //component: PersonnesDetailPage,
        loadComponent:() => import('./pages/personnes-detail/personnes-detail.page').then((comp) => comp.PersonnesDetailPage)
    },
    {
        path: 'list',
        loadComponent:() => import('./pages/personnes-list/personnes-list.page').then((comp) => comp.PersonnesListPage)
    },
    {
        path: '',
        redirectTo: 'list',
        pathMatch:'full',
    },
    {
        path: '**',
        redirectTo:'full',
    }
];
