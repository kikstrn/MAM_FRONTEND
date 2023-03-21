import { Observable } from "rxjs";
import { ReviewModel } from "../models/review.model";
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../../../environments/environment.prod";
import { UserModel } from "../../game/models/user/user";
import { CreateReviewModel } from "../models/create-review";
import { Injectable } from "@angular/core";

@Injectable()
export class ReviewService {
    API_URL = environment.API_URL;

    constructor(private http: HttpClient, public cookieService : CookieService) {}

    findAll(url: string = '/reviews/') : Observable<ReviewModel[]>{
        return (this.http.get<ReviewModel[]>(`${this.API_URL}${url}`));
    }

    findByGame(id:string, url:string = '/reviews/game/') : Observable<ReviewModel[]>{
        return (this.http.get<ReviewModel[]>(`${this.API_URL}${url}${id}`));
    }

    findByUser(id:string, url:string = '/reviews/user/') : Observable<UserModel[]>{
        return (this.http.get<UserModel[]>(`${this.API_URL}${url}${id}`));
    }

    findOne(id: number, url: string = '/reviews/') : Observable<ReviewModel> {
        return (this.http.get<ReviewModel>(`${this.API_URL}${url}${id}`));
    }

    create(createReviewModel : CreateReviewModel, url: string = '/reviews/') : Observable<ReviewModel>{
        return (this.http.post<ReviewModel>(`${this.API_URL}${url}`, createReviewModel, {headers:{'Authorization': `Bearer ${this.cookieService.get('token_mam')}`}}));
    }

    delete(id : number, url: string = '/reviews/') : Observable<ReviewModel> {
        return (this.http.delete<ReviewModel>(`${this.API_URL}${url}${id}`));
    }
}