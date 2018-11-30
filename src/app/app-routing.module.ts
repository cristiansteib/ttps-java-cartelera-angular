import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BillboardComponent } from './cartelera/billboard.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: BillboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
