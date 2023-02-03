import {Component} from '@angular/core';
import {AuthService} from './services/auth/auth.service';
import {state} from "@angular/animations";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Crud spring boot with angular client';

  constructor(public authService: AuthService) {
  }

  login() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }
}
