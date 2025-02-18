import { Component ,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-purchase-invoice-component',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './purchase-invoice-component.component.html',
  styleUrl: './purchase-invoice-component.component.css'
})
export class PurchaseInvoiceComponentComponent implements OnInit {
  purchaseInvoiceForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.purchaseInvoiceForm = this.fb.group({
      supplier: ['', Validators.required],
      invoiceDate: ['', Validators.required],
      receivingNotes: this.fb.array([]),
      additionalCosts: this.fb.group({
        loading: [0],
        storage: [0],
        customs: [0],
        applyTo: ['cost']
      })
    });
  }

  get receivingNotes(): FormArray {
    return this.purchaseInvoiceForm.get('receivingNotes') as FormArray;
  }

  addReceivingNote() {
    this.receivingNotes.push(
      this.fb.group({
        noteId: ['', Validators.required],
        items: this.fb.array([])
      })
    );
  }

  removeReceivingNote(index: number) {
    this.receivingNotes.removeAt(index);
  }

  getItems(index: number): FormArray {
    return this.receivingNotes.at(index).get('items') as FormArray;
  }

  addItem(noteIndex: number) {
    this.getItems(noteIndex).push(
      this.fb.group({
        name: ['', Validators.required],
        quantity: [1, Validators.required],
        price: [0, Validators.required]
      })
    );
  }

  removeItem(noteIndex: number, itemIndex: number) {
    this.getItems(noteIndex).removeAt(itemIndex);
  }

  submitInvoice() {
    if (this.purchaseInvoiceForm.valid) {
      console.log('تم إرسال الفاتورة:', this.purchaseInvoiceForm.value);
      alert('تم حفظ الفاتورة بنجاح!');
    }
  }


}
