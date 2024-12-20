import { Component } from '@angular/core';
import { GeneralService } from '../servizi/general.service';
import { CarrelloService } from '../servizi/carrello.service';
import { RouterModule, Router } from '@angular/router';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NgIf, NgFor, RouterModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

  loggato: boolean = false;
  articoli: any[] = [];
  carrello: any[] = [];
  carrCont: number = 0; //numero totale di articoli nel carrello
  nome: string = '';
  cognome: string = '';

  constructor(private generalService: GeneralService, private carrelloService: CarrelloService) {}

  aggiornaContatore() {
    this.carrCont = this.carrelloService.getCarrello().length;
  }

  ngOnInit() {
    if (this.generalService.isLoggedIn) {
      this.nome = JSON.parse(localStorage.getItem('user') || '{}').nome;
      this.cognome = JSON.parse(localStorage.getItem('user') || '{}').cognome;
      this.loggato = this.generalService.isLoggedIn;
    }
  }

}
