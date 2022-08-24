import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostSellItemsComponent } from './most-sell-items.component';

describe('MostSellItemsComponent', () => {
  let component: MostSellItemsComponent;
  let fixture: ComponentFixture<MostSellItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostSellItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostSellItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
