import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { User } from 'src/models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() {http: HttpClient }
  /** POST: Login a user*/
  loginUser(user: User):Observable<JSON> {
    return this.http.post<JSON>("auth/login", user)
  }
}
