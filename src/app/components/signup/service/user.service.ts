import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment.prod";
import { UserModel } from "../model/user.model";

@Injectable()
export class UserService {
    API_URL = environment.API_URL;

    constructor(private http: HttpClient) {}

    create(user: UserModel, url: string = '/users/'): Observable<UserModel> {
        return this.http.post<UserModel>(`${this.API_URL}${url}`, user);
    }
}