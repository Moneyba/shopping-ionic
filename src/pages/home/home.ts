import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {BeerStyle} from "../../app/shared/models/beer-style";
import {DataService} from "../../app/core/services/data.service";
import {ProductService} from "../../app/core/services/product.service";
import {Product} from "../../app/shared/models/product";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public beerStyles: BeerStyle[];
  private products: Product[];
  private productsBackup: Product[];
  private searchQuery: string;
  private currentStyle: string;

  public constructor(
    public navCtrl: NavController,
    private dataSvc: DataService,
    private productSvc: ProductService
  ) {
    this.beerStyles = this.dataSvc.styles;
    this.getData();
    this.searchQuery = '';
    this.currentStyle = '';
  }

  public getData(): void {
    this.productSvc.getProducts()
      .subscribe((snapshotProducts: Array<any>) => {
        this.products = [];
        snapshotProducts.forEach(
          product => {
            const formattedProduct: Product = {
              id: product.payload.doc.id,
              quantity: product.payload.doc.data().quantity,
              details: product.payload.doc.data().details,
              price: product.payload.doc.data().price,
              style: product.payload.doc.data().style,
              name: product.payload.doc.data().name,
              img: product.payload.doc.data().img
            };
            this.products.push(formattedProduct);
          });
        this.productsBackup = this.products;
      });
  }

  public searchProduct(query: string): void {
    this.searchQuery = query;
    if (!query) {
      this.products = this.productsBackup;
    } else {
      this.products = this.productsBackup.filter(product => product.name.toLowerCase().includes(query.toLocaleLowerCase()));
    }
  }

  public filterByStyle(style: string):void {
    this.currentStyle = style;
    if (!style || style === 'all') {
      this.products = this.productsBackup;
    } else {
      this.products = this.productsBackup.filter(product => product.style === style);
    }
  }

  public clearFilter():void {
    this.currentStyle = '';
    this.products = this.productsBackup;
  }

  public goToDetailsOf(product: Product): void{
    this.navCtrl.push('details', product);
  }

}
