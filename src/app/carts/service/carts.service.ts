import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'src/env/env';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor(private http: HttpClient) { }

  getCurrentCart(): any[] {
    let cart = [];
    if ("cart" in localStorage) {
      cart = JSON.parse(localStorage.getItem("cart")!);
    }

    return cart
  }

  AddCart(userId: number, date: string, products: any[]) {
    return this.http.post(env.baseapi + "carts", {
      userid: userId,
      date: date,
      products: products
    });
  }
}
