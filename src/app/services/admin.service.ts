import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn: "root"})
export class AdminService {
    baseUrl:string = "http://localhost:7789"

    constructor(private httpClient:HttpClient){}

    addAirline(name:string, contact:string) {
        let url = this.baseUrl + "/flight/airline/register";
        let airline:any = {name:name, contactNumber:contact, blocked: false};
        return this.httpClient.post(url, airline, {headers: {"Authorization": "Bearer "+localStorage.getItem("token")}});
    }
}