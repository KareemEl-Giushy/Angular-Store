import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: {id: number, image: string, title: string, description: string, price: number} = {
    id: 0,
    image: "",
    title: "",
    description: "",
    price: 0
  };

  @Output() addToCart = new EventEmitter();

  send(amount: number) {
    if (amount <= 0){
      alert("Forbidden!")
      return
    }
    this.addToCart.emit({item: this.product, quantity: amount})
  }
}
