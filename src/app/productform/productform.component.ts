import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Categories, Manufacturers } from '../models/app.constants';
import { ProductLogic } from '../models/app.product.logic';
import { Product } from '../models/app.product.model';
import { uniqueIdValidator } from './app.uniqueid.validator';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.css', './../../../node_modules/bootstrap/dist/css/bootstrap.min.css', './../../../node_modules/font-awesome/css/font-awesome.min.css']
})
export class ProductformComponent implements OnInit {
  products: Array<Product>;
  product: Product;
  categories = Categories;
  manufacturers = Manufacturers;
  tableHeaders: Array<string>;
  private productLogic: ProductLogic;
  formProduct: FormGroup;
  constructor() {
    this.products = new Array<Product>();
    this.product = new Product();
    this.productLogic = new ProductLogic();
    this.tableHeaders = new Array<string>();
    this.formProduct = new FormGroup({
      'Id': new FormControl(this.product.Id, Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(10),
        Validators.pattern('[0-9]+'),
      ])),
      'ProductId': new FormControl(this.product.ProductId, Validators.compose([
        Validators.required
      ])),
      'ProductName': new FormControl(this.product.ProductName, Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.pattern('^[A-Z][A-Za-z]*$'),
      ])),
      'CategoryName': new FormControl(this.product.CategoryName, Validators.compose([
        Validators.required
      ])),
      'Manufacturer': new FormControl(this.product.Manufacturer, Validators.compose([
        Validators.required
      ])),
      'Description': new FormControl(this.product.Description, Validators.compose([
        Validators.required
      ])),
      'BasePrice': new FormControl(this.product.BasePrice, Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9][0-9]*$')
      ])),
    });
  }

  ngOnInit(): void {
    this.tableHeaders = Object.keys(this.product);
    this.products = this.productLogic.getAllProducts();
    //this.formProduct.controls['Id'].setValidators(uniqueIdValidator(this.products));
  }

  btnClear(): void {
    this.product = new Product();
    this.formProduct.setValue(this.product);
  }

  btnSave(): void {
    this.product = this.formProduct.value;
    this.products = this.productLogic.saveProduct(Object.assign({}, this.product));
  }

  selectProduct(product: Product) {
    this.product = Object.assign({}, product);
    this.formProduct.setValue(this.product);
  }

  deleteProduct(product: Product) {
    this.products = this.productLogic.deleteProduct(product);
  }

  getCategoryName(category: string) {
    this.product.CategoryName = category;
  }

  getManufacturerName(manufacturer: string) {
    this.product.Manufacturer = manufacturer;
  }
}
