import { Component } from '@angular/core';
import { GlobalsService } from './globals.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
 constructor(public globalService: GlobalsService){}

  get isLogged(){
    return this.globalService.is_logged
  }
  title = 'cartelera-java-frontend';
}
