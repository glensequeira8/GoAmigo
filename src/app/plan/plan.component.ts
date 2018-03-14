import { Component, OnInit } from '@angular/core';
import { User } from '../_models/index';
import { AlertService,UserService} from '../_services/index';
import { RouterModule, Routes,Router } from '@angular/router';
import { TripDetails } from './../models/tripDetails';
import { MyTripsService } from './../services/mytrips.service';
import { min } from 'rxjs/operators';
import { GroupComponent } from '../group/group.component';
import { NgForm } from '@angular/forms';
import { BudgetComponent } from '../budget/budget.component';
import { NavbarService } from './../navbar/navbar.service';
import { ModalService } from './../_services/modal.service';
import { ModalComponent } from './../_directives/modal.component';


@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  providers: [MyTripsService, AlertService,ModalService],
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {
  currentUser: User;
  users: User[] = [];
  source=['USA','Australia','Africa','Japan','India','China'];
  destin=['Australia','Africa','Japan','India','China'] ;
  
  model: TripDetails ;

  trips: TripDetails[];
    
  

  constructor(private userService: UserService,private myTripsService: MyTripsService,private modalService: ModalService,private router: Router,private alertService: AlertService,public nav: NavbarService) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
           
  }

  ngOnInit() {
    this.nav.show();
    //this.modalService.remove('custom-modal-1');
    this.model = new TripDetails("","","","","","","lone");
  
  }
  
  reset()
  {
    this.model = new TripDetails("","","","","","","");
  }

  onFormSubmit(form: NgForm,trip:TripDetails,id: string) {
    
    if(form.controls['travel'].value == "lone")
    { 
      this.myTripsService.addTrip(this.model);
      this.router.navigate(['/mytrips']);
    }
   else
   {  
      this.modalService.open(id);
     // this.myTripsService.addTrip(this.model);
      //this.router.navigate(['/group']);
     
   }
  
  } 
   
  closeModal(id: string){
    this.modalService.close(id);
}

createGroup(){
  

}

searchPeople()
{
  this.router.navigate(['/search']);
}

addToGroup()
{
  this.router.navigate(['/group']);
}

  addTrip(trip:TripDetails): void
  {
   
   trip.userid = String(this.currentUser.id);
   trip.id = String(Math.floor(Math.random()*(100-31+1)+31));
  
    this.myTripsService.addTrip(this.model);    
  }


}
