import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {User} from '../../shared/models/user';
import {LocalStorageService} from './local-storage.service';
import {NavController} from "ionic-angular";


@Injectable()
export class UserService {

  constructor(
    public db: AngularFirestore,
    private localStorageSvc: LocalStorageService
  ) {
  }

  public signUp(user: User) {
    this.db.collection('users').ref.where('username', '==', user.username).get().then(exit => {
      if (exit.docs.length === 0) {
        this.db.collection('users').add(user);
        this.localStorageSvc.set('user', user);
      }
    });
  }

  public signIn(user: User): void {
    this.db.collection('users').ref.where('username', '==', user.username).get()
      .then(output => {
        if (output.docs[0] && output.docs[0].data().password === user.password) {
          this.localStorageSvc.set('user', output.docs[0].data());
         }
      });
  }

}
