import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { User, AuthenticationService } from 'src/app/shared';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    currentUser: User;
    isActive: boolean;
    collapsed: boolean;
    showMenu: string;
    pushRightClass: string;

    // Check Role by Menu
    isTf01: boolean;
    isTf02: boolean;
    isAc01: boolean;
    isAc02: boolean;
    isAc03: boolean;

    @Output() collapsedEvent = new EventEmitter<boolean>();

    constructor(private translate: TranslateService, public router: Router, private authService: AuthenticationService) {
        this.router.events.subscribe(val => {
            if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
                this.toggleSidebar();
            }
        });

        this.currentUser = this.authService.currentUserValue;
        // console.log(localStorage.getItem('roletf01'));
        // console.log(localStorage.getItem('roletf02'));
        // console.log(localStorage.getItem('roleac01'));
        // console.log(localStorage.getItem('roleac02'));
        // console.log(localStorage.getItem('roleac03'));
    }

    ngOnInit() {
        this.isActive = false;
        this.collapsed = false;
        this.showMenu = '';
        this.pushRightClass = 'push-right';

        this.isTf01 = (localStorage.getItem('roletf01') === '1') ? true : false;
        this.isTf02 = (localStorage.getItem('roletf02') === '1') ? true : false;
        this.isAc01 = (localStorage.getItem('roleac01') === '1') ? true : false;
        this.isAc02 = (localStorage.getItem('roleac02') === '1') ? true : false;
        this.isAc03 = (localStorage.getItem('roleac03') === '1') ? true : false;

        // if (localStorage.getItem('roletf01') === '1') {
        //     this.isTf01 = true;
        // } else {
        //     this.isTf01 = false;
        // }

        // if (localStorage.getItem('roletf02') === '1') {
        //     this.isTf02 = true;
        // } else {
        //     this.isTf02 = false;
        // }
    }

    eventCalled() {
        this.isActive = !this.isActive;
    }

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    toggleCollapsed() {
        this.collapsed = !this.collapsed;
        this.collapsedEvent.emit(this.collapsed);
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    changeLang(language: string) {
        this.translate.use(language);
    }

    onLoggedout() {
        // localStorage.removeItem('isLoggedin');
        this.authService.logout();
    }
}
