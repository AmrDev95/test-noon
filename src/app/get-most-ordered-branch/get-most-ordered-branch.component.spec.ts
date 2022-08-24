import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMostOrderedBranchComponent } from './get-most-ordered-branch.component';

describe('GetMostOrderedBranchComponent', () => {
  let component: GetMostOrderedBranchComponent;
  let fixture: ComponentFixture<GetMostOrderedBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetMostOrderedBranchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetMostOrderedBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
