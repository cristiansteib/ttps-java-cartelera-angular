import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {
  public is_logged = localStorage.getItem("token") != null
 
  getApiUrl(){
    return "http://127.0.0.1:8080/"
  }
  
}