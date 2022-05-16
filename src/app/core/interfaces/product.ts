export interface Product {
  name: string;
  price: number;
  code: string;
  stock: number;
}

export interface ProductCreated extends Product {
  id: number;
}
