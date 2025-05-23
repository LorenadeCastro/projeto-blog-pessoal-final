import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = {
    email: '',
    senha: ''
  };

  login() {
    console.log('Realizando login:', this.credentials);
    // Lógica de autenticação
  }
}
