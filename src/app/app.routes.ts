import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component'
import { SupplyRequestComponentComponent } from './supply-request-component/supply-request-component.component';
import {PurchaseRequestComponentComponent} from './purchase-request-component/purchase-request-component.component';
import {GoodsReceiptComponentComponent} from './goods-receipt-component/goods-receipt-component.component';
import {PurchaseInvoiceComponentComponent} from './purchase-invoice-component/purchase-invoice-component.component';
import {PurchaseReturnsComponentComponent} from './purchase-returns-component/purchase-returns-component.component';
import {ProductsComponent} from './products/products.component';
import {CategoryComponent} from './category/category.component';
import {VariationComponent} from './variation/variation.component';


export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'supplyRequest', component: SupplyRequestComponentComponent },
  { path: 'purchaseRequest', component: PurchaseRequestComponentComponent },
  { path: 'goodsReceipt', component: GoodsReceiptComponentComponent },
  { path: 'purchaseInvoice', component: PurchaseInvoiceComponentComponent },
  { path: 'purchaseReturns', component: PurchaseReturnsComponentComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'variation', component: VariationComponent },




  // يمكنك إضافة المزيد من المسارات هنا
];
