import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { env } from 'src/env/env';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get(env.baseapi + "products")
  }

  getAllCategories() {
    return this.http.get(env.baseapi + "products/categories")
  }

  getProductsByCategory(cat: string) {
    return this.http.get(env.baseapi + `products/category/${cat}`)
  }

  getProductById(id: number) {
    return this.http.get(env.baseapi + `products/${id}`)
  }
}
