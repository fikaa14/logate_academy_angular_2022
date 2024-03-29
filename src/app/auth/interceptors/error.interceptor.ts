import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, throwError } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor{
    
    constructor(
        private authService:AuthService,
        private router:Router
        ) {}
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(req)
            .pipe(catchError( errorResponse =>{
                if(errorResponse.status === 401) {
                    this.authService.logout();
                    this.router.navigate(['login']);
                }
                return throwError(errorResponse);
            }));        

    }

}