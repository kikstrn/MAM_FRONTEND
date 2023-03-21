import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment.prod';
import { AuthService } from '../../../../core/services/auth.service';
import { UserModel } from '../models/user/user';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    API_URL = environment.API_URL;

    constructor(private http: HttpClient,private authService : AuthService) {}

    findById(id: string, url: string = '/users/info/'): Observable<UserModel> {
        return this.http.get<UserModel>(`${this.API_URL}${url}${id}`);
    }
}