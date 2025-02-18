import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseInvoiceComponentComponent } from './purchase-invoice-component.component';

describe('PurchaseInvoiceComponentComponent', () => {
  let component: PurchaseInvoiceComponentComponent;
  let fixture: ComponentFixture<PurchaseInvoiceComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchaseInvoiceComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseInvoiceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
