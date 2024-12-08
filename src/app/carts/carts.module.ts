import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbToast } from '@ng-bootstrap/ng-bootstrap';
import { ProductRowComponent } from './components/product-row/product-row.component';
import { AllCartsComponent } from './components/all-carts/all-carts.component';


@NgModule({
  declarations: [
    CartComponent,
    ProductRowComponent,
    AllCartsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbToast
  ]
})
export class CartsModule { }
