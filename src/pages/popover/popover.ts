import { AuthService } from './../../services/authService';
import { QuotesService } from './../../services/quotes';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController, ModalController, AlertController, ViewController } from 'ionic-angular';

/**
 * Generated class for the PopoverPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverPage {

  constructor(public navCtrl: NavController,
    public viewCtrl:ViewController,
    public navParams: NavParams,
    public toastCtrl:ToastController,
    public modalCtrl:ModalController,
    public alertCtrl:AlertController,
    public quoteService:QuotesService,
    public authService:AuthService,
    public loadingCtrl:LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverPage');
  }

  save(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();
      this.authService.getActiveUser().getIdToken().then(
        (token: string) => {
          this.quoteService.storeList(token).subscribe(
            () => {
              const toast = this.toastCtrl.create({
                  message : 'Your Favorite Quotes has been saved',
                  duration : 3000,
                  position : 'bottom'
              });
              toast.present();
            },
            error => {
              const toast = this.toastCtrl.create({
                  message : error,
                  duration : 3000,
                  position : 'bottom'
              });
              toast.present();
            }
          )
        }
      );
    loading.dismiss();
    this.close();
  }

  clearAll(){

  }

  addQuote() {
    const alert = this.alertCtrl.create({
      title: "Add New Quote",
      inputs: [
        {
          name: "person",
          placeholder: "Quote Author"
        },
        {
          name: "text",
          placeholder: "Quote"
        }
      ],
      buttons: [
        {
          text: "OK",
          handler: data => {
            let q = {id: "0", person: data.person, text: data.text};
            if (data.person && data.text) {
              this.quoteService.addQuoteToFavorites(q);

              const toast = this.toastCtrl.create({
                message: 'New quote was added',
                duration: 2000,
                position: 'bottom'
              });
              toast.present();
            }
          }
        },
        {
          text: "Cancel",
          role: "cancel"
        }
      ]
    })
    alert.present();
  }
  
  close(){
    this.viewCtrl.dismiss();
  }
}
