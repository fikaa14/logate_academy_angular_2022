import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class DocumentService {

    constructor(private httpClient: HttpClient) { }

    upload(data: FormData): Observable<any> {
        const url = `${environment.apiUrl}document/upload`;
        return this.httpClient.post(url, data, { observe: 'response' });
    }

    download(id: number): Observable<any>{
        const url = `${environment.apiUrl}document/download/${id}`;
        return this.httpClient
            .get(url, { observe: "response", responseType: "arraybuffer"});
    }

    getAll(): Observable<any> {
        const url = `${environment.apiUrl}document/all`;
        return this.httpClient.get(url);
    }
}