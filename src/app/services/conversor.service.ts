import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ConversorService {
  private http = inject(HttpClient);
  private apiUrl = 'https://api.apilayer.com/currency_data/live';
  private headers = new HttpHeaders({
    'apikey': 'f5L6l1OYRNrlRhR0cN4fVPpjckenMeAL'
  });

  getTasas() {
    return this.http.get<any>(this.apiUrl, { headers: this.headers });
  }
}