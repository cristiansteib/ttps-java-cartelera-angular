import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuscribersShowComponent } from './suscribers-show.component';

describe('SuscribersShowComponent', () => {
  let component: SuscribersShowComponent;
  let fixture: ComponentFixture<SuscribersShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuscribersShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuscribersShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
