import { AuthService } from './authService';
import { Quote } from '../data/quote.interface';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs';
import { Injectable, Inject } from '@angular/core';

@Injectable()
export class QuotesService {
    private favoriteQuotes: Quote[] = [];
    constructor( private authService:AuthService,
        private http:Http){

    }

    addQuoteToFavorites(quote: Quote) {
        this.favoriteQuotes.push(quote);
    }

    removeQuoteFromFavorites(quote: Quote) {
        let idx = this.favoriteQuotes.findIndex((quoteEl: Quote) => {
            return quoteEl.id == quote.id;
        });
        this.favoriteQuotes.splice(idx, 1);
    }

    getFavoriteQuotes() {
        return this.favoriteQuotes.slice();
    }

    clearAllFaforite(){
        this.favoriteQuotes=[];
    }

    isFavorite(quote: Quote) {
        let idx = this.favoriteQuotes.findIndex((quoteEl: Quote) => {
            return quoteEl.id == quote.id;
        });
        return idx==-1? false : true;
    }

    storeList(token: string){
        const uid=this.authService.getActiveUser().uid;
        return this.http
            .put('https://favorite-quote-app-abfb6.firebaseio.com/'+uid+
            '/fav-quotes.json?auth='+
            token, this.favoriteQuotes)
            .map((response:Response)=>{
                return response.json();
            })
    }
}