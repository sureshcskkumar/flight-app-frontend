import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.scss']
})
export class AddflightComponent implements OnInit {

  addflightForm:FormGroup;

  constructor(private router: Router) {
    this.addflightForm = new FormGroup({
      name: new FormControl("", [
        Validators.required,
        Validators.minLength(4)
      ]),
      contact: new FormControl("", [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern("[0-9]*")
      ])

    })
  }

  ngOnInit(): void {
  }

  addFlight(name:string, contact:string) {
  }
}