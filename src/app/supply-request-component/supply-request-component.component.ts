import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-supply-request-component',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './supply-request-component.component.html',
  styleUrl: './supply-request-component.component.css'
})
export class SupplyRequestComponentComponent {

  item = { name: '', quantity: null, unit: '' };
  items: { name: string; quantity: number | null; unit: string }[] = [];

  addItem() {
    if (this.item.name && this.item.quantity && this.item.quantity > 0 && this.item.unit) {
      this.items.push({ ...this.item });
      this.item = { name: '', quantity: null, unit: '' };
    }
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }

  submitRequest() {
    if (this.items.length) {
      console.log('تم إرسال الطلب:', this.items);
      alert('تم إرسال الطلب بنجاح!');
    }
  }

}
