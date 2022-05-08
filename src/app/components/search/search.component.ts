import { Component, OnInit } from '@angular/core';
import { SearchResult } from 'src/app/models/search.result';
import { FlightSearchService } from 'src/app/services/search.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchResult:SearchResult | undefined;

  searchForm:FormGroup;

  constructor(private searchService:FlightSearchService) {
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

    this.searchService.searchFlights(source, destination, flightdate, returnDate).subscribe({
      next: (res:any) => {
        console.log("Sending search request")

        this.searchResult = res;

        console.log(this.searchResult);
      }
    })

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
