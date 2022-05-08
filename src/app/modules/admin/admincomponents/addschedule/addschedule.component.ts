import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Airline } from 'src/app/models/airline';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-addschedule',
  templateUrl: './addschedule.component.html',
  styleUrls: ['./addschedule.component.scss']
})
export class AddscheduleComponent implements OnInit {

  addscheduleForm: FormGroup;

  airline: Airline | undefined;

  constructor(private adminService: AdminService, private router: Router) {
    this.addscheduleForm = new FormGroup({
      source: new FormControl("", [
        Validators.required
      ]),
      destination: new FormControl("", [
        Validators.required
      ]),
      flightDate: new FormControl("", [
        Validators.required
      ]),
      startTime: new FormControl("", [
        Validators.required
      ]),
      endTime: new FormControl("", [
        Validators.required
      ]),
      numberOfSeats: new FormControl("", [
        Validators.required
      ]),
      ticketCost: new FormControl("", [
        Validators.required
      ])
    })
    this.airline = this.adminService.airlineForScheduling;
  }

  ngOnInit(): void {
  }

  addSchedule(source:string, destination:string, flightDate:string, startTime:string, endTime:string, numberOfSeats:number, numberOfVacantSeats:number, ticketCost:number) {
    this.airline = this.adminService.airlineForScheduling;

  }
}
