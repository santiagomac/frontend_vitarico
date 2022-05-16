import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent implements OnInit {
  productForm = this.fb.group({
    name: ['', Validators.required],
    price: [0, Validators.required],
    code: ['', Validators.required],
    stock: [0, Validators.required],
  });

  constructor(
    private location: Location,
    private fb: FormBuilder,
    private productService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  saveProduct() {
    const productToSave = {
      name: this.productForm.get('name')?.value,
      price: this.productForm.get('price')?.value,
      code: this.productForm.get('code')?.value,
      stock: this.productForm.get('stock')?.value,
    };

    this.productService.saveProduct(productToSave).subscribe(
      () => {
        this.router.navigate(['/products']);
      },
      (err) => {
        console.log(`Hubo un error guardando, ${err}`);
      }
    );
  }

  public backNavigation() {
    this.location.back();
  }
}
