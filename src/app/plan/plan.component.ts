import { Component, OnInit } from '@angular/core';
import { User } from '../_models/index';
import { AlertService,UserService } from '../_services/index';
import { RouterModule, Routes,Router } from '@angular/router';
import { TripDetails } from './../models/tripDetails';
import { MyTripsService } from './../services/mytrips.service';
import { min } from 'rxjs/operators';
import { GroupComponent } from '../group/group.component';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-plan,ngForm',
  templateUrl: './plan.component.html',
  providers: [MyTripsService, AlertService],
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {
  currentUser: User;
  users: User[] = [];
  source=['USA','Australia','Africa','Japan','India','China'];
  destin=['Australia','Africa','Japan','India','China'] ;
  
  model: TripDetails ;

  trips: TripDetails[];
    
  

  constructor(private userService: UserService,private myTripsService: MyTripsService,private router: Router,private alertService: AlertService) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
           
  }

  ngOnInit() {
    
    this.model = new TripDetails("","","","","","","lone");
   
  
  }
  
  reset()
  {
    this.model = new TripDetails("","","","","","","");
  }

  onFormSubmit(form: NgForm,trip:TripDetails) {
    

    if(form.controls['travel'].value == "lone")
    { 
      this.myTripsService.addTrip(this.model);
      this.router.navigate(['/mytrips']);
    }
   else
   {  
       
      this.myTripsService.addTrip(this.model);
      this.router.navigate(['/group']);
   }
  
  } 
  
  addTrip(trip:TripDetails): void
  {
   
   trip.userid = String(this.currentUser.id);
   trip.id = String(Math.floor(Math.random()*(100-31+1)+31));
  
    this.myTripsService.addTrip(this.model);    
  }


}
