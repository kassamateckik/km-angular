import { Routes } from '@angular/router';
import { KezdolapComponent } from './pages/kezdolap/kezdolap.component';
import { BemutatkozasComponent } from './pages/bemutatkozas/bemutatkozas.component';
import { HulyevagyComponent } from './pages/hulyevagy/hulyevagy.component';
import { BejenetkezesComponent } from './pages/bejenetkezes/bejenetkezes.component';

export const routes: Routes = [
    {
        path : "",
        component : KezdolapComponent
    },
    {
        path : "haza",
        redirectTo : ""
    },
    {
        path : "bemutatkozas",
        component : BemutatkozasComponent
    },
    {
        path : "kapcsolat",
        // component : KapcsolatComponent,
        loadComponent: () => import("./pages/kapcsolat/kapcsolat.component").then((m) => m.KapcsolatComponent)
    }, 
    {
        path : "bejelentkezes",
        component : BejenetkezesComponent
    },
    {
        path : "bejelentkezve",
        loadComponent: () => import("./pages/bejenetkezve/bejenetkezve.component").then((m) => m.BejenetkezveComponent)
    },
    {
        path : "**",
        component : HulyevagyComponent
    }
];
