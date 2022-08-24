import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastoffersComponent } from './lastoffers.component';

describe('LastoffersComponent', () => {
  let component: LastoffersComponent;
  let fixture: ComponentFixture<LastoffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastoffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastoffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
