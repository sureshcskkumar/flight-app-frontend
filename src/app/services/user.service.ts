import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn: "root"})
export class UserService {
    baseUrl:string = "http://localhost:7789"

    constructor(private httpClient:HttpClient){}

    
}