import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Register } from "../auth/models/register.model";
import { AuthService } from "../auth/services/auth.service";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html'
})
export class RegisterComponent {

    constructor(
        private authService: AuthService,
        private router: Router) {}

    register(registerForm: any) {
        const registerData = registerForm.value

        this.authService.register(registerData)
        .subscribe(data=> {
            this.router.navigate(['login']);
        }, error => {
            console.log("Error occured. Error data: ", error);
        })
    }

}