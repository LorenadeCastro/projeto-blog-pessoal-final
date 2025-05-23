import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AuthModel } from '../../models/auth.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials: AuthModel = { email: '', senha: '' };

  constructor(private authService: AuthService) {}

  login(): void {
    this.authService.login(this.credentials).subscribe(response => {
      console.log('Login realizado com sucesso!', response);
    });
  }
}
