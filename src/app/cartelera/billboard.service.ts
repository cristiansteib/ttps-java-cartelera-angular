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

  getBillboardData(id: number): Observable<Billboard> {
    /* Retorna la informacion de una cartelera en particular*/    
    return this.http.get<any>(this.url + 'carteleras/' + id + '?token=' + localStorage.getItem('token'));
  }

  getBillboardSuscribers(billboardId: number): Observable<User> {
    /* Retorna un lista de los usuarios que estan suscriptos a la cartelera. */
    return this.http.get<any>(this.url + 'carteleras/' + billboardId + '/suscriptores?token=' + localStorage.getItem('token'));
  }

  getAllBillboards():Observable<Billboard[]> {
    /*Retorna todas las carteleras disponibles */
    return this.http.get<any>(this.url + "carteleras")
  }

  getSuscribedBillboards():Observable<Billboard[]> {
    /* Retorna una lista de billboards a la que el usuario se suscribio */    
    return this.http.get<any>(this.url + "carteleras/suscprito?token=" + localStorage.getItem("token"))
  }

  getSuscribedBillboardsIds():Observable<[]> {
    /* Retorna una lista de id de carteleras a la que el usuario se suscribio */    
    return this.http.get<any>(this.url + "carteleras/suscprito/ids?token=" + localStorage.getItem("token"))
  }

  suscribeToBillboard(billboard: Billboard):Observable<[]> {
    var id = billboard.id
    return this.http.get<any>(this.url + "carteleras/suscribir/" + id + "?token=" + localStorage.getItem("token"))
  }

  unsuscribeToBillboard(billboard: Billboard):Observable<[]> {
    var id = billboard.id
    return this.http.get<any>(this.url + "carteleras/desuscribir/" + id + "?token=" + localStorage.getItem("token"))
  }


}
