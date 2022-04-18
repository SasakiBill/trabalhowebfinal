import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { anime } from 'src/app/models/anime';
import { AnimeFirebaseService } from 'src/app/services/animes-firebase.service';
import { UsarioService } from 'src/app/services/usario.service';
import { CriarAnimeComponent } from '../criar-anime/criar-anime.component';

@Component({
  selector: 'app-lista-de-animes',
  templateUrl: './lista-de-animes.component.html',
  styleUrls: ['./lista-de-animes.component.scss']
})
export class ListaDeAnimesComponent implements OnInit {
  public lista_animes : anime[] = [];
  public imagem? : any;

  constructor(private _router : Router, private usuarioService: UsarioService, 
    private animeService : AnimeFirebaseService) 
    {}

  ngOnInit(): void {
    this.animeService.getAnimes().subscribe(res =>{
      this.lista_animes = res.map(e => {
        return {
          id : e.payload.doc.id,
          ...e.payload.doc.data() as anime
        }as anime;
      })
    })
  }

  public excluir(anime : anime)
  {
    let resultado = confirm("Realmente deseja excluir o anime de seu repositório" + anime.name + "?");

    if(resultado){
     this.animeService.deleteAnime(anime)
     .then(() => { alert ("Anime excluído com sucesso!")})
     .catch(() => { alert ("Erro ao excluir anime")})
    }
  }

  public editar(anime : anime) : void
  {
    this._router.navigate(["/editarAnime", anime.id]);
  }

  public irParaCriarAnime()
  {
    this._router.navigate(["/criarAnime"]);
  }

  public irParaPaginaInicial()
  {
    this._router.navigate(["/listaDeAnimes"]);
  }

  public irParaSobrePagina()
  {
    this._router.navigate(["/aboutAnime"]);
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

  
}
