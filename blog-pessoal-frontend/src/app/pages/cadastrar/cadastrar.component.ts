import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent {
  usuario = {
    username: '',
    nomeCompleto: '',
    email: '',
    senha: ''
  };

  confirmarSenha: string = '';

  constructor(private router: Router) {}

  cadastrar() {
    // Validação básica das senhas
    if (this.usuario.senha !== this.confirmarSenha) {
      alert('As senhas não conferem!');
      return;
    }

    // Aqui você pode colocar a chamada para seu backend ou serviço de cadastro
    // Por enquanto só mostramos no console e alert
    console.log('Usuário cadastrado:', this.usuario);

    alert('Cadastro realizado com sucesso!');
    this.router.navigate(['/']); // redireciona para a capa
  }
}
