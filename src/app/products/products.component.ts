import { Component,OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';

interface Product {
  image: string;
  name: string;
  code: string;
  brand: string;
  price: number;
  unit: string;
  stock: number;
  createdOn: string;
}

@Component({
  selector: 'app-products',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  displayedColumns: string[] = ['image', 'name', 'code', 'brand', 'price', 'unit', 'stock', 'createdOn', 'actions'];
  dataSource: MatTableDataSource<Product>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  products: Product[] = [
    { image: 'assets/logo.png', name: 'سكر أبيض', code: '23177', brand: 'شركة الشام', price: 100, unit: 'ليرة سورية', stock: 7, createdOn: '2025-02-18' },
    { image: 'assets/logo.png', name: 'طحين', code: '123456789', brand: 'شركة الراعي', price: 13, unit: 'ليرة سورية', stock: 3, createdOn: '2025-02-08' },
    { image: 'assets/logo.png', name: 'زيت نباتي', code: '123456', brand: 'شركة الخير', price: 12, unit: 'ليرة سورية', stock: 11, createdOn: '2025-02-06' }
  ];

  constructor() {
    this.dataSource = new MatTableDataSource(this.products);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteProduct(product: Product) {
    this.dataSource.data = this.dataSource.data.filter(p => p !== product);
  }

}
