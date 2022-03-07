import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, tap } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root'})
export class ProductService {

    constructor(private httpClient: HttpClient) { }
    oldTerm: string = '';

    searchByTerm(searchTerm: string): Observable<any> {
        const url = `${environment.apiUrl}product/search/by-name-or-desc?term=${searchTerm}`;
        return this.httpClient.get(url);
    }

    searchByTermPageable(searchTerm: string, page: number, size: number): Observable<any> {
        if(searchTerm != this.oldTerm) {
            page = 0;
            this.oldTerm = searchTerm;
        }
        const url = `${environment.apiUrl}product/search/by-name-or-desc?term=${searchTerm}&page=${page}&size=${size}`;
        return this.httpClient.get(url);
    }

}