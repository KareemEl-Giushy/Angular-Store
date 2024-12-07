import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { FormsModule } from '@angular/forms';
import { NgbToast } from '@ng-bootstrap/ng-bootstrap';
import { ProductRowComponent } from './components/product-row/product-row.component';


@NgModule({
  declarations: [
    CartComponent,
    ProductRowComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbToast
  ]
})
export class CartsModule { }
