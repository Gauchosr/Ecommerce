import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { get } from 'http';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private http: HttpClient) {}

  getArticoli() {
    return this.http.get('http://localhost:3000/api/data');
  }
  
}
