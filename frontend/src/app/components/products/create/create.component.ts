import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(
    private _router: Router,
    private _service: ProductsService
  ) { }

  ngOnInit(): void {
  }

  create(): void {
    this._service.showMessage("Produto cadastrado com sucesso")
  }

  cancel(): void {
    this._router.navigate(['/products'])
  }
}
