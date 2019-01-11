import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Product} from '../../shared/models/product';
import {Observable} from 'rxjs';


@Injectable()
export class ProductService {

  constructor(public db: AngularFirestore) {
  }

  public getProducts(): Observable<{}> {
    return this.db.collection('products').snapshotChanges();
  }

  public getProductBydId(id: string) {
    return this.db.collection('products').doc(id).valueChanges();
  }

  public createProduct(product: Product) {
    return this.db.collection('products').add(product);
  }

  deleteProduct(productKey) {
    return this.db.collection('products').doc(productKey).delete();
  }

  updateProduct(id: any, value: any) {
    return this.db.collection('products').doc(id).update(value);
  }

  convertDataToProduct(data: any): Product {

    const product = new Product();
    product.name = data.name;

    return product;
  }
}
