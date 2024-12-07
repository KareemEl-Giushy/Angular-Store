import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product!: Product;

  @Output() addToCart = new EventEmitter();

  send(amount: number) {
    if (amount <= 0){
      alert("Forbidden!")
      return
    }
    this.addToCart.emit({item: this.product, quantity: amount})
  }
}
