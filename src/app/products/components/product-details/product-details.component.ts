import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../service/products.service';
import { Product, ProductQuantity } from '../../models/Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{

  productId: number;

  product!: Product;

  loading: boolean = true;

  amount: number = 1;

  cart: ProductQuantity[] = [];

  constructor(private route: ActivatedRoute, private service: ProductsService) {
    this.productId = parseInt(route.snapshot.paramMap.get("id")!);

    console.log(this.productId)
  }

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct(): void {
    this.loading = true
    this.service.getProductById(this.productId).subscribe({
      next: (item: any) => {
        this.product = item

        this.loading =false;
      },
      error: error => {
        alert("Error Happend")
        this.loading =false;
      }
    });
  }

  add(amount: number): void {
    this.amount = amount;
    this.addToCart({item: this.product, quantity: amount})
  }

  addToCart(product: any): void {
    if ("cart" in localStorage) {
      this.cart = JSON.parse(localStorage.getItem("cart")!)
    }

    let exists = this.cart.find(p => p.item.id == product.item.id)

    if (exists) {
      alert("Item All Ready Exists")
      return
    }

    this.cart.push(product)
    localStorage.setItem("cart", JSON.stringify(this.cart))
  }
}
