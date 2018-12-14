import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalsService} from '../../globals.service';
import {Observable} from 'rxjs';
import {Billboard} from 'src/models/Billboard';
import {Publication} from 'src/models/Publication';
import {User} from 'src/models/user';
import { PublicationComment } from 'src/models/PublicationComment';

@Injectable({
  providedIn: 'root'
})
export class PublicationShowService {

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
