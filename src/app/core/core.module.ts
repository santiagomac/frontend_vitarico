import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateClientComponent } from './components/create-client/create-client.component';
import { ListClientComponent } from './components/list-client/list-client.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CreateClientComponent, ListClientComponent],
  imports: [CommonModule, AngularMaterialModule, HttpClientModule],
  exports: [CreateClientComponent, ListClientComponent],
})
export class CoreModule {}
