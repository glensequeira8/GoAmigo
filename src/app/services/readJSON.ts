import {Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()

export class ReadJSON{
    constructor(public http:Http){

    }
    getJSON(fileName){
        return this.http.get(fileName).map(data=>data.json());        
    }
}