import { ProductsService } from './../../services/products.service';
import { Product } from './../../models/product.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'vcs-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss'],
})
export class ProductsFormComponent implements OnInit {
  productForm!: FormGroup;
  product: Product = <Product>{};
  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.createForm(this.product);
  }

  createForm(product: Product) {
    this.productForm = this.formBuilder.group({
      productCode: [product.productCode, Validators.required],
      name: [product.name, Validators.required],
      fabrication: [product.fabrication, Validators.required],
      size: [product.size, Validators.required],
      value: [product.value, Validators.required],
    });
  }

  cancel() {}

  onSubmit() {
    console.log('form data is ', this.productForm.value);
    console.log(this.product);
    this.productsService.create(this.productForm.value).subscribe(
      (res) => {
        this._snackBar.open('Produto cadastrado com sucesso', 'Fechar');
        this._router.navigate(['/products']);
      },
      (error) => {
        console.log(error.message);
      }
    );
  }
}
