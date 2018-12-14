import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UseraccountComponent } from './useraccount/useraccount.component';
//import { PublicationComponent } from './publication/publication.component';

const appRoutes: Routes = [
  { path: 'auth/:action', component: LoginComponent },
  { path: 'user/profile', component: UseraccountComponent },
  //{ path: 'billboard/:id', component: BillboardPublicationComponent },
  //{ path: 'billboard/:id_billboard/publication/:id_pub', component: PublicationComponent },
  { path: '', redirectTo: '/carteleras', pathMatch: 'full'},
  { path: '**', redirectTo: '/carteleras', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
