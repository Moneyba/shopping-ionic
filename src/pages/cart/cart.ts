import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ShoppingCartService} from "../../app/core/services/shopping-cart.service";
import {Product} from "../../app/shared/models/product";
import {DataService} from "../../app/core/services/data.service";

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {
  private products: Product[];
  private quantities: number[];

  constructor(
    public navCtrl: NavController,
    private shoppingCartSvc: ShoppingCartService,
    private dataSvc: DataService,
    private cartSvc: ShoppingCartService) {
    this.getLocalCartProducts();
    this.quantities = dataSvc.quantities;
  }

  public getLocalCartProducts(): void {
    this.products = this.shoppingCartSvc.getShoppingCartProducts();
  }

  /** Gets the total cost of all transactions. */
  public getTotalCost(): number {
    if (!this.products) {
      return null;
    }
    let total = 0;
    this.products.forEach(product => total += product.price * product.quantity);
    return total;
  }

  public removeProduct(product: Product) {
    console.log(this.shoppingCartSvc.getShoppingCartProducts());
    this.shoppingCartSvc.removeShoppingCartProduct(product);
    console.log(this.shoppingCartSvc.getShoppingCartProducts());
    this.getLocalCartProducts();
  }
}
