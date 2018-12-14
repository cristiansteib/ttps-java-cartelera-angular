import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillboardsComponent } from './billboards.component';

const billboardsRoutes: Routes = [
  { path: 'carteleras',  component: BillboardsComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(billboardsRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class BillboardsRoutingModule { }
