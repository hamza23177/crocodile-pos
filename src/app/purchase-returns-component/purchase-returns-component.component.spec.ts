import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseReturnsComponentComponent } from './purchase-returns-component.component';

describe('PurchaseReturnsComponentComponent', () => {
  let component: PurchaseReturnsComponentComponent;
  let fixture: ComponentFixture<PurchaseReturnsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchaseReturnsComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseReturnsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
