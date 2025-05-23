import { Component } from '@angular/core';

@Component({
  selector: 'app-postagens',
  templateUrl: './postagens.component.html',
  styleUrls: ['./postagens.component.css']
})
export class PostagensComponent {
  novaPostagem = {
    titulo: '',
    conteudo: '',
    autor: '',
    data: new Date()
  };

  postagens: any[] = [];

  publicarPostagem() {
    const nova = { ...this.novaPostagem, data: new Date() };
    this.postagens.unshift(nova);
    this.novaPostagem = { titulo: '', conteudo: '', autor: '', data: new Date() };
  }
}
