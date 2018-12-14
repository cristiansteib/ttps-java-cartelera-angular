import { Component, OnInit } from '@angular/core';
import { Publication } from 'src/models/Publication';
import { ActivatedRoute } from '@angular/router';
import { PublicationListService } from './publication-list.service';

@Component({
  selector: 'billboard-publication-list',
  templateUrl: './publication-list.component.html',
  styleUrls: ['./publication-list.component.sass']
})
export class PublicationListComponent implements OnInit {
  publications: Publication[] = [];


  constructor(
    private activatedRoute: ActivatedRoute,
    private publicationListService: PublicationListService
    ){}


  ngOnInit(){
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.publicationListService.getBillboardPublications(params['id']).subscribe(
          data => {
            this.publications = data;
          }
        );
      }
    });
  }


}
