import { Component, OnInit } from '@angular/core';
import { Trip } from './trip';
import { User } from '../_models/index';
import { UserService } from '../_services/index';
import { RouterModule, Routes } from '@angular/router';



@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {
  currentUser: User;
  users: User[] = [];
  source=['USA','Australia','Africa','Japan','India','China'];
  destin=['Australia','Africa','Japan','India','China'] ;
  
  model: Trip ;
  submitted=false; 
   
  

  constructor(private userService: UserService) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.model = new Trip(this.currentUser.id,'','','','',true,false);
  }
  
  reset()
  {
    this.model=new Trip(this.currentUser.id,'','','','',false,false);
  }

  onSubmit()
  {
    this.submitted=true;
    console.log(JSON.stringify(this.model));
  
  }

  save()
  {

  }
  
  


  
}
