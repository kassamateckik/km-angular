import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/loggedIn/profile/profile.component';
import { DetailsComponent } from './pages/loggedIn/details/details.component';
import { authGuard } from './guards/auth-guard';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    {
        path : "",
        component : HomeComponent
    },
    {
        path : "login",
        component : LoginComponent
    },
    {
        path : "admin",
        canActivate : [authGuard],
        children : [
            {
                path : "profile",
                component : ProfileComponent
            },
            {
                path : "details/:id",
                component : DetailsComponent
            }
        ] 
    },
    {
        path : "**",
        component : NotFoundComponent
    }
];
