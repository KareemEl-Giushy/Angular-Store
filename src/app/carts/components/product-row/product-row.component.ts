import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { ProductQuantity } from 'src/app/products/models/Product';


@Component({
  selector: '[product-row]',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ProductRowComponent {
  @Input() product!: ProductQuantity;

  @Output() updated = new EventEmitter;

  decreaseQuantity(): void {
    if (this.product.quantity <= 1) {
      alert("Not Permitted");
      return;
    }
    this.product.quantity--;

    this.updated.emit(this.product);
  }

  increaseQuantity(): void {
    this.product.quantity++;

    this.updated.emit(this.product);
  }

  deleteProduct(): void {
    this.product.quantity = 0;
    this.updated.emit(this.product);
  }
}
