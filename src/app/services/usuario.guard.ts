import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsarioService } from './usario.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuard implements CanActivate {
  constructor(private router: Router, private authService: UsarioService)
  {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | 
    UrlTree> | boolean | UrlTree {
      if (this.authService.storage.getItem("condicao") == "autenticado"){
        return true;
      } else {
        this.router.navigate(["/login"]);
        return false;
      }
    return true;
  }
  
}
