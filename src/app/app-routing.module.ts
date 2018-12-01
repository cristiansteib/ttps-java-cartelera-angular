import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BillboardComponent } from './cartelera/billboard.component';
import { BillboardPublicationComponent } from './billboard-publication/billboard-publication.component';

const routes: Routes = [
  { path: 'auth/:action', component: LoginComponent },
  { path: 'billboard/:id', component: BillboardPublicationComponent },
  { path: '', component: BillboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
