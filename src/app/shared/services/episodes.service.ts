import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  constructor(private http:HttpClient) { }

  getEpisodes(page:number=1):Observable<any> {
    console.log('getEpisodes->', page);
    return this.http.get(`https://rickandmortyapi.com/api/episode?page=${page}`);
  }

  getEpisodeById(id:any):Observable<any> {
    return this.http.get(`https://rickandmortyapi.com/api/episode/${id}`);
  }
}
