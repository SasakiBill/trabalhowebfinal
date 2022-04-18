import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { anime } from 'src/app/models/anime';
import { AnimeFirebaseService } from 'src/app/services/animes-firebase.service';
import { UsarioService } from 'src/app/services/usario.service';
import { CriarAnimeComponent } from '../criar-anime/criar-anime.component';

@Component({
  selector: 'app-about-anime',
  templateUrl: './about-anime.component.html',
  styleUrls: ['./about-anime.component.scss']
})
export class AboutAnimeComponent implements OnInit {

  constructor(private _router : Router, private usuarioService: UsarioService) { }

  ngOnInit(): void {
  }

  public irParaCriarAnime()
  {
    this._router.navigate(["/criarAnime"]);
  }

  public irParaPaginaInicial()
  {
    this._router.navigate(["/listaDeAnimes"]);
  }

  public logout()
  {
    let resultado = confirm("Deseja realmente deslogar?  :(");
    if(resultado){
      this.usuarioService.logout()
      .then(() => {
        this._router.navigate(["/login"]);
      })
      .catch(() => {
        alert("Erro ao sair da plataforma");
      })
    }
  }

  public irParaSobrePagina()
  {
    this._router.navigate(["/aboutAnime"]);
  }

}
