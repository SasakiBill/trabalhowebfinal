import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { anime } from 'src/app/models/anime';
import { AnimesService } from 'src/app/services/animeService.service';
import { Location } from '@angular/common';
import { AnimeFirebaseService } from 'src/app/services/animes-firebase.service';
import { ImagemService } from 'src/app/services/imagem.service';

@Component({
  selector: 'app-editar-anime',
  templateUrl: './editar-anime.component.html',
  styleUrls: ['./editar-anime.component.scss']
})
export class EditarAnimeComponent implements OnInit {
  public formEditar : FormGroup;
  private indice? : any;

  constructor(private _location: Location, private _router : Router, private _actRouter : ActivatedRoute,
    private _animesService : AnimeFirebaseService, private _formBuilder : FormBuilder, private imagemService : ImagemService) {
      this.formEditar = this._formBuilder.group({
        name : ["", [Validators.required, Validators.minLength(4)]],
        gender : ["", [Validators.required]], 
        studio : ["", [Validators.required]],
        launch_date : ["", [Validators.required]],
        number_episodes : ["", [Validators.required]],
        streaming_platform : ["", [Validators.required]],
        description : ["", [Validators.required]],
        classification : ["", [Validators.required]],
        imagem:[""],
      })
    }

  ngOnInit(): void {
    this._actRouter.params.subscribe((parametros)=>{
      if(parametros["indice"]){
        this.indice = parametros["indice"];
        this._animesService.getAnime(parametros["indice"])
        .subscribe(res => {
          let animeRef: any = res;
          this.formEditar = this._formBuilder.group({
            name : [animeRef.name, [Validators.required, Validators.minLength(4)]],
            gender : [animeRef.gender, [Validators.required]],
            studio : [animeRef.studio, [Validators.required]],
            launch_date : [animeRef.launch_date, [Validators.required]],
            number_episodes : [animeRef.number_episodes, [Validators.required]],
            streaming_platform : [animeRef.streaming_platform, [Validators.required]],
            description : [animeRef.description, [Validators.required]],
            classification : [animeRef.classification, [Validators.required]],
            imagem : [animeRef.imagem],
          });
        })
      }
    })
  }

  private validarFormulario()
  {
    for (let campos in this.formEditar.controls)
    {
      this.formEditar.controls[campos].markAsTouched();
    }
  }

  public submitForm()
  {
    this.validarFormulario();
    if(!this.formEditar.valid){
      return;
    }
    this.salvar();
  }

  public salvar()
  {
    this._animesService.editarAnime(this.formEditar.value, this.indice)
    .then(()=>{
      alert("Anime salvo com sucesso");
      this._router.navigate(["/listaDeAnimes"]);
    })
    .catch((error) =>{
      console.log(error)
      alert("Erro ao salvar anime");
    })
  }

  uploadFile(event: any)
  {
    const target = event.target as HTMLInputElement;
    const file : File = (target.files as FileList)[0];
    this.imagemService.uploadStorage(file)
    .then((data)=>{console.log(data)})
    .catch((error)=>{console.log(error)})
  }

  backClicked()
  {
    this._location.back();
  }

}
