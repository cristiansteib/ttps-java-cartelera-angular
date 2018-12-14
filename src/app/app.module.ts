import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OnInit} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login/login-form/loginForm.component';
import { HttpClientModule } from '@angular/common/http';
import { UseraccountComponent } from './useraccount/useraccount.component';
import { PublicationComponent } from './publication/publication.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { User } from 'src/models/user';
import { LoginService } from './login/login.service';
import { BillboardsModule } from './billboards/billboards.module';
import { BillboardModule } from './billboard/billboard.module';
import { PublicationShowComponent } from './billboard/publication-show/publication-show.component';
import { PublicationEditComponent } from './billboard/publication-edit/publication-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
    UseraccountComponent,
    PublicationComponent,
    PublicationShowComponent,
    PublicationEditComponent,
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    BillboardsModule,
    BillboardModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
