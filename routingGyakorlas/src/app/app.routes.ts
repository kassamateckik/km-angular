import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/loggedIn/profile/profile.component';
import { DetailsComponent } from './pages/loggedIn/details/details.component';

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
        children : [
            {
                path : "profile",
                component : ProfileComponent
            },
            {
                path : "details",
                component : DetailsComponent
            }
        ] 
    }
];
