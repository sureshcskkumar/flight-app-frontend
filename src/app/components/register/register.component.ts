import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;


  constructor(private authenticationService: AuthenticationService, private router: Router) {
    this.registerForm = new FormGroup({
      email: new FormControl("", [
        Validators.required,
        Validators.minLength(6)
      ]),
      password: new FormControl("", [
        Validators.required
      ]),
      firstName: new FormControl("", [
        Validators.required
      ]),
      lastName: new FormControl("", [
        Validators.required
      ])

    })
  }

  ngOnInit(): void {
  }

  /*
  register(email:string, password:string, firstName:string, lastName:string) {
    console.log("Email: " + email);
    this.authenticationService.register(email,password,firstName,lastName).subscribe({
      next: (res:any) => {
        console.log("Result:")
        console.log(res)
      }
    })
  }
  */
  register(email:string, password:string, firstName:string, lastName:string) {
    console.log("Email: " + email);
    this.authenticationService.register(email,password,firstName,lastName).subscribe({
      next: (response:any) => {
        alert(`You have been successfully registered`);
        this.router.navigate(["/"])
      },
      error: err => {
        alert(`User already registered. Please try to login`);
        console.error(err);
      }
    })
  }
}
