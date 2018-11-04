import {Routes} from '@angular/router';
import {LandingPageComponent} from './components/landing-page/landing-page.component';

export const rootRouterConfig: Routes = [
    {
        path: '',
        redirectTo: 'femob',
        pathMatch: 'full'
    },
    {
        path: 'femob',
        component: LandingPageComponent
    },
    {
        path: '**',
        redirectTo: 'femob'
    }
];

