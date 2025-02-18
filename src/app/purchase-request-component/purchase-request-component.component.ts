import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-purchase-request-component',
  imports: [CommonModule],
  templateUrl: './purchase-request-component.component.html',
  styleUrl: './purchase-request-component.component.css'
})
export class PurchaseRequestComponentComponent {

  items = [
    { name: 'صنف 1', requestedQuantity: 10, availableInMain: 5, availableInBranches: 20, cost: 50 },
    { name: 'صنف 2', requestedQuantity: 15, availableInMain: 0, availableInBranches: 30, cost: 30 },
    { name: 'صنف 3', requestedQuantity: 8, availableInMain: 3, availableInBranches: 15, cost: 40 },
  ];

  purchaseOrder = this.items
    .filter(item => item.requestedQuantity > item.availableInMain)
    .map(item => ({
      name: item.name,
      quantity: item.requestedQuantity - item.availableInMain,
      cost: item.cost
    }));

    updateItem(index: number, field: string, event: any) {
      (this.purchaseOrder[index] as any)[field] = +event.target.value;
    }

    submitPurchaseRequest() {
      console.log('تم إرسال طلب الشراء:', this.purchaseOrder);
      alert('تم إرسال طلب الشراء بنجاح!');
    }

}
