import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.prod";
import { UserModel } from "../models/user.model";

@Injectable()
export class UserService {
    API_URL = environment.API_URL;

    constructor(private http: HttpClient) {}

    findById(id: string, url: string = '/users/info/'): Observable<UserModel> {
        return this.http.get<UserModel>(`${this.API_URL}${url}${id}`);
    }
}