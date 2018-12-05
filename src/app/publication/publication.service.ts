import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Billboard} from '../../models/Billboard';
import {Publication} from '../../models/Publication';
import {HttpClient} from '@angular/common/http';
import {GlobalsService} from '../globals.service';
import { PublicationComment } from 'src/models/PublicationComment';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor(
    private http: HttpClient,
    private globalsService: GlobalsService
  ) {}

  url = this.globalsService.getApiUrl();

  getPublication(idBillboard:number, idPublication:number): Observable<Publication> {
    return this.http.get<Publication>(this.url + 'carteleras/' + idBillboard + '/publicaciones/'+ idPublication + '?token=' + localStorage.getItem('token'));
  }

  getCommentsAndResponses(idBillboard:number,  idPublication:number):Observable<PublicationComment[]>  {
    return this.http.get<PublicationComment[]>(this.url + 'carteleras/' + idBillboard + '/publicaciones/'+ idPublication +'/comentarios?token=' + localStorage.getItem('token'));
  }
}
