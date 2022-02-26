import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Role } from "../model/role.model";

@Injectable({ providedIn: "root" })
export class RoleService {

    constructor(private httpClient: HttpClient) { }

    getAll(): Observable<Role[]> {
        const url = `${environment.apiUrl}role/all`
        return this.httpClient.get<Role[]>(url);
    }
}