import { Component, OnInit } from '@angular/core';
import { NavbarService } from './../navbar/navbar.service';

import { TripDetails } from './../models/tripDetails';
import { MyTripsService } from './../services/mytrips.service';
import { User } from '../_models/index';

@Component({
  selector: 'app-mytrips',
  templateUrl: './mytrips.component.html',
  providers: [MyTripsService],
  styleUrls: ['./mytrips.component.css']
})
export class MytripsComponent implements OnInit {

  myTrips: TripDetails[];
  editTrip: TripDetails; // the trip currently being edited
  currentUser: User;


  constructor(private myTripsService: MyTripsService,public nav: NavbarService) { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.nav.show();
    this.getMyTrips();
  }

  getMyTrips(): void {
    this.myTripsService.getMyTrips(String(this.currentUser.id))
      .subscribe(myTrips => this.myTrips = myTrips);
  }

  deleteTrip(trip: TripDetails) {
    this.myTrips = this.myTrips.filter(t => t !== trip);
    this.myTripsService.deleteTrip(trip.id).subscribe();
  }

}
