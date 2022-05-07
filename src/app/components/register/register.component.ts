import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;


  constructor(private authenticationService: AuthenticationService) {
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

  register(email:string, password:string, firstName:string, lastName:string) {

  }

}
