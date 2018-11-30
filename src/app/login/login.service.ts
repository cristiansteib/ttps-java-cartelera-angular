import { Injectable } from '@angular/core';
import { User } from 'src/models/user';
import { HttpClient } from '@angular/common/http';
import { GlobalsService } from '../globals.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private globalsService: GlobalsService
    ) {} 
    url = this.globalsService.getApiUrl()
  /** POST: Login a user*/
  loginUser(user: User) {
    this.http.post<any>(this.url + "auth/login", user).subscribe(
      data => {
        localStorage.setItem("token", data.token)
        localStorage.setItem("user_id", data.userId)
      }
    )
  }

  /** Logout the current user*/
  logoutUser() {
      this.http.get<JSON>(this.url + "auth/logout?token=" + localStorage.getItem("token")).subscribe(
        data => {
          localStorage.removeItem("token")
          localStorage.removeItem("user_id")
        }
      )
  }
}