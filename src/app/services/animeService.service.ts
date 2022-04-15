import { Injectable } from "@angular/core";
import { anime } from "../models/anime";

@Injectable({
    providedIn: 'root'
})
export class AnimesService
{
    private animes : anime[] = [];

    constructor() {}

    public inserirAnime(anime : anime) : boolean
    {
        this.animes.push(anime);
        return true;
    }

    public getAnimes() : anime[]
    {
        return this.animes;
    }

    public getAnime(indice : number) : anime
    {
        return this.animes[indice];
    } 

    public editarAnime(indice : number, anime : anime) : boolean
    {
        this.animes[indice] = anime;
        return true;
    }

    public excluirAnime(indice : number)
    {
        this.animes.splice(indice, 1);
        return true;
    }
    
}