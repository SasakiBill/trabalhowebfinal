import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class UsarioService {
  user : any;
  storage : Storage;

  constructor(private authService : AngularFireAuth) { 
    this.storage = window.localStorage;
  }

  loginEmailPassword(email: string, password: string)
  {
    return this.authService.signInWithEmailAndPassword(email, password).then((data) =>{
      this.storage.setItem("condicao", "autenticado");
    });
  }

  signUpEmailPassword(email: string, password: string)
  {
    return this.authService.createUserWithEmailAndPassword(email, password);
  }

  loginGoogleAccount()
  {
    return this.authLoginProvider(new GoogleAuthProvider()).then((data) =>{
      this.storage.setItem("condicao", "autenticado");
    });
  }

  authLoginProvider(provider: any)
  {
    return this.authService.signInWithPopup(provider);
  }

  logout()
  {
    this.storage.setItem("condicao", "deslogou");
    return this.authService.signOut();
  }
}
