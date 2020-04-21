import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Injectable({providedIn: 'root'})
export class ProductResolve implements Resolve<any> {

    constructor(private _service: ProductsService) {}

    resolve() {
        return this._service.getAll()
    }
}