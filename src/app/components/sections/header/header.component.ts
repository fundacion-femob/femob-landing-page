import {Component, OnInit, HostListener, HostBinding, Inject, Input} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';
import {WINDOW_PROVIDERS, WINDOW} from '../../../shared/helpers/window.helper';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    isFixed;

    constructor(
        @Inject(DOCUMENT) private document: Document,
        @Inject(WINDOW) private window: Window,
        private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
        this.route.fragment.subscribe((hash: string) => {
            if (hash) {
                let divId = '';
                switch (hash) {
                    case 'Inicio':
                        divId = 'intro-one-section';
                        break;
                    case 'Quienes_Somos':
                        divId = 'information-section';
                        break;
                    case 'Servicios':
                        divId = 'service-section';
                        break;
                    case 'Profesionales':
                        divId = 'testimonial-slider';
                        break;
                    case 'Contacto':
                        divId = 'contact-section';
                        break;
                    default:
                        divId = 'intro-one-section';
                }
                const cmp = this.document.getElementById(divId);
                if (cmp) {
                    cmp.scrollIntoView();
                }
            } else {
                this.window.scrollTo(0, 0);
            }
        });
    }

    @HostListener('window:scroll', [])
    onWindowScroll() {
        const offset = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
        if (offset > 10) {
            this.isFixed = true
        } else {
            this.isFixed = false;
        }
    }

    @HostBinding('class.menu-opened') menuOpened = false;

    toggleMenu() {
        this.menuOpened = !this.menuOpened
    }

    buyAngland() {
        this.window.open('');
    }

}
