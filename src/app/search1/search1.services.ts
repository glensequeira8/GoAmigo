import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Http,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {MyTripsService} from  './../services/mytrips.service';
import 'rxjs/add/operator/map';


import { TripDetails } from '../models/tripDetails';

// import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

 @Injectable()
export class MySearch1Service {

  private _url:'http://localhost:3000/trips';
  // constructor(
  //   private http: HttpClient,
  //   /*httpErrorHandler: HttpErrorHandler*/) {
  //   // this.handleError = httpErrorHandler.createHandleError('HeroesService');
  // }
  constructor(private _http: HttpClient){}  
  // getUserDetail():Observable<tripDetails[]>
  // {
  //   return this._http.get(this._url).map((response:Response)=><tripDetails[]>response.json()).do(data=>console.log(JSON.stringify(data))).catch(this.handleError);
  // }

  getUserDetail():Observable<TripDetails[]>{
    return this._http.get<TripDetails[]>('http://localhost:3000/trips');
    // .map((response:Response)=><tripDetails[]>response.json()).do(data=>console.log("All:"+JSON.stringify(data))).catch(this.handleError);
}

  private handleError(error:Response){
    console.error(error);
    return Observable.throw(error.json().error||"Server Error");
    }

    
    
    //  /** GET trips from the server */
    //  getUserDetail():Observable<tripDetails[]>{
    //   return this.http.get<tripDetails[]>('http://localhost:3000/trips');
    // }

}
