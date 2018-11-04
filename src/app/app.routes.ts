import {Routes} from '@angular/router';

export const rootRouterConfig: Routes = [
    {
        path: '',
        redirectTo: 'femob/home',
        pathMatch: 'full'
    },
    {
        path: 'femob',
        loadChildren: './components/landing-page/landing-page.module#LandingPageModule'
    },
    {
        path: '**',
        redirectTo: 'femob/home'
    }
];

