import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { ProductsModel } from '../models/products.model';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';

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
        }),
        catchError(e => this.errorHandle(e))
      )
  }

  getById(id: number): Observable<ProductsModel> {
    return this._http.get(`${environment.api}/products/${id}`)
      .pipe(
        map((res: any) => {
          return res
        }),
        catchError(e => this.errorHandle(e))
      )
  }

  createProduct(product: ProductsModel) {
    return this._http.post(`${environment.api}/products`, product)
      .pipe(
        map((res: any) => {
          return res
        }),
        catchError(e => this.errorHandle(e))
      )
  }

  updateProduct(product: ProductsModel) {
    return this._http.put(`${environment.api}/products/${product.id}`, product)
      .pipe(
        map((res: any) => {
          return res
        }),
        catchError(e => this.errorHandle(e))
      )
  }

  deleteProduct(id: number) {
    return this._http.delete(`${environment.api}/products/${id}`)
      .pipe(
        map((res: any) => {
          return res
        }),
        catchError(e => this.errorHandle(e))
      )
  }

  errorHandle(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro', true)
    return EMPTY
  }

  showMessage(msg: string, error: boolean = false): void {
    this._snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: error ? ['msg-error'] : ['msg-success']
    })
  }
}
