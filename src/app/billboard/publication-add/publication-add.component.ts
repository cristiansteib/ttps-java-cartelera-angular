import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Publication } from 'src/models/Publication';
import { Location } from '@angular/common';
import { PublicationAddService } from './publication-add.service';
import { ActivatedRoute } from '@angular/router';
declare var loadMaterilize: any;

@Component({
  selector: 'app-publication-add',
  templateUrl: './publication-add.component.html',
  styleUrls: ['./publication-add.component.sass']
})
export class PublicationAddComponent implements OnInit {
  billboardSelectedId = undefined

  constructor(
    private location: Location,
    private publicationAddService: PublicationAddService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id_billboard']) {
        this.billboardSelectedId = params['id_billboard']
      }
    })
    loadMaterilize(); //global function
  }

  newPublication = new Publication()
  submitted = false

  onSubmit(formulario: NgForm) {
    console.log(this.newPublication)

    if(formulario.valid) {
      this.submitted = true
      this.publicationAddService.addBillboardPublication(this.billboardSelectedId, this.newPublication).subscribe(
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
