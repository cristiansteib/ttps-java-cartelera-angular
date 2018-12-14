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
export class SuscribersShowService {

  constructor(
    private http: HttpClient,
    private globalsService: GlobalsService
  ) {
  }

  url = this.globalsService.getApiUrl();
  
  getUsersSuscribedToBillboard(id) {
    return this.http.get<User[]>(this.url + 'carteleras/' + id + '/suscriptores?token=' + localStorage.getItem('token'));
  }

}
