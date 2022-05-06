import { Component, OnInit } from '@angular/core';
import { SearchResult } from 'src/app/models/search.result';
import { FlightSearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchResult:SearchResult | undefined;

  constructor(private searchService:FlightSearchService) { }

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

}
