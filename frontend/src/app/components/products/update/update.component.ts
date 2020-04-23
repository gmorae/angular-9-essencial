import { Component, OnInit } from '@angular/core';
import { ProductsModel } from 'src/app/models/products.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  product: ProductsModel = {
    name: "",
    price: null,
    image: ""
  }

  constructor(
    private _router: Router,
    private _service: ProductsService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    const id: number = +this._activatedRoute.snapshot.paramMap.get('id')
    
    this._service.getById(id)
      .subscribe((product: ProductsModel) => {
        this.product = product
      })
  }

  update(): void {
    this._service.updateProduct(this.product).subscribe(() => {
      this._service.showMessage("Produto editado com sucesso")
      this._router.navigate(['/read'])
    })
  }

  cancel(): void {
    this._router.navigate(['/read'])
  }

}
