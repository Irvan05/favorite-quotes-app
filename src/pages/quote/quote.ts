import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component ({
    selector: 'page-quote',
    templateUrl: 'quote.html'
})

export class QuotePage {
    author: string;
    quoteText: string;
    quoteId: string;

    constructor (private viewCtrl: ViewController, private navParams: NavParams) {}
    
    ionViewDidLoad() {
        this.author = this.navParams.get('person');
        this.quoteText = this.navParams.get('text');
    }

    closeModal(delQuote = false) {
        this.viewCtrl.dismiss(delQuote);
    }
}