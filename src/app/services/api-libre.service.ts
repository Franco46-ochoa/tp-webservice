import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiLibreService {
  private http = inject(HttpClient);

  getQrUrl(texto: string): string {
    if (!texto.trim()) return '';
    return `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(texto)}`;
  }
}