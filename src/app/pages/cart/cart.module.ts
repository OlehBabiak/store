import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import {InputModule} from "../../shared/input/input.module";



@NgModule({
  declarations: [
    CartComponent
  ],
  exports: [CartComponent],
  imports: [
    CommonModule, InputModule
  ]
})
export class CartModule { }
