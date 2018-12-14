import { Component, OnInit } from '@angular/core';
import { Publication } from 'src/models/Publication';
import { PublicationComment } from 'src/models/PublicationComment';
import { ActivatedRoute } from '@angular/router';
import { PublicationShowService } from './publication-show.service';
import { Billboard } from 'src/models/Billboard';
import { BillboardService } from '../billboard/billboard.service';
import { Location } from '@angular/common';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-publication-show',
  templateUrl: './publication-show.component.html',
  styleUrls: ['./publication-show.component.sass']
})
export class PublicationShowComponent implements OnInit {
  currentPublication: Publication;
  currentPublicationComments: PublicationComment[];
  newComment = new PublicationComment('')

  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private billboardService: BillboardService,
    private publicationService: PublicationShowService) {
  }

  billboardSelected: Billboard;

  getAllComments() {
    this.activatedRoute.params.subscribe((params) => {
        this.publicationService.getCommentsAndResponses(params['id_billboard'], params['id_publication']).subscribe(
          publication => {
            this.currentPublicationComments = publication;
          }
        );
      })
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      /* load all the data for the current billboard */


      if (params['id_publication']) {
        this.publicationService.getPublication(params['id_billboard'], params['id_publication']).subscribe(
          publication => {
            this.currentPublication = publication;
          }
        );

        this.publicationService.getCommentsAndResponses(params['id_billboard'], params['id_publication']).subscribe(
          publication => {
            this.currentPublicationComments = publication;
          }
        );

      }
    });
  }

  onSubmitComment(formulario: NgForm) {
    if(formulario.valid) {
      this.publicationService.addComment(this.currentPublication.id, this.newComment).subscribe(
        comment => {
          formulario.reset
          this.newComment = new PublicationComment('')
          this.getAllComments()
        }
      )
    }
  }

}
