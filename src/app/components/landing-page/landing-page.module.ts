import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatChipsModule,
    MatListModule,
    MatInputModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTabsModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NguCarouselModule} from '@ngu/carousel';
import {SharedModule} from '../../shared/shared.module';

import {LandingPageComponent} from './landing-page.component';
import {HeaderComponent} from '../sections/header/header.component';
import {IntroOneComponent} from '../sections/intro-one/intro-one.component';
import {IntroTwoComponent} from '../sections/intro-two/intro-two.component';
import {PortfolioComponent} from '../sections/portfolio/portfolio.component';
import {ServicesComponent} from '../sections/services/services.component';
import {CtaComponent} from '../sections/cta/cta.component';
import {PricingsComponent} from '../sections/pricings/pricings.component';
import {ContactComponent} from '../sections/contact/contact.component';
import {FooterComponent} from '../sections/footer/footer.component';
import {TestimonialsComponent} from '../sections/testimonials/testimonials.component';
import {PortfolioCarouselComponent} from '../sections/portfolio-carousel/portfolio-carousel.component';
import {TestimonialsCarouselComponent} from '../sections/testimonials-carousel/testimonials-carousel.component';
import {ServicesCarouselComponent} from '../sections/services-carousel/services-carousel.component';

import {WINDOW_PROVIDERS} from '../../shared/helpers/window.helper';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        ReactiveFormsModule,
        MatIconModule,
        MatCardModule,
        MatMenuModule,
        MatButtonModule,
        MatChipsModule,
        MatInputModule,
        MatListModule,
        MatRippleModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatTabsModule,
        FlexLayoutModule,
        NguCarouselModule,
        RouterModule
    ],
    declarations: [
        LandingPageComponent,
        HeaderComponent,
        IntroOneComponent,
        IntroTwoComponent,
        PortfolioComponent,
        ServicesComponent,
        CtaComponent,
        PricingsComponent,
        ContactComponent,
        FooterComponent,
        TestimonialsComponent,
        PortfolioCarouselComponent,
        TestimonialsCarouselComponent,
        ServicesCarouselComponent
    ],
    providers: [WINDOW_PROVIDERS]

})
export class LandingPageModule {
}
