import { Component,ViewChild,ElementRef,NgZone, OnInit } from '@angular/core';
import { User } from '../_models/index';
import { AlertService,UserService} from '../_services/index';
import { RouterModule, Routes,Router } from '@angular/router';
import { TripDetails } from './../models/tripDetails';
import { MyTripsService } from './../services/mytrips.service';
import { min } from 'rxjs/operators';
import { GroupComponent } from '../group/group.component';
import { NgForm } from '@angular/forms';

import { NavbarService } from './../navbar/navbar.service';
import { ModalService } from './../_services/modal.service';
import { ModalComponent } from './../_directives/modal.component';
import {} from '@types/googlemaps';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  providers: [MyTripsService, AlertService,ModalService],
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {
  currentUser: User;
  users: User[] = [];
  @ViewChild('source')public sourceElement:ElementRef;
  @ViewChild('destination')public destinationElement:ElementRef;

  model: TripDetails ;
  trips: TripDetails[];
  autocomplete:any;
  autocomplete2:any;

  name1:any;

  constructor(private mapsAPILoader:MapsAPILoader,private ngZone:NgZone,private userService: UserService,private myTripsService: MyTripsService,private modalService: ModalService,private router: Router,private alertService: AlertService,public nav: NavbarService) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
           
  }

  ngOnInit() {
    this.nav.show();
    this.model = new TripDetails("","","","","","","lone");
    this.mapsAPILoader.load().then(
      () => {
       this.autocomplete = new google.maps.places.Autocomplete(this.sourceElement.nativeElement, { types:["(cities)"] });
        this.autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
         let place: google.maps.places.PlaceResult = this.autocomplete.getPlace();
         this.model.source=place.formatted_address;
         if(place.geometry === undefined || place.geometry === null ){
          return;
         }
        });
        });
      }
         );

         this.mapsAPILoader.load().then(
          () => {
           this.autocomplete2 = new google.maps.places.Autocomplete(this.destinationElement.nativeElement, { types:["(cities)"] });
            this.autocomplete2.addListener("place_changed", () => {
            this.ngZone.run(() => {
             let place: google.maps.places.PlaceResult = this.autocomplete2.getPlace();
             this.model.destination=place.formatted_address;
             if(place.geometry === undefined || place.geometry === null ){
              return;
             }
            });
            });
          }
             );


  }
  
  reset()
  {
    this.model = new TripDetails("","","","","","","");
  }

  onFormSubmit(form: NgForm,trip:TripDetails,id: string) {
    //this.model.source=
    //console.log("here:"+this.name1)
    if(form.controls['travel'].value == "lone")
    { 
      this.myTripsService.addTrip(this.model);
    // this.router.navigate(['/suggestions']);
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
