import { Component, OnInit } from '@angular/core';
import { BillboardService } from './billboard.service';
import { Billboard } from 'src/models/Billboard';

@Component({
  selector: 'app-billboard',
  templateUrl: './billboard.component.html',
  styleUrls: ['./billboard.component.sass']
})
export class BillboardComponent implements OnInit {
  billboards: Billboard[];
  constructor(private billboardService: BillboardService) { 
    this.billboardService.getAllBillboards().subscribe(
      billboards => {
        this.billboards = billboards
      }
    )
  }
  
  ngOnInit() {
  }

}
