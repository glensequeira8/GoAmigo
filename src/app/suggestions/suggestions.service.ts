import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/operator/delay';
import 'rxjs/operator/mergeMap';
import 'rxjs/operator/switchMap';
import { NgForm } from '@angular/forms';

@Injectable()
export class SuggestionsService {

  constructor(private http: Http) { }

restaurantPlaceApi(lat,lan){

console.log(lan,lat,"asdads")
		let headers = new Headers();
		headers.append('Content-Type', 'application/x-www-form-urlencoded');
		return this.http.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+lat+','+lan+'&radius=500&type=restaurant&key=AIzaSyDgQfG6Y-bbidUjlgoNX8SotR2ofd2H9kA',{headers:headers})
			.map(res => res.json())
			.catch(this.handleError);
}

	public handleError(error: Response) {
		console.error(error);
		return Observable.throw(error.json().error || 'Server error');
	}

}