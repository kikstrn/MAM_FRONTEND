import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../../../environments/environment.prod";
import { AuthResponseModel } from "../../model/auth/auth-response.model";
import { AuthModel } from "../../model/auth/auth.model";

@Injectable()
export class AuthService {
    API_URL = environment.API_URL;

    constructor(private http: HttpClient) {}

    login(auth : AuthModel, url: string = '/auth/') : Observable<AuthResponseModel>{
        return this.http.post<AuthResponseModel>(`${this.API_URL}${url}`, auth);
    }
}