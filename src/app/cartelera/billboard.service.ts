import { Injectable } from '@angular/core';
import { User } from 'src/models/user';
import { HttpClient } from '@angular/common/http';
import { GlobalsService } from '../globals.service';
import { Observable } from 'rxjs';
import { Billboard } from 'src/models/Billboard';

@Injectable({
  providedIn: 'root'
})
export class BillboardService {

  constructor(
    private http: HttpClient,
    private globalsService: GlobalsService
    ) {} 
    
    url = this.globalsService.getApiUrl()

    
  getAllBillboards():Observable<Billboard[]> {
    return this.http.get<any>(this.url + "carteleras?token=" + localStorage.getItem("token"))
  }

  getSuscribedBillboards():Observable<Billboard[]> {
    return this.http.get<any>(this.url + "carteleras/suscribed?token=" + localStorage.getItem("token"))
  }  
  
  getBillboard(id):Observable<Billboard[]> {
    return this.http.get<any>(this.url + "carteleras/" + id + "?token=" + localStorage.getItem("token"))
  }

}