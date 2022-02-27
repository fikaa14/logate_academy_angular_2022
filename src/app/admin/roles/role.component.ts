import { Component, OnInit } from "@angular/core";
import { Role } from "./model/role.model";
import { RoleService } from "./services/role.service";

@Component({
    selector: 'app-role',
    templateUrl: './role.component.html'
})
export class RoleComponent implements OnInit {

    roles: Role[] = []

    constructor(private roleService: RoleService) {}

    ngOnInit(): void {

        this.roleService.getAll().subscribe(data => {
            this.roles = data;
        }, error => {
            console.log("Error occured", error);
        })

    }

    

}