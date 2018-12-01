import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalsService } from '../globals.service';
import { Observable } from 'rxjs';
import { Billboard } from 'src/models/Billboard';
import { Publication } from 'src/models/Publication';

@Injectable({
  providedIn: 'root'
})
export class BillboardPublicationService {

  constructor(
    private http: HttpClient,
    private globalsService: GlobalsService
    ) {} 
    
    url = this.globalsService.getApiUrl()

    
  getBillboardPublications(id) {
    return this.http.get<Publication[]>(this.url + "carteleras/" + id + "?token=" + localStorage.getItem("token"))
  }

}
