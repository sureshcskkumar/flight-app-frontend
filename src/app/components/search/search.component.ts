import { Component, OnInit } from '@angular/core';
import { SearchResult } from 'src/app/models/search.result';
import { FlightSearchService } from 'src/app/services/search.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchResult:SearchResult | undefined;

  searchForm:FormGroup;

  constructor(private searchService:FlightSearchService, private userService:UserService, private router:Router) {
    this.searchForm = new FormGroup({
      source: new FormControl("", [
        Validators.required
      ]),
      destination: new FormControl("", [
        Validators.required
      ]),
      flightDate: new FormControl("", [
        Validators.required
      ]),
      returnDate: new FormControl("")
    })
  }

  ngOnInit(): void {
  }

  search(source:string, destination:string, flightdate:string, returnDate:string) {
    console.log("Source: " + source);
    console.log("Destination: " + destination);
    console.log("Flightdate: " + flightdate);
    console.log("ReturnDate: " + returnDate);

    this.userService.bookingSource = source;
    this.userService.bookingDestination = destination;

    this.searchService.searchFlights(source, destination, flightdate, returnDate).subscribe({
      next: (res:any) => {
        console.log("Sending search request")

        this.searchResult = res;

        console.log(this.searchResult);
      }
    })

  }

  bookflight(scheduleId:number, airlineName:string) {
    this.userService.bookingScheduleId = scheduleId;
    this.userService.bookingAirlineName = airlineName;
    this.router.navigate(["/", "user", "bookflight"]);
  }


  isLoggedIn() {
    if (!!localStorage.getItem("token") ) {
      return true;
    }
    return false;
  }

  isAdmin() {
    if (!!localStorage.getItem("userType") &&  localStorage.getItem("userType") === "admin") {
      return true;
    }
    return false;
  }

  isUser() {
    if (!!localStorage.getItem("userType") &&  localStorage.getItem("userType") === "user") {
      return true;
    }
    return false;
  }

}
