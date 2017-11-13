import { AuthService } from '../../services/authService';
import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, ToastController } from 'ionic-angular';

/**
 * Generated class for the SignInPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public authService: AuthService,
    public toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }

  signIn(form){
    this.authService.signin(form.value['email'],form.value['password']).catch(err=>{
      const toast = this.toastCtrl.create({
        message: err.message,
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
    })
  }

}
