import {Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { UserTrips } from '../search/UserTrips';

@Injectable()

export class ReadJSON{
    constructor(public http:Http){

    }
    userTrips:UserTrips[];
    getJSON(fileName){
        return new Promise(resolve => {
            this.http.get(fileName).map(data=>data.json()).subscribe(data => {
                resolve(this.userTrips = (data));
              });        
            });
    }
    
}