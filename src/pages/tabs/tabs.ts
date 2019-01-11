import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import {AccountPage} from "../account/account";
import {CartPage} from "../cart/cart";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CartPage;
  tab3Root = AccountPage;

  constructor() {

  }
}
