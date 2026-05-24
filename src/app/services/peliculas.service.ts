import { Injectable, inject } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
  private http = inject(HttpClient);
  private apiUrl = 'https://imdb-top-100-movies.p.rapidapi.com/';
  private headers = new HttpHeaders({
    'X-RapidAPI-key': 'f148e80e51msh1d8c64898be299dp14e1d2jsn9953237fed4b',
    'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
  })
  getPeliculas(){
    return this.http.get(this.apiUrl, { headers: this.headers });
  }
}

