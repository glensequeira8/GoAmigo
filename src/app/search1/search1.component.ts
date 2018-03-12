import { Component, OnInit } from '@angular/core';
import{Http} from '@angular/http';
import {TripDetails} from './../models/tripDetails';
import {MySearch1Service} from './search1.services';
import { UserTrips } from '../models/UserTrips';
import { User } from '../_models/index';
import { UserService } from '../_services/index';


@Component({
  selector: 'app-search1',
  templateUrl: './search1.component.html',
  styleUrls: ['./search1.component.css'],
  providers:[MySearch1Service]
})
export class Search1Component implements OnInit {
 intialDetails:TripDetails[];
 searchdetail: TripDetails[];
 dest : string = '';
 tempArr: TripDetails[];
 filteredItems:TripDetails[];
 currentUser: User;

  constructor(private mysearchService: MySearch1Service) {}

  ngOnInit() {    
    this.mysearchService.getUserDetail().subscribe(resSearchDetail=> this.intialDetails=resSearchDetail) ;
  }
  onSearch():void{
    this.searchdetail=this.intialDetails.filter(
      (trip:TripDetails)=>trip.destination.toLocaleLowerCase().indexOf(this.dest.toLocaleLowerCase())!=-1);    
  }


  
}
