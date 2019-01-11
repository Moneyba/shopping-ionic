import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {ProductService} from './services/product.service';
import {LocalStorageService} from './services/local-storage.service';
import {ShoppingCartService} from './services/shopping-cart.service';
import {DataService} from './services/data.service';
import {UserService} from './services/user.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [],
  declarations: [],
  providers: [
    ProductService,
    ShoppingCartService,
    LocalStorageService,
    DataService,
    UserService
  ]
})
export class CoreModule {

  public constructor(
    @Optional()
    @SkipSelf()
      parentModule: CoreModule,
  ) {
    if (parentModule) {
      throw new Error(
        'CoreModule has already been loaded. Import Core modules in the AppModule only.'
      );
    }
  }
}
