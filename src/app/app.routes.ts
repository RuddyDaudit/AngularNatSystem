import { Routes } from '@angular/router';
import { DashboardPage } from './features/dashboards/pages/dashboard/dashboard.page';


export const routes: Routes = [
    {
        path: 'home',
        component:DashboardPage
    },
    {
        path: 'personnes',
        loadChildren:() => import('./features/personnes/personnes.routes').then(rte => rte.personnesRoutes)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch:'full'
    },
    {
        path: '**',
        redirectTo:'home'
    }
];
