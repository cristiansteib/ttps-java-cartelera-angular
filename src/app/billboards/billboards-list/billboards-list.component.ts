import {Component, OnInit} from '@angular/core';
import {BillboardsService} from '../billboards.service';
import {GlobalsService} from '../../globals.service';
import {ActivatedRoute} from '@angular/router';
import {Billboard} from '../../../models/Billboard';

@Component({
  selector: 'app-billboards-list',
  templateUrl: './billboards-list.component.html',
  styleUrls: ['./billboards-list.component.sass']
})
export class BillboardsListComponent implements OnInit {
  billboards: Billboard[];
  suscribedBillboardsIds: number[];
  isUpdating: Boolean = false
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
    this.isUpdating = true
    this.billboardService.getAllBillboards().subscribe(
      billboards => {
        this.billboards = billboards;
        this.isUpdating = false
      }
    );
  }

  update() {
    this.updateAllExistingBillboards();
    this.updateBillboardsIdsSuscribed();
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
