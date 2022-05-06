import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  search(source:string, destination:string, flightdate:string, returnDate:string) {
    console.log("Source: " + source);
    console.log("Destination: " + destination);
    console.log("Flightdate: " + flightdate);
    console.log("ReturnDate: " + returnDate);

  }



}
