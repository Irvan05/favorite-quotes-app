import { AuthService } from './../../services/authService';
import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, ToastController } from 'ionic-angular';

/**
 * Generated class for the SignUpPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl:ToastController,
    public authService:AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  signUp(form){
    this.authService.signup(form.value['email'],form.value['password']).catch(err => {
      const toast = this.toastCtrl.create({
        message: err.message,
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
  })
  }

}
