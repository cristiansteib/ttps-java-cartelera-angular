import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillboardsRoutingModule } from './billboards-routing.module';
import { BillboardsComponent } from './billboards.component';
import { BillboardsListComponent } from './billboards-list/billboards-list.component';
import { FooterComponent } from 'src/app/footer/footer.component';

@NgModule({
  declarations: [
    FooterComponent,
    BillboardsComponent,
    BillboardsListComponent,
  ],
  imports: [
    CommonModule,
    BillboardsRoutingModule
  ]
})
export class BillboardsModule { }
