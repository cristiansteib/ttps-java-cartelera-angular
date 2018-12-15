import { Component, OnInit } from '@angular/core';
import { Billboard } from 'src/models/Billboard';
import { BillboardSuscribedListService } from './billboard-suscribed-list.service';

@Component({
  selector: 'app-billboard-suscribed-list',
  templateUrl: './billboard-suscribed-list.component.html',
  styleUrls: ['./billboard-suscribed-list.component.sass']
})
export class BillboardSuscribedListComponent implements OnInit {
  billboards: Billboard[] = undefined
  
  constructor(
    private billboardSuscribedListService: BillboardSuscribedListService
  ) { }

  ngOnInit() {
    this.billboardSuscribedListService.getBillboardsSuscribed().subscribe(
      data => {
        this.billboards = data;
      }
    )
  
    }
  
  }
