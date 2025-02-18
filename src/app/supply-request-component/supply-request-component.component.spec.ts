import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyRequestComponentComponent } from './supply-request-component.component';

describe('SupplyRequestComponentComponent', () => {
  let component: SupplyRequestComponentComponent;
  let fixture: ComponentFixture<SupplyRequestComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupplyRequestComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplyRequestComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
