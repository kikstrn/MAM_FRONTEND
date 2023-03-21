import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { AuthResponseModel } from '../models/auth/auth-response.model';
import { AuthModel } from '../models/auth/auth.model';


@Injectable({
    providedIn: 'root'
})
export class AuthService {

    API_URL = environment.API_URL;

    constructor(private http: HttpClient,private cookieService : CookieService) {}

    login(auth : AuthModel, url: string = '/auth/') : Observable<AuthResponseModel>{
        return this.http.post<AuthResponseModel>(`${this.API_URL}${url}`, auth);
    }

    getToken():string{
        return this.cookieService.get('token_mam');
    }

    setToken(token: string):void{
        this.cookieService.delete('token_mam');
        this.cookieService.set('token_mam',token);
    }
}