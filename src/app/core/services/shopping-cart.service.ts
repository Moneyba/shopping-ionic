import {Injectable} from '@angular/core';
import {Product} from '../../shared/models/product';
import {LocalStorageService} from './local-storage.service';

@Injectable()
export class ShoppingCartService {

  private shoppingCartProducts: Product[];

  public constructor(private  localStorageSvc: LocalStorageService) {
  }

  public getShoppingCartProducts(): Product[] {
    return this.localStorageSvc.get('cart');
  }

  public addShoppingCartProduct(newProduct: Product): void {
    this.shoppingCartProducts = this.getShoppingCartProducts();
    if (this.shoppingCartProducts == null) {
      this.shoppingCartProducts = [];
    }
    const productAlreadyAdded = this.shoppingCartProducts.find(product => product.id === newProduct.id);
    if (productAlreadyAdded) {
      productAlreadyAdded.quantity++;
    } else {
      this.shoppingCartProducts.push(newProduct);
    }
    this.localStorageSvc.set('cart', this.shoppingCartProducts);
  }

  public editQuantity(selectedProduct: Product, operation: string): void {
    this.shoppingCartProducts = this.getShoppingCartProducts();
    if (this.shoppingCartProducts) {
      const productToEdit = this.shoppingCartProducts.find(product => product.id === selectedProduct.id);
      if (productToEdit) {
        operation === 'add' ? productToEdit.quantity++ : productToEdit.quantity--;
        this.localStorageSvc.set('cart', this.shoppingCartProducts);
      }
    }
  }

  public removeShoppingCartProduct(selectedProduct: Product): void {
    console.log(selectedProduct);
    this.shoppingCartProducts = this.getShoppingCartProducts();
    if (this.shoppingCartProducts) {
      const productToDelete = this.shoppingCartProducts.find(product => product.id === selectedProduct.id);
      if (productToDelete) {
        this.shoppingCartProducts.splice(this.shoppingCartProducts.indexOf(productToDelete), 1);
        this.localStorageSvc.set('cart', this.shoppingCartProducts);
      }
    }
  }

}



