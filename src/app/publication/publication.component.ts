import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PublicationService} from './publication.service';
import {Publication} from '../../models/Publication';
import {PublicationComment} from 'src/models/PublicationComment';
import {BillboardService} from '../cartelera/billboard.service';
import {Billboard} from 'src/models/Billboard';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.sass']
})
export class PublicationComponent implements OnInit {
  currentPublication: Publication;
  currentPublicationComments: PublicationComment[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private billboardService: BillboardService,
    private publicationService: PublicationService) {
  }

  billboardSelected: Billboard;

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      /* load all the data for the current billboard */


      if (params['id_pub']) {
        this.publicationService.getPublication(params['id_billboard'], params['id_pub']).subscribe(
          publication => {
            this.currentPublication = publication;
          }
        );

        this.publicationService.getCommentsAndResponses(params['id_billboard'], params['id_pub']).subscribe(
          publication => {
            this.currentPublicationComments = publication;
          }
        );

      }
    });
  }
}
