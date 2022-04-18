import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsarioService } from 'src/app/services/usario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public formLogin: FormGroup;

  constructor(private _router : Router, 
    private _formBuilder : FormBuilder, 
    private usarioService: UsarioService) {
      this.formLogin = this._formBuilder.group({
        email : ["", [Validators.required, Validators.email]],
        password : ["", [Validators.required, Validators.minLength(6)]]
      });  
    }

  ngOnInit(): void { }

  private validarFormulario(){
    for(let campos in this.formLogin.controls){
      this.formLogin.controls[campos].markAsTouched();
    }
  }

  public submitForm(){
    this.validarFormulario();
    if(!this.formLogin.valid){
      //alert("Teste");
      return;
    }
    this.loginEmailPassword();
  }

  loginEmailPassword(){
    this.usarioService.loginEmailPassword(this.formLogin.controls['email'].value,
    this.formLogin.controls['password'].value)
    .then(()=>{
      alert("Login Efetuado Com Sucesso");
      this._router.navigate(["/listaDeAnimes"]);
    })
    .catch((error)=>{
      alert("Login não foi efetuado com sucesso. Tente novamente");
      console.log("error");
    })
  }

  loginGoogleAccount()
  {
    this.usarioService.loginGoogleAccount().then(()=>{
      alert("Login efetuado com sucesso!");
      this._router.navigate(["/listaDeAnimes"]);
    })
    .catch((error)=>{
      alert("Login não foi efetuado com sucesso. Tente novamente");
      console.log(error);
    })
  }

  loginFacebook()
  {
    this.usarioService.loginFacebook().then(()=>{
      alert("Login efetuado com sucesso!");
      this._router.navigate(["/listaDeAnimes"]);
    })
    .catch((error)=>{
      alert("Login não foi efetuado com sucesso. Tente novamente");
      console.log(error);
    })
  }

}
