import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
})
export class ListProductsComponent implements OnInit {
  displayedColumns = ['name', 'price', 'code', 'stock', 'actions'];
  products: Product[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((data) => {
      console.log(data);
      this.products = data;
    });
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.getProducts();
    });
  }
}
