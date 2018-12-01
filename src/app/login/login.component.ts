import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})

export class LoginComponent implements OnInit {
  auth_token = null

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  logout(){
    this.loginService.logoutUser();
  }

}