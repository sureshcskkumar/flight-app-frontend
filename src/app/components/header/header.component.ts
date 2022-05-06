import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = true;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  search() {
    console.log("Redirect to Search Component");
    this.router.navigate(["/", "search"])
  }
}
