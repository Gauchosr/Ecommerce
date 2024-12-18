import { Component } from '@angular/core';
import { GeneralService } from '../servizi/general.service';
import { CarrelloService } from '../servizi/carrello.service';
import { RouterModule, Router } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  
  articoli: any[] = [];
  carrello: any[] = [];
  carrCont: number = 0; //numero totale di articoli nel carrello

  constructor(private generalService: GeneralService, private carrelloService: CarrelloService) {}

  aggiornaContatore() {
    this.carrCont = this.carrelloService.getCarrello().length;
  }


}
