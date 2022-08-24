import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPercentageForVendorsComponent } from './get-percentage-for-vendors.component';

describe('GetPercentageForVendorsComponent', () => {
  let component: GetPercentageForVendorsComponent;
  let fixture: ComponentFixture<GetPercentageForVendorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetPercentageForVendorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetPercentageForVendorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
