import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Categories, Manufacturers } from '../models/app.constants';
import { ProductLogic } from '../models/app.product.logic';
import { Product } from '../models/app.productv2.model';
import { ProductService } from '../services/product.service';
import { uniqueIdValidator } from './../productform/app.uniqueid.validator';

@Component({
  selector: 'app-productform',
  templateUrl: './productserviceform.component.html',
  styleUrls: ['./productserviceform.component.css', './../../../node_modules/bootstrap/dist/css/bootstrap.min.css', './../../../node_modules/font-awesome/css/font-awesome.min.css']
})
export class ProductserviceformComponent implements OnInit {
  showloader: boolean = true;
  products: Array<Product>;
  product: Product;
  categories = Categories;
  manufacturers = Manufacturers;
  tableHeaders: Array<string>;
  private productLogic: ProductLogic;
  formProduct: FormGroup;
  constructor(private _service: ProductService) {
    this.products = new Array<Product>();
    this.product = new Product();
    this.productLogic = new ProductLogic();
    this.tableHeaders = new Array<string>();
    this.formProduct = new FormGroup({
      'ProductRowId': new FormControl(this.product.ProductRowId, Validators.compose([
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
    //this.formProduct.controls['Id'].setValidators(uniqueIdValidator(this.products));
    this.loadData();
  }

  private loadData() {
    this._service.getData<Array<Product>>().subscribe((products) => this.products = products);
    this.showloader = false;
  }

  btnClear(): void {
    this.product = new Product();
    this.formProduct.setValue(this.product);
  }

  btnSave(): void {
    this.showloader = true;
    this.product = this.formProduct.value;
    this._service.saveData(this.product).subscribe(() => {
      this.loadData();
      this.btnClear();
      this.showloader = false;
    })
  }

  selectProduct(product: Product) {
    this.showloader = true;
    this._service.getDataById<Product>(product.ProductRowId).subscribe((product) => {
      this.product = Object.assign({}, product);
      this.formProduct.setValue(this.product);
      this.showloader = false;
    });
  }

  deleteProduct(product: Product) {
    this.showloader = true;
    this._service.deleteData(product.ProductRowId).subscribe(() => {
      this.loadData();
      this.showloader = false;
    });
  }
}
