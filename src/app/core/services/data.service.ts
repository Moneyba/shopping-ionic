import {Injectable} from '@angular/core';
import {BeerStyle} from '../../shared/models/beer-style';

@Injectable()
export class DataService {

  public styles: BeerStyle[] = [
    {value: 'all', viewValue: 'ALL BEERS', img:'assets/imgs/all.jpg'},
    {value: 'ipa', viewValue: 'IPA', img: 'assets/imgs/ipa.jpg' },
    {value: 'dipa', viewValue: 'DIPA', img: 'assets/imgs/dipa.jpg'},
    {value: 'pale-ale', viewValue: 'PALE ALE', img: 'assets/imgs/pale-ale.jpg'},
    {value: 'sour', viewValue: 'SOUR', img: 'assets/imgs/sour.jpg'},
    {value: 'lager', viewValue: 'LAGER', img: 'assets/imgs/lager.jpg'},
    {value: 'stout', viewValue: 'STOUT', img: 'assets/imgs/stout.jpg'},
  ];

  public quantities: number[] = [];

  public constructor() {
    for (let i = 0; i < 99; i++){
      this.quantities.push(i+1);
    }
  }


}
