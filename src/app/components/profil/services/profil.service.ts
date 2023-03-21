import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { UserModel } from '../models/user.model';

@Injectable()
export class ProfilService {

    API_URL = environment.API_URL;

    constructor(private http: HttpClient,private cookieService : CookieService) {}

    findAll(url : string = '/users/'): Observable<UserModel[]>{
        return (this.http.get<UserModel[]>(`${this.API_URL}${url}`));
    }

    findById(id: string, url: string = '/users/info/'): Observable<UserModel> {
        return this.http.get<UserModel>(`${this.API_URL}${url}${id}`);
    }

    getPendinFriends(id:string, url: string = '/users/pending-friends/'){
        return this.http.get<UserModel[]>(`${this.API_URL}${url}${id}`);
    }

    create(user: UserModel, url: string = '/users/'): Observable<UserModel> {
        return this.http.post<UserModel>(`${this.API_URL}${url}`, user);
    }

    update(user: UserModel, url: string = '/users/'): Observable<void> {
        return this.http.patch<void>(`${this.API_URL}${url}`, user, {headers:{'Authorization': `Bearer ${this.cookieService.get('token_mam')}`}});
    }

    deleteById(id : string, url: string = '/users/') : Observable<void> {
        return (this.http.delete<void>(`${this.API_URL}${url}${id}`, {headers:{'Authorization': `Bearer ${this.cookieService.get('token_mam')}`}}));
    }
}