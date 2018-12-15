import { Component, OnInit } from '@angular/core';
import { SuscribersShowService } from './suscribers-show.service';
import { User } from 'src/models/user';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-suscribers-show',
  templateUrl: './suscribers-show.component.html',
  styleUrls: ['./suscribers-show.component.sass']
})
export class SuscribersShowComponent implements OnInit {
  users : User[]

  constructor(
    private suscribersShowService : SuscribersShowService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id_billboard']) {
        this.suscribersShowService.getUsersSuscribedToBillboard(params['id_billboard']).subscribe(
          users => {
            this.users = users
          }
        )
      }
    })
  }

  goBack(): void{
    this.location.back()
  }

}
