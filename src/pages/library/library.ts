import { Component,OnInit } from '@angular/core';
import { Quote } from '../../data/quote.interface';
import quotes from '../../data/quote';
import { reorderArray } from 'ionic-angular';
import { QuotesPage } from '../quotes/quotes';

@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})

export class LibraryPage implements OnInit{
  quoteCollection: {category: string, quotes: Quote[], icon: string}[];

  quotesPage = QuotesPage;
  items = ['Apples', 'Bananas', 'Berries'];

  reorderItems(indexes){
    this.items = reorderArray(this.items, indexes);
  }

  ngOnInit () {
    this.quoteCollection = quotes;
  }

  buy(){
    console.log('buy');
  }

  remove(){
    console.log('remove');
  }
}
