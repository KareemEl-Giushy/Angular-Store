import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';


@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit {

  products: any[] = [];
  categories: any[] = [];

  loading: boolean = true;
  showToast: boolean = false;

  cart: any[] = [];

  constructor(private service: ProductsService) {  }

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategory();
  }

  getAllProducts(): void {
    this.loading = true;
    this.service.getAllProducts().subscribe({
      next: (res: any) => {
        this.products = res;
        this.loading = false;
      },
      error: (error:any) => {
        console.log("error")
        this.loading = false;
      }
    })
  }

  getAllCategory(): void {
    this.service.getAllCategories().subscribe({
      next: (res: any) => {
        this.categories = res;
      },
      error: (error: any) => {
        console.log("Connection Error");
      }
    })
  }

  filterCategory(event: any): void {
    let v: string = event.target.value;

    this.loading = true;
    v == "all" ?
      this.getAllProducts()
    :
    this.service.getProductsByCategory(v).subscribe({
      next: (res: any) => {
        this.products = res;
        this.loading = false;
      }
    });
  }

  addToCart(product: any): void {
    if ("cart" in localStorage) {
      this.cart = JSON.parse(localStorage.getItem("cart")!);
    }

    let exists = this.cart.find(p => p.item.id == product.item.id);

    if (exists) {
      alert("Item All Ready Exists");
      return;
    }

    this.cart.push(product);
    localStorage.setItem("cart", JSON.stringify(this.cart));
    this.showToast = true;
  }

}
