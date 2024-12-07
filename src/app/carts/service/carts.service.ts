import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'src/env/env';
import Cart from '../models/Cart'

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

  AddCart(model: Cart) {
    return this.http.post(env.baseapi + "carts", model);
  }
}
