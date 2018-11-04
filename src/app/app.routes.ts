import {Routes} from '@angular/router';

export const rootRouterConfig: Routes = [
    {
        path: '',
        redirectTo: 'femob/home',
        pathMatch: 'full'
    },
    {
        path: 'femob',
        loadChildren: './layouts/layout.module#LayoutModule'
    },
    {
        path: '**',
        redirectTo: 'femob/home'
    }
];

