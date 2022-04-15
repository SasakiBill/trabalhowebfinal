import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { anime } from "../models/anime";

@Injectable({
    providedIn: 'root'
})

export class AnimeFirebaseService{
    private _PATH : string = "crud-animes";

    constructor(private angularFire : AngularFirestore){}

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


}