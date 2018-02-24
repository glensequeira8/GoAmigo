import { Component, OnInit } from '@angular/core';
import { UserTrips } from './UserTrips';
import { Http,Response } from "@angular/http";
import { ReadJSON } from "../services/readJSON";

@Component({
  providers:[ReadJSON],
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  filteredItems : UserTrips[];
	pages : number = 4;
  pageSize : number = 5;
	pageNumber : number = 0;
	currentIndex : number = 1;

  
	pagesIndex : Array<number>;
	pageStart : number = 1;
  inputName : string = '';
  trips:UserTrips[];
  file:string;
  http:Http;
  constructor(private readJSON:ReadJSON) {
    
  }

  ngOnInit() {
   this.readJSON.getJSON("./../../assets/search.json").subscribe(data=>{

          this.trips=data;
           console.log(data);
         });
         console.log(this.trips);
  }


prevPage(){
if(this.currentIndex>1){
this.currentIndex --;
} 
if(this.currentIndex < this.pageStart){
this.pageStart = this.currentIndex;
}
this.refreshItems();
}
nextPage(){
if(this.currentIndex < this.pageNumber){
  this.currentIndex ++;
}
if(this.currentIndex >= (this.pageStart + this.pages)){
this.pageStart = this.currentIndex - this.pages + 1;
}

this.refreshItems();
}
setPage(index : number){
 this.currentIndex = index;
 this.refreshItems();
}


refreshItems(){
  this.filteredItems = [];
  
}

fillArray(): any{
  var obj = new Array();
  for(var index = this.pageStart; index< this.pageStart + this.pages; index ++) {
          obj.push(index);
  }
  return obj;
}
    
}
