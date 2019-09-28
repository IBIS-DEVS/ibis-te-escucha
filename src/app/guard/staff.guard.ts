import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../providers/auth.service';
import { MenuController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class StaffGuard implements CanActivate{
  
  constructor(public authService: AuthService, private _router: Router,
    private menuCtrl: MenuController) { }

    
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> {
    if (this.authService.user && !this.authService.user.isAnonymous) { return true; }
    this._router.navigate(['/']);
    return false;
  }

}
