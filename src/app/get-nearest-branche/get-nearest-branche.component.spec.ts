import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetNearestBrancheComponent } from './get-nearest-branche.component';

describe('GetNearestBrancheComponent', () => {
  let component: GetNearestBrancheComponent;
  let fixture: ComponentFixture<GetNearestBrancheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetNearestBrancheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetNearestBrancheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
