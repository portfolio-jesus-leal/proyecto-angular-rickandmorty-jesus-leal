import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(private http:HttpClient) { }

  getLocations(page:number=1):Observable<any> {
    console.log('getLocations->', page);
    return this.http.get(`https://rickandmortyapi.com/api/location?page=${page}`);
  }

  getLocationById(id:any):Observable<any> {
    return this.http.get(`https://rickandmortyapi.com/api/location/${id}`);
  }

  getLocationByUrl(url:string):Observable<any> {
    return this.http.get(url);
  }
}
