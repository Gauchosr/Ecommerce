import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { GeneralService } from '../servizi/general.service';

@Component({
  selector: 'app-registrazione',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './registrazione.component.html',
  styleUrl: './registrazione.component.css'
})
export class RegistrazioneComponent {
  constructor(private router: Router, private generalService: GeneralService) {}

  onSubmit(form: NgForm) {
    this.generalService.registrazione(form.value).subscribe((data:any) => {
      console.log(data);
      if(data.status){
        this.generalService.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify({nome: data.user.nome, cognome: data.user.cognome}));
        this.router.navigate(['/homepage/carrello']);
      }
      else {
        alert('Registrazione fallita');
      }
    })
  }
}