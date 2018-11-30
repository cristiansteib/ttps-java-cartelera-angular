import { Injectable } from '@angular/core';
import { User } from 'src/models/user';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {} 
  
  /** POST: Login a user*/
  loginUser(user: User):Observable<JSON> {
    return this.http.post<JSON>("auth/login", user)
  }
}
