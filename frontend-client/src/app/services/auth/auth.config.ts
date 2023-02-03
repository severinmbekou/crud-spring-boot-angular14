import {AuthConfig} from "angular-oauth2-oidc";
export const authCodeFlowConfig: AuthConfig = {
  // Url of the Identity Provider
  issuer: 'http://localhost:8080/realms/open-source',

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin,

  clientId: 'angular-webapp-native',

  responseType: 'code',

  strictDiscoveryDocumentValidation: true,

  scope: 'openid profile email offline_access',

  showDebugInformation: true,
};
