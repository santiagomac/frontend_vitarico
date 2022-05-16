import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateClientComponent } from './core/components/create-client/create-client.component';
import { CreateProductComponent } from './core/components/create-product/create-product.component';
import { ListClientComponent } from './core/components/list-client/list-client.component';
import { ListProductsComponent } from './core/components/list-products/list-products.component';
import { ListSalesComponent } from './core/components/list-sales/list-sales.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'client', component: ListClientComponent },
  { path: 'create', component: CreateClientComponent },
  { path: 'create-product', component: CreateProductComponent },
  { path: 'sales', component: ListSalesComponent },
  { path: 'products', component: ListProductsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
