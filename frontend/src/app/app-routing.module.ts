import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { CreateComponent } from './components/products/create/create.component';
import { ReadComponent } from './components/products/read/read.component';
import { ProductResolve } from './resolve/products.resolve';
import { UpdateComponent } from './components/products/update/update.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductCrudComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'read',
    component: ReadComponent,
    resolve: {
      products: ProductResolve
    }
  },
  {
    path: 'edit/:id',
    component: UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
