import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { User } from 'src/models/user';
import { HttpClient } from '@angular/common/http';
import { GlobalsService } from '../globals.service';
import { Observable } from 'rxjs/Observable';
import { LoginComponent } from './login.component';
import {BehaviorSubject, observable} from 'rxjs';
import { Location } from '@angular/common';
import { UseraccountService } from '../useraccount/useraccount.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private globalsService: GlobalsService,
    private useraccountService: UseraccountService,
    private router: Router,
    private location: Location
    ) {} 
    url = this.globalsService.getApiUrl()
  /** POST: Login a user*/
  loginUser(user: User) {

    this.http.post<any>(this.url + "auth/login", user).subscribe(
      data => {
        if (data.status == 'ok') {
          localStorage.setItem("token", data.token)
          localStorage.setItem("user_id", data.userId)
          localStorage.setItem("username", data.username)
          this.globalsService.username = data.username
          this.globalsService.is_logged = true
          //this.fecthUserData()
          window.location.replace("/carteleras")
          //this.router.navigate(['/carteleras'])
        } else {
          window.alert("Usuario invalido.")
        }
      })
    }
  


  /** Logout the current user*/
  logoutUser() {
      this.http.get<any>(this.url + "auth/logout?token=" + localStorage.getItem("token")).subscribe(
        data => {
          this.globalsService.setUsername("")
          this.globalsService.is_logged = false
          this.useraccountService.setUser(undefined)
          localStorage.clear()
        }
      )
  }

  getCurrentUserData() {
    return this.http.get<User>(this.url + "usuarios/" + localStorage.getItem("user_id") + "?token=" + localStorage.getItem("token"))
  }

  public fecthUserData() {

    this.getCurrentUserData().subscribe( 
      user => {
        this.useraccountService.setUser(user)
      },
      error => {
        console.log("error fetching user data")
        setTimeout(() => {
          this.fecthUserData()
        }, 2000); 
      }
    
      )
  }
}