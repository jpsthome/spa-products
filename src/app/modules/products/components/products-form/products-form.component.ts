import { ProductsService } from './../../services/products.service';
import { Product } from './../../models/product.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'vcs-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss'],
})
export class ProductsFormComponent implements OnInit {
  productForm!: FormGroup;
  product: Product = <Product>{};
  productId: string | null = null;
  isEdit = false;
  hasBeenEdited = false;
  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.productId = this._route.snapshot.paramMap.get('id');

    this.createForm(this.product);
    if (this.productId) {
      this.isEdit = true;
      this.productsService.get(this.productId).subscribe((product) => {
        this.product = product;
        this.createForm(this.product);
      });
    }
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

  onSubmit() {
    if (this.isEdit) {
      this.editProduct();
    } else {
      this.createProduct();
    }
  }

  cancel() {
    this._router.navigate(['/products']);
  }

  createProduct() {
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

  editProduct() {
    this.productsService
      .update(this.productId!, this.productForm.value)
      .subscribe(
        (res) => {
          this._snackBar.open('Produto editado com sucesso', 'Fechar');
          this._router.navigate(['/products']);
        },
        (error) => {
          console.log(error.message);
        }
      );
  }
}
