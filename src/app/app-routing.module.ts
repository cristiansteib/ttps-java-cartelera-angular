import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BillboardComponent } from './cartelera/billboard.component';
import { BillboardPublicationComponent } from './billboard-publication/billboard-publication.component';
import { UseraccountComponent } from './useraccount/useraccount.component';
import { PublicationComponent } from './publication/publication.component';

const routes: Routes = [
  { path: 'auth/:action', component: LoginComponent },
  { path: 'user/profile', component: UseraccountComponent },
  { path: 'billboard/:id', component: BillboardPublicationComponent },
  { path: 'billboard/:id_billboard/publication/:id_pub', component: PublicationComponent },
  { path: '', component: BillboardComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
