import { Component, OnInit } from '@angular/core';
import { Billboard } from 'src/models/Billboard';
import { Location } from '@angular/common';
import { BillboardAddService } from './billboard-add.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-billboard-add',
  templateUrl: './billboard-add.component.html',
  styleUrls: ['./billboard-add.component.sass']
})
export class BillboardAddComponent implements OnInit {
  newBillboard: Billboard = new Billboard('Titulo', 'Descripcion de la cartelera')

  constructor(
    private location: Location,
    private billboardAddService: BillboardAddService
  ) { }


  ngOnInit() {
  }

  onSubmit(formulario: NgForm) {
    if(formulario.valid) {
      this.billboardAddService.create(this.newBillboard).subscribe(
        billboard => {
          formulario.reset
          this.location.go("carteleras/" + billboard.id)
        }
      )
    }
  }

  goBack(): void{
    this.location.back()
  }
}
