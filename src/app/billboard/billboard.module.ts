import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillboardRoutingModule } from './billboard-routing.module';
import { BillboardComponent } from './billboard/billboard.component';
import { PublicationListComponent } from './publication-list/publication-list.component';
import { PublicationShowComponent } from './publication-show/publication-show.component';
import { PublicationEditComponent } from './publication-edit/publication-edit.component';
import { PublicationAddComponent } from './publication-add/publication-add.component';
import { FormsModule } from '@angular/forms';
import { SuscribersShowComponent } from './suscribers-show/suscribers-show.component';
import { PermissionComponent } from './permission/permission.component';
import { BillboardSuscribedListComponent } from './billboard-suscribed-list/billboard-suscribed-list.component';
import { BillboardAddComponent } from './billboard-add/billboard-add.component';

@NgModule({
  declarations: [
    BillboardComponent,
    PublicationListComponent,
    PublicationShowComponent,
    PublicationEditComponent,
    PublicationAddComponent,
    SuscribersShowComponent,
    PermissionComponent,
    BillboardSuscribedListComponent,
    BillboardAddComponent
  ],
  imports: [
    CommonModule,
    BillboardRoutingModule,
    FormsModule
  ]
})
export class BillboardModule { 
  
}
