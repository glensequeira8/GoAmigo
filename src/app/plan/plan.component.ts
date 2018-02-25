import { Component, OnInit } from '@angular/core';
import { Trip } from './trip';
import { User } from '../_models/index';
import { UserService } from '../_services/index';

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
  
  model=new Trip('','','','',true,false);
  submitted=false; 
   
  
  constructor(private userService: UserService) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
  
  }
  
  reset()
  {
    this.model=new Trip('','','','',false,false);
  }

  onSubmit()
  {
    this.submitted=true;
    console.log(JSON.stringify(this.model));
    
  }

  
}
