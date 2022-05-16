import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateClientComponent } from './components/create-client/create-client.component';
import { ListClientComponent } from './components/list-client/list-client.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ListSalesComponent } from './components/list-sales/list-sales.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { CreateProductComponent } from './components/create-product/create-product.component';

@NgModule({
  declarations: [CreateClientComponent, ListClientComponent, ListSalesComponent, ListProductsComponent, CreateProductComponent],
  imports: [CommonModule, AngularMaterialModule, HttpClientModule, RouterModule, ReactiveFormsModule],
  exports: [CreateClientComponent, ListClientComponent],
})
export class CoreModule {}
