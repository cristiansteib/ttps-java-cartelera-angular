import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillboardComponent } from './billboard/billboard.component';
import { PublicationShowComponent } from './publication-show/publication-show.component';
import { PublicationEditComponent } from './publication-edit/publication-edit.component';

const billboardRoutes: Routes = [
  { path: 'carteleras/:id',  component: BillboardComponent },
  { path: 'carteleras/:id_billboard/publicacion/:id_publication',  component: PublicationShowComponent },
  { path: 'publicacion/editar:id/',  component: PublicationEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(billboardRoutes)],
  exports: [RouterModule]
})
export class BillboardRoutingModule { }
