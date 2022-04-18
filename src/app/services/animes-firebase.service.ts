import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { anime } from "../models/anime";
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})

export class AnimeFirebaseService{
    private _PATH : string = "crud-animes";
    task?: AngularFireUploadTask;
    UploadedFileUrl?: Observable<string>;
    fileName? : string;

    constructor(private angularFire : AngularFirestore, private storage: AngularFireStorage,
        private db: AngularFireDatabase){}

    getAnime(id : string)
    {
        return this.angularFire.collection(this._PATH).doc(id).valueChanges();
    }

    getAnimes()
    {
        return this.angularFire.collection(this._PATH).snapshotChanges();
    }

    createAnime(anime : anime)
    {
        return this.angularFire.collection(this._PATH).add(anime);
    }

    deleteAnime(anime : anime)
    {
        return this.angularFire.collection(this._PATH).doc(anime.id).delete()
    }

    editarAnime(anime : anime, id : string)
    {
        return this.angularFire.collection(this._PATH).doc(id).update({
            name : anime.name,
            gender : anime.gender, 
            studio : anime.studio,
            launch_date : anime.launch_date,
            number_episodes : anime.number_episodes,
            streaming_platform : anime.streaming_platform,
            description : anime.description,
            classification : anime.classification, 
        });
    }

    async uploadStorage(file: File, anime : anime)
    {
    if (file.type.split("/")[0]!='image'){
      console.log("Tipo não suportado!!!");
      return;
    }
    this.fileName = file.name;
    const path = `imagens/${new Date().getTime() }_${file.name}`;
    const fileRef = this.storage.ref(path);
    this.task = this.storage.upload(path, file);
    this.task.snapshotChanges().pipe(
      finalize(() =>{
        this.UploadedFileUrl = fileRef.getDownloadURL();
        this.UploadedFileUrl.subscribe((resp)=>{
            anime.imageURL = resp;
            this.createAnime(anime);
          });
        })
      ).subscribe()
    }


}