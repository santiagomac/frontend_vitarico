import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateClientComponent } from './core/components/create-client/create-client.component';
import { ListClientComponent } from './core/components/list-client/list-client.component';
import { ListSalesComponent } from './core/components/list-sales/list-sales.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'client', component: ListClientComponent },
  { path: 'create', component: CreateClientComponent },
  { path: 'sales', component: ListSalesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
