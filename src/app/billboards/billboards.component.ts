import {Component, OnInit} from '@angular/core';
import {BillboardsService} from './billboards.service';
import {Billboard} from 'src/models/Billboard';
import {GlobalsService} from '../globals.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-billboards',
  templateUrl: './billboards.component.html',
  styleUrls: ['./billboards.component.sass']
})
export class BillboardsComponent implements OnInit {
  billboards: Billboard[];
  suscribedBillboardsIds: number[];

  constructor(private billboardService: BillboardsService,
              private globalService: GlobalsService,
              private activatedRoute: ActivatedRoute) {
  }


  updateBillboardsIdsSuscribed() {
    // fill the array with the ids of suscribed billboards
    this.billboardService.getSuscribedBillboardsIds().subscribe(
      billboardsIds => {
        this.suscribedBillboardsIds = billboardsIds;
      }
    );
  }

  updateAllExistingBillboards() {
    // fill the array with all billboards
    this.billboardService.getAllBillboards().subscribe(
      billboards => {
        this.billboards = billboards;
      }
    );
  }

  ngOnInit() {
    this.updateAllExistingBillboards();
    this.updateBillboardsIdsSuscribed();
  }

  unsuscribe(billboard: Billboard) {
    this.billboardService.unsuscribeToBillboard(billboard).subscribe(
      data => {
        this.suscribedBillboardsIds = data;

      }
    );
  }

  suscribe(billboard: Billboard) {
    this.billboardService.suscribeToBillboard(billboard).subscribe(
      data => {
        this.suscribedBillboardsIds = data;
      }
    );
  }

  get isLogged() {
    return this.globalService.is_logged;
  }

  isSuscribed(billboard: Billboard) {
    if (!this.suscribedBillboardsIds) {
      return false;
    }
    return this.suscribedBillboardsIds.includes(billboard.id);
  }

}
