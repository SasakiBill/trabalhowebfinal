import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsarioService } from 'src/app/services/usario.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss']
})
export class CadastrarComponent implements OnInit {
  public formCadastrar: FormGroup;

  constructor(private _router : Router, 
    private _formBuilder : FormBuilder, 
    private usarioService: UsarioService) { 
      this.formCadastrar = this._formBuilder.group({
        email : ["", [Validators.required, Validators.email]],
        password : ["", [Validators.required, Validators.minLength(6)]],
        confirmPassword : ["", [Validators.required, Validators.minLength(6)]]
      });   
    }

  ngOnInit(): void { }

  private validarFormulario()
  {
    for(let campos in this.formCadastrar.controls){
      this.formCadastrar.controls[campos].markAsTouched();
    }
  }

  public submitForm()
  {
    this.validarFormulario();
    if(!this.formCadastrar.valid){
      //alert("Teste");
      return;
    }
    this.signUpEmailPassword();
  }

  signUpEmailPassword()
  {
    if(this.formCadastrar.controls["password"].value == this.formCadastrar.controls["confirmPassword"].value){
      this.usarioService.signUpEmailPassword(this.formCadastrar.controls['email'].value,
        this.formCadastrar.controls['password'].value)
        .then(()=>{
        alert("Cadastro Efetuado Com Sucesso");
        this._router.navigate(["/login"]);
      })
        .catch((error)=>{
        alert("Cadastro não foi efetuado com sucesso. Tente novamente");
        console.log("error");
      })
      } else {
        alert("As senhas inseridas não conferem!");
      }
      
  }

}
