import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductsModel } from '../models/products.model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private _snackBar: MatSnackBar,
    private _http: HttpClient
  ) { }

  getAll(): Observable<Array<ProductsModel>> {
    return this._http.get(`${environment.api}/products`)
      .pipe(
        map((res: any) => {          
          return res
        })
      )
  }

  getById(id: number): Observable<ProductsModel> {
    return this._http.get(`${environment.api}/products/${id}`)
      .pipe(
        map((res: any) => {          
          return res
        })
      )
  }

  createProduct(product: ProductsModel) {
    return this._http.post(`${environment.api}/products`, product);
  }

  updateProduct(product: ProductsModel) {
    return this._http.put(`${environment.api}/products/${product.id}`, product);
  }

  showMessage(msg: string): void {
    this._snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }
}
