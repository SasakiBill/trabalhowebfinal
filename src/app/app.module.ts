import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'
import { AngularFireStorageModule } from '@angular/fire/compat/storage'
import { AngularFireAuthModule } from '@angular/fire/compat/auth'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CriarAnimeComponent } from './components/criar-anime/criar-anime.component';
import { EditarAnimeComponent } from './components/editar-anime/editar-anime.component';
import { ListaDeAnimesComponent } from './components/lista-de-animes/lista-de-animes.component';
import { environment } from 'src/environments/environment.prod';
import { LoginComponent } from './components/login/login.component';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component';
import { AboutAnimeComponent } from './components/about-anime/about-anime.component';

@NgModule({
  declarations: [
    AppComponent,
    CriarAnimeComponent,
    EditarAnimeComponent,
    ListaDeAnimesComponent,
    LoginComponent,
    CadastrarComponent,
    AboutAnimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
