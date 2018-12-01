import { Injectable } from '@angular/core';
import { User } from 'src/models/user';
import { HttpClient } from '@angular/common/http';
import { GlobalsService } from '../globals.service';

@Injectable({
  providedIn: 'root'
})
export class BillboardService {

  constructor(
    private http: HttpClient,
    private globalsService: GlobalsService
    ) {} 
    
    url = this.globalsService.getApiUrl()

    
  getAllBillboards() {
    return this.http.post<any>(this.url + "carteleras?token=" + localStorage.getItem("token"), [])
  }

}