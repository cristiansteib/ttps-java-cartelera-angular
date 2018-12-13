import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalsService} from '../globals.service';
import {Observable} from 'rxjs';
import {Billboard} from 'src/models/Billboard';
import {Publication} from 'src/models/Publication';
import {User} from 'src/models/user';

@Injectable({
  providedIn: 'root'
})
export class BillboardPublicationService {

  constructor(
    private http: HttpClient,
    private globalsService: GlobalsService
  ) {
  }

  url = this.globalsService.getApiUrl();


  getBillboardPublications(id) {
    return this.http.get<Publication[]>(this.url + 'carteleras/' + id + '/publicaciones?token=' + localStorage.getItem('token'));
  }

  addBillboardPublication(idBillboard: number, publication: Publication) {
    return this.http.post<Publication>(this.url + 'carteleras/' + idBillboard + '/publicaciones/?token=' + localStorage.getItem('token'), publication);
  }

}
