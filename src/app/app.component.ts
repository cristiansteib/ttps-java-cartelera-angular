import {Component, OnInit} from '@angular/core';
import {GlobalsService} from './globals.service';
import {LoginService} from './login/login.service';
import {fadeAnimation} from './animations';
import {User} from 'src/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [fadeAnimation] // register the animation
})
export class AppComponent implements OnInit {
  constructor(public globalService: GlobalsService, public loginService: LoginService) {
  }

  ngOnInit() {
  }

  get isLogged() {
    return this.globalService.is_logged;
  }

  get username() {
    return this.globalService.username;
  }

  title = 'cartelera-java-frontend';
}
