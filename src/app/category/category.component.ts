import { Component,ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

interface ProductCategory {
  image: string;
  name: string;
  productCount: number;
}

@Component({
  selector: 'app-category',
  imports: [MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit{
  displayedColumns: string[] = ['image', 'name', 'productCount', 'actions'];
  dataSource = new MatTableDataSource<ProductCategory>([
    { image: 'assets/milk.png', name: 'المعلبات', productCount: 100 },
    { image: 'assets/cheese.png', name: 'المشروبات', productCount: 500 },
    { image: 'assets/meat.png', name: 'اللحوم ', productCount: 150 }
  ]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  editCategory(category: ProductCategory) {
    console.log('Edit', category);
  }

  deleteCategory(category: ProductCategory) {
    console.log('Delete', category);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
