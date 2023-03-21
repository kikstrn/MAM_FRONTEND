import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.prod";
import { UserModel } from "../model/user.model";

@Injectable()
export class UserService {
    API_URL = environment.API_URL;

    constructor(private http: HttpClient,private cookieService : CookieService) {}

    disableOrEnableAccount(actif:boolean, id:string, url: string = '/users/manage/'): Observable<UserModel>{
        return this.http.get<UserModel>(`${this.API_URL}${url}${id}?status=${actif}`, {headers:{'Authorization': `Bearer ${this.cookieService.get('token_mam')}`}});
    }

    deleteById(id : string, url: string = '/users/') : Observable<UserModel> {
        return (this.http.delete<UserModel>(`${this.API_URL}${url}${id}`, {headers:{'Authorization': `Bearer ${this.cookieService.get('token_mam')}`}}));
    }

    findById(id: string, url: string = '/users/info/'): Observable<UserModel> {
        return this.http.get<UserModel>(`${this.API_URL}${url}${id}`);
    }

    update(user: UserModel, url: string = '/users/'): Observable<void> {
        return this.http.patch<void>(`${this.API_URL}${url}`, user, {headers:{'Authorization': `Bearer ${this.cookieService.get('token_mam')}`}});
    }
}