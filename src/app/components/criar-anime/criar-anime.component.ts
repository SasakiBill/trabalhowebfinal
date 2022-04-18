import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { anime } from 'src/app/models/anime';
import { AnimesService } from 'src/app/services/animeService.service';
import { Location } from '@angular/common';
import { AnimeFirebaseService } from 'src/app/services/animes-firebase.service';

@Component({
  selector: 'app-criar-anime',
  templateUrl: './criar-anime.component.html',
  styleUrls: ['./criar-anime.component.scss']
})
export class CriarAnimeComponent implements OnInit {
  public formAnime : FormGroup;

  constructor(private _location: Location, private _router : Router, 
    private animeService : AnimeFirebaseService, private _formBuilder : FormBuilder) 
    { 

    this.formAnime = this._formBuilder.group({
      name : ["", [Validators.required, Validators.minLength(4)]],
      gender : ["", [Validators.required]], 
      studio : ["", [Validators.required]],
      launch_date : ["", [Validators.required]],
      number_episodes : ["", [Validators.required]],
      streaming_platform : ["", [Validators.required]],
      description : ["", [Validators.required]],
      classification : ["", [Validators.required]],
      imageURL : [""]
    })
  }

  ngOnInit(): void {}

  private validarFormulario()
  {
    for(let campos in this.formAnime.controls)
    {
      this.formAnime.controls[campos].markAsTouched();
    }
  }

  public submitForm()
  {
    this.validarFormulario();
    if(!this.formAnime.valid){
      return;
    }
    this.salvar();
  }

  public salvar()
  {
    this.animeService.deleteAnime(this.formAnime.value)
    .then(() =>{
      alert("Anime salvo com sucesso!");
      this._router.navigate(["/listaDeAnimes"]);
    })
    .catch(() =>{
      alert("Erro ao salvar anime");
    })
  }

  uploadFile(event: any)
  {
    const target = event.target as HTMLInputElement;
    const file : File = (target.files as FileList)[0];
    this.animeService.uploadStorage(file, this.formAnime.value)
    .then((data)=>{console.log(data)})
    .catch((error)=>{console.log(error)})
  }

  backClicked()
  {
    this._location.back();
  }
}
