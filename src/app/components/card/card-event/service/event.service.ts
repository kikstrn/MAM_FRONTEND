import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { Observable } from "rxjs";
import { environment } from "../../../../../environments/environment.prod";
import { EventModel } from "../model/event.model";

@Injectable()
export class EventService {

    API_URL = environment.API_URL;

    constructor(private http: HttpClient, public cookieService : CookieService) {}

    getHeader(): { headers: { Authorization: string } } {
        return {headers:{'Authorization': `Bearer ${this.cookieService.get('token_mam')}`}}
    }

    delete(id : string, url: string = '/events/') : Observable<EventModel> {
        return (this.http.delete<EventModel>(`${this.API_URL}${url}${id}`, this.getHeader()));
    }

    participate(id : string, url: string = '/events/participate/') : Observable<EventModel> {
        return(this.http.get<EventModel>(`${this.API_URL}${url}${id}`, this.getHeader()));
    }

    unParticipate(id : string, url: string = '/events/un-participate/') : Observable<EventModel> {
        return(this.http.get<EventModel>(`${this.API_URL}${url}${id}`, this.getHeader()))
    }

}