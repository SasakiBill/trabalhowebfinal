import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators'

export class MyData{
  name?: string
  downloadURL?: string
}

@Injectable({
  providedIn: 'root'
})

export class ImagemService {
  task?: AngularFireUploadTask;
  UploadedFileUrl?: Observable<string>;
  fileName? : string;

  constructor(private storage: AngularFireStorage,
    private db: AngularFireDatabase) { }

  async uploadStorage(file: File)
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
          this.uploadDatabase({
            name:file.name,
            downloadURL : resp,
          });
        });
      })).subscribe()

  }

  async uploadDatabase(image: MyData)
  {
    return this.db.database.ref('imagens').push(image)
    .then((resp)=>{
      alert("Imagem salva com sucesso!");
    })
    .catch((error)=>{
      alert("Ocorreu um erro ao salvar a imagem");
      console.log(error);
    })
  }

  getImages()
  {
    return this.db.list('imagens').snapshotChanges().pipe(
      map((action)=>{
        return action.map((dados)=>({
          key: dados.payload.key,
          data: dados.payload.val()
        }))
      })
    )
  }



}
