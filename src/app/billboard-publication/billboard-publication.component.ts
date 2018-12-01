import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BillboardPublicationService } from './billboard-publication.service';
import { Publication } from 'src/models/Publication';

@Component({
  selector: 'app-billboard-publication',
  templateUrl: './billboard-publication.component.html',
  styleUrls: ['./billboard-publication.component.sass']
})
export class BillboardPublicationComponent implements OnInit {
  publications:Publication[] = []
  constructor(private activatedRoute: ActivatedRoute, private billboardPublicationService: BillboardPublicationService) { }

    ngOnInit() {
      this.activatedRoute.params.subscribe((params) =>{
        if (params['id']) { 
          this.billboardPublicationService.getBillboardPublications(params['id']).subscribe(
            data => {
              this.publications = data
            }
          )
        }
    });
  }
  

}
