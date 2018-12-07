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
 user: User
 
 ngOnInit() {

 this.loginService.getCurrentUserData().subscribe(
  user => {
    this.user = user
  }
)
}
  get isLogged(){
    return this.globalService.is_logged
  }


  title = 'cartelera-java-frontend';
}
