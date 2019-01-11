import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../app/shared/models/user";
import {UserService} from "../../../app/core/services/user.service";


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
    name: 'login'
  }
)
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private signUpForm: FormGroup;
  private signInForm: FormGroup;
  private showSignIn: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fb: FormBuilder,
    private userSvc: UserService
  ) {
    this.showSignIn = true;
    this.createSignInForm();
    this.createSignUpForm();
  }

  public createSignInForm() {
    this.signInForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  public createSignUpForm(): void {
    this.signUpForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      passwordVerification: ['', Validators.required],
    });
  }

  public signUp(): void {
    const userToAdd: User = {
      username: this.signUpForm.get('username').value,
      isAdmin: false,
      password: this.signUpForm.get('password').value
    };
    this.userSvc.signUp(userToAdd);
  }

  public signIn(): void {
    this.userSvc.signIn(this.signInForm.value);
  }

  public alternateForms(): void {
    this.showSignIn = !this.showSignIn;
  }
}
