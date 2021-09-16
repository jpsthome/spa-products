import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteDialogComponent } from 'src/app/shared/confirm-delete-dialog/confirm-delete-dialog.component';

@Component({
  selector: 'vcs-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products?: Product[];

  constructor(
    private productsService: ProductsService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getAll().subscribe(
      (products) => {
        this.products = products;
        console.log(products);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteProduct(id: string) {
    this.productsService.delete(id).subscribe(
      (res) => {
        this.products = this.products?.filter((product) => product.id !== id);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  confirmDialog(id: string): void {
    if (this.dialog.openDialogs.length == 0) {
      const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, {
        width: '350px',
      });

      dialogRef.afterClosed().subscribe((result) => {
        console.log('The dialog was closed');
        if (result) this.deleteProduct(id);
      });
    }
  }
}
