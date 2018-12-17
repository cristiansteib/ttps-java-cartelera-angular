import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {
  public is_logged = localStorage.getItem("token") != null
  public username = localStorage.getItem("username")

  getApiUrl(){
    return "https://tomcat.debuguear.com/carteleras/"
     //"http://127.0.0.1:8080/"
  }
  
  setUsername(username){
      this.username = username
  }
}