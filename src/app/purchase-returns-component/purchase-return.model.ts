export interface PurchaseReturn {
  id: number;
  supplier: string;
  purchaseInvoiceId: number;
  returnDate: string;
  returnItems: ReturnItem[];
  totalCost: number;
  notes?: string;
  status: 'draft' | 'approved' | 'rejected';
}

export interface ReturnItem {
  id: number;
  name: string;
  quantity: number;
  cost: number;
  total: number;
  barcode: string;
  referenceNumber: string;
}
