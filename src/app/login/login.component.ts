import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})

export class LoginComponent implements OnInit {
  auth_token = null

  constructor(public loginService: LoginService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) =>{
      if (params['action'] == 'logout') { 
        this.logout(); 
      }
  });

  }

  logout(){
    this.loginService.logoutUser();
    this.router.navigate(['/carteleras'])
  }

}