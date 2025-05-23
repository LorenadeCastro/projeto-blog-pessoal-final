import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Importa módulo dos componentes estruturais
import { ComponentsModule } from './components.module';

// Importa os componentes das páginas
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { PostagensComponent } from './pages/postagens/postagens.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';

// IMPORTAÇÃO DO CADASTRAR COMPONENT
import { CadastrarComponent } from './pages/cadastrar/cadastrar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComentarioDialogComponent } from './pages/comentario-dialog/comentario-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    PostagensComponent,
    InicioComponent,
    HomeComponent,
    SobreComponent,
    CadastrarComponent,
    ComentarioDialogComponent // Declarar aqui
  ],
  imports: [
  BrowserModule,
  AppRoutingModule,
  FormsModule,
  HttpClientModule,
  ComponentsModule,
  BrowserAnimationsModule,
  MatDialogModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule
],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
