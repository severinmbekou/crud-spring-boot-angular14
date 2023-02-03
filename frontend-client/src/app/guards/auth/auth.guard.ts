import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree,} from '@angular/router';
import {Observable} from "rxjs";
import {AuthService} from "../../services/auth/auth.service";

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  /**
   *
   * @param router
   * @param authService
   */
  constructor(private router: Router, private authService: AuthService) {
  }

  /**
   *
   * @param route
   * @param state
   */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isAuthenticated()) {
      return new Observable<boolean>(
        (subscriber) => {
          subscriber.next(true);
        }
      );
    } else {
      this.authService.login();
      return false;
    }
  }
}
