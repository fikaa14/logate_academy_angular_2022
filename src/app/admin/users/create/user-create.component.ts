import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, ValidatorFn, Validators } from "@angular/forms";
import { RoleService } from "../../roles/services/role.service";
import { UserService } from "../services/user.service";
import { UserValidator } from "../validators/user.validator";

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html'
})
export class UserCreateComponent implements OnInit {

  userCreateForm!: FormGroup;
  roles: any[] = [];

  constructor(
    private roleService: RoleService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
      this.getRoles();
      this.initializeForm();
  }

  createUser(): void {
    console.log(this.userCreateForm);
  }

  private getRoles() {
    this.roleService.getAll().subscribe(data => this.roles = data);
  }

  private initializeForm(): void {

    this.userCreateForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      username: new FormControl(null, [Validators.required, Validators.minLength(6), this.validateUsername.bind(this)], UserValidator.doesUsernameExists(this.userService)),
      password: new FormControl(null, [Validators.required, Validators.minLength(8), this.validatePassword.bind(this)]),
      roles: new FormControl(null)
    });
  }

  private validatePassword(control: FormControl): ValidatorFn | null{
    const password = control.value;
  
    const errors: any = {
      containsUpperLetter: this.containsUpperLetter(password),
      containsNumber: this.containsNumber(password),
      containsSpecialCharachter: this.containsSpecialCharachter(password)
    }

    return errors;
        
  }

  private containsNumber(password: string): boolean {
    const numbers = /[1234567890]/;
    if(numbers.test(password)) {
      return true;
    } else {
      return false;
    }
  }  

  private containsSpecialCharachter(password: string): boolean {
    const specialChars =/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if(specialChars.test(password)) {
      return true;
    } else {
      return false;
    }
  }

  private containsUpperLetter(password: string): boolean { 
    for(let i = 0; i<password?.length; i++) {
      if(this.isUpper(password.charAt(i))) {
        return true;
      }
    }
    return false;
  }

  private isUpper(letter: string): boolean {
    return !/[a-z]/.test(letter) && /[A-Z]/.test(letter);
  }

  private validateUsername(control: FormControl) {
    const username = control.value;
    if (username === 'heril06') {
      return {
        usernameInvalid: username
      };
    }
    return null;
  }
}