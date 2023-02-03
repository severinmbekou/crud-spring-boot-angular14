import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {KeycloakProfile} from "keycloak-js";
import {KeycloakEventType, KeycloakService} from "keycloak-angular";
import {state} from "@angular/animations";

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public profile?: KeycloakProfile;

  constructor(private router: Router, public keycloakService: KeycloakService) {
    this.init();
  }

  public logout(): void {
    this.keycloakService.logout(window.location.origin);
  }

  async login() {
    await this.keycloakService.login(
      {
        redirectUri: window.location.origin
      }
    );
  }

  init() {
    console.log("int function started");

    this.keycloakService.loadUserProfile().then(profile => {
      console.log("int function");
      this.profile = profile;
      console.log(profile)
    });

    console.log(this.keycloakService);
  }

  public hasRoleIn(roles: string[]): boolean {
    let userRoles = this.keycloakService.getUserRoles();
    for (let role of roles) {
      if (userRoles.includes(role)) return true;
    }
    return false;
  }
}
