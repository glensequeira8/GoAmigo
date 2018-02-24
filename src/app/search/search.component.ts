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
  dest : string = '';
  trips:any;
  file:string;
  http:Http;
 
  constructor(private readJSON:ReadJSON) {
    //this.filteredItems = this.trips;
    //this.init();
    
  }

  ngOnInit() {
    let i=0;
   this.readJSON.getJSON("./../../assets/search.json").then(data => {
     //this.getTrips(data);

this.trips=data;     
   });

       //  console.log("my trips:"+this.trips);
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
  this.filteredItems = this.filteredItems.slice((this.currentIndex - 1)*this.pageSize, (this.currentIndex) * this.pageSize);
					this.pagesIndex =  this.fillArray();
	
  
}

fillArray(): any{
  var obj = new Array();
  for(var index = this.pageStart; index< this.pageStart + this.pages; index ++) {
          obj.push(index);
  }
  return obj;
}
    

init(){
  this.currentIndex = 1;
  this.pageStart = 1;
  this.pages = 4;
if(null!=this.filteredItems){
  this.pageNumber = parseInt(""+ (this.filteredItems.length / this.pageSize));
  if(this.filteredItems.length % this.pageSize != 0){
    this.pageNumber ++;
  }
}

  if(this.pageNumber  < this.pages){
      this.pages =  this.pageNumber;
  }
 
  this.refreshItems();
  console.log("this.pageNumber :  "+this.pageNumber);

}


 onSubmit(){
console.log(this.trips);

  this.filteredItems = [];
  if(this.dest != ""){
    this.trips.forEach(element=>{
      console.log(element.destination.toUpperCase());
      if(!element.lone && element.destination.toUpperCase().indexOf(this.dest.toUpperCase())>=0){
          this.filteredItems.push(element);
          
      }
    });
  }else{
    let i=0;
    let count=0;
    while(i<this.trips.length){
      if(!this.trips[i].lone){
        this.filteredItems[count++]=this.trips[i];
      }
      i++;
    }
    
  }
  console.log(this.filteredItems);
 // console.log(this.filteredItems);
		this.init();
 }
}
