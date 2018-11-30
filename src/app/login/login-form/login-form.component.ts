import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.sass']
   })

   export class LoginFormComponent {
    powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weatimport { Component, OnInit }']
    model = null
    submitted = false
    
    onSubmit(formulario: NgForm) {
        if(formulario.valid) {
        this.model.name = formulario.value.name
        this.submitted = true
        }
    }

  }  