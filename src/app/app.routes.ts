import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CarrelloComponent } from './carrello/carrello.component';
import { ArticoloComponent } from './articolo/articolo.component';
import { LoginComponent } from './login/login.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { CheckoutComponent } from './checkout/checkout.component';

export const routes: Routes = [
    { path: '', redirectTo: '/homepage', pathMatch: 'full' },

    {path:'homepage', component: HomepageComponent, children: [
        {path: '', redirectTo: 'articolo', pathMatch: 'full'},
        {path: 'articolo', component: ArticoloComponent},
        {path: 'carrello', component: CarrelloComponent},
        {path: 'checkout', component: CheckoutComponent}
    ]},
    {path: 'login', component: LoginComponent},
    {path: 'registrazione', component: RegistrazioneComponent}
];
