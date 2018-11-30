import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})

export class LoginComponent implements OnInit {
  auth_token = null

  constructor() { }

  getAtuhToke(){
    return this.auth_token
  }
  ngOnInit() {
  }

}