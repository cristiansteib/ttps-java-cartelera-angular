import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Publication} from 'src/models/Publication';
import {Billboard} from 'src/models/Billboard';
import {BillboardService} from './billboard.service';
import {User} from '../../../models/user';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-billboard',
  templateUrl: './billboard.component.html',
  styleUrls: ['./billboard.component.sass']
})
export class BillboardComponent implements OnInit {
  publications: Publication[] = [];
  billboardSelected: Billboard;
  usersSuscribed: User[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private billboardService: BillboardService) {
  }

  ngOnInit() {

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
}
