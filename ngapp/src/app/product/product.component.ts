import { Component, OnInit } from '@angular/core';
import { Categories, Manufacturers } from '../models/app.constants';
import { ProductLogic } from '../models/app.product.logic';
import { Product } from '../models/app.product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css', './../../../node_modules/bootstrap/dist/css/bootstrap.min.css', './../../../node_modules/font-awesome/css/font-awesome.min.css']
})
export class ProductComponent implements OnInit {
  products: Array<Product>;
  product: Product;
  categories = Categories;
  manufacturers = Manufacturers;
  tableHeaders: Array<string>;
  private productLogic: ProductLogic;
  constructor() {
    this.products = new Array<Product>();
    this.product = new Product();
    this.productLogic = new ProductLogic();
    this.tableHeaders = new Array<string>();
  }

  ngOnInit(): void {
    this.tableHeaders = Object.keys(this.product);
    this.products = this.productLogic.getAllProducts();
  }

  btnClear(): void {
    this.product = new Product();
  }

  btnSave(): void {
    this.products = this.productLogic.saveProduct(Object.assign({}, this.product));
  }

  selectProduct(product: Product) {
    this.product = Object.assign({}, product);
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
