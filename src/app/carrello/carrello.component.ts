import { Component, OnInit, } from '@angular/core';
import { CarrelloService } from '../servizi/carrello.service';
import { NgIf, NgFor } from '@angular/common';
import { HomepageComponent } from '../homepage/homepage.component';

@Component({
  selector: 'app-carrello',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './carrello.component.html',
  styleUrl: './carrello.component.css'
})
export class CarrelloComponent {
  
  carrello: any[] = [];

  constructor(private carrelloService: CarrelloService, private homepageComponent: HomepageComponent) {}

  ngOnInit() {
    this.carrello = this.carrelloService.getCarrello();
  }

  removeCarrello(articolo: any) {
    this.carrelloService.removeCarrello(articolo);
    this.carrello = this.carrelloService.getCarrello();
    this.homepageComponent.aggiornaContatore();
  } 

  calcolaTotale() {
    return this.carrelloService.totaleCarrello().toFixed(2);
  }
}
