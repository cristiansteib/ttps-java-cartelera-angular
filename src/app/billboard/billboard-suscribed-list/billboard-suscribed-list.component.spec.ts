import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillboardSuscribedListComponent } from './billboard-suscribed-list.component';

describe('BillboardSuscribedListComponent', () => {
  let component: BillboardSuscribedListComponent;
  let fixture: ComponentFixture<BillboardSuscribedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillboardSuscribedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillboardSuscribedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
