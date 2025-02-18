import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
interface PurchaseItem {
  name: string;
  quantity: number;
  received: number;
  unit: string;
}

interface PurchaseOrder {
  id: number;
  supplier: string;
  items: PurchaseItem[];
}
@Component({
  selector: 'app-goods-receipt-component',
  imports: [FormsModule , CommonModule],
  templateUrl: './goods-receipt-component.component.html',
  styleUrl: './goods-receipt-component.component.css'
})
export class GoodsReceiptComponentComponent {

  warehouses = ['المستودع الأول', 'المستودع الثاني', 'مستودع الثالث'];
  selectedWarehouse: string = '';
  purchaseOrders = [
    { id: 101, supplier: 'المودر الأول', items: [
      { name: 'كيس طحين', quantity: 10, received: 0, unit: 'قطعة' },
      { name: 'كيس سكر ', quantity: 5, received: 0, unit: 'قطعة' }
    ]},
    { id: 102, supplier: ' المورد الثاني  ', items: [
      { name: '  زيت', quantity: 50, received: 0, unit: 'ليتر' },
      { name: 'مياه ', quantity: 30, received: 0, unit: 'ليتر' }
    ]}
  ];

  selectedPurchaseOrder: any = null;
  receivedItems: any[] = [];

  selectPurchaseOrder(event: Event) {
    const target = event.target as HTMLSelectElement; // تأكيد أن target هو <select>
    const index = Number(target.value); // استخراج الفهرس وتحويله إلى رقم

    if (!isNaN(index) && index >= 0 && index < this.purchaseOrders.length) {
      this.selectedPurchaseOrder = this.purchaseOrders[index];

      // تعيين العناصر المستلمة وضمان أن `item` معرف كم من نوع `PurchaseItem`
      this.receivedItems = this.selectedPurchaseOrder.items.map((item: PurchaseItem) => ({ ...item }));
    }
  }


  updateReceivedQuantity(index: number, event: Event) {
    const target = event.target as HTMLInputElement;
    const value = Number(target?.value);
    if (!isNaN(value) && value >= 0 && value <= this.receivedItems[index].quantity) {
      this.receivedItems[index].received = value;
    }
  }
  submitGoodsReceipt() {
    console.log('سند استلام البضاعة:', {
      warehouse: this.selectedWarehouse,
      order: this.selectedPurchaseOrder.id,
      items: this.receivedItems.filter(item => item.received > 0)
    });

    alert('تم حفظ سند الاستلام بنجاح!');
  }
}
