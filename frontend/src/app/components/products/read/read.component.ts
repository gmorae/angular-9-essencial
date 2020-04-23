import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsModel } from 'src/app/models/products.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { HeaderService } from 'src/app/services/header.service';


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _serviceHeader: HeaderService
    ) { 
      _serviceHeader.headerData = {
        title: 'Lista de produtos', 
        icon: 'list'
      }
    }

  products: ProductsModel[] = this._activatedRoute.snapshot.data.products
  displayedColumns: string[] = ['name', 'image', 'price', 'action'];
  dataSource = new MatTableDataSource<ProductsModel>(this.products);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();    
  }

  cancel(): void {
    this._router.navigate(['/products'])
  }

}
