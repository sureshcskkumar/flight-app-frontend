import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;

  constructor(private authenticationService: AuthenticationService, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl("", [
        Validators.required,
        Validators.minLength(6)
      ]),
      password: new FormControl("", [
        Validators.required
      ])

    })
  }

  ngOnInit(): void {
  }

  /*
  login(email:string, password:string) {
    console.log("Email: " + email);

    this.authenticationService.login(email,password).subscribe({
      next: (res:any) => {
        console.log("Result:")
        console.log(res)
      }
    })
  }
  */

  login(email:string, password:string) {
    console.log("Email: " + email);
    this.authenticationService.login(email,password).subscribe({
      next: (response:any) => {
        localStorage.setItem("token", response.token)

        let decodecToken:any = jwtDecode(response.token)
        if (!!decodecToken && !!decodecToken.isAdmin && decodecToken.isAdmin) {
          localStorage.setItem("userType", "admin")
        }
        if (!!decodecToken && !!decodecToken.isUser && decodecToken.isUser) {
          localStorage.setItem("userType", "user")
        }



        alert(`You have been successfully logged in`);
        this.router.navigate(["/"])
      },
      error: err => {
        alert(`Please check the credentials and try again!`);
        console.error(err);
      }
    })
  }

}
