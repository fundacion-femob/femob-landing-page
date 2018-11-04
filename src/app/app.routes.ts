import {Routes} from '@angular/router';

export const rootRouterConfig: Routes = [
    {
        path: '',
        redirectTo: 'layout/one',
        pathMatch: 'full'
    },
    {
        path: 'layout',
        loadChildren: './layouts/layout.module#LayoutModule'
    },
    {
        path: '**',
        redirectTo: 'layout/one'
    }
];

