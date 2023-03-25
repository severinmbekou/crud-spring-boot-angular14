import {KeycloakService} from "keycloak-angular";

export function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080',
        realm: 'master',
        clientId: 'demo-frontend-angular'
      },
      initOptions: {
        onLoad: 'check-sso',
        checkLoginIframe: true,
        silentCheckSsoRedirectUri:
          window.location.origin
      }
    });
}
