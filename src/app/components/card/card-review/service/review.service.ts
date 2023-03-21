import { Observable } from "rxjs";
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../../../environments/environment.prod";
import { Injectable } from "@angular/core";
import { ReviewModel } from "../model/review.model";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

@Injectable()
export class ReviewService {
    API_URL = environment.API_URL;

    constructor(private http: HttpClient, public cookieService : CookieService) {}
    getHeader(): { headers: { Authorization: string } } {
        return {headers:{'Authorization': `Bearer ${this.cookieService.get('token_mam')}`}}
    }
    
    delete(id : string, url: string = '/reviews/') : Observable<ReviewModel> {
        return (this.http.delete<ReviewModel>(`${this.API_URL}${url}${id}`, this.getHeader()));
    }
}