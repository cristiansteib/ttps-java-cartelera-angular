import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillboardsListComponent } from './billboards-list.component';

describe('BillboardsListComponent', () => {
  let component: BillboardsListComponent;
  let fixture: ComponentFixture<BillboardsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillboardsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillboardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
