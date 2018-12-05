import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BillboardPublicationService} from './billboard-publication.service';
import {Publication} from 'src/models/Publication';
import {Billboard} from 'src/models/Billboard';
import {BillboardService} from '../cartelera/billboard.service';

@Component({
  selector: 'app-billboard-publication',
  templateUrl: './billboard-publication.component.html',
  styleUrls: ['./billboard-publication.component.sass']
})
export class BillboardPublicationComponent implements OnInit {
  publications: Publication[] = [];
  billboardSelected: Billboard;

  constructor(
    private activatedRoute: ActivatedRoute,
    private billboardPublicationService: BillboardPublicationService,
    private billboardService: BillboardService) {
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        /* load all publication for the current billboard */
        this.billboardPublicationService.getBillboardPublications(params['id']).subscribe(
          data => {
            this.publications = data;
          }
        );

        /* load all the data for the billboard */
        this.billboardService.getBillboardData(params['id']).subscribe(
          data => {
            this.billboardSelected = data;
          }
        );

      }
    });
  }


}
