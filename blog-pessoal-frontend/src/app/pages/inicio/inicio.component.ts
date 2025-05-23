import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ComentarioDialogComponent } from '../comentario-dialog/comentario-dialog.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  conteudos = [
    {
      id: 1,
      titulo: 'Clarice Lispector',
      descricao: '"Não quero ter a terrível limitação de quem vive apenas do que é passível de fazer sentido. Eu não: quero é uma verdade inventada".'
    },
    {
      id: 2,
      titulo: 'Clarice Lispector',
      descricao: '"Liberdade é pouco. O que desejo ainda não tem nome".'
    },
    {
      id: 3,
      titulo: 'Lorena de Castro',
      descricao: 'Escrevi liberdade no papel e o vento levou até você.'
    },
    {
      id: 4,
      titulo: 'Clarice Lispector',
      descricao: '"Passei a vida tentando corrigir os erros que cometi na minha ânsia de acertar".'
    },
    {
      id: 5,
      titulo: 'Clarice Lispector',
      descricao: '"Enquanto eu tiver perguntas e não houver resposta continuarei a escrever".'
    }
  ];

  constructor(public dialog: MatDialog) {}

  abrirComentario(item: any) {
    const dialogRef = this.dialog.open(ComentarioDialogComponent, {
      width: '400px',
      data: item,
      panelClass: 'meu-dialogo-personalizado'
});


    dialogRef.afterClosed().subscribe(resultado => {
      if (resultado) {
        console.log('Comentário recebido:', resultado);
        alert(`Comentário enviado para "${item.titulo}": ${resultado}`);
      }
    });
  }
}
