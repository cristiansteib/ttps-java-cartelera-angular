import { Injectable } from '@angular/core';
import { User } from 'src/models/user';

@Injectable({
  providedIn: 'root'
})
export class UseraccountService {

  public currentUser: User

  constructor() { }

  public setUser(user: User) {
    this.currentUser = user
  }

}
