import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalsService} from '../../globals.service';
import {Observable} from 'rxjs';
import {Billboard} from 'src/models/Billboard';
import {Publication} from 'src/models/Publication';
import {User} from 'src/models/user';

@Injectable({
  providedIn: 'root'
})
export class BillboardService {

  constructor(
    private http: HttpClient,
    private globalsService: GlobalsService
  ) {
  }

  url = this.globalsService.getApiUrl();

  addBillboardPublication(idBillboard: number, publication: Publication) {
    return this.http.post<Publication>(this.url + 'carteleras/' + idBillboard + '/publicaciones/?token=' + localStorage.getItem('token'), publication);
  }

  getBillboardData(id: number): Observable<Billboard> {
    /* Retorna la informacion de una cartelera en particular*/    
    return this.http.get<any>(this.url + 'carteleras/' + id + '?token=' + localStorage.getItem('token'));
  }
  
  getUsersSuscribedToBillboard(id) {
    return this.http.get<User[]>(this.url + 'carteleras/' + id + '/suscriptores?token=' + localStorage.getItem('token'));
  }

}
