import { Component, OnInit } from '@angular/core';
import { CartsService } from '../../service/carts.service';
import Cart from '../../models/Cart';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-all-carts',
  templateUrl: './all-carts.component.html',
  styleUrls: ['./all-carts.component.css']
})
export class AllCartsComponent implements OnInit {

  carts: Cart[] = [];

  form!: FormGroup;


  constructor(private service: CartsService, private builder: FormBuilder) {}

  ngOnInit(): void {

    this.form = this.builder.group({
      startDate: "",
      endDate: ""
    });

    this.getAllCarts();
  }

  getAllCarts(): void {
    this.service.getAllCarts().subscribe({
      next: (res: any) => {
        this.carts = res
      }
    });
  }

  searchCarts(): void {
    console.log(this.form.value);

    this.service.getCartsByDate(this.form.value).subscribe({
      next: (res: any) => {
        this.carts = res
      }
    });
  }
}
