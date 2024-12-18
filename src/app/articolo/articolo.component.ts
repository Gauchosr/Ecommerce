import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { GeneralService } from '../servizi/general.service';
import { CarrelloService } from '../servizi/carrello.service';
import { HomepageComponent } from '../homepage/homepage.component';
@Component({
  selector: 'app-articolo',
  standalone: true,
  imports: [NgFor],
  templateUrl: './articolo.component.html',
  styleUrl: './articolo.component.css'
})
export class ArticoloComponent {
  
  articoli: any[] = [];
  carrello: any[] = [];
  carrCont: number = 0; //numero totale di articoli nel carrello  

  constructor(private generalService: GeneralService, private carrelloService: CarrelloService, private homepageComponent: HomepageComponent) {}

  ngOnInit() {
    this.generalService.getArticoli().subscribe((data: any) => {
      console.log(data);
      this.articoli = data;
    });
  }

  aggiungiAlCarrello(articolo: any) {
    this.carrelloService.addCarrello(articolo);
    this.carrello = this.carrelloService.getCarrello();
    this.carrCont = this.carrello.length;
    this.homepageComponent.aggiornaContatore();
  }
}
