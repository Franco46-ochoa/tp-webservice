import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CarmakerService {
  private http = inject(HttpClient);
  private apiUrl= 'https://car-specs.p.rapidapi.com/v2/cars/makes';
  private headers = new HttpHeaders({
    'X-RapidAPI-Key': 'f148e80e51msh1d8c64898be299dp14e1d2jsn9953237fed4b',
    'X-RapidAPI-Host': 'car-specs.p.rapidapi.com'
  })
  getMarcas(){
    return this.http.get(this.apiUrl, { headers: this.headers });
  }
  getModelos(marca: string){
    return this.http.get(this.apiUrl+"/"+marca+"/models", { headers: this.headers });
  }
}
