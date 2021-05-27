import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {FbService} from '../services/fb/fb.service';

@Injectable({
  providedIn: 'root',
})
export class AppGuard implements CanActivate {
  constructor(public fb: FbService, public router: Router) {
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this.fb.isAuth().pipe(
      map((auth) => {
        if (auth) {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      },
    ));
  }

}
