import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillboardRoutingModule } from './billboard-routing.module';
import { BillboardComponent } from './billboard/billboard.component';
import { PublicationListComponent } from './publication-list/publication-list.component';

@NgModule({
  declarations: [
    BillboardComponent,
    PublicationListComponent
  ],
  imports: [
    CommonModule,
    BillboardRoutingModule
  ]
})
export class BillboardModule { 
  
}
