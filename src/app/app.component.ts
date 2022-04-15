import { Component } from '@angular/core';
import { anime } from './models/anime';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'crud-animes'
  /*public lista_animes : anime[] = [];
  public name : string | undefined;
  public gender : string[] = [];
  public studio : string | undefined;
  public launch_date : number | undefined;
  public number_episodes : number | undefined;
  public streaming_platform : string[] = [];
  public description : string | undefined;
  public classification : number[] = [];
  public edicao : boolean = false;
  public indice : number = -1;


  constructor(){
    //this.lista_animes.push(new anime("Attack on Titan", "Mappa", 2020, 24, [], "Tatakae", 18));
  }

  public salvar() : void
  {
    if(!this.name){
      alert("Campo nome é obrigatório!");
      return;
    }

    if(!this.gender){
      alert("Campo gênero é obrigatório");
      return;
    }

    if(!this.studio){
      alert("Campo preço é obrigatório");
      return;
    }

    if(!this.launch_date){
      alert("Campo de data de lançamento é obrigatório!");
      return;
    }

    if(!this.number_episodes){
      alert("Campo de número de episódios é obrigatório!");
      return;
    }

    if(!this.streaming_platform){
      alert("Campo de plataforma de streaming é obrigatório!");
      return;
    }

    if(!this.description){
      alert("Campo de descrição é obrigatório!");
      return;
    }

    if(!this.classification){
      alert("Campo de classificação indicativa é obrigatório!");
      return;
    }

    if (this.indice == -1){
      let produto = new anime(this.name, this.gender, this.studio, this.launch_date, this.number_episodes, this.streaming_platform, this.description, this.classification);
      this.lista_animes.push(produto);
      alert("Anime adicionado à sua lista pessoal!");
    }else{
      this.lista_animes[this.indice].setName(this.name);
      this.lista_animes[this.indice].setGender(this.gender);
      this.lista_animes[this.indice].setStudio(this.studio);
      this.lista_animes[this.indice].setLaunchDate(this.launch_date);
      this.lista_animes[this.indice].setNumberEpisodes(this.number_episodes);
      this.lista_animes[this.indice].setStreamingPlatform(this.streaming_platform);
      this.lista_animes[this.indice].setDescription(this.description);
      this.lista_animes[this.indice].setClassification(this.classification);
      alert("Anime editado com sucesso!");
      this.edicao = false;
      this.indice = -1;
    }
    this.name = undefined;
    this.studio = undefined;
    this.launch_date = undefined;
    this.number_episodes = undefined;
    this.streaming_platform = [];
    this.description = undefined;
    this.classification = [];
  }

  public excluir(index : number) : void
  {
    this.lista_animes.splice(index, 1);
    alert("Anime removido da lista com sucesso!");
  }

  public editar(index : number) : void
  {
    this.edicao = true;
    this.indice = index;

    this.name = this.lista_animes[index].getName();
    this.studio = this.lista_animes[index].getStudio();
    this.launch_date = this.lista_animes[index].getLaunchDate();
    this.number_episodes = this.lista_animes[index].getNumberEpisodes();
    this.streaming_platform = this.lista_animes[index].getStreamingPlatform();
    this.description = this.lista_animes[index].getDescription();
    this.classification = this.lista_animes[index].getClassification();
    
  }*/
}
