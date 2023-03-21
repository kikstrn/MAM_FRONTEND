import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.prod';
import { CreateReview } from '../models/create/create-review';
import { ReviewModel } from '../models/review.model';

@Injectable({
    providedIn: 'root'
})
export class ReviewService {

    API_URL = environment.API_URL;

    constructor(private http: HttpClient, public cookieService : CookieService) {}

    findAll(url: string = '/reviews/') : Observable<ReviewModel[]>{
        return (this.http.get<ReviewModel[]>(`${this.API_URL}${url}`));
    }

    findByGame(id:string, url:string = '/reviews/game/') : Observable<ReviewModel[]>{
        return (this.http.get<ReviewModel[]>(`${this.API_URL}${url}${id}`));
    }

    findByUser(id:string, url:string = '/reviews/user/') : Observable<ReviewModel[]>{
        return (this.http.get<ReviewModel[]>(`${this.API_URL}${url}${id}`));
    }

    findOne(id: number, url: string = '/reviews/') : Observable<ReviewModel> {
        return (this.http.get<ReviewModel>(`${this.API_URL}${url}${id}`));
    }

    create(createReview : CreateReview, url: string = '/reviews/') : Observable<ReviewModel>{
        return (this.http.post<ReviewModel>(`${this.API_URL}${url}`, createReview, {headers:{'Authorization': `Bearer ${this.cookieService.get('token_mam')}`}}));
    }

    delete(id : number, url: string = '/reviews/') : Observable<ReviewModel> {
        return (this.http.delete<ReviewModel>(`${this.API_URL}${url}${id}`));
    }

}