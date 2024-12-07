import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectComponent } from './components/select/select.component';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';
import { FormsModule } from '@angular/forms';
import { NgbToast } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    SelectComponent,
    AddToCartComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    NgbToast
  ],
  exports: [
    HeaderComponent,
    SpinnerComponent,
    SelectComponent,
    AddToCartComponent,
    NgbToast
  ]
})
export class SharedModule { }
