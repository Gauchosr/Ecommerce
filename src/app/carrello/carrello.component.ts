import { Component, OnInit, } from '@angular/core';
import { CarrelloService } from '../servizi/carrello.service';
import { NgIf, NgFor } from '@angular/common';
import { HomepageComponent } from '../homepage/homepage.component';
import { GeneralService } from '../servizi/general.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrello',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './carrello.component.html',
  styleUrl: './carrello.component.css'
})
export class CarrelloComponent {
  
  carrello: any[] = [];

  constructor(private carrelloService: CarrelloService, private homepageComponent: HomepageComponent, private generalService: GeneralService, private router: Router) {}

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

  controllaLogin(){
   if (this.generalService.isLoggedIn) {
     this.router.navigate(['/homepage/checkout']);
   }
   else {
     //redirect to login
     this.router.navigate(['/login']);
   }
  }
}
