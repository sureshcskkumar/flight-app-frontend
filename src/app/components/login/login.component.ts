import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;

  constructor(private authenticationService: AuthenticationService) {
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

  login(email:string, password:string) {
    console.log("Email: " + email);

    this.authenticationService.login(email,password).subscribe({
      next: (res:any) => {
        console.log("Result:")
        console.log(res)
      }
    })
  }

}
