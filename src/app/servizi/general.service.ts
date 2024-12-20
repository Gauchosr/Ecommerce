import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { get } from 'http';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  isLoggedIn = false;
  
  constructor(private http: HttpClient) {}

  getArticoli() {
    return this.http.get('http://localhost:3000/api/data/articoli');
  }
  
  registrazione(userData: { nome: string; cognome: string; email: string; password: string }) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',  // Specifica che i dati sono JSON
    });
    return this.http.post('http://localhost:3000/api/auth/register', userData, { headers });
  }

  login(body: object){
    return this.http.post('http://localhost:3000/api/auth/login', body);
  }
}
