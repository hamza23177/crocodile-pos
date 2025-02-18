import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseRequestComponentComponent } from './purchase-request-component.component';

describe('PurchaseRequestComponentComponent', () => {
  let component: PurchaseRequestComponentComponent;
  let fixture: ComponentFixture<PurchaseRequestComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchaseRequestComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseRequestComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
