import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { ProductsModel } from 'src/app/models/products.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  product: ProductsModel = {
    name: "Iphone 8",
    price: 2500,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR3jAZy6iFXjCalP9-ZTFAWIXkEtm6V-I4qcmEfxdnueyIf-ffRljYcJ4V9XSN5orId3k-ODz6ENfQSzi6PXVkZNNyoDVxa&usqp=CAE"
  }
  constructor(
    private _router: Router,
    private _service: ProductsService
  ) { }

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
