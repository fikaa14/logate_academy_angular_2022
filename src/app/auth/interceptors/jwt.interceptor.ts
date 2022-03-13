import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AuthService } from "../services/auth.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    
    constructor(private authtService: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const isAuthenticated = this.authtService.isAuthenticated.getValue();
        const isApiUrl = req.url.startsWith(environment.apiUrl);
        const token = localStorage.getItem('academy-token');
        if(isAuthenticated && isApiUrl) {
            req = req.clone({
               setHeaders: {
                   'Authorization' : 'Bearer ' + token
                //    'Content-Type' : 'application/json'
               } 
            });
        }
        return next.handle(req);
    }

}