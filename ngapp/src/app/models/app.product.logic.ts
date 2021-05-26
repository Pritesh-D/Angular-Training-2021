import { Product } from './app.product.model'

export class ProductLogic {
    _products: Array<Product>;
    private prd: Product;
    constructor() {
        this._products = new Array<Product>();

        this.prd = new Product();
        this.prd.Id = 101;
        this.prd.ProductId = 'Prd-001';
        this.prd.ProductName = 'Laptop';
        this.prd.CategoryName = 'Electronics'
        this.prd.Manufacturer = 'IBM';
        this.prd.Description = 'Gaming';
        this.prd.BasePrice = 90000;
        this._products.push(this.prd);

        this.prd = new Product();
        this.prd.Id = 102;
        this.prd.ProductId = 'Prd-002';
        this.prd.ProductName = 'Mixer';
        this.prd.CategoryName = 'Electronics'
        this.prd.Manufacturer = 'BAJAJ';
        this.prd.Description = 'Mixer';
        this.prd.BasePrice = 5000;
        this._products.push(this.prd);

        this.prd = new Product();
        this.prd.Id = 103;
        this.prd.ProductId = 'Prd-003'
        this.prd.ProductName = 'Safari';
        this.prd.CategoryName = 'Car'
        this.prd.Manufacturer = 'TATA';
        this.prd.Description = '4 wheel';
        this.prd.BasePrice = 3000000;
        this._products.push(this.prd);
    }

    public getAllProducts(): Array<Product> {
        return this._products;
    }

    saveProduct(product: Product): Array<Product> {
        this._products.push(product);
        return this._products;
    }

    deleteProduct(product: Product): Array<Product> {
        this._products = this._products.filter((p) => p.Id !== product.Id);
        return this._products;
    }
}