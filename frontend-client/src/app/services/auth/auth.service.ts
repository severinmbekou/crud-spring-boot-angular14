import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {OAuthService} from "angular-oauth2-oidc";
import {authCodeFlowConfig} from "./auth.config";

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public profile?: any;

  constructor(private oauthService: OAuthService) {
    this.configure();
    this.init()
  }

  private configure() {
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin()
  }


  public logout(): void {
    this.oauthService.logOut();
  }

  login() {
    this.oauthService.initCodeFlow();
  }

  public get userName() {
    var claims = this.oauthService.getIdentityClaims();
    if (!claims) return null;
    return claims['preferred_username'];
  }

  private init() {
    this.oauthService.events.subscribe(e => {
      console.debug('oauth/oidc event', e);
    });

    this.oauthService.events.subscribe(e => {
      if (e.type === 'session_terminated')
        console.debug('Your session has been terminated!');
    });
    this.oauthService.events.subscribe(e => {
      if (e.type === 'token_received')
        this.oauthService.loadUserProfile().then(profile => {
          this.profile = profile;
        })
    });

  }

  public isAuthenticated(): boolean {
    return this.oauthService.hasValidAccessToken() &&
      this.oauthService.hasValidIdToken();
  }
}
