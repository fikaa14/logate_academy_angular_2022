import { Component } from "@angular/core";
import { NavbarLink } from "./navbar.model";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent {

    isMobileViewActive: boolean = false;

    links: NavbarLink[] = [
        {
            name: "Home",
            path: "/home"
        },
        {
            name: "Documetation",
            path: "/documentation"
        },
        {
            name: "About us"
        },
        {
            name: "Contact",
            path: "/contact"
        }
    ];

    toggleMobileView(): void{
        this.isMobileViewActive = !this.isMobileViewActive;
    }
 }