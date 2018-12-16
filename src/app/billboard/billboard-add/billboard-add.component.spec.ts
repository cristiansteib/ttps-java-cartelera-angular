import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillboardAddComponent } from './billboard-add.component';

describe('BillboardAddComponent', () => {
  let component: BillboardAddComponent;
  let fixture: ComponentFixture<BillboardAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillboardAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillboardAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
