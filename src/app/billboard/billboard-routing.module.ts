import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillboardComponent } from './billboard/billboard.component';
import { PublicationShowComponent } from './publication-show/publication-show.component';
import { PublicationEditComponent } from './publication-edit/publication-edit.component';
import { PublicationAddComponent } from './publication-add/publication-add.component';
import { SuscribersShowComponent } from './suscribers-show/suscribers-show.component';
import { PermissionComponent } from './permission/permission.component';

const billboardRoutes: Routes = [
  { path: 'carteleras/:id',  component: BillboardComponent },
  { path: 'carteleras/:id_billboard/publicacion/:id_publication',  component: PublicationShowComponent },
  { path: 'carteleras/:id_billboard/publicacion/:id_publication/editar',  component: PublicationEditComponent },
  { path: 'carteleras/:id_billboard/agregar-publicacion',  component: PublicationAddComponent },
  { path: 'carteleras/:id_billboard/suscriptores',  component: SuscribersShowComponent },
  { path: 'carteleras/:id_billboard/administrar_permisos',  component: PermissionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(billboardRoutes)],
  exports: [RouterModule]
})
export class BillboardRoutingModule { }
