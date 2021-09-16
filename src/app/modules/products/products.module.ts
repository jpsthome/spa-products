import { ProductsRoutingModule } from './products-routing.module';
import { MaterialModule } from './../../core/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsFormComponent } from './components/products-form/products-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductsListComponent, ProductsFormComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ProductsModule {}
