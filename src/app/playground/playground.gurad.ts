import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class PlaygroundGuard implements CanActivate {
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
       
        const data = route.data;
        return data["hasAcces"];

    }

}