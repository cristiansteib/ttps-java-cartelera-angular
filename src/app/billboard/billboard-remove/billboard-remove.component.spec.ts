import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillboardRemoveComponent } from './billboard-remove.component';

describe('BillboardRemoveComponent', () => {
  let component: BillboardRemoveComponent;
  let fixture: ComponentFixture<BillboardRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillboardRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillboardRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
