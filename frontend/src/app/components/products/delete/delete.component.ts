import { Component, OnInit } from '@angular/core';
import { ProductsModel } from 'src/app/models/products.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  product: ProductsModel = {
    name: "",
    price: null,
    image: ""
  }

  constructor(
    private _router: Router,
    private _service: ProductsService,
    private _activatedRoute: ActivatedRoute,
    private _serviceHeader: HeaderService
    ) { 
      _serviceHeader.headerData = {
        title: 'Excluir produto', 
        icon: 'delete'
      }
    }

  ngOnInit(): void {

    const id: number = +this._activatedRoute.snapshot.paramMap.get('id')
    
    this._service.getById(id)
      .subscribe((product: ProductsModel) => {
        this.product = product
      })
  }

  delete(): void {
    this._service.deleteProduct(this.product.id).subscribe(() => {
      this._service.showMessage("Produto excluido com sucesso")
      this._router.navigate(['/read'])
    })
  }

  cancel(): void {
    this._router.navigate(['/read'])
  }

}
