import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { ProductsModel } from 'src/app/models/products.model';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  product: ProductsModel = {
    name: "",
    price: null,
    image: ""
  }
  constructor(
    private _router: Router,
    private _service: ProductsService,
    private _serviceHeader: HeaderService
  ) { 
    _serviceHeader.headerData = {
      title: 'Cadastrar produto', 
      icon: 'add'
    }
  }

  ngOnInit(): void {
  }

  create(): void {
    this._service.createProduct(this.product).subscribe(() => {
      this._service.showMessage("Produto cadastrado com sucesso")
      this._router.navigate(['/products'])
    })
  }

  cancel(): void {
    this._router.navigate(['/products'])
  }
}
