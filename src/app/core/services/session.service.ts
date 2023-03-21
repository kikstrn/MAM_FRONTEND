import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class SessionService {

    constructor() {}

    getSession():any | undefined{
        return localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")!) : undefined;
    }

    setSession(user: any):void{
        localStorage.setItem("user", JSON.stringify(user));
    }

    clearSession():void{
        localStorage.removeItem("user");
    }
}