import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login/login-form/loginForm.component';
import { HttpClientModule } from '@angular/common/http';
import { BillboardComponent } from './cartelera/billboard.component';
import { BillboardPublicationComponent } from './billboard-publication/billboard-publication.component';
import { UseraccountComponent } from './useraccount/useraccount.component';
import { PublicationComponent } from './publication/publication.component'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
    BillboardComponent,
    BillboardPublicationComponent,
    UseraccountComponent,
    PublicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
 }
