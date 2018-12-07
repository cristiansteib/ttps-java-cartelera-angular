import { Component, OnInit } from '@angular/core';
import { GlobalsService } from './globals.service';
import { LoginService } from './login/login.service';
import { User } from 'src/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit  {
 constructor(public globalService: GlobalsService, public loginService: LoginService){}
  username:string

 ngOnInit() {
   
}
  get isLogged(){
    this.username = localStorage.getItem("username")
    return this.globalService.is_logged
  }


  title = 'cartelera-java-frontend';
}
