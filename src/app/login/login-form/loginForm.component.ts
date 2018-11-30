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
    model = new User(null,'','')
    submitted = false
    
    onSubmit(formulario: NgForm) {
        if(formulario.valid) {
            this.model.username = formulario.value.username
            this.model.password = formulario.value.password
            this.submitted = true
            this.loginService.loginUser(this.model)
        } 
    }
    get diagnostic() { return JSON.stringify(this.model); }
  }  