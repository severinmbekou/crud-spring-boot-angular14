import { Component } from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";
import {authCodeFlowConfig} from "./services/auth/auth.config";
import {AuthService} from "./services/auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Crud spring boot with angular client';

  constructor(public authService: AuthService) {}

  login() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }
}
