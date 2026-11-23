import { Routes } from '@angular/router';
import { KezdolapComponent } from './pages/kezdolap/kezdolap.component';
import { BemutatkozasComponent } from './pages/bemutatkozas/bemutatkozas.component';
import { KapcsolatComponent } from './pages/kapcsolat/kapcsolat.component';
import { HulyevagyComponent } from './pages/hulyevagy/hulyevagy.component';
import { BejelentkezesComponent } from './pages/bejelentkezes/bejelentkezes.component';
import { BejelentkezveComponent } from './pages/bejelentkezve/bejelentkezve.component';
import { BejelentkezveReszletekComponent } from './pages/bejelentkezve-reszletek/bejelentkezve-reszletek.component';
import { authGuardGuard } from './auth-guard-guard';

export const routes: Routes = [
    {
        path: '',
        component: KezdolapComponent
    },
    {
        path: 'haza',
        redirectTo: ''
    },
    {
        path: 'bemutatkozas',
        component: BemutatkozasComponent
    },
    {
        path: 'kapcsolat',
        loadComponent: ()=> 
            import('./pages/kapcsolat/kapcsolat.component')
            .then((m)=>m.KapcsolatComponent)
    },
    {
        path: 'bejelentkezes',
        component: BejelentkezesComponent
    },
    // {
    //     path: 'bejelentkezve',
    //     loadComponent: ()=> 
    //         import('./pages/bejelentkezve/bejelentkezve.component')
    //         .then((m)=>m.BejelentkezveComponent)
    // },
    {
        path:'bejelentkezve',
        canActivate: [authGuardGuard],
        children: [
            {
                path: '',
                component: BejelentkezveComponent
            },
            {
                path: ':id',
                component: BejelentkezveReszletekComponent
            }
        ]
    },
    {
        path: '**',
        component: HulyevagyComponent
    }

];
