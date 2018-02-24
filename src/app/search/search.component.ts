import { Component, OnInit } from '@angular/core';
import { UserTrips } from "./UserTrips";
import { ReadJSON} from "../_services/readJSON";
import { Http } from "@angular/http";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    filteredItems: UserTrips[];
    pages = 4;
    pageSize = 5;
    pageNumber = 0;
    currentIndex = 1;
    pagesIndex: Array<number>;
    pageStart = 1;
    inputName = '';
    trips: UserTrips[];
    file: string;
    http: Http;
  constructor(private readJSON: ReadJSON) {

  }

  ngOnInit() {

      this.readJSON.getJSON('./../../assets/search.json').subscribe(data => {

          this.trips = data;
          console.log(data);
      });
      console.log(this.trips);
  }


    prevPage() {
        if (this.currentIndex > 1) {
            this.currentIndex --;
        }
        if (this.currentIndex < this.pageStart) {
            this.pageStart = this.currentIndex;
        }
        this.refreshItems();
    }
    nextPage() {
        if (this.currentIndex < this.pageNumber) {
            this.currentIndex ++;
        }
        if (this.currentIndex >= (this.pageStart + this.pages)) {
            this.pageStart = this.currentIndex - this.pages + 1;
        }

        this.refreshItems();
    }
    setPage(index: number) {
        this.currentIndex = index;
        this.refreshItems();
    }


    refreshItems() {
        this.filteredItems = [];

    }

    fillArray(): any {
        let obj = [];
        for (let index = this.pageStart; index < this.pageStart + this.pages; index ++) {
            obj.push(index);
        }
        return obj;
    }

}

