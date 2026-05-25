import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TextToSpeechService {
  private http = inject(HttpClient);

  private apiUrl = 'https://open-ai-text-to-speech1.p.rapidapi.com/';

  generarAudio(text: string, voice: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': 'f148e80e51msh1d8c64898be299dp14e1d2jsn9953237fed4b',
      'X-RapidAPI-Host': 'open-ai-text-to-speech1.p.rapidapi.com'
    });

    const body = {
      model: 'tts-1',
      input: text,
      voice: voice
    };

    return this.http.post(this.apiUrl, body, {
      headers: headers,
      responseType: 'blob'
    });
  }
}