import { ProductsRoutingModule } from './products-routing.module';
import { MaterialModule } from './../../core/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './components/products-list/products-list.component';

@NgModule({
  declarations: [ProductsListComponent],
  imports: [CommonModule, MaterialModule, ProductsRoutingModule],
})
export class ProductsModule {}
