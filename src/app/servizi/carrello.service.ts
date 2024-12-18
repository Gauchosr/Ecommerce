import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrelloService {

  private carrello: any[] = [];

  constructor() {}

  getCarrello() {
    return this.carrello;
  }

  addCarrello(articolo: any) {
    this.carrello.push(articolo);
  }

  removeCarrello(articolo: any) {
    this.carrello = this.carrello.filter((a) => a !== articolo);
  }

  emptyCarrello() {
    this.carrello = [];
  }

  totaleCarrello() {
    return this.carrello.reduce((acc, a) => acc + a.price, 0);
  }
}
