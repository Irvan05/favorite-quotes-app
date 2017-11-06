import { Component, OnInit} from '@angular/core';
import { NavParams, AlertController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})

export class QuotesPage {
  quoteGroup: {category: string, quotes: Quote[], icon: string};
  constructor (
    private navParams: NavParams,
    private quotesService: QuotesService,
    private alertCtrl: AlertController){}

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
    console.log(this.quoteGroup.category);
  }

  isFavorite(quote: Quote) {
    return this.quotesService.isFavorite(quote);
  }

  addToFavorites(quote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      //subTitle: 'Are you sure',
      message: 'Are you sure you want to add the quote to favorites?',
      buttons: [{
        text: 'Ok',
        handler: () => {
          this.quotesService.addQuoteToFavorites(quote);
          console.log(this.quotesService);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('I changed my mind');
        }
      }]
    });
    alert.present();
  }

  removeFromFavorites(quote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Remove Quote',
      //subTitle: 'Are you sure',
      message: 'Are you sure you want to remove the quote from favorites?',
      buttons: [{
        text: 'Ok',
        handler: () => {
          this.quotesService.removeQuoteFromFavorites(quote);
          console.log(this.quotesService);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('I changed my mind');
        }
      }]
    });
    alert.present();
  }
}
