import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PublicationService} from './publication.service';
import {Publication} from '../../models/Publication';
import { PublicationComment } from 'src/models/PublicationComment';

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
    private publicationService: PublicationService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id_pub']) {
        this.publicationService.getPublication(params['id_billboard'],params['id_pub']).subscribe(
          publication => {
            this.currentPublication = publication;
          }
        );

        this.publicationService.getCommentsAndResponses(params['id_billboard'],params['id_pub']).subscribe(
          publication => {
            this.currentPublicationComments = publication;
          }
        );
        
      }
    });
  }
}
