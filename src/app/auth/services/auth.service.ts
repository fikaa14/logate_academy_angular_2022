import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { JwtToken } from "../models/jwt.model";
import { Login } from "../models/login.model";
import { Register } from "../models/register.model";

@Injectable({ providedIn: 'root'})
export class AuthService {

    isAuthenticated = new BehaviorSubject<boolean>(false);

    constructor( private httpClient: HttpClient) {}

    authenticate(loginData: Login): Observable<any> {
        const url = `${environment.apiUrl}authenticate/login`;
        return this.httpClient.post<JwtToken>(url, loginData)
            .pipe(tap(responseData => {
                const token = responseData.token;
                localStorage.setItem('academy-token', token);
                this.isAuthenticated.next(true);
            }));
    }

    register(registerData: Register): Observable<any> {

        const url = `${environment.apiUrl}authenticate/register`;
        return this.httpClient.post<Register>(url, registerData);
    }

    logout(): void { 
        localStorage.removeItem('academy-token');
        this.isAuthenticated.next(false);
    }
}