import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-variation',
  imports: [MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule],
  templateUrl: './variation.component.html',
  styleUrl: './variation.component.css'
})
export class VariationComponent {

  displayedColumns: string[] = ['name', 'types', 'action'];
  dataSource = [
    { name: 'الطحين', types: ' 1 كغ, 5 كغ, 10 كغ ' },
    { name: 'السكر', types: '1 كغ, 3 كغ, 5 كغ' },
    { name: 'زيت دوار الشمس', types: '1 لتر, 2 لتر, 5 لتر	' }
  ];

  filteredDataSource = [...this.dataSource];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();

    // تصفية البيانات بناءً على القيم المدخلة
    this.filteredDataSource = this.dataSource.filter(item =>
      item.name.toLowerCase().includes(filterValue) ||
      item.types.toLowerCase().includes(filterValue)
    );
  }


}
