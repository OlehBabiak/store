import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import {InputModule} from "../../shared/input/input.module";
import {ButtonModule} from "../../shared/button/button.module";



@NgModule({
    declarations: [
        ProductComponent
    ],
    exports: [
        ProductComponent
    ],
    imports: [
        CommonModule, InputModule, ButtonModule
    ]
})
export class ProductsModule { }
