import { Component, OnInit } from '@angular/core';
import { BookingDetail } from 'src/app/models/bookingDetail';

@Component({
  selector: 'app-bookflight',
  templateUrl: './bookflight.component.html',
  styleUrls: ['./bookflight.component.scss']
})
export class BookflightComponent implements OnInit {

  bookingDetail:BookingDetail | undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

}
