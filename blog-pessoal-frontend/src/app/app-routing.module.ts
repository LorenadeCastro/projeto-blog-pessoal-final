import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './pages/inicio/inicio.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PostagensComponent } from './pages/postagens/postagens.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

// IMPORTAÇÃO DO CADASTRAR COMPONENT
import { CadastrarComponent } from './pages/cadastrar/cadastrar.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Agora mostra a capa ao acessar /
  { path: 'inicio', component: InicioComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'postagens', component: PostagensComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cadastrar', component: CadastrarComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
