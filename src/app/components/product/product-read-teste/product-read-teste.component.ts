import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable} from '@angular/material/table';
import {ProductReadTesteDataSource} from './product-read-teste-datasource';
import {Product} from "../product.model";

@Component({
    selector: 'app-product-read-teste',
    templateUrl: './product-read-teste.component.html',
    styleUrls: ['./product-read-teste.component.css']
})
export class ProductReadTesteComponent implements AfterViewInit, OnInit {
    // Decorators
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatTable) table: MatTable<Product>;
    dataSource: ProductReadTesteDataSource;

    /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
    displayedColumns = ['id', 'name', 'price'];

    ngOnInit() {
        this.dataSource = new ProductReadTesteDataSource();
    }

    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource; // poderia ser usado o bind nesse caso [datasource]
    }
}
