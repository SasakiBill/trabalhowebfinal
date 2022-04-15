import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component';
import { CriarAnimeComponent } from './components/criar-anime/criar-anime.component';
import { EditarAnimeComponent } from './components/editar-anime/editar-anime.component';
import { ListaDeAnimesComponent } from './components/lista-de-animes/lista-de-animes.component';
import { LoginComponent } from './components/login/login.component';
import { UsuarioGuard } from './services/usuario.guard';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'cadastro', component: CadastrarComponent},
  {path:'listaDeAnimes', component: ListaDeAnimesComponent,
  canActivate : [UsuarioGuard]},
  {path:'criarAnime', component: CriarAnimeComponent,
  canActivate : [UsuarioGuard]},
  {path:'editarAnime/:indice', component: EditarAnimeComponent,
  canActivate : [UsuarioGuard]},
  {path:'**', redirectTo:"/login"},
  {path:'', redirectTo:"/login", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
