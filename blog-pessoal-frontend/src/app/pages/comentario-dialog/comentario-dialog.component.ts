import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-comentario-dialog',
  templateUrl: './comentario-dialog.component.html',
  styleUrls: ['./comentario-dialog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ComentarioDialogComponent {
  comentario: string = '';

  constructor(public dialogRef: MatDialogRef<ComentarioDialogComponent>) {}

  enviarComentario() {
    console.log('Comentário enviado:', this.comentario);
    this.dialogRef.close(this.comentario);
  }

  fechar() {
    this.dialogRef.close();
  }
}
