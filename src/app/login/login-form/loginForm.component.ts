import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { User } from 'src/models/user';
import { LoginService } from '../login.service';

@Component({
    selector: 'login-form',
    templateUrl: './loginForm.component.html',
    providers:[LoginService],
    styleUrls: ['./loginForm.component.sass']
   })

   export class LoginFormComponent {

    constructor(private loginService: LoginService) {}
    user = new User(null,'','')
    submitted = false
    
    onSubmit(formulario: NgForm) {
        if(formulario.valid) {
            this.user.username = formulario.value.username
            this.user.password = formulario.value.password
            this.submitted = true
            this.loginService.loginUser(this.user)
        } 
    }
    get diagnostic() { return JSON.stringify(this.user); }
  }  