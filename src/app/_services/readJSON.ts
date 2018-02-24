import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http } from "@angular/http";

@Injectable()

export class ReadJSON{
    constructor(public http:Http){

    }
    getJSON(fileName){
        return this.http.get(fileName).map(data => data.json());
    }
}
