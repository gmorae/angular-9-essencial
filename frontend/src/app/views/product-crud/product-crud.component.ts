import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(
    private _router: Router,
    private _serviceHeader: HeaderService
    ) {
    _serviceHeader.headerData = {
      title: 'Todos os produtos', 
      icon: 'shopping_basket'
    }
  }

  ngOnInit(): void {
  }

  create(): void {
    this._router.navigate(['/create'])
  }

  read(): void {
    this._router.navigate(['/read'])
  }

}
