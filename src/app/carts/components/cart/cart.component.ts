import { Component, OnInit } from '@angular/core';
import { CartsService } from '../../service/carts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  cart: any[] = [];

  total: number = 0;

  constructor(private service: CartsService) {}

  ngOnInit(): void {
    this.getCart();
    this.getTotal();
  }

  getCart() {
    this.cart = this.service.getCurrentCart();
  }

  getTotal() {
    let total: number = 0;
    this.cart.forEach(p => {
      total += p.item.price * p.quantity;
    })

    this.total = total;
  }

  updateProduct(product: any): void {
    let i = this.cart.findIndex(p => p.item.id == product.item.id);

    if (product.quantity == 0) {
      this.cart.splice(i, 1)
    }else {
      this.cart[i] = product;
    }

    this.updateLocalStorage();
    this.getTotal();
  }

  updateLocalStorage(): void {
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }

  clearCart(): void {
    this.cart = [];

    this.updateLocalStorage();
    this.getTotal();
  }
}
