import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Publication} from 'src/models/Publication';
import {Billboard} from 'src/models/Billboard';
import {BillboardService} from './billboard.service';
import {User} from '../../../models/user';
import {NgForm} from '@angular/forms';
import { BillboardsService } from 'src/app/billboards/billboards.service';

@Component({
  selector: 'app-billboard',
  templateUrl: './billboard.component.html',
  styleUrls: ['./billboard.component.sass']
})
export class BillboardComponent implements OnInit {
  publications: Publication[] = [];
  billboardSelected: Billboard;
  usersSuscribed: User[];
  suscribedBillboardsIds: number[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private billboardService: BillboardService,
    private billboardsService: BillboardsService
    ) {
  }

  ngOnInit() {
    this.updateBillboardsIdsSuscribed()
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {

        /* load all the data for the current billboard */
        this.billboardService.getBillboardData(params['id']).subscribe(
          data => {
            this.billboardSelected = data;
          }
        );

        /* load all users suscribed to the current billboard */
        this.billboardService.getUsersSuscribedToBillboard(params['id']).subscribe(
          data => {
            this.usersSuscribed = data;
          }
        );
        

      }
    });
  }

  updateBillboardsIdsSuscribed() {
    // fill the array with the ids of suscribed billboards
    this.billboardsService.getSuscribedBillboardsIds().subscribe(
      billboardsIds => {
        this.suscribedBillboardsIds = billboardsIds;
      }
    );
  }

  isSuscribed(){
    if (!this.suscribedBillboardsIds) {
      return false;
    }
    return this.suscribedBillboardsIds.includes(this.billboardSelected.id);  
  }

  unsuscribe() {
    this.billboardsService.unsuscribeToBillboard(this.billboardSelected).subscribe(
      data => {
        this.suscribedBillboardsIds = data;

      }
    );
  }

  suscribe() {
    this.billboardsService.suscribeToBillboard(this.billboardSelected).subscribe(
      data => {
        this.suscribedBillboardsIds = data;
      }
    );
  }

}
