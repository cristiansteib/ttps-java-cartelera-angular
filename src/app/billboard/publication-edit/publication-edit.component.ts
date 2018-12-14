import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {NgForm} from '@angular/forms';
import { Publication } from 'src/models/Publication';
import { ActivatedRoute } from '@angular/router';
import { PublicationEditService } from './publication-edit.service';
import { PublicationShowService } from '../publication-show/publication-show.service';

@Component({
  selector: 'app-publication-edit',
  templateUrl: './publication-edit.component.html',
  styleUrls: ['./publication-edit.component.sass']
})
export class PublicationEditComponent implements OnInit {
  publication : Publication
  submitted = false

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private publicationEditService: PublicationEditService,
    private publicationShowService: PublicationShowService,
    ) { }

  ngOnInit() {
    this.publication = new Publication()
    
    this.activatedRoute.params.subscribe((params) => {
      if (params['id_billboard'] && params['id_publication']) {
        this.publicationShowService.getPublication(params['id_billboard'], params['id_publication']).subscribe(
          publication => {
            this.publication = publication
          }
        )
      }
    })
    //loadMaterilize(); //global function

  }

  onSubmit(formulario: NgForm) {
    if(formulario.valid) {
      this.submitted = true
      this.publicationEditService.update(this.publication).subscribe(
        publication => {
          formulario.reset
          this.location.back()
        }
      )
    }
  }

  goBack(): void {
    this.location.back();
  }
}
