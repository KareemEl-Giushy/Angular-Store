import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent {
  amount: number = 1;
  clicked: boolean = false;

  @Output() onAddToCart = new EventEmitter();


  add() {
    this.onAddToCart.emit(this.amount);
  }

}
