import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Role } from "../admin/roles/model/role.model";
import { RoleService } from "../admin/roles/services/role.service";
import { Register } from "../auth/models/register.model";
import { AuthService } from "../auth/services/auth.service";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

    constructor(
        private authService: AuthService,
        private router: Router, 
        private roleService: RoleService) {}

    register(registerForm: any) {
        const registerData = registerForm.value

        this.authService.register(registerData)
        .subscribe(data=> {
            this.router.navigate(['login']);
        }, error => {
            console.log("Error occured. Error data: ", error);
        })
    }

    roles: Role[] = [];

    ngOnInit(): void {

        this.roleService.getAll().subscribe(data => {
            this.roles = data;
        }, error => {
            console.log("Error occured", error);
        })
    }
}