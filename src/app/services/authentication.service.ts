import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn: "root"})
export class AuthenticationService {
    baseUrl:string = "http://localhost:7789"

    constructor(private httpClient:HttpClient){}

    register(email:string, password:string, firstName:string, lastName:string) {

        let url = this.baseUrl + "/api/v1.0/register";
        let registerObject = {email: email, password: password,role: "ROLE_USER", firstName: firstName, lastName: lastName}
        return this.httpClient.post(url, registerObject, {headers: {}});
    }

    login(email:string, password:string) {

        let url = this.baseUrl  + "/api/v1.0/login";
        let loginObject = {email: email, password: password}
        return this.httpClient.post(url, loginObject, {headers: {}});
    }
}