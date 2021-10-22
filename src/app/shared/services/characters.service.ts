import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  getCharacters(page:number=1):Observable<any> {
    console.log('getCharacters->', page);
    return this.http.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
  }

  getCharacterById(id:number | string = "1"):Observable<any> {
    console.log('getCharacterById->', id);
    return this.http.get(`https://rickandmortyapi.com/api/character/${id}`);
  }
}