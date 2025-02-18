import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PurchaseReturn, ReturnItem } from './purchase-return.model';
interface PurchaseReturnItem {
  name: string;
  quantity: number;
  cost: number;
  supplier: string;
  barcode: string;
}


@Component({
  selector: 'app-purchase-returns-component',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './purchase-returns-component.component.html',
  styleUrl: './purchase-returns-component.component.css'
})
export class PurchaseReturnsComponentComponent{

  purchaseReturnForm: FormGroup;
  purchaseReturns: PurchaseReturn[] = [];
  statuses = [
    { label: 'مسودة', value: 'draft' },
    { label: 'موافق عليها', value: 'approved' },
    { label: 'مرفوضة', value: 'rejected' }
  ];

  constructor(private fb: FormBuilder) {
    this.purchaseReturnForm = this.fb.group({
      supplier: [''],
      purchaseInvoiceId: [''],
      returnDate: [new Date().toISOString().split('T')[0]],
      returnItems: this.fb.array([]),
      totalCost: [0],
      notes: [''],
      status: ['draft']
    });
  }

  get returnItems(): FormArray {
    return this.purchaseReturnForm.get('returnItems') as FormArray;
  }

  addReturnItem() {
    const item: ReturnItem = {
      id: 0, name: '', quantity: 1, cost: 0, total: 0, barcode: '', referenceNumber: ''
    };
    this.returnItems.push(this.fb.group(item));
  }

  removeReturnItem(index: number) {
    this.returnItems.removeAt(index);
  }

  calculateTotal() {
    let total = 0;
    this.returnItems.controls.forEach((item) => {
      total += item.get('quantity')!.value * item.get('cost')!.value;
    });
    this.purchaseReturnForm.patchValue({ totalCost: total });
  }

  submitForm() {
    const newReturn: PurchaseReturn = this.purchaseReturnForm.value;
    newReturn.id = this.purchaseReturns.length + 1;
    this.purchaseReturns.push(newReturn);
    this.purchaseReturnForm.reset();
  }

  deleteReturn(id: number) {
    this.purchaseReturns = this.purchaseReturns.filter(returnOrder => returnOrder.id !== id);
  }

  printPurchaseReturns() {
    const printContent = document.getElementById('printableSection');
    const originalContent = document.body.innerHTML;

    if (printContent) {
      document.body.innerHTML = printContent.innerHTML;
      window.print();
      document.body.innerHTML = originalContent;
      location.reload(); // لإعادة تحميل الصفحة بعد الطباعة
    }
  }

  currentUser = "محمد علي";
reviewer = "أحمد يوسف";   

}
