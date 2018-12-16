import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BillboardRemoveService } from './billboard-remove.service';
import {  of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-billboard-remove',
  templateUrl: './billboard-remove.component.html',
  styleUrls: ['./billboard-remove.component.sass']
})
export class BillboardRemoveComponent implements OnInit {
  billboardId: number = undefined
  feedbackMsg: string = undefined
  feedbackMsgColor: string = "green"

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private billboardRemoveService: BillboardRemoveService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.billboardId = params['id']
      }
    })
  }

  cancel() {
    this.router.navigate(['/carteleras', this.billboardId])
  }

  delete() {
    this.billboardRemoveService.remove(this.billboardId).subscribe(
      data => {
        this.feedbackMsg= "Cartelera borrada, será redirigido al inicio."
        this.feedbackMsgColor = "green"
        return of(true).pipe(
          delay(2000),
          tap(val => this.router.navigate(['/carteleras']))
        );
        
      },

      error => {
        this.feedbackMsg= "Ocurrio un error al borrar la cartelera."
        this.feedbackMsgColor = "red"
      }
    )
  }
}
