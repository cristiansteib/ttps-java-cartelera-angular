import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalsService } from '../globals.service';
import { Observable } from 'rxjs';
import { Billboard } from 'src/models/Billboard';

@Injectable({
  providedIn: 'root'
})
export class BillboardPublicationService {

  constructor(
    private http: HttpClient,
    private globalsService: GlobalsService
    ) {} 
    
    url = this.globalsService.getApiUrl()

    
  getBillboard(id){
    return this.http.get<any>(this.url + "carteleras/" + id + "?token=" + localStorage.getItem("token"))
  }

}
