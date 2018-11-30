import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { User } from 'src/models/user';

@Component({
    selector: 'login-form',
    templateUrl: './loginForm.component.html',
    styleUrls: ['./loginForm.component.sass']
   })

   export class LoginFormComponent {
    powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weatimport { Component, OnInit }']
    model = new User(null,'','')
    submitted = false
    
    onSubmit(formulario: NgForm) {
        if(formulario.valid) {
        this.model.username = formulario.value.username
        this.model.password = formulario.value.password
        this.submitted = true
        }
    }
    get diagnostic() { return JSON.stringify(this.model); }
  }  