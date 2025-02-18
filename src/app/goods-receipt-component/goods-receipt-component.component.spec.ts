import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsReceiptComponentComponent } from './goods-receipt-component.component';

describe('GoodsReceiptComponentComponent', () => {
  let component: GoodsReceiptComponentComponent;
  let fixture: ComponentFixture<GoodsReceiptComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoodsReceiptComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoodsReceiptComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
