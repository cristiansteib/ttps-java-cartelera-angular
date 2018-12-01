import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { User } from 'src/models/user';
import { LoginService } from '../login.service';
import { GlobalsService } from 'src/app/globals.service';

@Component({
    selector: 'login-form',
    templateUrl: './loginForm.component.html',
    providers:[LoginService],
    styleUrls: ['./loginForm.component.sass']
   })

   export class LoginFormComponent {
    constructor(
        private loginService: LoginService,
        private globalService: GlobalsService
        ) {}

    public invalidLogin_ = false

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

    get isLogged(){
        return this.globalService.is_logged
    }

    get diagnostic() { return JSON.stringify(this.model); }
  }  