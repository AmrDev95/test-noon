import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeDeliveryBranchesComponent } from './free-delivery-branches.component';

describe('FreeDeliveryBranchesComponent', () => {
  let component: FreeDeliveryBranchesComponent;
  let fixture: ComponentFixture<FreeDeliveryBranchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeDeliveryBranchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeDeliveryBranchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
