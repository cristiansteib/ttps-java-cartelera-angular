import { Component, OnInit } from '@angular/core';
import { BillboardService } from './billboard.service';
import { Billboard } from 'src/models/Billboard';
import { GlobalsService } from '../globals.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-billboard',
  templateUrl: './billboard.component.html',
  styleUrls: ['./billboard.component.sass']
})
export class BillboardComponent implements OnInit {
  billboards: Billboard[];
  
  constructor(private billboardService: BillboardService,private globalService: GlobalsService, private activatedRoute: ActivatedRoute) { 
    this.billboardService.getAllBillboards().subscribe(
      billboards => {
        this.billboards = billboards
      }
    )
  }

  ngOnInit() {}
  
  unsuscribe(billboard: Billboard){
    console.log(billboard)
  }
  
  suscribe(billboard: Billboard){
    console.log(billboard)
  }

  get isLogged(){
    return this.globalService.is_logged
}

}
