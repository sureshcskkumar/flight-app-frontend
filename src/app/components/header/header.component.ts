import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  search() {
    console.log("Redirect to Search Component");
    this.router.navigate(["/", "search"])
  }

  register() {
    console.log("User is trying to register");
    this.router.navigate(["/", "register"])
  }

  login() {
    console.log("User is trying to login");
    this.router.navigate(["/", "login"])
  }
  logout() {
    console.log("User is trying to logout");
    this.router.navigate(["/", "logout"])
  }


}
