import { error } from "@angular/compiler/src/util";
import { Component, OnInit } from "@angular/core";
import { User } from "../model/user.model";
import { UserService } from "../services/user.service";

@Component({
    selector: 'app-user-preview',
    templateUrl: './user-preview.component.html',
    styleUrls: ['./user-preview.component.css']
})
export class UserPreviewComponent implements OnInit {

    users: User[] = [];

    constructor(private userService: UserService) {}

    ngOnInit(): void {
        this.getAll(); 
    }

    
    deactivate(id: number) {
        this.userService.deactivateById(id).subscribe(data => {
          this.getAll();
        }, error => {
          console.log('Deactivation error!');
        });
    }
    
    private getAll() {
        this.userService.getAll().subscribe(data => {
            this.users = data;
        }, error => {
            console.log('Error occured', error);
        });    
    }
}