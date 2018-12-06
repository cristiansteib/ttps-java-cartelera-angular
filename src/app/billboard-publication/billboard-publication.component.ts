import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BillboardPublicationService} from './billboard-publication.service';
import {Publication} from 'src/models/Publication';
import {Billboard} from 'src/models/Billboard';
import {BillboardService} from '../cartelera/billboard.service';
import {User} from '../../models/user';
import {NgForm} from '@angular/forms';

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


  newPublication = new Publication()
  submitted = false

  onSubmit(formulario: NgForm) {
    if(formulario.valid) {
      this.submitted = true
      console.log(this.newPublication)
      this.billboardPublicationService.addBillboardPublication(this.billboardSelected.id, this.newPublication).subscribe(
        publication => {
          this.publications.push(publication)
        }
      )
    }
  }


}
