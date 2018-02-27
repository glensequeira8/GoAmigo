import { Injectable } from '@angular/core';
import {HttpClient, HttpParams,  } from '@angular/common/http';
import {Http, Headers} from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';
import { TripDetails } from './../models/tripDetails';
import { RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

// import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  
    
  };

  @Injectable()
export class MyTripsService {
  tripsUrl = 'http://localhost:3000/trips';  // URL to web api
  
//   private handleError: HandleError;
  constructor(
    private http: HttpClient, private http1: Http
    /*httpErrorHandler: HttpErrorHandler*/) {
    // this.handleError = httpErrorHandler.createHandleError('HeroesService');
  }

   /** GET trips from the server   http://localhost:3000/trips?userid=2*/
   getMyTrips (id: string): Observable<TripDetails[]> {
    id = id.trim();
        const url = this.tripsUrl+"?userid="+id;
        return this.http.get<TripDetails[]>(url);
  }
/** DELETE: delete the hero from the server */
  deleteTrip(id: string): Observable<{}>{
      const url = `${this.tripsUrl}/${id}`; // DELETE trips/3
      return this.http.delete(url,httpOptions);
  }

  addTrip(myTrip: TripDetails){
    
    const options = new RequestOptions();
    options.body = "raw";
    

    console.log(JSON.stringify(myTrip));


    const headers = new Headers();
    headers.append('Content-Type','application/json; charset=utf-8');

    const requestOpt = new RequestOptions({headers});
    return this.http1.post(this.tripsUrl,JSON.stringify(myTrip), requestOpt)
      .subscribe(
        () => {},
        err => console.error(err)
      );

      
  }


}