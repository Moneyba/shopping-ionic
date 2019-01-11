import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Product} from "../../../app/shared/models/product";
import {ShoppingCartService} from "../../../app/core/services/shopping-cart.service";
import {DataService} from "../../../app/core/services/data.service";

@IonicPage({
    name: 'details'
  }
)
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  private product: Product;
  private selectedQuantity = 1;
  private  quantities: number[];

  public constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private cartSvc: ShoppingCartService,
    private dataSvc: DataService
  ) {
    this.product = navParams.data;
    this.quantities = dataSvc.quantities;
  }

  public addToCart(product: Product): void{
    product.quantity = this.selectedQuantity;
    this.cartSvc.addShoppingCartProduct(product);
  }


}
